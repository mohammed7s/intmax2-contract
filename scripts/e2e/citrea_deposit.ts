import { ethers, network } from 'hardhat'
import { readDeployedContracts } from '../utils/io'
import { getRandomPubkey, getRandomSalt } from '../../utils/rand'
import { getPubkeySaltHash } from '../../utils/hash'
import { sleep } from '../../utils/sleep'
import type { ContractTransactionResponse, Wallet } from 'ethers'
import { getLastDepositedEvent } from '../../utils/events'
//import { rollup } from '../../typechain-types/factories/contracts/test'

// Configuration for accounts
// Replace with your actual private keys or use environment variables
const PRIVATE_KEYS = [
  process.env.PRIVATE_KEY_1 || "0xYourPrivateKey1", // User account
  process.env.PRIVATE_KEY_2 || "0xYourPrivateKey2", // Analyzer account 
  process.env.PRIVATE_KEY_3 || "0xYourPrivateKey3"  // Admin account
];

async function main() {
  console.log(`Running on network: ${network.name}`);
  
  // Load deployed contracts for the current network
  const deployedContracts = await readDeployedContracts(network.name)
  if (!deployedContracts.liquidity) {
    throw new Error(`No liquidity contract found for network ${network.name}`)
  }
  
  // Connect to the liquidity contract
  const liquidity = await ethers.getContractAt(
    'Liquidity',
    deployedContracts.liquidity,
  )
  
  console.log(`Connected to Liquidity contract at ${deployedContracts.liquidity}`)

  // Create wallet instances from private keys
  const provider = new ethers.JsonRpcProvider(network.config.url as string);
  const wallets = PRIVATE_KEYS.map(key => new ethers.Wallet(key, provider));
  
  const userWallet = wallets[0];
  const analyzerWallet = wallets[1];
  const adminWallet = wallets[2];
  
  console.log(`User wallet address: ${userWallet.address}`);
  console.log(`Analyzer wallet address: ${analyzerWallet.address}`);
  console.log(`Admin wallet address: ${adminWallet.address}`);
  // Check balances
  const userBalance = await provider.getBalance(userWallet.address);
  console.log(`User wallet balance: ${ethers.formatEther(userBalance)} ETH`);
  
  if (userBalance === 0n) {
    throw new Error('User wallet has no funds. Please send some native tokens first.');
  }

  // Deposit amount - using a small amount for testing
  const depositAmount = ethers.parseEther('0.1');
  
  // STEP 1: DEPOSIT
  console.log("\n--- STEP 1: PERFORMING DEPOSIT ---");
  const pubkey = getRandomPubkey() // intmax address of user
  const salt = getRandomSalt() // random salt
  const pubkeySaltHash = getPubkeySaltHash(pubkey, salt)
  console.log('Generated pubkey salt hash:', pubkeySaltHash)
  console.log('Generated pubkey:', pubkey)

  console.log(`Depositing ${ethers.formatEther(depositAmount)} ETH...`);
  const tx = await liquidity.connect(userWallet).depositNativeToken(pubkeySaltHash, {
    value: depositAmount,
  })
  console.log('Deposit transaction hash:', tx.hash)
  
  // Wait for transaction to be mined
  console.log('Waiting for transaction confirmation...')
  const res = await tx.wait()
  if (!res?.blockNumber) {
    throw new Error('No block number found')
  }
  console.log(`Transaction confirmed in block ${res.blockNumber}`)

  // STEP 2: RETRIEVE DEPOSIT EVENT
  console.log("\n--- STEP 2: RETRIEVING DEPOSIT EVENT ---");
  const depositEvent = await getLastDepositedEvent(
    liquidity,
    userWallet.address,
    res.blockNumber,
  )
  const { depositId, sender, recipientSaltHash, tokenIndex, amount } = depositEvent.args;
  console.log('Deposit details:');
  console.log(`- Deposit ID: ${depositId}`);
  console.log(`- Sender: ${sender}`);
  console.log(`- Recipient Salt Hash: ${recipientSaltHash}`);
  console.log(`- Token Index: ${tokenIndex}`);
  console.log(`- Amount: ${ethers.formatEther(amount)} ETH`);
  
  
  // Wait before analyzing (some networks might need more time)
  const waitTime = 10; // seconds
  console.log(`Waiting ${waitTime} seconds before analyzing deposit...`)
  await sleep(waitTime)

  // STEP 3: ANALYZE AND RELAY DEPOSITS
  console.log("\n--- STEP 3: ANALYZING AND RELAYING DEPOSITS ---");
  console.log(`Analyzing and relaying deposits up to ID: ${depositId}...`);
  const analyzeTx = await liquidity
    .connect(analyzerWallet)
    .analyzeAndRelayDeposits(depositId, [], 800_000, {
      value: ethers.parseEther('0.0000001'), // will be refunded automatically
    })
  console.log('Analyze transaction hash:', analyzeTx.hash)
  
  // Wait for analysis transaction to complete
  console.log('Waiting for analysis transaction confirmation...')
  const analyzeReceipt = await analyzeTx.wait()
  console.log(`Analysis transaction confirmed in block ${analyzeReceipt?.blockNumber}`)

  // STEP 4: CONFIRM ANALYSIS COMPLETED
  console.log("\n--- STEP 4: CONFIRMING ANALYSIS COMPLETION ---");
  
  // Get the "DepositRelayed" events from the transaction
  const depositAnalyzedFilter = liquidity.filters.DepositsAnalyzedAndRelayed();
  const depositAnalyzedEvents = await liquidity.queryFilter(
    depositAnalyzedFilter, 
    analyzeReceipt?.blockNumber, 
    analyzeReceipt?.blockNumber
  );
  
  console.log(`Found ${depositAnalyzedEvents.length} DepositsAnalyzedAndRelayed events`);
  
  // Check if our deposit was analyzed and relayed
  const ourAnalyzedEvent = depositAnalyzedEvents.find(
    event => Number(event.args.upToDepositId) >= Number(depositId)
  );

    
  if (ourAnalyzedEvent) {
    console.log(`✅ Deposits were successfully analyzed and relayed up to ID ${ourAnalyzedEvent.args.upToDepositId}!`);
    
    // Option 1: Direct property access with type assertion
    const rejectedIds = (ourAnalyzedEvent.args as any).rejectedDepositIds || 
                         (ourAnalyzedEvent.args as any).rejectDepositIds || [];
    
    console.log(`- Rejected deposit IDs: ${rejectedIds.length > 0 ? 
      rejectedIds.join(', ') : 'None'}`);
    console.log(`- Gas limit used: ${ourAnalyzedEvent.args.gasLimit}`);
  } else {
    console.log(`⚠️ No DepositsAnalyzedAndRelayed events found for our transaction.`);
  }

  // STEP 5: CHECKING ROLLUP PROCESSING
  console.log("\n--- STEP 5: CHECKING ROLLUP PROCESSING ---");

// Connect to the Rollup contract - fix: get a proper contract instance
  let rollup;
  if (deployedContracts.rollup) {
      rollup = await ethers.getContractAt('Rollup', deployedContracts.rollup);
      console.log(`Connected to Rollup contract at ${deployedContracts.rollup}`);
  } else {
      console.log('No Rollup contract address found, skipping Rollup event checks');
  }
  if (rollup) {
    try {
      const depositsProcessedFilter = rollup.filters.DepositsProcessed();

      // Check for events in the last few blocks (may not be in the exact same block)
      const currentBlock = await ethers.provider.getBlockNumber();
      const lookbackBlocks = 5; // Look back 5 blocks
      const fromBlock = Math.max(analyzeReceipt?.blockNumber || 0, currentBlock - lookbackBlocks);

      const depositsProcessedEvents = await rollup.queryFilter(
          depositsProcessedFilter, 
          fromBlock, 
          "latest"
      );

      console.log(`Found ${depositsProcessedEvents.length} DepositsProcessed events`);
// Process events if any were found
    if (depositsProcessedEvents.length > 0) {
        for (const event of depositsProcessedEvents) {
        console.log(`- Last Processed Deposit ID: ${event.args.lastProcessedDepositId}`);
        console.log(`- New Deposit Tree Root: ${event.args.depositTreeRoot}`); // Changed from newDepositTreeRoot to depositTreeRoot
        }
    }
    } catch (error) {
      console.log("Error checking Rollup events:", error.message);
      console.log("This could be because the Rollup contract interface doesn't match expectations");
    }
  } else {
    console.log("Skipping Rollup event checks (no Rollup contract address provided)");
  }

  console.log("\n✅ Deposit and analysis process completed successfully!");
  console.log(`User can now use their funds on Citrea with pubkey: ${pubkey}`);
  console.log(`Keep this information safe for reference:`);
  console.log(`- Pubkey: ${pubkey}`);
  console.log(`- Salt: ${salt}`);

}

// Handle errors properly
main().catch((error) => {
  console.error('Error in deposit script:')
  console.error(error)
  process.exitCode = 1
})