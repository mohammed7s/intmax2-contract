// SPDX-License-Identifier: MIT
pragma solidity 0.8.24;

import {IRollup} from "./IRollup.sol";
import {IBlockBuilderRegistry} from "../block-builder-registry/IBlockBuilderRegistry.sol";
import {IL2ScrollMessenger} from "@scroll-tech/contracts/L2/IL2ScrollMessenger.sol";
import {IContribution} from "../contribution/IContribution.sol";

import {UUPSUpgradeable} from "@openzeppelin/contracts-upgradeable/proxy/utils/UUPSUpgradeable.sol";
import {OwnableUpgradeable} from "@openzeppelin/contracts-upgradeable/access/OwnableUpgradeable.sol";

import {DepositTreeLib} from "./lib/DepositTreeLib.sol";
import {BlockHashLib} from "./lib/BlockHashLib.sol";
import {PairingLib} from "./lib/PairingLib.sol";

contract Rollup is IRollup, OwnableUpgradeable, UUPSUpgradeable {
    using BlockHashLib for bytes32[];
    using DepositTreeLib for DepositTreeLib.DepositTree;

    uint256 private constant NUM_SENDERS_IN_BLOCK = 128;
    uint256 private constant FULL_ACCOUNT_IDS_BYTES = NUM_SENDERS_IN_BLOCK * 5;

    IBlockBuilderRegistry private blockBuilderRegistry;
    address private liquidity;
    uint256 public lastProcessedDepositId;
    bytes32[] public blockHashes;
    address[] public blockBuilders;

    IContribution private contribution;
    DepositTreeLib.DepositTree private depositTree;
    bytes32 public depositTreeRoot;

    modifier onlyLiquidityContract() {
        if (_msgSender() != liquidity) {
            revert OnlyLiquidity();
        }
        _;
    }

    function initialize(address _liquidity, address _blockBuilderRegistry, address _contribution) public initializer {
        __Ownable_init(_msgSender());
        __UUPSUpgradeable_init();
        depositTree.initialize();
        liquidity = _liquidity;
        blockBuilderRegistry = IBlockBuilderRegistry(_blockBuilderRegistry);
        contribution = IContribution(_contribution);

        depositTreeRoot = depositTree.getRoot();
        blockHashes.pushGenesisBlockHash(depositTreeRoot);
        blockBuilders.push(address(0));
    }

    function postRegistrationBlock(
        bytes32 txTreeRoot,
        bytes16 senderFlags,
        bytes32[2] calldata aggregatedPublicKey,
        bytes32[4] calldata aggregatedSignature,
        bytes32[4] calldata messagePoint,
        uint256[] calldata senderPublicKeys
    ) external {
        uint256 length = senderPublicKeys.length;
        if (length == 0) {
            revert SenderPublicKeysEmpty();
        }
        if (length > NUM_SENDERS_IN_BLOCK) {
            revert TooManySenderPublicKeys();
        }
        uint32 blockNumber = blockHashes.getBlockNumber();
        emit PubKeysPosted(blockNumber, senderPublicKeys);

        uint256[NUM_SENDERS_IN_BLOCK] memory paddedKeys;
        for (uint256 i = 0; i < length; i++) {
            paddedKeys[i] = senderPublicKeys[i];
        }
        for (uint256 i = length; i < NUM_SENDERS_IN_BLOCK; i++) {
            paddedKeys[i] = 1;
        }
        bytes32 publicKeysHash = keccak256(abi.encodePacked(paddedKeys));
        bytes32 accountIdsHash = 0;
        _postBlock(
            true,
            txTreeRoot,
            senderFlags,
            publicKeysHash,
            accountIdsHash,
            aggregatedPublicKey,
            aggregatedSignature,
            messagePoint
        );
    }

    function postNonRegistrationBlock(
        bytes32 txTreeRoot,
        bytes16 senderFlags,
        bytes32[2] calldata aggregatedPublicKey,
        bytes32[4] calldata aggregatedSignature,
        bytes32[4] calldata messagePoint,
        bytes32 publicKeysHash,
        bytes calldata senderAccountIds
    ) external {
        uint256 length = senderAccountIds.length;
        if (length == 0) {
            revert SenderAccountIdsEmpty();
        }
        if (length > FULL_ACCOUNT_IDS_BYTES) {
            revert TooManyAccountIds();
        }
        if (length % 5 != 0) {
            revert SenderAccountIdsInvalidLength();
        }
        uint32 blockNumber = blockHashes.getBlockNumber();
        emit AccountIdsPosted(blockNumber, senderAccountIds);
        bytes memory paddedAccountIds = new bytes(FULL_ACCOUNT_IDS_BYTES);
        for (uint256 i = 0; i < length; i++) {
            paddedAccountIds[i] = senderAccountIds[i];
        }
        // Pad with 5-byte representation of 1 (0x0000000001)
        for (uint256 i = length; i < FULL_ACCOUNT_IDS_BYTES; i += 5) {
            paddedAccountIds[i + 4] = 0x01;
        }
        bytes32 accountIdsHash = keccak256(paddedAccountIds);

        _postBlock(
            false,
            txTreeRoot,
            senderFlags,
            publicKeysHash,
            accountIdsHash,
            aggregatedPublicKey,
            aggregatedSignature,
            messagePoint
        );
    }

    function processDeposits(uint256 _lastProcessedDepositId, bytes32[] calldata depositHashes)
        external
        onlyLiquidityContract
    {
        for (uint256 i = 0; i < depositHashes.length; i++) {
            depositTree.deposit(depositHashes[i]);
        }
        lastProcessedDepositId = _lastProcessedDepositId;
        depositTreeRoot = depositTree.getRoot();
        emit DepositsProcessed(lastProcessedDepositId, depositTreeRoot);
    }

    function _postBlock(
        bool isRegistrationBlock,
        bytes32 txTreeRoot,
        bytes16 senderFlags,
        bytes32 publicKeysHash,
        bytes32 accountIdsHash,
        bytes32[2] calldata aggregatedPublicKey,
        bytes32[4] calldata aggregatedSignature,
        bytes32[4] calldata messagePoint
    ) private {
        if (!blockBuilderRegistry.isValidBlockBuilder(_msgSender())) {
            revert InvalidBlockBuilder();
        }
        bool success = PairingLib.pairing(aggregatedPublicKey, aggregatedSignature, messagePoint);
        if (!success) {
            revert PairingCheckFailed();
        }

        bytes32 signatureHash = keccak256(
            abi.encodePacked(
                uint32(isRegistrationBlock ? 1 : 0),
                txTreeRoot,
                senderFlags,
                publicKeysHash,
                accountIdsHash,
                aggregatedPublicKey,
                aggregatedSignature,
                messagePoint
            )
        );

        uint32 blockNumber = blockHashes.getBlockNumber();
        bytes32 prevBlockHash = blockHashes.getPrevHash();
        blockHashes.pushBlockHash(depositTreeRoot, signatureHash);
        blockBuilders.push(_msgSender());
        emit BlockPosted(prevBlockHash, _msgSender(), blockNumber, depositTreeRoot, signatureHash);

        contribution.recordContribution(keccak256("POST_BLOCK"), _msgSender(), 1);
    }

    function getLatestBlockNumber() external view returns (uint32) {
        return blockHashes.getBlockNumber() - 1;
    }

    function getBlockBuilder(uint32 blockNumber) external view returns (address) {
        if (blockNumber >= blockHashes.getBlockNumber()) {
            revert BlockNumberOutOfRange();
        }
        return blockBuilders[blockNumber];
    }

    function getBlockHash(uint32 blockNumber) external view returns (bytes32) {
        if (blockNumber >= blockHashes.getBlockNumber()) {
            revert BlockNumberOutOfRange();
        }
        return blockHashes[blockNumber];
    }

    function _authorizeUpgrade(address) internal override onlyOwner {}
}
