/* Autogenerated file. Do not edit manually. */
/* tslint:disable */
/* eslint-disable */
import {
  Contract,
  ContractFactory,
  ContractTransactionResponse,
  Interface,
} from "ethers";
import type { Signer, ContractDeployTransaction, ContractRunner } from "ethers";
import type { NonPayableOverrides } from "../../../common";
import type {
  BlockBuilderRegistry,
  BlockBuilderRegistryInterface,
} from "../../../contracts/block-builder-registry/BlockBuilderRegistry";

const _abi = [
  {
    inputs: [
      {
        internalType: "address",
        name: "target",
        type: "address",
      },
    ],
    name: "AddressEmptyCode",
    type: "error",
  },
  {
    inputs: [],
    name: "BlockBuilderNotFound",
    type: "error",
  },
  {
    inputs: [],
    name: "CannotUnstakeWithinChallengeDuration",
    type: "error",
  },
  {
    inputs: [
      {
        internalType: "address",
        name: "implementation",
        type: "address",
      },
    ],
    name: "ERC1967InvalidImplementation",
    type: "error",
  },
  {
    inputs: [],
    name: "ERC1967NonPayable",
    type: "error",
  },
  {
    inputs: [],
    name: "FailedInnerCall",
    type: "error",
  },
  {
    inputs: [
      {
        internalType: "address",
        name: "to",
        type: "address",
      },
      {
        internalType: "uint256",
        name: "amount",
        type: "uint256",
      },
    ],
    name: "FailedTransfer",
    type: "error",
  },
  {
    inputs: [],
    name: "InsufficientStakeAmount",
    type: "error",
  },
  {
    inputs: [],
    name: "InvalidInitialization",
    type: "error",
  },
  {
    inputs: [],
    name: "NotInitializing",
    type: "error",
  },
  {
    inputs: [],
    name: "OnlyRollupContract",
    type: "error",
  },
  {
    inputs: [
      {
        internalType: "address",
        name: "owner",
        type: "address",
      },
    ],
    name: "OwnableInvalidOwner",
    type: "error",
  },
  {
    inputs: [
      {
        internalType: "address",
        name: "account",
        type: "address",
      },
    ],
    name: "OwnableUnauthorizedAccount",
    type: "error",
  },
  {
    inputs: [],
    name: "UUPSUnauthorizedCallContext",
    type: "error",
  },
  {
    inputs: [
      {
        internalType: "bytes32",
        name: "slot",
        type: "bytes32",
      },
    ],
    name: "UUPSUnsupportedProxiableUUID",
    type: "error",
  },
  {
    anonymous: false,
    inputs: [
      {
        indexed: true,
        internalType: "address",
        name: "blockBuilder",
        type: "address",
      },
      {
        indexed: true,
        internalType: "address",
        name: "challenger",
        type: "address",
      },
    ],
    name: "BlockBuilderSlashed",
    type: "event",
  },
  {
    anonymous: false,
    inputs: [
      {
        indexed: true,
        internalType: "address",
        name: "blockBuilder",
        type: "address",
      },
    ],
    name: "BlockBuilderStopped",
    type: "event",
  },
  {
    anonymous: false,
    inputs: [
      {
        indexed: true,
        internalType: "address",
        name: "blockBuilder",
        type: "address",
      },
      {
        indexed: false,
        internalType: "string",
        name: "url",
        type: "string",
      },
      {
        indexed: false,
        internalType: "uint256",
        name: "stakeAmount",
        type: "uint256",
      },
    ],
    name: "BlockBuilderUpdated",
    type: "event",
  },
  {
    anonymous: false,
    inputs: [
      {
        indexed: false,
        internalType: "uint64",
        name: "version",
        type: "uint64",
      },
    ],
    name: "Initialized",
    type: "event",
  },
  {
    anonymous: false,
    inputs: [
      {
        indexed: true,
        internalType: "address",
        name: "previousOwner",
        type: "address",
      },
      {
        indexed: true,
        internalType: "address",
        name: "newOwner",
        type: "address",
      },
    ],
    name: "OwnershipTransferred",
    type: "event",
  },
  {
    anonymous: false,
    inputs: [
      {
        indexed: true,
        internalType: "address",
        name: "implementation",
        type: "address",
      },
    ],
    name: "Upgraded",
    type: "event",
  },
  {
    inputs: [],
    name: "UPGRADE_INTERFACE_VERSION",
    outputs: [
      {
        internalType: "string",
        name: "",
        type: "string",
      },
    ],
    stateMutability: "view",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "address",
        name: "",
        type: "address",
      },
    ],
    name: "blockBuilders",
    outputs: [
      {
        internalType: "string",
        name: "blockBuilderUrl",
        type: "string",
      },
      {
        internalType: "uint256",
        name: "stakeAmount",
        type: "uint256",
      },
      {
        internalType: "uint256",
        name: "stopTime",
        type: "uint256",
      },
      {
        internalType: "uint256",
        name: "numSlashes",
        type: "uint256",
      },
      {
        internalType: "bool",
        name: "isValid",
        type: "bool",
      },
    ],
    stateMutability: "view",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "address",
        name: "_rollup",
        type: "address",
      },
    ],
    name: "initialize",
    outputs: [],
    stateMutability: "nonpayable",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "address",
        name: "blockBuilder",
        type: "address",
      },
    ],
    name: "isValidBlockBuilder",
    outputs: [
      {
        internalType: "bool",
        name: "",
        type: "bool",
      },
    ],
    stateMutability: "view",
    type: "function",
  },
  {
    inputs: [],
    name: "owner",
    outputs: [
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
    inputs: [],
    name: "proxiableUUID",
    outputs: [
      {
        internalType: "bytes32",
        name: "",
        type: "bytes32",
      },
    ],
    stateMutability: "view",
    type: "function",
  },
  {
    inputs: [],
    name: "renounceOwnership",
    outputs: [],
    stateMutability: "nonpayable",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "address",
        name: "_burnAddress",
        type: "address",
      },
    ],
    name: "setBurnAddress",
    outputs: [],
    stateMutability: "nonpayable",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "address",
        name: "blockBuilder",
        type: "address",
      },
      {
        internalType: "address",
        name: "challenger",
        type: "address",
      },
    ],
    name: "slashBlockBuilder",
    outputs: [],
    stateMutability: "nonpayable",
    type: "function",
  },
  {
    inputs: [],
    name: "stopBlockBuilder",
    outputs: [],
    stateMutability: "nonpayable",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "address",
        name: "newOwner",
        type: "address",
      },
    ],
    name: "transferOwnership",
    outputs: [],
    stateMutability: "nonpayable",
    type: "function",
  },
  {
    inputs: [],
    name: "unstake",
    outputs: [],
    stateMutability: "nonpayable",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "string",
        name: "url",
        type: "string",
      },
    ],
    name: "updateBlockBuilder",
    outputs: [],
    stateMutability: "payable",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "address",
        name: "newImplementation",
        type: "address",
      },
      {
        internalType: "bytes",
        name: "data",
        type: "bytes",
      },
    ],
    name: "upgradeToAndCall",
    outputs: [],
    stateMutability: "payable",
    type: "function",
  },
] as const;

