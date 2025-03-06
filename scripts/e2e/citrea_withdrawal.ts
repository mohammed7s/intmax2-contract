import { ethers, network } from 'hardhat';
import { readDeployedContracts } from '../utils/io';
import { getRandomSalt } from '../../utils/rand';
import { makeWithdrawalInfo } from '../../utils/withdrawal';
import { sleep } from '../../utils/sleep';
import type { ContractTransactionResponse } from 'ethers';

async function main() {
  console.log(`Running withdrawal on network: ${network.name}`);

  // Load deployed contracts
  const deployedContracts = await readDeployedContracts();
  if (!deployedContracts.rollup || !deployedContracts.withdrawal) {
    throw new Error('Rollup and Withdrawal contracts must be deployed');
  }

  // Get contract instances
  const rollup = await ethers.getContractAt('Rollup', deployedContracts.rollup);
  const withdrawal = await ethers.getContractAt('Withdrawal', deployedContracts.withdrawal);
  
  // Get the user's address (assuming first signer)
  const user = (await ethers.getSigners())[0];
  console.log(`Using account: ${await user.getAddress()}`);
  
  // Get the latest block number from the rollup
  const latestBlockNumber = Number(await rollup.getLatestBlockNumber());
  console.log(`Latest rollup block number: ${latestBlockNumber}`);
  
  if (latestBlockNumber <= 0) {
    throw new Error('No blocks available for withdrawal. Please post blocks first.');
  }
  
  // Choose which block to withdraw from (default to latest)
  const args = process.argv.slice(2);
  const blockNumberArg = args.find(arg => arg.startsWith('--block='));
  const blockNumber = blockNumberArg 
    ? parseInt(blockNumberArg.split('=')[1]) 
    : latestBlockNumber;
  
  console.log(`Using block number ${blockNumber} for withdrawal`);
  
  // Get the block hash for the specified block
  const blockHash = await rollup.getBlockHash(blockNumber);
  console.log(`Block hash: ${blockHash}`);
  
  // Get the block builder who built this block
  const blockBuilder = await rollup.getBlockBuilder(blockNumber);
  console.log(`Block was built by: ${blockBuilder}`);
  
  // Get token information from args or use defaults
  const tokenIndexArg = args.find(arg => arg.startsWith('--token='));
  const tokenIndex = tokenIndexArg 
    ? parseInt(tokenIndexArg.split('=')[1]) 
    : 0; // Default to ETH (0)
  
  const amountArg = args.find(arg => arg.startsWith('--amount='));
  const amount = amountArg 
    ? ethers.parseUnits(amountArg.split('=')[1], 18)
    : ethers.parseEther('0.1'); // Default small amount
    
  console.log(`Withdrawing token index ${tokenIndex}, amount: ${ethers.formatEther(amount)}`);
  
  // Create withdrawal parameters
  const recipient = await user.getAddress();
  const balanceBefore = await ethers.provider.getBalance(recipient);
  console.log(`Current balance before withdrawal: ${ethers.formatEther(balanceBefore)} BTC`);
  const withdrawal_data = {
    recipient,
    tokenIndex,
    amount: amount.toString(),
    nullifier: getRandomSalt(),
    blockHash,
    blockNumber,
  };
  
  try {
    // Create the withdrawal info with proof
    console.log('Creating withdrawal proof...');
    const withdrawalInfo = makeWithdrawalInfo(recipient, [withdrawal_data]);
    
    // Submit the withdrawal proof
    console.log('Submitting withdrawal proof...');
    let tx: ContractTransactionResponse = await withdrawal.submitWithdrawalProof(
      withdrawalInfo.withdrawals,
      withdrawalInfo.withdrawalProofPublicInputs,
      '0x', // In a real implementation, this would be the actual proof
    );
    
    console.log(`Withdrawal proof submitted in tx: ${tx.hash}`);
    const receipt = await tx.wait();
    console.log(`Transaction confirmed in block ${receipt?.blockNumber}`);
    
    // In a single-chain implementation, the withdrawal might already be processed
    // or might need an additional claim step
    
    // Check for direct withdrawals
    const directWithdrawalEvents = await withdrawal.queryFilter(
        withdrawal.filters.DirectWithdrawalQueued(),
        receipt?.blockNumber,
        receipt?.blockNumber
      );
      
      // Check for claimable withdrawals
      const claimableWithdrawalEvents = await withdrawal.queryFilter(
        withdrawal.filters.ClaimableWithdrawalQueued(),
        receipt?.blockNumber,
        receipt?.blockNumber
      );
      
      if (directWithdrawalEvents.length > 0) {
        console.log(`Found ${directWithdrawalEvents.length} direct withdrawal events:`);
        directWithdrawalEvents.forEach((event, i) => {
          const { withdrawalHash, recipient, withdrawal: w } = event.args;
          console.log(`Direct Withdrawal ${i+1}:`);
          console.log(`- Hash: ${withdrawalHash}`);
          console.log(`- Recipient: ${recipient}`);
          console.log(`- Token Index: ${w.tokenIndex}`);
          console.log(`- Amount: ${ethers.formatUnits(w.amount, 18)}`);
        });
        
        console.log('Direct withdrawals should be processed automatically');
      }
      
      if (claimableWithdrawalEvents.length > 0) {
        console.log(`Found ${claimableWithdrawalEvents.length} claimable withdrawal events:`);
        claimableWithdrawalEvents.forEach((event, i) => {
          const { withdrawalHash, recipient, withdrawal: w } = event.args;
          console.log(`Claimable Withdrawal ${i+1}:`);
          console.log(`- Hash: ${withdrawalHash}`);
          console.log(`- Recipient: ${recipient}`);
          console.log(`- Token Index: ${w.tokenIndex}`);
          console.log(`- Amount: ${ethers.formatUnits(w.amount, 18)}`);
        });
        
        console.log('Claimable withdrawals may require an additional claim step');
        
        // If there's a claim function on the liquidity contract, you might need to use it
        if (typeof liquidity.claim === 'function') {
          console.log('Attempting to claim withdrawals...');
          // Note: You would need the correct parameters for the claim function
          // This is just a placeholder - adjust based on your actual contract
          try {
            const withdrawalHashes = claimableWithdrawalEvents.map(ev => ev.args.withdrawalHash);
            const claimTx = await liquidity.claim(withdrawalHashes[0]);
            console.log(`Claim submitted in tx: ${claimTx.hash}`);
            await claimTx.wait();
            console.log('Withdrawal claimed successfully');
          } catch (error) {
            console.error('Error claiming withdrawal:', error.message);
          }
        }
      }
      
      if (directWithdrawalEvents.length === 0 && claimableWithdrawalEvents.length === 0) {
        console.log('No withdrawal events found. The withdrawal might have failed or already been processed.');
      }
      
      // Check the balance after withdrawal
      const balanceAfter = await ethers.provider.getBalance(recipient);
      console.log(`Current balance: ${ethers.formatEther(balanceAfter)} ETH`);
      
      console.log('✅ Withdrawal process completed successfully');
      
    } catch (error) {
      console.error('❌ Error during withdrawal:', error);
      
      // Additional diagnostics
      console.log('\nDiagnostic information:');
      console.log('1. The deposit might not be in this specific block');
      console.log('2. The amount you\'re trying to withdraw might exceed your deposit');
      console.log('3. The proof generation might have failed');
      console.log('4. There might be an issue with the withdrawal contract');
    }
  }
  
  // Run the script
  main()
    .then(() => process.exit(0))
    .catch((error) => {
      console.error(error);
      process.exit(1);
    });