// SPDX-License-Identifier: MIT
pragma solidity 0.8.24;

import {ILiquidity} from "./ILiquidity.sol";
import {IRollup} from "../rollup/Rollup.sol";
import {IContribution} from "../contribution/Contribution.sol";
import {IERC20} from "@openzeppelin/contracts/token/ERC20/IERC20.sol";
import {IERC721} from "@openzeppelin/contracts/token/ERC721/IERC721.sol";
import {IERC1155} from "@openzeppelin/contracts/token/ERC1155/IERC1155.sol";
import {IL1ScrollMessenger} from "@scroll-tech/contracts/L1/IL1ScrollMessenger.sol";

import {TokenData} from "./TokenData.sol";
import {SafeERC20} from "@openzeppelin/contracts/token/ERC20/utils/SafeERC20.sol";
import {UUPSUpgradeable} from "@openzeppelin/contracts-upgradeable/proxy/utils/UUPSUpgradeable.sol";
import {AccessControlUpgradeable} from "@openzeppelin/contracts-upgradeable/access/AccessControlUpgradeable.sol";

import {DepositLib} from "../common/DepositLib.sol";
import {WithdrawalLib} from "../common/WithdrawalLib.sol";
import {DepositQueueLib} from "./lib/DepositQueueLib.sol";