const _bytecode =
  "0x60a06040523073ffffffffffffffffffffffffffffffffffffffff1660809073ffffffffffffffffffffffffffffffffffffffff1681525034801561004357600080fd5b50608051612ba161006d60003960008181611862015281816118b70152611a720152612ba16000f3fe6080604052600436106100dd5760003560e01c80636a5387a81161007f5780638da5cb5b116100595780638da5cb5b1461025a578063ad3cb1cc14610285578063c4d66de8146102b0578063f2fde38b146102d9576100dd565b80636a5387a8146101dd578063715018a61461021a578063750d38cb14610231576100dd565b80634f1ef286116100bb5780634f1ef2861461013e578063513348511461015a57806352d1902d1461017157806363cebe621461019c576100dd565b80630f36c638146100e25780632def6620146100fe5780634b0e721614610115575b600080fd5b6100fc60048036038101906100f79190612228565b610302565b005b34801561010a57600080fd5b506101136105a1565b005b34801561012157600080fd5b5061013c600480360381019061013791906122cf565b61096c565b005b6101586004803603810190610153919061239d565b6109b8565b005b34801561016657600080fd5b5061016f6109d7565b005b34801561017d57600080fd5b50610186610d5e565b6040516101939190612412565b60405180910390f35b3480156101a857600080fd5b506101c360048036038101906101be91906122cf565b610d91565b6040516101d49594939291906124e0565b60405180910390f35b3480156101e957600080fd5b5061020460048036038101906101ff91906122cf565b610e5c565b604051610211919061253a565b60405180910390f35b34801561022657600080fd5b5061022f610eb5565b005b34801561023d57600080fd5b5061025860048036038101906102539190612555565b610ec9565b005b34801561026657600080fd5b5061026f6113cd565b60405161027c91906125a4565b60405180910390f35b34801561029157600080fd5b5061029a611405565b6040516102a791906125bf565b60405180910390f35b3480156102bc57600080fd5b506102d760048036038101906102d291906122cf565b61143e565b005b3480156102e557600080fd5b5061030060048036038101906102fb91906122cf565b61165f565b005b6000600260006103106116e5565b73ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff1681526020019081526020016000206040518060a001604052908160008201805461036590612610565b80601f016020809104026020016040519081016040528092919081815260200182805461039190612610565b80156103de5780601f106103b3576101008083540402835291602001916103de565b820191906000526020600020905b8154815290600101906020018083116103c157829003601f168201915b505050505081526020016001820154815260200160028201548152602001600382015481526020016004820160009054906101000a900460ff161515151581525050905060003482602001516104349190612670565b905067016345785d8a0000811015610478576040517fa8ded35f00000000000000000000000000000000000000000000000000000000815260040160405180910390fd5b828260000181905250808260200181815250506000826040018181525050600182608001901515908115158152505081600260006104b46116e5565b73ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff16815260200190815260200160002060008201518160000190816105039190612850565b5060208201518160010155604082015181600201556060820151816003015560808201518160040160006101000a81548160ff02191690831515021790555090505061054d6116e5565b73ffffffffffffffffffffffffffffffffffffffff167f2e6a62283ed761c959aaa67da7e98c90c08118cadc35aae3c7b9d0b258a544058483604051610594929190612922565b60405180910390a2505050565b600015156106c9600260006105b46116e5565b73ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff1681526020019081526020016000206040518060a001604052908160008201805461060990612610565b80601f016020809104026020016040519081016040528092919081815260200182805461063590612610565b80156106825780601f1061065757610100808354040283529160200191610682565b820191906000526020600020905b81548152906001019060200180831161066557829003601f168201915b505050505081526020016001820154815260200160028201548152602001600382015481526020016004820160009054906101000a900460ff1615151515815250506116ed565b151503610702576040517f84b90bca00000000000000000000000000000000000000000000000000000000815260040160405180910390fd5b6000600260006107106116e5565b73ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff1681526020019081526020016000206040518060a001604052908160008201805461076590612610565b80601f016020809104026020016040519081016040528092919081815260200182805461079190612610565b80156107de5780601f106107b3576101008083540402835291602001916107de565b820191906000526020600020905b8154815290600101906020018083116107c157829003601f168201915b505050505081526020016001820154815260200160028201548152602001600382015481526020016004820160009054906101000a900460ff16151515158152505090506000151561082f826116fe565b151503610868576040517feb533ee800000000000000000000000000000000000000000000000000000000815260040160405180910390fd5b600081600001519050600082602001519050600260006108866116e5565b73ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff168152602001908152602001600020600080820160006108d19190612071565b6001820160009055600282016000905560038201600090556004820160006101000a81549060ff0219169055505061091061090a6116e5565b8261171d565b6109186116e5565b73ffffffffffffffffffffffffffffffffffffffff167f2e6a62283ed761c959aaa67da7e98c90c08118cadc35aae3c7b9d0b258a54405838360405161095f929190612922565b60405180910390a2505050565b6109746117d9565b80600160006101000a81548173ffffffffffffffffffffffffffffffffffffffff021916908373ffffffffffffffffffffffffffffffffffffffff16021790555050565b6109c0611860565b6109c982611946565b6109d38282611951565b5050565b60001515610aff600260006109ea6116e5565b73ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff1681526020019081526020016000206040518060a0016040529081600082018054610a3f90612610565b80601f0160208091040260200160405190810160405280929190818152602001828054610a6b90612610565b8015610ab85780601f10610a8d57610100808354040283529160200191610ab8565b820191906000526020600020905b815481529060010190602001808311610a9b57829003601f168201915b505050505081526020016001820154815260200160028201548152602001600382015481526020016004820160009054906101000a900460ff1615151515815250506116ed565b151503610b38576040517f84b90bca00000000000000000000000000000000000000000000000000000000815260040160405180910390fd5b600060026000610b466116e5565b73ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff1681526020019081526020016000206040518060a0016040529081600082018054610b9b90612610565b80601f0160208091040260200160405190810160405280929190818152602001828054610bc790612610565b8015610c145780601f10610be957610100808354040283529160200191610c14565b820191906000526020600020905b815481529060010190602001808311610bf757829003601f168201915b505050505081526020016001820154815260200160028201548152602001600382015481526020016004820160009054906101000a900460ff16151515158152505090504281604001818152505060008160800190151590811515815250508060026000610c806116e5565b73ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff1681526020019081526020016000206000820151816000019081610ccf9190612850565b5060208201518160010155604082015181600201556060820151816003015560808201518160040160006101000a81548160ff021916908315150217905550905050610d196116e5565b73ffffffffffffffffffffffffffffffffffffffff167f61003f58033bb3da9d31643101595ff5f23aead3167e68857530f74c4430582b60405160405180910390a250565b6000610d68611a70565b7f360894a13ba1a3210667c828492db98dca3e2076cc3735a920a3ca505d382bbc60001b905090565b6002602052806000526040600020600091509050806000018054610db490612610565b80601f0160208091040260200160405190810160405280929190818152602001828054610de090612610565b8015610e2d5780601f10610e0257610100808354040283529160200191610e2d565b820191906000526020600020905b815481529060010190602001808311610e1057829003601f168201915b5050505050908060010154908060020154908060030154908060040160009054906101000a900460ff16905085565b6000600260008373ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff16815260200190815260200160002060040160009054906101000a900460ff169050919050565b610ebd6117d9565b610ec76000611af7565b565b60008054906101000a900473ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff16610f086116e5565b73ffffffffffffffffffffffffffffffffffffffff1614610f55576040517fbc7b62d900000000000000000000000000000000000000000000000000000000815260040160405180910390fd5b6000600260008473ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff1681526020019081526020016000206040518060a0016040529081600082018054610fb190612610565b80601f0160208091040260200160405190810160405280929190818152602001828054610fdd90612610565b801561102a5780601f10610fff5761010080835404028352916020019161102a565b820191906000526020600020905b81548152906001019060200180831161100d57829003601f168201915b505050505081526020016001820154815260200160028201548152602001600382015481526020016004820160009054906101000a900460ff16151515158152505090506000151561107b826116ed565b1515036110b4576040517f84b90bca00000000000000000000000000000000000000000000000000000000815260040160405180910390fd5b6001816060018181516110c79190612670565b915081815250506110d781611bce565b1580156110e5575080608001515b156110fc5760008160800190151590811515815250505b8173ffffffffffffffffffffffffffffffffffffffff168373ffffffffffffffffffffffffffffffffffffffff167fbebe1ecc1c646675c6bd0423039fd8cdde200d8e4dac2b345abdc23bf8d97a6960405160405180910390a367016345785d8a0000816020015110156112b157600081602001519050600082602001818152505081600260008673ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff16815260200190815260200160002060008201518160000190816111d39190612850565b5060208201518160010155604082015181600201556060820151816003015560808201518160040160006101000a81548160ff021916908315150217905550905050600267016345785d8a000061122a9190612981565b8110156112405761123b838261171d565b6112aa565b61125e83600267016345785d8a00006112599190612981565b61171d565b6112a9600160009054906101000a900473ffffffffffffffffffffffffffffffffffffffff16600267016345785d8a00006112999190612981565b836112a491906129b2565b61171d565b5b50506113c9565b67016345785d8a0000816020018181516112cb91906129b2565b9150818152505080600260008573ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff16815260200190815260200160002060008201518160000190816113279190612850565b5060208201518160010155604082015181600201556060820151816003015560808201518160040160006101000a81548160ff02191690831515021790555090505061138782600267016345785d8a00006113829190612981565b61171d565b6113c7600160009054906101000a900473ffffffffffffffffffffffffffffffffffffffff16600267016345785d8a00006113c29190612981565b61171d565b505b5050565b6000806113d8611be7565b90508060000160009054906101000a900473ffffffffffffffffffffffffffffffffffffffff1691505090565b6040518060400160405280600581526020017f352e302e3000000000000000000000000000000000000000000000000000000081525081565b6000611448611c0f565b905060008160000160089054906101000a900460ff1615905060008260000160009054906101000a900467ffffffffffffffff1690506000808267ffffffffffffffff161480156114965750825b9050600060018367ffffffffffffffff161480156114cb575060003073ffffffffffffffffffffffffffffffffffffffff163b145b9050811580156114d9575080155b15611510576040517ff92ee8a900000000000000000000000000000000000000000000000000000000815260040160405180910390fd5b60018560000160006101000a81548167ffffffffffffffff021916908367ffffffffffffffff16021790555083156115605760018560000160086101000a81548160ff0219169083151502179055505b61157061156b6116e5565b611c37565b611578611c4b565b856000806101000a81548173ffffffffffffffffffffffffffffffffffffffff021916908373ffffffffffffffffffffffffffffffffffffffff16021790555061dead600160006101000a81548173ffffffffffffffffffffffffffffffffffffffff021916908373ffffffffffffffffffffffffffffffffffffffff16021790555083156116575760008560000160086101000a81548160ff0219169083151502179055507fc7f505b2f371ae2175ee4913f4499e1f2633a7b5936321eed1cdaeb6115181d2600160405161164e9190612a35565b60405180910390a15b505050505050565b6116676117d9565b600073ffffffffffffffffffffffffffffffffffffffff168173ffffffffffffffffffffffffffffffffffffffff16036116d95760006040517f1e4fbdf70000000000000000000000000000000000000000000000000000000081526004016116d091906125a4565b60405180910390fd5b6116e281611af7565b50565b600033905090565b600080826020015114159050919050565b60006201518082604001514261171491906129b2565b10159050919050565b60008273ffffffffffffffffffffffffffffffffffffffff168260405161174390612a81565b60006040518083038185875af1925050503d8060008114611780576040519150601f19603f3d011682016040523d82523d6000602084013e611785565b606091505b5050905060001515811515036117d45782826040517f3506b32c0000000000000000000000000000000000000000000000000000000081526004016117cb929190612a96565b60405180910390fd5b505050565b6117e16116e5565b73ffffffffffffffffffffffffffffffffffffffff166117ff6113cd565b73ffffffffffffffffffffffffffffffffffffffff161461185e576118226116e5565b6040517f118cdaa700000000000000000000000000000000000000000000000000000000815260040161185591906125a4565b60405180910390fd5b565b7f000000000000000000000000000000000000000000000000000000000000000073ffffffffffffffffffffffffffffffffffffffff163073ffffffffffffffffffffffffffffffffffffffff16148061190d57507f000000000000000000000000000000000000000000000000000000000000000073ffffffffffffffffffffffffffffffffffffffff166118f4611c55565b73ffffffffffffffffffffffffffffffffffffffff1614155b15611944576040517fe07c8dba00000000000000000000000000000000000000000000000000000000815260040160405180910390fd5b565b61194e6117d9565b50565b8173ffffffffffffffffffffffffffffffffffffffff166352d1902d6040518163ffffffff1660e01b8152600401602060405180830381865afa9250505080156119b957506040513d601f19601f820116820180604052508101906119b69190612aeb565b60015b6119fa57816040517f4c9c8ce30000000000000000000000000000000000000000000000000000000081526004016119f191906125a4565b60405180910390fd5b7f360894a13ba1a3210667c828492db98dca3e2076cc3735a920a3ca505d382bbc60001b8114611a6157806040517faa1d49a4000000000000000000000000000000000000000000000000000000008152600401611a589190612412565b60405180910390fd5b611a6b8383611cac565b505050565b7f000000000000000000000000000000000000000000000000000000000000000073ffffffffffffffffffffffffffffffffffffffff163073ffffffffffffffffffffffffffffffffffffffff1614611af5576040517fe07c8dba00000000000000000000000000000000000000000000000000000000815260040160405180910390fd5b565b6000611b01611be7565b905060008160000160009054906101000a900473ffffffffffffffffffffffffffffffffffffffff169050828260000160006101000a81548173ffffffffffffffffffffffffffffffffffffffff021916908373ffffffffffffffffffffffffffffffffffffffff1602179055508273ffffffffffffffffffffffffffffffffffffffff168173ffffffffffffffffffffffffffffffffffffffff167f8be0079c531659141344cd1fd0a4f28419497f9722a3daafe3b4186f6b6457e060405160405180910390a3505050565b600067016345785d8a0000826020015110159050919050565b60007f9016d09d72d40fdae2fd8ceac6b6234c7706214fd39c1cd1e609a0528c199300905090565b60007ff0c57e16840df040f15088dc2f81fe391c3923bec73e23a9662efc9c229c6a00905090565b611c3f611d1f565b611c4881611d5f565b50565b611c53611d1f565b565b6000611c837f360894a13ba1a3210667c828492db98dca3e2076cc3735a920a3ca505d382bbc60001b611de5565b60000160009054906101000a900473ffffffffffffffffffffffffffffffffffffffff16905090565b611cb582611def565b8173ffffffffffffffffffffffffffffffffffffffff167fbc7cd75a20ee27fd9adebab32041f755214dbc6bffa90cc0225b39da2e5c2d3b60405160405180910390a2600081511115611d1257611d0c8282611ebc565b50611d1b565b611d1a611f40565b5b5050565b611d27611f7d565b611d5d576040517fd7e6bcf800000000000000000000000000000000000000000000000000000000815260040160405180910390fd5b565b611d67611d1f565b600073ffffffffffffffffffffffffffffffffffffffff168173ffffffffffffffffffffffffffffffffffffffff1603611dd95760006040517f1e4fbdf7000000000000000000000000000000000000000000000000000000008152600401611dd091906125a4565b60405180910390fd5b611de281611af7565b50565b6000819050919050565b60008173ffffffffffffffffffffffffffffffffffffffff163b03611e4b57806040517f4c9c8ce3000000000000000000000000000000000000000000000000000000008152600401611e4291906125a4565b60405180910390fd5b80611e787f360894a13ba1a3210667c828492db98dca3e2076cc3735a920a3ca505d382bbc60001b611de5565b60000160006101000a81548173ffffffffffffffffffffffffffffffffffffffff021916908373ffffffffffffffffffffffffffffffffffffffff16021790555050565b60606000808473ffffffffffffffffffffffffffffffffffffffff1684604051611ee69190612b54565b600060405180830381855af49150503d8060008114611f21576040519150601f19603f3d011682016040523d82523d6000602084013e611f26565b606091505b5091509150611f36858383611f9d565b9250505092915050565b6000341115611f7b576040517fb398979f00000000000000000000000000000000000000000000000000000000815260040160405180910390fd5b565b6000611f87611c0f565b60000160089054906101000a900460ff16905090565b606082611fb257611fad8261202c565b612024565b60008251148015611fda575060008473ffffffffffffffffffffffffffffffffffffffff163b145b1561201c57836040517f9996b31500000000000000000000000000000000000000000000000000000000815260040161201391906125a4565b60405180910390fd5b819050612025565b5b9392505050565b60008151111561203f5780518082602001fd5b6040517f1425ea4200000000000000000000000000000000000000000000000000000000815260040160405180910390fd5b50805461207d90612610565b6000825580601f1061208f57506120ae565b601f0160209004906000526020600020908101906120ad91906120b1565b5b50565b5b808211156120ca5760008160009055506001016120b2565b5090565b6000604051905090565b600080fd5b600080fd5b600080fd5b600080fd5b6000601f19601f8301169050919050565b7f4e487b7100000000000000000000000000000000000000000000000000000000600052604160045260246000fd5b612135826120ec565b810181811067ffffffffffffffff82111715612154576121536120fd565b5b80604052505050565b60006121676120ce565b9050612173828261212c565b919050565b600067ffffffffffffffff821115612193576121926120fd565b5b61219c826120ec565b9050602081019050919050565b82818337600083830152505050565b60006121cb6121c684612178565b61215d565b9050828152602081018484840111156121e7576121e66120e7565b5b6121f28482856121a9565b509392505050565b600082601f83011261220f5761220e6120e2565b5b813561221f8482602086016121b8565b91505092915050565b60006020828403121561223e5761223d6120d8565b5b600082013567ffffffffffffffff81111561225c5761225b6120dd565b5b612268848285016121fa565b91505092915050565b600073ffffffffffffffffffffffffffffffffffffffff82169050919050565b600061229c82612271565b9050919050565b6122ac81612291565b81146122b757600080fd5b50565b6000813590506122c9816122a3565b92915050565b6000602082840312156122e5576122e46120d8565b5b60006122f3848285016122ba565b91505092915050565b600067ffffffffffffffff821115612317576123166120fd565b5b612320826120ec565b9050602081019050919050565b600061234061233b846122fc565b61215d565b90508281526020810184848401111561235c5761235b6120e7565b5b6123678482856121a9565b509392505050565b600082601f830112612384576123836120e2565b5b813561239484826020860161232d565b91505092915050565b600080604083850312156123b4576123b36120d8565b5b60006123c2858286016122ba565b925050602083013567ffffffffffffffff8111156123e3576123e26120dd565b5b6123ef8582860161236f565b9150509250929050565b6000819050919050565b61240c816123f9565b82525050565b60006020820190506124276000830184612403565b92915050565b600081519050919050565b600082825260208201905092915050565b60005b8381101561246757808201518184015260208101905061244c565b60008484015250505050565b600061247e8261242d565b6124888185612438565b9350612498818560208601612449565b6124a1816120ec565b840191505092915050565b6000819050919050565b6124bf816124ac565b82525050565b60008115159050919050565b6124da816124c5565b82525050565b600060a08201905081810360008301526124fa8188612473565b905061250960208301876124b6565b61251660408301866124b6565b61252360608301856124b6565b61253060808301846124d1565b9695505050505050565b600060208201905061254f60008301846124d1565b92915050565b6000806040838503121561256c5761256b6120d8565b5b600061257a858286016122ba565b925050602061258b858286016122ba565b9150509250929050565b61259e81612291565b82525050565b60006020820190506125b96000830184612595565b92915050565b600060208201905081810360008301526125d98184612473565b905092915050565b7f4e487b7100000000000000000000000000000000000000000000000000000000600052602260045260246000fd5b6000600282049050600182168061262857607f821691505b60208210810361263b5761263a6125e1565b5b50919050565b7f4e487b7100000000000000000000000000000000000000000000000000000000600052601160045260246000fd5b600061267b826124ac565b9150612686836124ac565b925082820190508082111561269e5761269d612641565b5b92915050565b60008190508160005260206000209050919050565b60006020601f8301049050919050565b600082821b905092915050565b6000600883026127067fffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff826126c9565b61271086836126c9565b95508019841693508086168417925050509392505050565b6000819050919050565b600061274d612748612743846124ac565b612728565b6124ac565b9050919050565b6000819050919050565b61276783612732565b61277b61277382612754565b8484546126d6565b825550505050565b600090565b612790612783565b61279b81848461275e565b505050565b5b818110156127bf576127b4600082612788565b6001810190506127a1565b5050565b601f821115612804576127d5816126a4565b6127de846126b9565b810160208510156127ed578190505b6128016127f9856126b9565b8301826127a0565b50505b505050565b600082821c905092915050565b600061282760001984600802612809565b1980831691505092915050565b60006128408383612816565b9150826002028217905092915050565b6128598261242d565b67ffffffffffffffff811115612872576128716120fd565b5b61287c8254612610565b6128878282856127c3565b600060209050601f8311600181146128ba57600084156128a8578287015190505b6128b28582612834565b86555061291a565b601f1984166128c8866126a4565b60005b828110156128f0578489015182556001820191506020850194506020810190506128cb565b8683101561290d5784890151612909601f891682612816565b8355505b6001600288020188555050505b505050505050565b6000604082019050818103600083015261293c8185612473565b905061294b60208301846124b6565b9392505050565b7f4e487b7100000000000000000000000000000000000000000000000000000000600052601260045260246000fd5b600061298c826124ac565b9150612997836124ac565b9250826129a7576129a6612952565b5b828204905092915050565b60006129bd826124ac565b91506129c8836124ac565b92508282039050818111156129e0576129df612641565b5b92915050565b6000819050919050565b600067ffffffffffffffff82169050919050565b6000612a1f612a1a612a15846129e6565b612728565b6129f0565b9050919050565b612a2f81612a04565b82525050565b6000602082019050612a4a6000830184612a26565b92915050565b600081905092915050565b50565b6000612a6b600083612a50565b9150612a7682612a5b565b600082019050919050565b6000612a8c82612a5e565b9150819050919050565b6000604082019050612aab6000830185612595565b612ab860208301846124b6565b9392505050565b612ac8816123f9565b8114612ad357600080fd5b50565b600081519050612ae581612abf565b92915050565b600060208284031215612b0157612b006120d8565b5b6000612b0f84828501612ad6565b91505092915050565b600081519050919050565b6000612b2e82612b18565b612b388185612a50565b9350612b48818560208601612449565b80840191505092915050565b6000612b608284612b23565b91508190509291505056fea2646970667358221220cee01ae38fb48486df9c12a20d26581cd06151c3f5b890d4dbf10a2848ff85ea64736f6c63430008180033";

