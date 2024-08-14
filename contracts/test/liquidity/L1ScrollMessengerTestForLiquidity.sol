// SPDX-License-Identifier: MIT
pragma solidity 0.8.24;

contract L1ScrollMessengerTestForLiquidity {
	address public to;
	uint256 public value;
	bytes public message;
	uint256 public gasLimit;
	address public sender;
	uint256 public msgValue;

	address private xDomainMessageSenderAddress;

	function sendMessage(
		address _to,
		uint256 _value,
		bytes calldata _message,
		uint256 _gasLimit,
		address _sender
	) external payable {
		to = _to;
		value = _value;
		message = _message;
		gasLimit = _gasLimit;
		sender = _sender;
		msgValue = msg.value;
	}

	function setXDomainMessageSender(address _xDomainMessageSender) external {
		xDomainMessageSenderAddress = _xDomainMessageSender;
	}

	function xDomainMessageSender() external view returns (address) {
		return xDomainMessageSenderAddress;
	}
}
