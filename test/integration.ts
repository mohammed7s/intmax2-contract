import { ethers, upgrades } from 'hardhat'
import type {
	BlockBuilderRegistry,
	Liquidity,
	MockL1ScrollMessenger,
	MockL2ScrollMessenger,
	MockPlonkVerifier,
	Withdrawal,
	Rollup,
	TestERC20,
	Contribution,
} from '../typechain-types'
import { expect } from 'chai'
import { loadFullBlocks, postBlock } from '../utils/rollup'
import { getRandomPubkey, getRandomSalt } from '../utils/rand'
import { getPubkeySaltHash } from '../utils/hash'
import { loadWithdrawalInfo } from '../utils/withdrawal'
import {
	getLastDepositedEvent,
	getLastDepositsAnalyzedAndRelayedEvent,
	getLastSentEvent,
	getWithdrawalsQueuedEvent,
} from '../utils/events'

describe('Integration', function () {
	let l1Contribution: Contribution
	let l2Contribution: Contribution
	let withdrawalVerifier: MockPlonkVerifier
	let fraudVerifier: MockPlonkVerifier

	let rollup: Rollup
	let withdrawal: Withdrawal
	let registry: BlockBuilderRegistry
	let liquidity: Liquidity

	let testToken: TestERC20

	this.beforeEach(async function () {
		const deployer = (await ethers.getSigners())[0]
		const analyzer = (await ethers.getSigners())[1]
		// test token
		const TestERC20_ = await ethers.getContractFactory('TestERC20')
		testToken = (await TestERC20_.deploy(deployer)) as TestERC20

		const contributionFactory = await ethers.getContractFactory('Contribution')
		l1Contribution = (await upgrades.deployProxy(contributionFactory, [], {
			kind: 'uups',
		})) as unknown as Contribution

		l2Contribution = (await upgrades.deployProxy(contributionFactory, [], {
			kind: 'uups',
		})) as unknown as Contribution

		// plonk verifier deployment
		const MockPlonkVerifier_ =
			await ethers.getContractFactory('MockPlonkVerifier')
		withdrawalVerifier =
			(await MockPlonkVerifier_.deploy()) as MockPlonkVerifier
		fraudVerifier = (await MockPlonkVerifier_.deploy()) as MockPlonkVerifier

		// L2 deployments. Initialize later.
		const rollupFactory = await ethers.getContractFactory('Rollup')
		rollup = (await upgrades.deployProxy(rollupFactory, [], {
			initializer: false,
			kind: 'uups',
		})) as unknown as Rollup
		const withdrawalFactory = await ethers.getContractFactory('Withdrawal')
		withdrawal = (await upgrades.deployProxy(withdrawalFactory, [], {
			initializer: false,
			kind: 'uups',
		})) as unknown as Withdrawal
		const registryFactory = await ethers.getContractFactory(
			'BlockBuilderRegistry',
		)
		registry = (await upgrades.deployProxy(registryFactory, [], {
			initializer: false,
			kind: 'uups',
		})) as unknown as BlockBuilderRegistry

		// L1 deployment. Initialize later.
		const liquidityFactory = await ethers.getContractFactory('Liquidity')
		liquidity = (await upgrades.deployProxy(liquidityFactory, [], {
			initializer: false,
			kind: 'uups',
		})) as unknown as Liquidity

		// get address
		const testTokenAddress = await testToken.getAddress()
		const withdrawalVerifierAddress = await withdrawalVerifier.getAddress()
		const fraudVerifierAddress = await fraudVerifier.getAddress()
		const rollupAddress = await rollup.getAddress()
		const withdrawalAddress = await withdrawal.getAddress()
		const liquidityAddress = await liquidity.getAddress()
		const registryAddress = await registry.getAddress()
		const l1ContributionAddress = await l1Contribution.getAddress()
		const l2ContributionAddress = await l2Contribution.getAddress()

		// L1 initialize
		await liquidity.initialize(
			rollupAddress,
			withdrawalAddress,
			analyzer.address,
			l1ContributionAddress,
			[testTokenAddress], // testToken
		)
		await l1Contribution.grantRole(
			ethers.solidityPackedKeccak256(['string'], ['CONTRIBUTOR']),
			liquidityAddress,
		)

		// L2 initialize
		await rollup.initialize(
			liquidityAddress,
			registryAddress,
			await l2Contribution.getAddress(),
		)
		await withdrawal.initialize(
			withdrawalVerifierAddress,
			liquidity,
			rollupAddress,
			await l2Contribution.getAddress(),
			[0, 1], // 0: eth, 1: testToken
		)
		await registry.initialize(rollupAddress, fraudVerifierAddress)
		await l2Contribution.grantRole(
			ethers.solidityPackedKeccak256(['string'], ['CONTRIBUTOR']),
			rollupAddress,
		)
		await l2Contribution.grantRole(
			ethers.solidityPackedKeccak256(['string'], ['CONTRIBUTOR']),
			withdrawalAddress,
		)
	})

	it('deposit', async function () {
		// deposit on L1
		const owner = (await ethers.getSigners())[0]
		const analyzer = (await ethers.getSigners())[1]
		const user = (await ethers.getSigners())[2]
		const depositAmount = ethers.parseEther('100') // deposit 100 testToken
		// fund token to user
		await testToken
			.connect(owner)
			.transfer(await user.getAddress(), depositAmount)
		// approve token to liquidity
		await testToken
			.connect(user)
			.approve(await liquidity.getAddress(), depositAmount)
		const pubkey = getRandomPubkey() // intmax address of user
		const salt = getRandomSalt() // random salt
		const pubkeySaltHash = getPubkeySaltHash(pubkey, salt)
		await liquidity
			.connect(user)
			.depositERC20(await testToken.getAddress(), pubkeySaltHash, depositAmount)
		const lastDepositedEvent = await getLastDepositedEvent(
			liquidity,
			user.address,
			0,
		)
		const depositId = lastDepositedEvent.args.depositId
		await liquidity
			.connect(analyzer)
			.analyzeAndRelayDeposits(depositId, [], 400_000, {
				value: ethers.parseEther('0.1'), // will be refunded automatically
			})

		// check deposit
		const depositProcessedEvent = (
			await rollup.queryFilter(rollup.filters.DepositsProcessed())
		)[0]

		const { lastProcessedDepositId } = depositProcessedEvent.args
		expect(lastProcessedDepositId).to.be.eq(depositId)
	})

	it('withdrawal', async function () {
		// setup: post blocks
		await registry.updateBlockBuilder('http://example.com', {
			value: ethers.parseEther('0.1'),
		})
		const fullBlocks = loadFullBlocks()
		for (let i = 1; i < 3; i++) {
			await postBlock(fullBlocks[i], rollup)
		}
		// setup: fund liquidity contract for withdrawal liquidity
		const liquidityAddress = await liquidity.getAddress()
		await liquidity.depositNativeToken(ethers.ZeroHash, {
			value: ethers.parseEther('100'),
		})
		await testToken.transfer(liquidityAddress, ethers.parseEther('100'))

		// withdrawal on L2
		const withdrawalInfo = loadWithdrawalInfo()
		await withdrawal.submitWithdrawalProof(
			withdrawalInfo.withdrawals,
			withdrawalInfo.withdrawalProofPublicInputs,
			'0x',
		)
		const withdrawalsQueuedEvent = await getWithdrawalsQueuedEvent(
			withdrawal,
			0,
		)
		const { lastDirectWithdrawalId, lastClaimableWithdrawalId } =
			withdrawalsQueuedEvent.args
		
		// check event
		const directProcessEvent = (
			await liquidity.queryFilter(
				liquidity.filters.DirectWithdrawalsProcessed(),
			)
		)[0]
		const { lastProcessedDirectWithdrawalId } = directProcessEvent.args
		expect(lastProcessedDirectWithdrawalId).to.be.eq(lastDirectWithdrawalId)
	})
})
