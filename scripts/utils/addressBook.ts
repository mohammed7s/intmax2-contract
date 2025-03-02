import { ethers, network } from 'hardhat'
import { readDeployedContracts } from './io'

export const getUSDCAddress = () => {
	if (network.name === 'rootstockTestnet') {
		return '0xbB739A6e04d07b08E38B66ba137d0c9Cd270c750'
	}
	if (network.name === 'citreaTestnet') {
		return '0xb669dC8cC6D044307Ba45366C0c836eC3c7e31AA'
	}
	if (network.name === 'localhost') {
		// provisional measures
		return '0x0000000000000000000000000000000000000001'
	}
	//TODO mainnet usdc address
	throw new Error('Unsupported network')
}

export const getWBTCAddress = () => {
	if (network.name === 'rootstockTestnet') {
		return '0x31974a4970BADA0ca9BcDe2E2eE6fC15922c5334'
	}
	if (network.name === 'citreaTestnet') {
		return '0x0000000000000000000000000000000000000002'
	}
	if (network.name === 'localhost') {
		// provisional measures
		return '0x0000000000000000000000000000000000000002'
	}
	//TODO mainnet usdc address
	throw new Error('Unsupported network')
}

export const getL1MessengerAddress = async () => {
	if (network.name === 'sepolia') {
		const deployedContracts = await readDeployedContracts()
		if (!deployedContracts.mockL1ScrollMessenger) {
			return '0x50c7d3e7f7c656493D1D76aaa1a836CedfCBB16A' // real address
		} else {
			return deployedContracts.mockL1ScrollMessenger
		}
	}
	if (network.name === 'localhost') {
		// provisional measures
		return ethers.ZeroAddress
	}
	//TODO mainnet messenger address
	throw new Error('Unsupported network')
}

export const getL2MessengerAddress = async () => {
	if (network.name === 'scrollSepolia') {
		const deployedContracts = await readDeployedContracts()
		if (!deployedContracts.mockL2ScrollMessenger) {
			return '0xBa50f5340FB9F3Bd074bD638c9BE13eCB36E603d' // real address
		} else {
			return deployedContracts.mockL2ScrollMessenger // mock address
		}
	}
	if (network.name === 'localhost') {
		// provisional measures
		return ethers.ZeroAddress
	}

	//TODO scroll messenger address
	throw new Error('Unsupported network')
}
