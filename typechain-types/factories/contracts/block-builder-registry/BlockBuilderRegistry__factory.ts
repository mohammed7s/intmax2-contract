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
  "0x60a06040523073ffffffffffffffffffffffffffffffffffffffff1660809073ffffffffffffffffffffffffffffffffffffffff1681525034801561004357600080fd5b50608051612bef61006d60003960008181611914015281816119690152611b240152612bef6000f3fe6080604052600436106100dd5760003560e01c80636a5387a81161007f5780638da5cb5b116100595780638da5cb5b1461025a578063ad3cb1cc14610285578063c4d66de8146102b0578063f2fde38b146102d9576100dd565b80636a5387a8146101dd578063715018a61461021a578063750d38cb14610231576100dd565b80634f1ef286116100bb5780634f1ef2861461013e578063513348511461015a57806352d1902d1461017157806363cebe621461019c576100dd565b80630f36c638146100e25780632def6620146100fe5780634b0e721614610115575b600080fd5b6100fc60048036038101906100f791906122da565b610302565b005b34801561010a57600080fd5b506101136105a1565b005b34801561012157600080fd5b5061013c60048036038101906101379190612381565b6109a9565b005b6101586004803603810190610153919061244f565b6109f5565b005b34801561016657600080fd5b5061016f610a14565b005b34801561017d57600080fd5b50610186610d9b565b60405161019391906124c4565b60405180910390f35b3480156101a857600080fd5b506101c360048036038101906101be9190612381565b610dce565b6040516101d4959493929190612592565b60405180910390f35b3480156101e957600080fd5b5061020460048036038101906101ff9190612381565b610e99565b60405161021191906125ec565b60405180910390f35b34801561022657600080fd5b5061022f610ef2565b005b34801561023d57600080fd5b5061025860048036038101906102539190612607565b610f06565b005b34801561026657600080fd5b5061026f61153b565b60405161027c9190612656565b60405180910390f35b34801561029157600080fd5b5061029a611573565b6040516102a79190612671565b60405180910390f35b3480156102bc57600080fd5b506102d760048036038101906102d29190612381565b6115ac565b005b3480156102e557600080fd5b5061030060048036038101906102fb9190612381565b6117cd565b005b600060026000610310611853565b73ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff1681526020019081526020016000206040518060a0016040529081600082018054610365906126c2565b80601f0160208091040260200160405190810160405280929190818152602001828054610391906126c2565b80156103de5780601f106103b3576101008083540402835291602001916103de565b820191906000526020600020905b8154815290600101906020018083116103c157829003601f168201915b505050505081526020016001820154815260200160028201548152602001600382015481526020016004820160009054906101000a900460ff161515151581525050905060003482602001516104349190612722565b905067016345785d8a0000811015610478576040517fa8ded35f00000000000000000000000000000000000000000000000000000000815260040160405180910390fd5b828260000181905250808260200181815250506000826040018181525050600182608001901515908115158152505081600260006104b4611853565b73ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff16815260200190815260200160002060008201518160000190816105039190612902565b5060208201518160010155604082015181600201556060820151816003015560808201518160040160006101000a81548160ff02191690831515021790555090505061054d611853565b73ffffffffffffffffffffffffffffffffffffffff167f2e6a62283ed761c959aaa67da7e98c90c08118cadc35aae3c7b9d0b258a5440584836040516105949291906129d4565b60405180910390a2505050565b600015156106c9600260006105b4611853565b73ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff1681526020019081526020016000206040518060a0016040529081600082018054610609906126c2565b80601f0160208091040260200160405190810160405280929190818152602001828054610635906126c2565b80156106825780601f1061065757610100808354040283529160200191610682565b820191906000526020600020905b81548152906001019060200180831161066557829003601f168201915b505050505081526020016001820154815260200160028201548152602001600382015481526020016004820160009054906101000a900460ff16151515158152505061185b565b151503610702576040517f84b90bca00000000000000000000000000000000000000000000000000000000815260040160405180910390fd5b600060026000610710611853565b73ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff1681526020019081526020016000206040518060a0016040529081600082018054610765906126c2565b80601f0160208091040260200160405190810160405280929190818152602001828054610791906126c2565b80156107de5780601f106107b3576101008083540402835291602001916107de565b820191906000526020600020905b8154815290600101906020018083116107c157829003601f168201915b505050505081526020016001820154815260200160028201548152602001600382015481526020016004820160009054906101000a900460ff16151515158152505090506000151561082f8261186c565b151503610868576040517feb533ee800000000000000000000000000000000000000000000000000000000815260040160405180910390fd5b60008160000151905060008260200151905060026000610886611853565b73ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff168152602001908152602001600020600080820160006108d19190612123565b6001820160009055600282016000905560038201600090556004820160006101000a81549060ff02191690555050610907611853565b73ffffffffffffffffffffffffffffffffffffffff166108fc829081150290604051600060405180830381858888f1935050505015801561094c573d6000803e3d6000fd5b50610955611853565b73ffffffffffffffffffffffffffffffffffffffff167f2e6a62283ed761c959aaa67da7e98c90c08118cadc35aae3c7b9d0b258a54405838360405161099c9291906129d4565b60405180910390a2505050565b6109b161188b565b80600160006101000a81548173ffffffffffffffffffffffffffffffffffffffff021916908373ffffffffffffffffffffffffffffffffffffffff16021790555050565b6109fd611912565b610a06826119f8565b610a108282611a03565b5050565b60001515610b3c60026000610a27611853565b73ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff1681526020019081526020016000206040518060a0016040529081600082018054610a7c906126c2565b80601f0160208091040260200160405190810160405280929190818152602001828054610aa8906126c2565b8015610af55780601f10610aca57610100808354040283529160200191610af5565b820191906000526020600020905b815481529060010190602001808311610ad857829003601f168201915b505050505081526020016001820154815260200160028201548152602001600382015481526020016004820160009054906101000a900460ff16151515158152505061185b565b151503610b75576040517f84b90bca00000000000000000000000000000000000000000000000000000000815260040160405180910390fd5b600060026000610b83611853565b73ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff1681526020019081526020016000206040518060a0016040529081600082018054610bd8906126c2565b80601f0160208091040260200160405190810160405280929190818152602001828054610c04906126c2565b8015610c515780601f10610c2657610100808354040283529160200191610c51565b820191906000526020600020905b815481529060010190602001808311610c3457829003601f168201915b505050505081526020016001820154815260200160028201548152602001600382015481526020016004820160009054906101000a900460ff16151515158152505090504281604001818152505060008160800190151590811515815250508060026000610cbd611853565b73ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff1681526020019081526020016000206000820151816000019081610d0c9190612902565b5060208201518160010155604082015181600201556060820151816003015560808201518160040160006101000a81548160ff021916908315150217905550905050610d56611853565b73ffffffffffffffffffffffffffffffffffffffff167f61003f58033bb3da9d31643101595ff5f23aead3167e68857530f74c4430582b60405160405180910390a250565b6000610da5611b22565b7f360894a13ba1a3210667c828492db98dca3e2076cc3735a920a3ca505d382bbc60001b905090565b6002602052806000526040600020600091509050806000018054610df1906126c2565b80601f0160208091040260200160405190810160405280929190818152602001828054610e1d906126c2565b8015610e6a5780601f10610e3f57610100808354040283529160200191610e6a565b820191906000526020600020905b815481529060010190602001808311610e4d57829003601f168201915b5050505050908060010154908060020154908060030154908060040160009054906101000a900460ff16905085565b6000600260008373ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff16815260200190815260200160002060040160009054906101000a900460ff169050919050565b610efa61188b565b610f046000611ba9565b565b60008054906101000a900473ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff16610f45611853565b73ffffffffffffffffffffffffffffffffffffffff1614610f92576040517fbc7b62d900000000000000000000000000000000000000000000000000000000815260040160405180910390fd5b6000600260008473ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff1681526020019081526020016000206040518060a0016040529081600082018054610fee906126c2565b80601f016020809104026020016040519081016040528092919081815260200182805461101a906126c2565b80156110675780601f1061103c57610100808354040283529160200191611067565b820191906000526020600020905b81548152906001019060200180831161104a57829003601f168201915b505050505081526020016001820154815260200160028201548152602001600382015481526020016004820160009054906101000a900460ff1615151515815250509050600015156110b88261185b565b1515036110f1576040517f84b90bca00000000000000000000000000000000000000000000000000000000815260040160405180910390fd5b6001816060018181516111049190612722565b9150818152505061111481611c80565b158015611122575080608001515b156111395760008160800190151590811515815250505b8173ffffffffffffffffffffffffffffffffffffffff168373ffffffffffffffffffffffffffffffffffffffff167fbebe1ecc1c646675c6bd0423039fd8cdde200d8e4dac2b345abdc23bf8d97a6960405160405180910390a367016345785d8a0000816020015110156113a557600081602001519050600082602001818152505081600260008673ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff16815260200190815260200160002060008201518160000190816112109190612902565b5060208201518160010155604082015181600201556060820151816003015560808201518160040160006101000a81548160ff021916908315150217905550905050600267016345785d8a00006112679190612a33565b8110156112ba578273ffffffffffffffffffffffffffffffffffffffff166108fc829081150290604051600060405180830381858888f193505050501580156112b4573d6000803e3d6000fd5b5061139e565b8273ffffffffffffffffffffffffffffffffffffffff166108fc600267016345785d8a00006112e99190612a33565b9081150290604051600060405180830381858888f19350505050158015611314573d6000803e3d6000fd5b50600160009054906101000a900473ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff166108fc600267016345785d8a00006113669190612a33565b836113719190612a64565b9081150290604051600060405180830381858888f1935050505015801561139c573d6000803e3d6000fd5b505b5050611537565b67016345785d8a0000816020018181516113bf9190612a64565b9150818152505080600260008573ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff168152602001908152602001600020600082015181600001908161141b9190612902565b5060208201518160010155604082015181600201556060820151816003015560808201518160040160006101000a81548160ff0219169083151502179055509050508173ffffffffffffffffffffffffffffffffffffffff166108fc600267016345785d8a000061148c9190612a33565b9081150290604051600060405180830381858888f193505050501580156114b7573d6000803e3d6000fd5b50600160009054906101000a900473ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff166108fc600267016345785d8a00006115099190612a33565b9081150290604051600060405180830381858888f19350505050158015611534573d6000803e3d6000fd5b50505b5050565b600080611546611c99565b90508060000160009054906101000a900473ffffffffffffffffffffffffffffffffffffffff1691505090565b6040518060400160405280600581526020017f352e302e3000000000000000000000000000000000000000000000000000000081525081565b60006115b6611cc1565b905060008160000160089054906101000a900460ff1615905060008260000160009054906101000a900467ffffffffffffffff1690506000808267ffffffffffffffff161480156116045750825b9050600060018367ffffffffffffffff16148015611639575060003073ffffffffffffffffffffffffffffffffffffffff163b145b905081158015611647575080155b1561167e576040517ff92ee8a900000000000000000000000000000000000000000000000000000000815260040160405180910390fd5b60018560000160006101000a81548167ffffffffffffffff021916908367ffffffffffffffff16021790555083156116ce5760018560000160086101000a81548160ff0219169083151502179055505b6116de6116d9611853565b611ce9565b6116e6611cfd565b856000806101000a81548173ffffffffffffffffffffffffffffffffffffffff021916908373ffffffffffffffffffffffffffffffffffffffff16021790555061dead600160006101000a81548173ffffffffffffffffffffffffffffffffffffffff021916908373ffffffffffffffffffffffffffffffffffffffff16021790555083156117c55760008560000160086101000a81548160ff0219169083151502179055507fc7f505b2f371ae2175ee4913f4499e1f2633a7b5936321eed1cdaeb6115181d260016040516117bc9190612ae7565b60405180910390a15b505050505050565b6117d561188b565b600073ffffffffffffffffffffffffffffffffffffffff168173ffffffffffffffffffffffffffffffffffffffff16036118475760006040517f1e4fbdf700000000000000000000000000000000000000000000000000000000815260040161183e9190612656565b60405180910390fd5b61185081611ba9565b50565b600033905090565b600080826020015114159050919050565b6000620151808260400151426118829190612a64565b10159050919050565b611893611853565b73ffffffffffffffffffffffffffffffffffffffff166118b161153b565b73ffffffffffffffffffffffffffffffffffffffff1614611910576118d4611853565b6040517f118cdaa70000000000000000000000000000000000000000000000000000000081526004016119079190612656565b60405180910390fd5b565b7f000000000000000000000000000000000000000000000000000000000000000073ffffffffffffffffffffffffffffffffffffffff163073ffffffffffffffffffffffffffffffffffffffff1614806119bf57507f000000000000000000000000000000000000000000000000000000000000000073ffffffffffffffffffffffffffffffffffffffff166119a6611d07565b73ffffffffffffffffffffffffffffffffffffffff1614155b156119f6576040517fe07c8dba00000000000000000000000000000000000000000000000000000000815260040160405180910390fd5b565b611a0061188b565b50565b8173ffffffffffffffffffffffffffffffffffffffff166352d1902d6040518163ffffffff1660e01b8152600401602060405180830381865afa925050508015611a6b57506040513d601f19601f82011682018060405250810190611a689190612b2e565b60015b611aac57816040517f4c9c8ce3000000000000000000000000000000000000000000000000000000008152600401611aa39190612656565b60405180910390fd5b7f360894a13ba1a3210667c828492db98dca3e2076cc3735a920a3ca505d382bbc60001b8114611b1357806040517faa1d49a4000000000000000000000000000000000000000000000000000000008152600401611b0a91906124c4565b60405180910390fd5b611b1d8383611d5e565b505050565b7f000000000000000000000000000000000000000000000000000000000000000073ffffffffffffffffffffffffffffffffffffffff163073ffffffffffffffffffffffffffffffffffffffff1614611ba7576040517fe07c8dba00000000000000000000000000000000000000000000000000000000815260040160405180910390fd5b565b6000611bb3611c99565b905060008160000160009054906101000a900473ffffffffffffffffffffffffffffffffffffffff169050828260000160006101000a81548173ffffffffffffffffffffffffffffffffffffffff021916908373ffffffffffffffffffffffffffffffffffffffff1602179055508273ffffffffffffffffffffffffffffffffffffffff168173ffffffffffffffffffffffffffffffffffffffff167f8be0079c531659141344cd1fd0a4f28419497f9722a3daafe3b4186f6b6457e060405160405180910390a3505050565b600067016345785d8a0000826020015110159050919050565b60007f9016d09d72d40fdae2fd8ceac6b6234c7706214fd39c1cd1e609a0528c199300905090565b60007ff0c57e16840df040f15088dc2f81fe391c3923bec73e23a9662efc9c229c6a00905090565b611cf1611dd1565b611cfa81611e11565b50565b611d05611dd1565b565b6000611d357f360894a13ba1a3210667c828492db98dca3e2076cc3735a920a3ca505d382bbc60001b611e97565b60000160009054906101000a900473ffffffffffffffffffffffffffffffffffffffff16905090565b611d6782611ea1565b8173ffffffffffffffffffffffffffffffffffffffff167fbc7cd75a20ee27fd9adebab32041f755214dbc6bffa90cc0225b39da2e5c2d3b60405160405180910390a2600081511115611dc457611dbe8282611f6e565b50611dcd565b611dcc611ff2565b5b5050565b611dd961202f565b611e0f576040517fd7e6bcf800000000000000000000000000000000000000000000000000000000815260040160405180910390fd5b565b611e19611dd1565b600073ffffffffffffffffffffffffffffffffffffffff168173ffffffffffffffffffffffffffffffffffffffff1603611e8b5760006040517f1e4fbdf7000000000000000000000000000000000000000000000000000000008152600401611e829190612656565b60405180910390fd5b611e9481611ba9565b50565b6000819050919050565b60008173ffffffffffffffffffffffffffffffffffffffff163b03611efd57806040517f4c9c8ce3000000000000000000000000000000000000000000000000000000008152600401611ef49190612656565b60405180910390fd5b80611f2a7f360894a13ba1a3210667c828492db98dca3e2076cc3735a920a3ca505d382bbc60001b611e97565b60000160006101000a81548173ffffffffffffffffffffffffffffffffffffffff021916908373ffffffffffffffffffffffffffffffffffffffff16021790555050565b60606000808473ffffffffffffffffffffffffffffffffffffffff1684604051611f989190612ba2565b600060405180830381855af49150503d8060008114611fd3576040519150601f19603f3d011682016040523d82523d6000602084013e611fd8565b606091505b5091509150611fe885838361204f565b9250505092915050565b600034111561202d576040517fb398979f00000000000000000000000000000000000000000000000000000000815260040160405180910390fd5b565b6000612039611cc1565b60000160089054906101000a900460ff16905090565b6060826120645761205f826120de565b6120d6565b6000825114801561208c575060008473ffffffffffffffffffffffffffffffffffffffff163b145b156120ce57836040517f9996b3150000000000000000000000000000000000000000000000000000000081526004016120c59190612656565b60405180910390fd5b8190506120d7565b5b9392505050565b6000815111156120f15780518082602001fd5b6040517f1425ea4200000000000000000000000000000000000000000000000000000000815260040160405180910390fd5b50805461212f906126c2565b6000825580601f106121415750612160565b601f01602090049060005260206000209081019061215f9190612163565b5b50565b5b8082111561217c576000816000905550600101612164565b5090565b6000604051905090565b600080fd5b600080fd5b600080fd5b600080fd5b6000601f19601f8301169050919050565b7f4e487b7100000000000000000000000000000000000000000000000000000000600052604160045260246000fd5b6121e78261219e565b810181811067ffffffffffffffff82111715612206576122056121af565b5b80604052505050565b6000612219612180565b905061222582826121de565b919050565b600067ffffffffffffffff821115612245576122446121af565b5b61224e8261219e565b9050602081019050919050565b82818337600083830152505050565b600061227d6122788461222a565b61220f565b90508281526020810184848401111561229957612298612199565b5b6122a484828561225b565b509392505050565b600082601f8301126122c1576122c0612194565b5b81356122d184826020860161226a565b91505092915050565b6000602082840312156122f0576122ef61218a565b5b600082013567ffffffffffffffff81111561230e5761230d61218f565b5b61231a848285016122ac565b91505092915050565b600073ffffffffffffffffffffffffffffffffffffffff82169050919050565b600061234e82612323565b9050919050565b61235e81612343565b811461236957600080fd5b50565b60008135905061237b81612355565b92915050565b6000602082840312156123975761239661218a565b5b60006123a58482850161236c565b91505092915050565b600067ffffffffffffffff8211156123c9576123c86121af565b5b6123d28261219e565b9050602081019050919050565b60006123f26123ed846123ae565b61220f565b90508281526020810184848401111561240e5761240d612199565b5b61241984828561225b565b509392505050565b600082601f83011261243657612435612194565b5b81356124468482602086016123df565b91505092915050565b600080604083850312156124665761246561218a565b5b60006124748582860161236c565b925050602083013567ffffffffffffffff8111156124955761249461218f565b5b6124a185828601612421565b9150509250929050565b6000819050919050565b6124be816124ab565b82525050565b60006020820190506124d960008301846124b5565b92915050565b600081519050919050565b600082825260208201905092915050565b60005b838110156125195780820151818401526020810190506124fe565b60008484015250505050565b6000612530826124df565b61253a81856124ea565b935061254a8185602086016124fb565b6125538161219e565b840191505092915050565b6000819050919050565b6125718161255e565b82525050565b60008115159050919050565b61258c81612577565b82525050565b600060a08201905081810360008301526125ac8188612525565b90506125bb6020830187612568565b6125c86040830186612568565b6125d56060830185612568565b6125e26080830184612583565b9695505050505050565b60006020820190506126016000830184612583565b92915050565b6000806040838503121561261e5761261d61218a565b5b600061262c8582860161236c565b925050602061263d8582860161236c565b9150509250929050565b61265081612343565b82525050565b600060208201905061266b6000830184612647565b92915050565b6000602082019050818103600083015261268b8184612525565b905092915050565b7f4e487b7100000000000000000000000000000000000000000000000000000000600052602260045260246000fd5b600060028204905060018216806126da57607f821691505b6020821081036126ed576126ec612693565b5b50919050565b7f4e487b7100000000000000000000000000000000000000000000000000000000600052601160045260246000fd5b600061272d8261255e565b91506127388361255e565b92508282019050808211156127505761274f6126f3565b5b92915050565b60008190508160005260206000209050919050565b60006020601f8301049050919050565b600082821b905092915050565b6000600883026127b87fffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff8261277b565b6127c2868361277b565b95508019841693508086168417925050509392505050565b6000819050919050565b60006127ff6127fa6127f58461255e565b6127da565b61255e565b9050919050565b6000819050919050565b612819836127e4565b61282d61282582612806565b848454612788565b825550505050565b600090565b612842612835565b61284d818484612810565b505050565b5b818110156128715761286660008261283a565b600181019050612853565b5050565b601f8211156128b65761288781612756565b6128908461276b565b8101602085101561289f578190505b6128b36128ab8561276b565b830182612852565b50505b505050565b600082821c905092915050565b60006128d9600019846008026128bb565b1980831691505092915050565b60006128f283836128c8565b9150826002028217905092915050565b61290b826124df565b67ffffffffffffffff811115612924576129236121af565b5b61292e82546126c2565b612939828285612875565b600060209050601f83116001811461296c576000841561295a578287015190505b61296485826128e6565b8655506129cc565b601f19841661297a86612756565b60005b828110156129a25784890151825560018201915060208501945060208101905061297d565b868310156129bf57848901516129bb601f8916826128c8565b8355505b6001600288020188555050505b505050505050565b600060408201905081810360008301526129ee8185612525565b90506129fd6020830184612568565b9392505050565b7f4e487b7100000000000000000000000000000000000000000000000000000000600052601260045260246000fd5b6000612a3e8261255e565b9150612a498361255e565b925082612a5957612a58612a04565b5b828204905092915050565b6000612a6f8261255e565b9150612a7a8361255e565b9250828203905081811115612a9257612a916126f3565b5b92915050565b6000819050919050565b600067ffffffffffffffff82169050919050565b6000612ad1612acc612ac784612a98565b6127da565b612aa2565b9050919050565b612ae181612ab6565b82525050565b6000602082019050612afc6000830184612ad8565b92915050565b612b0b816124ab565b8114612b1657600080fd5b50565b600081519050612b2881612b02565b92915050565b600060208284031215612b4457612b4361218a565b5b6000612b5284828501612b19565b91505092915050565b600081519050919050565b600081905092915050565b6000612b7c82612b5b565b612b868185612b66565b9350612b968185602086016124fb565b80840191505092915050565b6000612bae8284612b71565b91508190509291505056fea2646970667358221220defe29f1409940c366caaba77928157c780254c6d15fc70879fbf817be60c4ec64736f6c63430008180033";

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
