import { expect } from 'chai'
import { ethers } from 'hardhat'
import { loadFixture } from '@nomicfoundation/hardhat-toolbox/network-helpers'
import { DepositLibTest } from '../../typechain-types'

describe('DepositLib', function () {
	async function deployContractFixture(): Promise<DepositLibTest> {
		const DepositLibTest = await ethers.getContractFactory('DepositLibTest')
		const testLibrary = await DepositLibTest.deploy()
		return testLibrary
	}

	describe('getHash', function () {
		it('should return the correct hash for a deposit', async function () {
			const testLibrary = await loadFixture(deployContractFixture)

			const recipientSaltHash = ethers.randomBytes(32)
			const tokenIndex = 123
			const amount = ethers.parseEther('1.5')

			const hash = await testLibrary.getHash(
				recipientSaltHash,
				tokenIndex,
				amount,
			)

			// Calculate expected hash
			const expectedHash = ethers.keccak256(
				ethers.solidityPacked(
					['bytes32', 'uint32', 'uint256'],
					[recipientSaltHash, tokenIndex, amount],
				),
			)

			expect(hash).to.equal(expectedHash)
		})

		it('should return different hashes for different deposits', async function () {
			const testLibrary = await loadFixture(deployContractFixture)

			const recipientSaltHash1 = ethers.randomBytes(32)
			const tokenIndex1 = 123
			const amount1 = ethers.parseEther('1.5')

			const recipientSaltHash2 = ethers.randomBytes(32)
			const tokenIndex2 = 456
			const amount2 = ethers.parseEther('2.5')

			const hash1 = await testLibrary.getHash(
				recipientSaltHash1,
				tokenIndex1,
				amount1,
			)
			const hash2 = await testLibrary.getHash(
				recipientSaltHash2,
				tokenIndex2,
				amount2,
			)

			expect(hash1).to.not.equal(hash2)
		})

		it('should handle extreme values correctly', async function () {
			const testLibrary = await loadFixture(deployContractFixture)

			const recipientSaltHash = ethers.ZeroHash
			const tokenIndex = 0
			const amount = ethers.MaxUint256

			const hash = await testLibrary.getHash(
				recipientSaltHash,
				tokenIndex,
				amount,
			)

			// Calculate expected hash
			const expectedHash = ethers.keccak256(
				ethers.solidityPacked(
					['bytes32', 'uint32', 'uint256'],
					[recipientSaltHash, tokenIndex, amount],
				),
			)

			expect(hash).to.equal(expectedHash)
		})
	})

	describe('createDeposit', function () {
		it('should create a deposit with correct values', async function () {
			const testLibrary = await loadFixture(deployContractFixture)

			const recipientSaltHash = ethers.randomBytes(32)
			const tokenIndex = 123
			const amount = ethers.parseEther('1.5')

			const deposit = await testLibrary.createDeposit(
				recipientSaltHash,
				tokenIndex,
				amount,
			)

			// Convert recipientSaltHash to hex string for comparison
			const recipientSaltHashHex = ethers.hexlify(recipientSaltHash)

			expect(deposit.recipientSaltHash).to.equal(recipientSaltHashHex)
			expect(deposit.tokenIndex).to.equal(tokenIndex)
			expect(deposit.amount).to.equal(amount)
		})
	})
})
