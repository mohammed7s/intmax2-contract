import { ethers, network, upgrades } from 'hardhat'
import { readDeployedContracts, writeDeployedContracts } from '../utils/io'
import {
	getUSDCAddress,
	getWBTCAddress,
} from '../utils/addressBook'
import { sleep } from '../../utils/sleep'
import { getCounterPartNetwork } from '../utils/counterPartNetwork'

async function main() {
	let deployedContracts = await readDeployedContracts()
	
	if (!deployedContracts.l1Contribution) {
		console.log('deploying l1Contribution')
		const contributionFactory = await ethers.getContractFactory('Contribution')
		const l1Contribution = await upgrades.deployProxy(contributionFactory, [], {
			kind: 'uups',
		})
		const deployedContracts = await readDeployedContracts()
		await writeDeployedContracts({
			l1Contribution: await l1Contribution.getAddress(),
			...deployedContracts,
		})
	}

	if (!deployedContracts.liquidity) {
		console.log('deploying liquidity')
		const deployedL2Contracts = await readDeployedContracts(
			getCounterPartNetwork(),
		)
		if (!deployedL2Contracts.rollup) {
			throw new Error('rollup address is not set')
		}
		if (!deployedL2Contracts.withdrawal) {
			throw new Error('withdrawal address is not set')
		}
		if (!deployedContracts.l1Contribution) {
			throw new Error('l1Contribution address is not set')
		}

		const analyzer = (await ethers.getSigners())[0]
		const liquidityFactory = await ethers.getContractFactory('Liquidity')
		const initialERC20Tokens: any[] = []
		const liquidity = await upgrades.deployProxy(
			liquidityFactory,
			[
				deployedL2Contracts.rollup,
				deployedL2Contracts.withdrawal,
				analyzer.address,
				deployedContracts.l1Contribution,
				initialERC20Tokens,
			],
			{
				kind: 'uups',
			},
		)

		console.log('liquidity deployed')
		// sleep 5 secs
		await sleep(5)

		// grant roles
		if (!deployedContracts.l1Contribution) {
			throw new Error('l1Contribution address is not set')
		}
		const l1Contribution = await ethers.getContractAt(
			'Contribution',
			deployedContracts.l1Contribution,
		)
		await l1Contribution.grantRole(
			ethers.solidityPackedKeccak256(['string'], ['CONTRIBUTOR']),
			liquidity,
		)
		console.log('granted role')

		deployedContracts = await readDeployedContracts()
		await writeDeployedContracts({
			liquidity: await liquidity.getAddress(),
			...deployedContracts,
		})
	}

	if (!deployedContracts.testErc20) {
		console.log('deploying testErc20')
		const TestERC20 = await ethers.getContractFactory('TestERC20')
		const owner = (await ethers.getSigners())[0]
		const testErc20 = await TestERC20.deploy(owner.address)
		const deployedContracts = await readDeployedContracts()
		await writeDeployedContracts({
			testErc20: await testErc20.getAddress(),
			...deployedContracts,
		})
	}
}

// We recommend this pattern to be able to use async/await everywhere
// and properly handle errors.
main().catch((error) => {
	console.error(error)
	process.exitCode = 1
})