contract Liquidity is TokenData, UUPSUpgradeable, AccessControlUpgradeable, ILiquidity {
    using SafeERC20 for IERC20;
    using DepositLib for DepositLib.Deposit;
    using WithdrawalLib for WithdrawalLib.Withdrawal;
    using DepositQueueLib for DepositQueueLib.DepositQueue;

    /// @notice Analyzer role constant
    bytes32 public constant ANALYZER = keccak256("ANALYZER");

    IContribution private contribution;
    address private rollup;
    address private withdrawal;
    mapping(bytes32 => uint256) private claimableWithdrawals;
    DepositQueueLib.DepositQueue private depositQueue;

    modifier onlyWithdrawal() {
        if (withdrawal == address(0)) {
            revert WithdrawalAddressNotSet();
        }
        if (_msgSender() != withdrawal) {
            revert InvalidWithdrawalAddress();
        }
        _;
    }

    function initialize(
        address _rollup,
        address _withdrawal,
        address _analyzer,
        address _contribution,
        address[] memory initialERC20Tokens
    ) public initializer {
        _grantRole(DEFAULT_ADMIN_ROLE, _msgSender());
        _grantRole(ANALYZER, _analyzer);
        __UUPSUpgradeable_init();
        __TokenData_init(initialERC20Tokens);
        depositQueue.initialize();
        contribution = IContribution(_contribution);
        rollup = _rollup;
        withdrawal = _withdrawal;
    }

    function depositNativeToken(bytes32 recipientSaltHash) external payable {
        if (msg.value == 0) {
            revert InvalidValue();
        }
        uint32 tokenIndex = _getNativeTokenIndex();
        _deposit(_msgSender(), recipientSaltHash, tokenIndex, msg.value);
    }

    function depositERC20(address tokenAddress, bytes32 recipientSaltHash, uint256 amount) external {
        if (amount == 0) {
            revert InvalidAmount();
        }
        IERC20(tokenAddress).safeTransferFrom(_msgSender(), address(this), amount);
        uint32 tokenIndex = _getOrCreateTokenIndex(TokenType.ERC20, tokenAddress, 0);
        _deposit(_msgSender(), recipientSaltHash, tokenIndex, amount);
    }

    function depositERC721(address tokenAddress, bytes32 recipientSaltHash, uint256 tokenId) external {
        IERC721(tokenAddress).transferFrom(_msgSender(), address(this), tokenId);
        uint32 tokenIndex = _getOrCreateTokenIndex(TokenType.ERC721, tokenAddress, tokenId);
        _deposit(_msgSender(), recipientSaltHash, tokenIndex, 1);
    }

    function depositERC1155(address tokenAddress, bytes32 recipientSaltHash, uint256 tokenId, uint256 amount)
        external
    {
        if (amount == 0) {
            revert InvalidAmount();
        }
        IERC1155(tokenAddress).safeTransferFrom(_msgSender(), address(this), tokenId, amount, bytes(""));
        uint32 tokenIndex = _getOrCreateTokenIndex(TokenType.ERC1155, tokenAddress, tokenId);
        _deposit(_msgSender(), recipientSaltHash, tokenIndex, amount);
    }

    function analyzeAndRelayDeposits(uint256 upToDepositId, uint256[] memory rejectDepositIds, uint256 gasLimit)
        external
        payable
        onlyRole(ANALYZER)
    {
        bytes32[] memory depositHashes = depositQueue.analyze(upToDepositId, rejectDepositIds);
        bytes memory message = abi.encodeWithSelector(IRollup.processDeposits.selector, upToDepositId, depositHashes);
        rollup.call(message);
        emit DepositsAnalyzedAndRelayed(upToDepositId, rejectDepositIds, gasLimit, message);
    }

    function claimWithdrawals(WithdrawalLib.Withdrawal[] calldata withdrawals) external {
        for (uint256 i = 0; i < withdrawals.length; i++) {
            WithdrawalLib.Withdrawal memory w = withdrawals[i];
            bytes32 withdrawalHash = w.getHash();
            if (claimableWithdrawals[withdrawalHash] == 0) {
                revert WithdrawalNotFound(withdrawalHash);
            }
            TokenInfo memory tokenInfo = getTokenInfo(w.tokenIndex);
            delete claimableWithdrawals[withdrawalHash];
            _sendToken(tokenInfo.tokenType, tokenInfo.tokenAddress, w.recipient, w.amount, tokenInfo.tokenId);
            emit ClaimedWithdrawal(w.recipient, withdrawalHash);
        }
    }

    function cancelDeposit(uint256 depositId, DepositLib.Deposit memory deposit) external {
        DepositQueueLib.DepositData memory depositData = depositQueue.deleteDeposit(depositId);
        if (depositData.sender != _msgSender()) {
            revert OnlyRecipientCanCancelDeposit();
        }
        if (depositData.depositHash != deposit.getHash()) {
            revert InvalidDepositHash(depositData.depositHash, deposit.getHash());
        }
        TokenInfo memory tokenInfo = getTokenInfo(deposit.tokenIndex);
        _sendToken(tokenInfo.tokenType, tokenInfo.tokenAddress, depositData.sender, deposit.amount, tokenInfo.tokenId);
        emit DepositCanceled(depositId);
    }

    function _deposit(address sender, bytes32 recipientSaltHash, uint32 tokenIndex, uint256 amount) private {
        bytes32 depositHash = DepositLib.Deposit(recipientSaltHash, tokenIndex, amount).getHash();
        uint256 depositId = depositQueue.enqueue(depositHash, sender);
        emit Deposited(depositId, sender, recipientSaltHash, tokenIndex, amount, block.timestamp);
    }

    function _sendToken(TokenType tokenType, address token, address recipient, uint256 amount, uint256 tokenId)
        private
    {
        if (tokenType == TokenType.NATIVE) {
            payable(recipient).transfer(amount);
        } else if (tokenType == TokenType.ERC20) {
            IERC20(token).safeTransfer(recipient, amount);
        } else if (tokenType == TokenType.ERC721) {
            IERC721(token).transferFrom(address(this), recipient, tokenId);
        } else {
            IERC1155(token).safeTransferFrom(address(this), recipient, tokenId, amount, bytes(""));
        }
    }

    function processWithdrawals(
        uint256 _lastProcessedDirectWithdrawalId,
        WithdrawalLib.Withdrawal[] calldata withdrawals,
        uint256 _lastProcessedClaimableWithdrawalId,
        bytes32[] calldata withdrawalHashes
    ) external onlyWithdrawal {
        _processDirectWithdrawals(_lastProcessedDirectWithdrawalId, withdrawals);
        _processClaimableWithdrawals(_lastProcessedClaimableWithdrawalId, withdrawalHashes);
    }

    function _processDirectWithdrawals(
        uint256 _lastProcessedDirectWithdrawalId,
        WithdrawalLib.Withdrawal[] calldata withdrawals
    ) private {
        for (uint256 i = 0; i < withdrawals.length; i++) {
            TokenInfo memory tokenInfo = getTokenInfo(withdrawals[i].tokenIndex);
            _sendToken(
                tokenInfo.tokenType,
                tokenInfo.tokenAddress,
                withdrawals[i].recipient,
                withdrawals[i].amount,
                tokenInfo.tokenId
            );
        }
        if (withdrawals.length > 0) {
            emit DirectWithdrawalsProcessed(_lastProcessedDirectWithdrawalId);
            contribution.recordContribution(keccak256("PROCESS_DIRECT_WITHDRAWALS"), _msgSender(), withdrawals.length);
        }
    }

    function _processClaimableWithdrawals(
        uint256 _lastProcessedClaimableWithdrawalId,
        bytes32[] calldata withdrawalHashes
    ) private {
        for (uint256 i = 0; i < withdrawalHashes.length; i++) {
            claimableWithdrawals[withdrawalHashes[i]] = block.timestamp;
            emit WithdrawalClaimable(withdrawalHashes[i]);
        }
        if (withdrawalHashes.length > 0) {
            emit ClaimableWithdrawalsProcessed(_lastProcessedClaimableWithdrawalId);
            contribution.recordContribution(
                keccak256("PROCESS_CLAIMABLE_WITHDRAWALS"), _msgSender(), withdrawalHashes.length
            );
        }
    }

    function onERC1155Received(address, address, uint256, uint256, bytes calldata) external pure returns (bytes4) {
        return this.onERC1155Received.selector;
    }

    function getDepositData(uint256 depositId) external view returns (DepositQueueLib.DepositData memory) {
        return depositQueue.depositData[depositId];
    }

    function getLastRelayedDepositId() external view returns (uint256) {
        return depositQueue.front - 1;
    }

    function getLastDepositId() external view returns (uint256) {
        return depositQueue.rear - 1;
    }

    function _authorizeUpgrade(address) internal override onlyRole(DEFAULT_ADMIN_ROLE) {}
}
