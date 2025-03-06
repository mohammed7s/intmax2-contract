import { ethers, network } from 'hardhat';
import { readDeployedContracts } from '../utils/io';
import { loadFullBlocks, postBlock } from '../../utils/rollup';
import { sleep } from '../../utils/sleep';

async function main() {
  console.log(`Running block builder simulation on network: ${network.name}`);

  // Load deployed contracts for the current network
  const deployedContracts = await readDeployedContracts();
  if (!deployedContracts.rollup) {
    throw new Error(`No rollup contract found for network ${network.name}`);
  }

  // Connect to the rollup contract (required for block submission)
  const rollup = await ethers.getContractAt(
    'Rollup',
    deployedContracts.rollup
  );
  console.log(`Connected to Rollup contract at ${deployedContracts.rollup}`);

  // Get signer
  const blockBuilder = (await ethers.getSigners())[0];
  console.log(`Using account: ${await blockBuilder.getAddress()}`);

  // Check balance
  const balance = await ethers.provider.getBalance(await blockBuilder.getAddress());
  console.log(`Account balance: ${ethers.formatEther(balance)} ETH`);
  
  // Make sure we have enough ETH for transactions
  if (balance < ethers.parseEther('0.3')) {
    console.log('Warning: Not enough ETH for transactions (need >0.3 ETH)');
    return;
  }

  // Load blocks and post them
  try {
    const fullBlocks = loadFullBlocks();
    console.log(`Loaded ${fullBlocks.length} blocks`);
    
    // Post blocks starting from index 1 (index 0 is typically the genesis block)
    for (let i = 1; i < Math.min(fullBlocks.length, 3); i++) {
      console.log(`Posting block ${i}...`);
      const tx = await postBlock(fullBlocks[i], rollup.connect(blockBuilder));
      console.log(`Block ${i} transaction sent: ${tx.hash}`);
      
      const receipt = await tx.wait();
      console.log(`Block ${i} posted successfully, gas used: ${receipt?.gasUsed}`);
      
      // Get the current block number
      const latestBlockNumber = await rollup.getLatestBlockNumber();
      console.log(`Current rollup block number: ${latestBlockNumber}`);
      
      // Wait between transactions
      await sleep(30);
    }
    
    // Get and display the block builder for the latest blocks
    const latestBlockNumber = Number(await rollup.getLatestBlockNumber());
    for (let i = Math.max(1, latestBlockNumber - 3); i <= latestBlockNumber; i++) {
      try {
        const blockBuilder = await rollup.getBlockBuilder(i);
        console.log(`Block ${i} was built by: ${blockBuilder}`);
      } catch (error) {
        console.log(`Could not get builder for block ${i}`);
      }
    }
    
  } catch (error) {
    console.error('Error posting blocks:', error);
  }
}

// Run the script
main()
  .then(() => process.exit(0))
  .catch((error) => {
    console.error(error);
    process.exit(1);
  });