import { ethers } from 'hardhat';
import { readDeployedContracts } from './utils/io';
import * as dotenv from 'dotenv';
import path from 'path';

// Load environment variables from the project root .env file
dotenv.config({ path: path.resolve(__dirname, '../.env') });
//console.log('Environment Variables:', process.env);

async function main() {
    // Load deployed contract addresses
    const deployedContracts = await readDeployedContracts();
    if (!deployedContracts.liquidity) {
        throw new Error('Liquidity contract not found');
    }

    // Get the Liquidity contract instance
    const liquidity = await ethers.getContractAt(
        'Liquidity',
        deployedContracts.liquidity
    );
    // Get the Rollup contract instance
    const rollup = await ethers.getContractAt(
        'Rollup',
        deployedContracts.rollup
    );
    

    // Access the ANALYZER role directly as a property
    const ANALYZER_ROLE = await liquidity.ANALYZER();
    console.log('ANALYZER_ROLE:', ANALYZER_ROLE);

    // Fetch the last deposit ID
    const lastDepositId = await liquidity.getLastDepositId();
    console.log('Last Deposit ID:', lastDepositId.toString());

    // Configure the signer using the ANALYZER_PRIVATE_KEY from the environment
    const analyzerPrivateKey = process.env.ANALYZER_PRIVATE_KEY;
    if (!analyzerPrivateKey) {
        throw new Error('ANALYZER_PRIVATE_KEY not set in .env');
    }
    const analyzer = new ethers.Wallet(analyzerPrivateKey, ethers.provider);

    // Check if the analyzer has the ANALYZER role
    const hasRole = await liquidity.hasRole(ANALYZER_ROLE, analyzer.address);
    console.log('Analyzer has role:', hasRole);
    if (!hasRole) {
        throw new Error('Analyzer does not have the ANALYZER role');
    }

    // Check for deposits that need to be processed
    console.log('Checking deposit queue status...');
    const lastRelayedId = await liquidity.getLastRelayedDepositId();
    console.log('Last relayed deposit ID:', lastRelayedId.toString());
    
    // Check contract pause status
    try {
        const isPaused = await liquidity.paused();
        console.log('Contract paused:', isPaused);
    } catch (error) {
        console.log('Could not check pause status:', error);
    }

    async function queryDepositsAnalyzedEvents() {
        console.log("Querying past DepositsAnalyzedAndRelayed events...");
        
        // Create event filter
        const filter = liquidity.filters.DepositsAnalyzedAndRelayed();
        
        // Get events from the last 1000 blocks (adjust as needed)
        const currentBlock = await ethers.provider.getBlockNumber();
        const fromBlock = Math.max(0, currentBlock - 999);
        
        // Query the events
        const events = await liquidity.queryFilter(filter, fromBlock, "latest");
        
        console.log(`Found ${events.length} DepositsAnalyzedAndRelayed events`);
        
        // Display event details
        events.forEach((event, index) => {
            const { upToDepositId, rejectDepositIds, gasLimit } = event.args;
            console.log(`Event #${index + 1}:`);
            console.log(`  - Block: ${event.blockNumber}`);
            console.log(`  - Transaction: ${event.transactionHash}`);
            console.log(`  - Up to deposit ID: ${upToDepositId}`);
            console.log(`  - Rejected deposit IDs: ${rejectDepositIds}`);
            console.log(`  - Gas limit: ${gasLimit}`);
            console.log('---');
        });
        
        return events;
    }
    
    // You can call this function anywhere in your script
    await queryDepositsAnalyzedEvents();

        // Function to query DepositsProcessed events from Rollup
        async function queryDepositsProcessedEvents() {
            console.log("Querying past DepositsProcessed events from Rollup...");
            
            // Create event filter
            const filter = rollup.filters.DepositsProcessed();
            
            // Get events from the last 1000 blocks (adjust as needed)
            const currentBlock = await ethers.provider.getBlockNumber();
            const fromBlock = Math.max(0, currentBlock - 999);
            
            // Query the events
            const events = await rollup.queryFilter(filter, fromBlock, "latest");
            
            console.log(`Found ${events.length} DepositsProcessed events`);
            
            // Display event details
            events.forEach((event, index) => {
                const { lastProcessedDepositId, newDepositTreeRoot } = event.args;
                console.log(`Event #${index + 1}:`);
                console.log(`  - Block: ${event.blockNumber}`);
                console.log(`  - Transaction: ${event.transactionHash}`);
                console.log(`  - Last Processed Deposit ID: ${lastProcessedDepositId}`);
                console.log(`  - New Deposit Tree Root: ${newDepositTreeRoot}`);
                console.log('---');
            });
            
            return events;
        }

    await queryDepositsProcessedEvents();

    
    const specificFilter = liquidity.filters.DepositsAnalyzedAndRelayed(
        lastDepositId,  // Only events with this upToDepositId
        null,           // Any rejectDepositIds
        null            // An0y gasLimit
    );
    console.log('Specific filter:', specificFilter);

    // const simpleTx = await analyzer.sendTransaction({
    //     to: "0x0000000000000000000000000000000000000000",
    //     value: ethers.parseEther("0.001")
    //   });
    //   await simpleTx.wait();
    // Try a smaller batch - just process one deposit at a time
    // Start with deposit ID 1 if nothing has been processed yet
    const startId = lastRelayedId.toString() === '0' ? 1 : Number(lastRelayedId) + 1;
    const endId = Math.min(Number(lastDepositId), startId); // Just process one deposit
    
    if (startId > Number(lastDepositId)) {
        console.log('No new deposits to process');
        return;
    }
    
    console.log(`Attempting to process deposit ${startId} (of ${lastDepositId} total deposits)`);
    
    // Use a more reasonable gas limit
    const gasLimit = 1000000; // 1 million gas should be enough for processing a single deposit
    
    try {
        console.log('Preparing transaction data...');
        
        // Connect directly to the contract instead of manual transaction building
        const liquidityContract = new ethers.Contract(
            deployedContracts.liquidity,
            [
                "function analyzeAndRelayDeposits(uint256 upToDepositId, uint256[] memory rejectDepositIds, uint256 gasLimit) external payable"
            ],
            analyzer
        );
        
        console.log('Calling contract function directly...');
        
        // Send transaction directly through the contract
        const tx = await liquidityContract.analyzeAndRelayDeposits(
            startId,
            [],
            gasLimit,
            {
                value: ethers.parseEther('0.1'),
                gasLimit: 3000000
            }
        );
        
        console.log('Transaction sent! Hash:', tx.hash);
        console.log('Waiting for confirmation...');
        
        const receipt = await tx.wait();
        console.log('Transaction confirmed!');

        if (receipt) {
            console.log("Checking for events after our transaction...");
            
            // Find our Liquidity event
            const newLiquidityEvents = await queryDepositsAnalyzedEvents();
            const ourLiquidityEvent = newLiquidityEvents.find(e => 
                e.transactionHash === receipt.transactionHash
            );
            
            if (ourLiquidityEvent) {
                console.log("✅ Our DepositsAnalyzedAndRelayed event found!");
            }
            
            // Find our Rollup event (may be in a different transaction)
            const newRollupEvents = await queryDepositsProcessedEvents();
            
            // Find the Rollup event that processed our deposit ID
            // Note: The Rollup event may not have the same transaction hash, as it's 
            // triggered by the Liquidity contract calling the Rollup contract
            const relevantRollupEvent = newRollupEvents.find(e => 
                e.args.lastProcessedDepositId >= startId
            );
            
            if (relevantRollupEvent) {
                console.log("✅ DepositsProcessed event found that includes our deposit ID!");
                console.log(`   Last processed ID: ${relevantRollupEvent.args.lastProcessedDepositId}`);
            } else {
                console.log("❌ No DepositsProcessed event found for our deposit yet");
            }
        }



    } catch (error) {
        console.log('Error details:', error);
        
        // Check if we can get more error details
        if (error.transaction) {
            console.log('Error transaction details:');
            console.log('  To:', error.transaction.to);
            console.log('  From:', error.transaction.from);
            console.log('  Data:', error.transaction.data ? 
                              (error.transaction.data.substring(0, 66) + '...') : 
                              'EMPTY DATA');
            console.log('  Value:', error.transaction.value);
        }
    }
}

// Execute the script
main().catch((error) => {
    console.error('Error in script execution:', error);
    process.exitCode = 1;
}); 