type BlockBuilderRegistryConstructorParams =
  | [signer?: Signer]
  | ConstructorParameters<typeof ContractFactory>;

const isSuperArgs = (
  xs: BlockBuilderRegistryConstructorParams
): xs is ConstructorParameters<typeof ContractFactory> => xs.length > 1;

export class BlockBuilderRegistry__factory extends ContractFactory {
  constructor(...args: BlockBuilderRegistryConstructorParams) {
    if (isSuperArgs(args)) {
      super(...args);
    } else {
      super(_abi, _bytecode, args[0]);
    }
  }

  override getDeployTransaction(
    overrides?: NonPayableOverrides & { from?: string }
  ): Promise<ContractDeployTransaction> {
    return super.getDeployTransaction(overrides || {});
  }
  override deploy(overrides?: NonPayableOverrides & { from?: string }) {
    return super.deploy(overrides || {}) as Promise<
      BlockBuilderRegistry & {
        deploymentTransaction(): ContractTransactionResponse;
      }
    >;
  }
  override connect(
    runner: ContractRunner | null
  ): BlockBuilderRegistry__factory {
    return super.connect(runner) as BlockBuilderRegistry__factory;
  }

  static readonly bytecode = _bytecode;
  static readonly abi = _abi;
  static createInterface(): BlockBuilderRegistryInterface {
    return new Interface(_abi) as BlockBuilderRegistryInterface;
  }
  static connect(
    address: string,
    runner?: ContractRunner | null
  ): BlockBuilderRegistry {
    return new Contract(
      address,
      _abi,
      runner
    ) as unknown as BlockBuilderRegistry;
  }
}
