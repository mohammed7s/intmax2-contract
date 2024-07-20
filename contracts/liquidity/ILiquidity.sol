// SPDX-License-Identifier: MIT
pragma solidity 0.8.24;

import {DepositLib} from "../common/DepositLib.sol";
import {WithdrawalLib} from "../common/WithdrawalLib.sol";

interface ILiquidity {
	error OnlyRecipientCanCancelDeposit();
	error InvalidDepositHash(bytes32 depositDataHash, bytes32 calculatedHash);
	error SenderIsNotScrollMessenger();
	error WithdrawalAddressNotSet();
	error InvalidWithdrawalAddress();
	error WithdrawalNotFound(bytes32 withdrawalHash);
	error InvalidAmount();
	error InvalidValue();

	event Deposited(
		uint256 indexed depositId,
		address indexed sender,
		bytes32 recipientSaltHash,
		uint32 tokenIndex,
		uint256 amount,
		uint256 requestedAt
	);

	event DepositsAnalyzed(
		uint256 indexed lastAnalyzedDepositId,
		uint256[] rejectedIndices
	);

	event DepositCanceled(uint256 indexed depositId);

	event DepositsRelayed(
		uint256 indexed lastRelayedDepositId,
		uint256 gasLimit,
		bytes message
	);

	event DepositsReplayed(
		uint32 newGasLimit,
		uint256 messageNonce,
		bytes message
	);

	event WithdrawalClaimable(bytes32 indexed withdrawalHash);

	event DirectWithdrawalsProcessed(
		uint256 indexed lastProcessedDirectWithdrawalId
	);

	event ClaimableWithdrawalsProcessed(
		uint256 indexed lastProcessedClaimableWithdrawalId
	);

	function depositETH(bytes32 recipientSaltHash) external payable;

	function depositERC20(
		address tokenAddress,
		bytes32 recipientSaltHash,
		uint256 amount
	) external;

	function depositERC721(
		address tokenAddress,
		bytes32 recipientSaltHash,
		uint256 tokenId
	) external;

	function depositERC1155(
		address tokenAddress,
		bytes32 recipientSaltHash,
		uint256 tokenId,
		uint256 amount
	) external;

	/// @notice Trusted nodes submit the IDs of deposits that do not meet AML standards by this method.
	/// @dev upToDepositId specifies the last deposit id that have been analyzed. It must be greater than lastAnalyzedDeposit and less than or equal to the latest Deposit ID.
	/// @dev rejectDepositIndices must be greater than lastAnalyzedDeposit and less than or equal to upToDepositId.
	/// @param upToDepositId The upper limit of the Deposit ID that has been analyzed. It must be greater than lastAnalyzedDeposit and less than or equal to the latest Deposit ID.
	/// @param rejectDepositIndices An array of indices of deposits to exclude. These indices must be greater than lastAnalyzedDeposit and less than or equal to upToDepositId.
	function analyzeDeposits(
		uint256 upToDepositId,
		uint256[] memory rejectDepositIndices
	) external;

	/**
	 * @notice Relays deposits that have already been analyzed.
	 * @dev The `gasLimit` must be set according to the number of deposits. If the gas limit is too low, the L2 Rollup may not be able to execute.
	 * @dev The messaging fee calculated from the `gasLimit` must be sent as `msg.value`. Any excess amount will be refunded to the caller.
	 *      However, if the `gasLimit` is set higher than the actual gas consumed, the excess messaging fee will still be charged. There will be no refund for the unused gas.
	 * @dev Note: If the transaction fails on the L2 Rollup due to insufficient gas, it can be retried using `replayDeposits`.
	 * @param lastProcessedDepositId The ID of the last deposit to be relayed.
	 * @param gasLimit The gas limit for the transaction.
	 */
	function relayDeposits(
		uint256 lastProcessedDepositId,
		uint256 gasLimit
	) external payable;

	/**
	 * @notice Retries sending a message to L2 that has been previously sent (and presumably failed).
	 * @dev The `messageNonce` can be obtained from the `SentMessage` event emitted by `l1ScrollMessenger` during `relayDeposits` execution.
	 * @dev Security considerations:
	 *      - If this function attempts to send a message that has never been sent before, `l1ScrollMessenger` will revert.
	 *      - The L2 ScrollMessenger ensures that even if multiple attempts are made, only one will succeed.
	 * @param message The message to be sent to L2.
	 * @param newGasLimit The new gas limit for the message.
	 * @param messageNonce The nonce of the message to be retried.
	 */
	function replayDeposits(
		bytes memory message,
		uint32 newGasLimit,
		uint256 messageNonce
	) external payable;

	function processWithdrawals(
		uint256 lastProcessedDirectWithdrawalId,
		WithdrawalLib.Withdrawal[] calldata withdrawals,
		uint256 lastProcessedClaimableWithdrawalId,
		bytes32[] calldata withdrawalHahes
	) external;

	function processDirectWithdrawals(
		uint256 lastProcessedDirectWithdrawalId,
		WithdrawalLib.Withdrawal[] calldata withdrawals
	) external;

	function processClaimableWithdrawals(
		uint256 lastProcessedClaimableWithdrawalId,
		bytes32[] calldata withdrawalHahes
	) external;

	function claimWithdrawals(
		WithdrawalLib.Withdrawal[] calldata withdrawals
	) external;
}
