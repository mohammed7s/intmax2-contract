/* Autogenerated file. Do not edit manually. */
/* tslint:disable */
/* eslint-disable */

import { Contract, Interface, type ContractRunner } from "ethers";
import type {
  IRollup,
  IRollupInterface,
} from "../../../contracts/rollup/IRollup";

const _abi = [
  {
    inputs: [],
    name: "BlockHashAlreadyPosted",
    type: "error",
  },
  {
    inputs: [],
    name: "OnlyLiquidity",
    type: "error",
  },
  {
    inputs: [],
    name: "OnlyScrollMessenger",
    type: "error",
  },
  {
    inputs: [],
    name: "PairingCheckFailed",
    type: "error",
  },
  {
    inputs: [],
    name: "SenderAccountIdsEmpty",
    type: "error",
  },
  {
    inputs: [],
    name: "SenderAccountIdsInvalidLength",
    type: "error",
  },
  {
    inputs: [],
    name: "SenderPublicKeysEmpty",
    type: "error",
  },
  {
    inputs: [],
    name: "TooManyAccountIds",
    type: "error",
  },
  {
    inputs: [],
    name: "TooManySenderPublicKeys",
    type: "error",
  },
  {
    anonymous: false,
    inputs: [
      {
        indexed: true,
        internalType: "uint256",
        name: "blockNumber",
        type: "uint256",
      },
      {
        indexed: false,
        internalType: "bytes",
        name: "accountIds",
        type: "bytes",
      },
    ],
    name: "AccountIdsPosted",
    type: "event",
  },
  {
    anonymous: false,
    inputs: [
      {
        indexed: true,
        internalType: "bytes32",
        name: "prevBlockHash",
        type: "bytes32",
      },
      {
        indexed: true,
        internalType: "address",
        name: "blockBuilder",
        type: "address",
      },
      {
        indexed: false,
        internalType: "uint256",
        name: "blockNumber",
        type: "uint256",
      },
      {
        indexed: false,
        internalType: "bytes32",
        name: "depositTreeRoot",
        type: "bytes32",
      },
      {
        indexed: false,
        internalType: "bytes32",
        name: "signatureHash",
        type: "bytes32",
      },
    ],
    name: "BlockPosted",
    type: "event",
  },
  {
    anonymous: false,
    inputs: [
      {
        indexed: false,
        internalType: "bytes32",
        name: "depositTreeRoot",
        type: "bytes32",
      },
    ],
    name: "DepositsProcessed",
    type: "event",
  },
  {
    anonymous: false,
    inputs: [
      {
        indexed: true,
        internalType: "uint256",
        name: "blockNumber",
        type: "uint256",
      },
      {
        indexed: false,
        internalType: "uint256[]",
        name: "senderPublicKeys",
        type: "uint256[]",
      },
    ],
    name: "PubKeysPosted",
    type: "event",
  },
  {
    inputs: [
      {
        internalType: "uint256",
        name: "blockNumber",
        type: "uint256",
      },
    ],
    name: "getBlockHashAndBuilder",
    outputs: [
      {
        internalType: "bytes32",
        name: "",
        type: "bytes32",
      },
      {
        internalType: "address",
        name: "",
        type: "address",
      },
    ],
    stateMutability: "view",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "bytes32",
        name: "txTreeRoot",
        type: "bytes32",
      },
      {
        internalType: "bytes16",
        name: "senderFlags",
        type: "bytes16",
      },
      {
        internalType: "bytes32[2]",
        name: "aggregatedPublicKey",
        type: "bytes32[2]",
      },
      {
        internalType: "bytes32[4]",
        name: "aggregatedSignature",
        type: "bytes32[4]",
      },
      {
        internalType: "bytes32[4]",
        name: "messagePoint",
        type: "bytes32[4]",
      },
      {
        internalType: "bytes32",
        name: "publicKeysHash",
        type: "bytes32",
      },
      {
        internalType: "bytes",
        name: "senderAccountIds",
        type: "bytes",
      },
    ],
    name: "postNonRegistrationBlock",
    outputs: [],
    stateMutability: "nonpayable",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "bytes32",
        name: "txTreeRoot",
        type: "bytes32",
      },
      {
        internalType: "bytes16",
        name: "senderFlags",
        type: "bytes16",
      },
      {
        internalType: "bytes32[2]",
        name: "aggregatedPublicKey",
        type: "bytes32[2]",
      },
      {
        internalType: "bytes32[4]",
        name: "aggregatedSignature",
        type: "bytes32[4]",
      },
      {
        internalType: "bytes32[4]",
        name: "messagePoint",
        type: "bytes32[4]",
      },
      {
        internalType: "uint256[]",
        name: "senderPublicKeys",
        type: "uint256[]",
      },
    ],
    name: "postRegistrationBlock",
    outputs: [],
    stateMutability: "nonpayable",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "uint256",
        name: "lastProcessedDepositId",
        type: "uint256",
      },
      {
        internalType: "bytes32[]",
        name: "depositHashes",
        type: "bytes32[]",
      },
    ],
    name: "processDeposits",
    outputs: [],
    stateMutability: "nonpayable",
    type: "function",
  },
] as const;

export class IRollup__factory {
  static readonly abi = _abi;
  static createInterface(): IRollupInterface {
    return new Interface(_abi) as IRollupInterface;
  }
  static connect(address: string, runner?: ContractRunner | null): IRollup {
    return new Contract(address, _abi, runner) as unknown as IRollup;
  }
}
