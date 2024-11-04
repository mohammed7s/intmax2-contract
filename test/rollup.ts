import { ethers, upgrades } from 'hardhat'
import type {
	BlockBuilderRegistry,
	Contribution,
	MockL2ScrollMessenger,
	Rollup,
} from '../typechain-types'
import { expect } from 'chai'
import { loadFullBlocks, postBlock } from '../utils/rollup'
import { getRandomSalt } from '../utils/rand'

describe('Rollup', function () {
	let registry: BlockBuilderRegistry
	let rollup: Rollup

	this.beforeEach(async function () {
		const registryFactory = await ethers.getContractFactory(
			'BlockBuilderRegistry',
		)
		registry = (await upgrades.deployProxy(registryFactory, [], {
			initializer: false,
			kind: 'uups',
		})) as unknown as BlockBuilderRegistry

		const rollupFactory = await ethers.getContractFactory('Rollup')
		rollup = (await upgrades.deployProxy(rollupFactory, [], {
			initializer: false,
			kind: 'uups',
		})) as unknown as Rollup

		const contributionFactory = await ethers.getContractFactory('Contribution')
		const contribution = (await upgrades.deployProxy(contributionFactory, [], {
			kind: 'uups',
		})) as unknown as Contribution
		await rollup.initialize(
			ethers.ZeroAddress,
			await registry.getAddress(),
			await contribution.getAddress(),
		)
		await contribution.grantRole(
			ethers.solidityPackedKeccak256(['string'], ['CONTRIBUTOR']),
			rollup,
		)
	})

	it('should match block hashes', async function () {
		await registry.updateBlockBuilder('http://example.com', {
			value: ethers.parseEther('0.1'),
		})
		const fullBlocks = loadFullBlocks()
		for (let i = 1; i < 3; i++) {
			await postBlock(fullBlocks[i], rollup)
		}
		let blockHashes = []
		for (let i = 0; i < 3; i++) {
			const blockHash = await rollup.blockHashes(i)
			blockHashes.push(blockHash)
		}
		expect(blockHashes[0]).to.equal(fullBlocks[0].blockHash)
		expect(blockHashes[1]).to.equal(fullBlocks[1].blockHash)
		expect(blockHashes[2]).to.equal(fullBlocks[2].blockHash)
	})

	// const calcProcessDepositsGas = async (
	// 	depositHashes: string[],
	// ): Promise<bigint> => {
	// 	const message = rollup.interface.encodeFunctionData('processDeposits', [
	// 		0,
	// 		depositHashes,
	// 	])
	// 	const tx = await mockL2ScrollMessenger.relayMessage(
	// 		ethers.ZeroAddress,
	// 		await rollup.getAddress(),
	// 		0,
	// 		0,
	// 		message,
	// 	)
	// 	const receipt = await tx.wait()
	// 	if (!receipt) {
	// 		throw new Error('no receipt')
	// 	}
	// 	return receipt.gasUsed
	// }

	// it('process deposit gas for 1 deposit', async function () {
	// 	console.log(
	// 		'Gas for 1 hash:',
	// 		await calcProcessDepositsGas([getRandomSalt()]),
	// 	)
	// })

	// it('process deposit gas for 2 deposit', async function () {
	// 	console.log(
	// 		'Gas for 2 hashes:',
	// 		await calcProcessDepositsGas([getRandomSalt(), getRandomSalt()]),
	// 	)
	// })

	// it('process deposit gas for 4 deposit', async function () {
	// 	console.log(
	// 		'Gas for 4 hashes:',
	// 		await calcProcessDepositsGas([
	// 			getRandomSalt(),
	// 			getRandomSalt(),
	// 			getRandomSalt(),
	// 			getRandomSalt(),
	// 		]),
	// 	)
	// })
})
