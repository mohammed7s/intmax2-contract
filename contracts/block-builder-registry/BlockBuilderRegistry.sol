// SPDX-License-Identifier: MIT
pragma solidity 0.8.24;

// interface
import {IBlockBuilderRegistry} from "./IBlockBuilderRegistry.sol";
import {IPlonkVerifier} from "../common/IPlonkVerifier.sol";
import {IRollup} from "../rollup/IRollup.sol";

// contracts
import {UUPSUpgradeable} from "@openzeppelin/contracts-upgradeable/proxy/utils/UUPSUpgradeable.sol";
import {OwnableUpgradeable} from "@openzeppelin/contracts-upgradeable/access/OwnableUpgradeable.sol";
import {MIN_STAKE_AMOUNT} from "./BlockBuilderRegistryConst.sol";

// libs
import {BlockBuilderInfoLib} from "./BlockBuilderInfoLib.sol";
import {FraudProofPublicInputsLib} from "./lib/FraudProofPublicInputsLib.sol";
import {Byte32Lib} from "../common/Byte32Lib.sol";

contract BlockBuilderRegistry is
	OwnableUpgradeable,
	UUPSUpgradeable,
	IBlockBuilderRegistry
{
	IRollup private rollup;
	IPlonkVerifier private fraudVerifier;
	address private burnAddress;
	mapping(address => BlockBuilderInfo) public blockBuilders;
	mapping(uint32 => bool) private slashedBlockNumbers;

	using BlockBuilderInfoLib for BlockBuilderInfo;
	using FraudProofPublicInputsLib for FraudProofPublicInputsLib.FraudProofPublicInputs;
	using Byte32Lib for bytes32;

	error FraudProofAlreadySubmitted();

	error FraudProofVerificationFailed();

	error BlockHashMismatch(bytes32 given, bytes32 expected);

	error ChallengerMismatch();

	event BlockFraudProofSubmitted(
		uint32 indexed blockNumber,
		address indexed blockBuilder,
		address indexed challenger
	);

	modifier isStaking() {
		if (blockBuilders[_msgSender()].isStaking() == false) {
			revert BlockBuilderNotFound();
		}
		_;
	}

	/**
	 * @notice Initialize the contract.
	 * @param _rollup The address of the rollup contract.
	 */
	function initialize(
		address _rollup,
		address _fraudVerifier
	) public initializer {
		__Ownable_init(_msgSender());
		__UUPSUpgradeable_init();
		rollup = IRollup(_rollup);
		fraudVerifier = IPlonkVerifier(_fraudVerifier);
		burnAddress = 0x000000000000000000000000000000000000dEaD;
	}

	function updateBlockBuilder(string memory url) public payable {
		BlockBuilderInfo memory info = blockBuilders[_msgSender()];
		uint256 stakeAmount = info.stakeAmount + msg.value;
		if (stakeAmount < MIN_STAKE_AMOUNT) {
			revert InsufficientStakeAmount();
		}
		info.blockBuilderUrl = url;
		info.stakeAmount = stakeAmount;
		info.stopTime = 0;
		info.isValid = true;
		blockBuilders[_msgSender()] = info;

		emit BlockBuilderUpdated(_msgSender(), url, stakeAmount);
	}

	function stopBlockBuilder() public isStaking {
		// Remove the block builder information.
		BlockBuilderInfo memory info = blockBuilders[_msgSender()];
		info.stopTime = block.timestamp;
		info.isValid = false;
		blockBuilders[_msgSender()] = info;

		emit BlockBuilderStopped(_msgSender());
	}

	function unstake() public isStaking {
		// Check if the last block submission is not within 24 hour.
		BlockBuilderInfo memory info = blockBuilders[_msgSender()];
		if (info.isChallengeDuration() == false) {
			revert CannotUnstakeWithinChallengeDuration();
		}
		string memory url = info.blockBuilderUrl;
		uint256 stakeAmount = info.stakeAmount;

		// Remove the block builder information.
		delete blockBuilders[_msgSender()];
		// Return the stake amount to the block builder.
		transfer(_msgSender(), stakeAmount);

		emit BlockBuilderUpdated(_msgSender(), url, stakeAmount);
	}

	function submitBlockFraudProof(
		FraudProofPublicInputsLib.FraudProofPublicInputs calldata publicInputs,
		bytes calldata proof
	) external {
		(bytes32 blockHash, address builder) = rollup.getBlockHashAndBuilder(
			publicInputs.blockNumber
		);
		if (publicInputs.blockHash != blockHash) {
			revert BlockHashMismatch({
				given: publicInputs.blockHash,
				expected: blockHash
			});
		}
		if (publicInputs.challenger != _msgSender()) {
			revert ChallengerMismatch();
		}
		if (slashedBlockNumbers[publicInputs.blockNumber]) {
			revert FraudProofAlreadySubmitted();
		}
		if (!fraudVerifier.Verify(proof, publicInputs.getHash().split())) {
			revert FraudProofVerificationFailed();
		}
		slashedBlockNumbers[publicInputs.blockNumber] = true;
		address blockBuilder = builder;
		_slashBlockBuilder(blockBuilder, _msgSender());

		emit BlockFraudProofSubmitted(
			publicInputs.blockNumber,
			blockBuilder,
			_msgSender()
		);
	}

	function _slashBlockBuilder(
		address blockBuilder,
		address challenger
	) internal {
		BlockBuilderInfo memory info = blockBuilders[blockBuilder];
		if (info.isStaking() == false) {
			revert BlockBuilderNotFound();
		}
		info.numSlashes += 1;
		if (!info.isStakeAmountSufficient() && info.isValid) {
			info.isValid = false;
		}
		emit BlockBuilderSlashed(blockBuilder, challenger);
		if (info.stakeAmount < MIN_STAKE_AMOUNT) {
			// The Block Builder cannot post a block unless it has a minimum amount of stakes,
			// so it does not normally enter into this process.
			uint256 slashAmount = info.stakeAmount;
			info.stakeAmount = 0;
			blockBuilders[blockBuilder] = info;
			if (slashAmount < MIN_STAKE_AMOUNT / 2) {
				transfer(challenger, slashAmount);
			} else {
				transfer(challenger, MIN_STAKE_AMOUNT / 2);
				transfer(burnAddress, slashAmount - (MIN_STAKE_AMOUNT / 2));
			}
			return;
		}
		info.stakeAmount -= MIN_STAKE_AMOUNT;
		// solhint-disable-next-line reentrancy
		blockBuilders[blockBuilder] = info;

		// NOTE: A half of the stake lost by the Block Builder will be burned.
		// This is to prevent the Block Builder from generating invalid blocks and
		// submitting fraud proofs by oneself, which would place a burden on
		// the generation of block validity proofs. An invalid block must prove
		// in the block validity proof that it has been invalidated.
		transfer(challenger, MIN_STAKE_AMOUNT / 2);
		transfer(burnAddress, MIN_STAKE_AMOUNT / 2);
	}

	function isValidBlockBuilder(
		address blockBuilder
	) public view returns (bool) {
		return blockBuilders[blockBuilder].isValid;
	}

	function setBurnAddress(address _burnAddress) external onlyOwner {
		burnAddress = _burnAddress;
	}

	function transfer(address to, uint256 _value) private {
		(bool sent, ) = to.call{value: _value}("");
		if (sent == false) {
			revert FailedTransfer(to, _value);
		}
	}

	function _authorizeUpgrade(address) internal override onlyOwner {}
}
