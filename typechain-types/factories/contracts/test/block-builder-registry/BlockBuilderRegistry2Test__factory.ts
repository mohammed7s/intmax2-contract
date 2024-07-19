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
import type { NonPayableOverrides } from "../../../../common";
import type {
  BlockBuilderRegistry2Test,
  BlockBuilderRegistry2TestInterface,
} from "../../../../contracts/test/block-builder-registry/BlockBuilderRegistry2Test";

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
    name: "FraudProofAlreadySubmitted",
    type: "error",
  },
  {
    inputs: [
      {
        internalType: "bytes32",
        name: "given",
        type: "bytes32",
      },
      {
        internalType: "bytes32",
        name: "expected",
        type: "bytes32",
      },
    ],
    name: "FraudProofBlockHashMismatch",
    type: "error",
  },
  {
    inputs: [],
    name: "FraudProofChallengerMismatch",
    type: "error",
  },
  {
    inputs: [],
    name: "FraudProofVerificationFailed",
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
        indexed: true,
        internalType: "uint32",
        name: "blockNumber",
        type: "uint32",
      },
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
    name: "BlockFraudProofSubmitted",
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
    inputs: [],
    name: "getVal",
    outputs: [
      {
        internalType: "uint256",
        name: "",
        type: "uint256",
      },
    ],
    stateMutability: "pure",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "address",
        name: "_rollup",
        type: "address",
      },
      {
        internalType: "address",
        name: "_fraudVerifier",
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
    inputs: [],
    name: "stopBlockBuilder",
    outputs: [],
    stateMutability: "nonpayable",
    type: "function",
  },
  {
    inputs: [
      {
        components: [
          {
            internalType: "bytes32",
            name: "blockHash",
            type: "bytes32",
          },
          {
            internalType: "uint32",
            name: "blockNumber",
            type: "uint32",
          },
          {
            internalType: "address",
            name: "challenger",
            type: "address",
          },
        ],
        internalType: "struct FraudProofPublicInputsLib.FraudProofPublicInputs",
        name: "publicInputs",
        type: "tuple",
      },
      {
        internalType: "bytes",
        name: "proof",
        type: "bytes",
      },
    ],
    name: "submitBlockFraudProof",
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
  "0x60a06040523073ffffffffffffffffffffffffffffffffffffffff1660809073ffffffffffffffffffffffffffffffffffffffff1681525034801561004357600080fd5b5060805161360561006d60003960008181611d5401528181611da90152611f6401526136056000f3fe6080604052600436106100e85760003560e01c806352d1902d1161008a5780638da5cb5b116100595780638da5cb5b1461028e578063ad3cb1cc146102b9578063e1cb0e52146102e4578063f2fde38b1461030f576100e8565b806352d1902d146101ce57806363cebe62146101f95780636a5387a81461023a578063715018a614610277576100e8565b8063485cc955116100c6578063485cc955146101495780634b0e7216146101725780634f1ef2861461019b57806351334851146101b7576100e8565b80630cffc39c146100ed5780630f36c638146101165780632def662014610132575b600080fd5b3480156100f957600080fd5b50610114600480360381019061010f9190612617565b610338565b005b610130600480360381019061012b91906127b8565b610704565b005b34801561013e57600080fd5b506101476109a3565b005b34801561015557600080fd5b50610170600480360381019061016b919061285f565b610d6e565b005b34801561017e57600080fd5b506101996004803603810190610194919061289f565b610fd1565b005b6101b560048036038101906101b0919061296d565b61101d565b005b3480156101c357600080fd5b506101cc61103c565b005b3480156101da57600080fd5b506101e36113c3565b6040516101f091906129e2565b60405180910390f35b34801561020557600080fd5b50610220600480360381019061021b919061289f565b6113f6565b604051610231959493929190612ab0565b60405180910390f35b34801561024657600080fd5b50610261600480360381019061025c919061289f565b6114c1565b60405161026e9190612b0a565b60405180910390f35b34801561028357600080fd5b5061028c61151a565b005b34801561029a57600080fd5b506102a361152e565b6040516102b09190612b34565b60405180910390f35b3480156102c557600080fd5b506102ce611566565b6040516102db9190612b4f565b60405180910390f35b3480156102f057600080fd5b506102f961159f565b6040516103069190612b71565b60405180910390f35b34801561031b57600080fd5b506103366004803603810190610331919061289f565b6115a8565b005b60008060008054906101000a900473ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff1663e5b4668e86602001602081019061038a9190612bc8565b6040518263ffffffff1660e01b81526004016103a69190612c30565b6040805180830381865afa1580156103c2573d6000803e3d6000fd5b505050506040513d601f19601f820116820180604052508101906103e69190612c8c565b9150915081856000013514610438578460000135826040517f22374e6b00000000000000000000000000000000000000000000000000000000815260040161042f929190612ccc565b60405180910390fd5b61044061162e565b73ffffffffffffffffffffffffffffffffffffffff16856040016020810190610469919061289f565b73ffffffffffffffffffffffffffffffffffffffff16146104b6576040517f53fde04000000000000000000000000000000000000000000000000000000000815260040160405180910390fd5b600460008660200160208101906104cd9190612bc8565b63ffffffff1663ffffffff16815260200190815260200160002060009054906101000a900460ff161561052c576040517f94009bff00000000000000000000000000000000000000000000000000000000815260040160405180910390fd5b600160009054906101000a900473ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff16637e4f7a8a858561058d6105888a8036038101906105839190612d73565b611636565b611676565b6040518463ffffffff1660e01b81526004016105ab93929190612e9c565b602060405180830381865afa1580156105c8573d6000803e3d6000fd5b505050506040513d601f19601f820116820180604052508101906105ec9190612f01565b610622576040517f55d979c900000000000000000000000000000000000000000000000000000000815260040160405180910390fd5b60016004600087602001602081019061063b9190612bc8565b63ffffffff1663ffffffff16815260200190815260200160002060006101000a81548160ff02191690831515021790555060008190506106828161067d61162e565b611721565b61068a61162e565b73ffffffffffffffffffffffffffffffffffffffff168173ffffffffffffffffffffffffffffffffffffffff168760200160208101906106ca9190612bc8565b63ffffffff167fa2d160ed24716f0240546105d30a2e1efb2d5f23abb041888083bcc20083edd260405160405180910390a4505050505050565b60006003600061071261162e565b73ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff1681526020019081526020016000206040518060a001604052908160008201805461076790612f5d565b80601f016020809104026020016040519081016040528092919081815260200182805461079390612f5d565b80156107e05780601f106107b5576101008083540402835291602001916107e0565b820191906000526020600020905b8154815290600101906020018083116107c357829003601f168201915b505050505081526020016001820154815260200160028201548152602001600382015481526020016004820160009054906101000a900460ff161515151581525050905060003482602001516108369190612fbd565b905067016345785d8a000081101561087a576040517fa8ded35f00000000000000000000000000000000000000000000000000000000815260040160405180910390fd5b828260000181905250808260200181815250506000826040018181525050600182608001901515908115158152505081600360006108b661162e565b73ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff16815260200190815260200160002060008201518160000190816109059190613193565b5060208201518160010155604082015181600201556060820151816003015560808201518160040160006101000a81548160ff02191690831515021790555090505061094f61162e565b73ffffffffffffffffffffffffffffffffffffffff167f2e6a62283ed761c959aaa67da7e98c90c08118cadc35aae3c7b9d0b258a544058483604051610996929190613265565b60405180910390a2505050565b60001515610acb600360006109b661162e565b73ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff1681526020019081526020016000206040518060a0016040529081600082018054610a0b90612f5d565b80601f0160208091040260200160405190810160405280929190818152602001828054610a3790612f5d565b8015610a845780601f10610a5957610100808354040283529160200191610a84565b820191906000526020600020905b815481529060010190602001808311610a6757829003601f168201915b505050505081526020016001820154815260200160028201548152602001600382015481526020016004820160009054906101000a900460ff161515151581525050611b99565b151503610b04576040517f84b90bca00000000000000000000000000000000000000000000000000000000815260040160405180910390fd5b600060036000610b1261162e565b73ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff1681526020019081526020016000206040518060a0016040529081600082018054610b6790612f5d565b80601f0160208091040260200160405190810160405280929190818152602001828054610b9390612f5d565b8015610be05780601f10610bb557610100808354040283529160200191610be0565b820191906000526020600020905b815481529060010190602001808311610bc357829003601f168201915b505050505081526020016001820154815260200160028201548152602001600382015481526020016004820160009054906101000a900460ff161515151581525050905060001515610c3182611baa565b151503610c6a576040517feb533ee800000000000000000000000000000000000000000000000000000000815260040160405180910390fd5b60008160000151905060008260200151905060036000610c8861162e565b73ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff16815260200190815260200160002060008082016000610cd3919061251d565b6001820160009055600282016000905560038201600090556004820160006101000a81549060ff02191690555050610d12610d0c61162e565b82611bc9565b610d1a61162e565b73ffffffffffffffffffffffffffffffffffffffff167f2e6a62283ed761c959aaa67da7e98c90c08118cadc35aae3c7b9d0b258a544058383604051610d61929190613265565b60405180910390a2505050565b6000610d78611c85565b905060008160000160089054906101000a900460ff1615905060008260000160009054906101000a900467ffffffffffffffff1690506000808267ffffffffffffffff16148015610dc65750825b9050600060018367ffffffffffffffff16148015610dfb575060003073ffffffffffffffffffffffffffffffffffffffff163b145b905081158015610e09575080155b15610e40576040517ff92ee8a900000000000000000000000000000000000000000000000000000000815260040160405180910390fd5b60018560000160006101000a81548167ffffffffffffffff021916908367ffffffffffffffff1602179055508315610e905760018560000160086101000a81548160ff0219169083151502179055505b610ea0610e9b61162e565b611cad565b610ea8611cc1565b866000806101000a81548173ffffffffffffffffffffffffffffffffffffffff021916908373ffffffffffffffffffffffffffffffffffffffff16021790555085600160006101000a81548173ffffffffffffffffffffffffffffffffffffffff021916908373ffffffffffffffffffffffffffffffffffffffff16021790555061dead600260006101000a81548173ffffffffffffffffffffffffffffffffffffffff021916908373ffffffffffffffffffffffffffffffffffffffff1602179055508315610fc85760008560000160086101000a81548160ff0219169083151502179055507fc7f505b2f371ae2175ee4913f4499e1f2633a7b5936321eed1cdaeb6115181d26001604051610fbf91906132e4565b60405180910390a15b50505050505050565b610fd9611ccb565b80600260006101000a81548173ffffffffffffffffffffffffffffffffffffffff021916908373ffffffffffffffffffffffffffffffffffffffff16021790555050565b611025611d52565b61102e82611e38565b6110388282611e43565b5050565b600015156111646003600061104f61162e565b73ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff1681526020019081526020016000206040518060a00160405290816000820180546110a490612f5d565b80601f01602080910402602001604051908101604052809291908181526020018280546110d090612f5d565b801561111d5780601f106110f25761010080835404028352916020019161111d565b820191906000526020600020905b81548152906001019060200180831161110057829003601f168201915b505050505081526020016001820154815260200160028201548152602001600382015481526020016004820160009054906101000a900460ff161515151581525050611b99565b15150361119d576040517f84b90bca00000000000000000000000000000000000000000000000000000000815260040160405180910390fd5b6000600360006111ab61162e565b73ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff1681526020019081526020016000206040518060a001604052908160008201805461120090612f5d565b80601f016020809104026020016040519081016040528092919081815260200182805461122c90612f5d565b80156112795780601f1061124e57610100808354040283529160200191611279565b820191906000526020600020905b81548152906001019060200180831161125c57829003601f168201915b505050505081526020016001820154815260200160028201548152602001600382015481526020016004820160009054906101000a900460ff161515151581525050905042816040018181525050600081608001901515908115158152505080600360006112e561162e565b73ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff16815260200190815260200160002060008201518160000190816113349190613193565b5060208201518160010155604082015181600201556060820151816003015560808201518160040160006101000a81548160ff02191690831515021790555090505061137e61162e565b73ffffffffffffffffffffffffffffffffffffffff167f61003f58033bb3da9d31643101595ff5f23aead3167e68857530f74c4430582b60405160405180910390a250565b60006113cd611f62565b7f360894a13ba1a3210667c828492db98dca3e2076cc3735a920a3ca505d382bbc60001b905090565b600360205280600052604060002060009150905080600001805461141990612f5d565b80601f016020809104026020016040519081016040528092919081815260200182805461144590612f5d565b80156114925780601f1061146757610100808354040283529160200191611492565b820191906000526020600020905b81548152906001019060200180831161147557829003601f168201915b5050505050908060010154908060020154908060030154908060040160009054906101000a900460ff16905085565b6000600360008373ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff16815260200190815260200160002060040160009054906101000a900460ff169050919050565b611522611ccb565b61152c6000611fe9565b565b6000806115396120c0565b90508060000160009054906101000a900473ffffffffffffffffffffffffffffffffffffffff1691505090565b6040518060400160405280600581526020017f352e302e3000000000000000000000000000000000000000000000000000000081525081565b60006001905090565b6115b0611ccb565b600073ffffffffffffffffffffffffffffffffffffffff168173ffffffffffffffffffffffffffffffffffffffff16036116225760006040517f1e4fbdf70000000000000000000000000000000000000000000000000000000081526004016116199190612b34565b60405180910390fd5b61162b81611fe9565b50565b600033905090565b60008160000151826020015183604001516040516020016116599392919061339e565b604051602081830303815290604052805190602001209050919050565b60606000600867ffffffffffffffff8111156116955761169461268d565b5b6040519080825280602002602001820160405280156116c35781602001602082028036833780820191505090505b50905060005b6008811015611717576020816116df91906133db565b84901b60e01c63ffffffff168282815181106116fe576116fd61341d565b5b60200260200101818152505080806001019150506116c9565b5080915050919050565b6000600360008473ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff1681526020019081526020016000206040518060a001604052908160008201805461177d90612f5d565b80601f01602080910402602001604051908101604052809291908181526020018280546117a990612f5d565b80156117f65780601f106117cb576101008083540402835291602001916117f6565b820191906000526020600020905b8154815290600101906020018083116117d957829003601f168201915b505050505081526020016001820154815260200160028201548152602001600382015481526020016004820160009054906101000a900460ff16151515158152505090506000151561184782611b99565b151503611880576040517f84b90bca00000000000000000000000000000000000000000000000000000000815260040160405180910390fd5b6001816060018181516118939190612fbd565b915081815250506118a3816120e8565b1580156118b1575080608001515b156118c85760008160800190151590811515815250505b8173ffffffffffffffffffffffffffffffffffffffff168373ffffffffffffffffffffffffffffffffffffffff167fbebe1ecc1c646675c6bd0423039fd8cdde200d8e4dac2b345abdc23bf8d97a6960405160405180910390a367016345785d8a000081602001511015611a7d57600081602001519050600082602001818152505081600360008673ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff168152602001908152602001600020600082015181600001908161199f9190613193565b5060208201518160010155604082015181600201556060820151816003015560808201518160040160006101000a81548160ff021916908315150217905550905050600267016345785d8a00006119f6919061347b565b811015611a0c57611a078382611bc9565b611a76565b611a2a83600267016345785d8a0000611a25919061347b565b611bc9565b611a75600260009054906101000a900473ffffffffffffffffffffffffffffffffffffffff16600267016345785d8a0000611a65919061347b565b83611a7091906134ac565b611bc9565b5b5050611b95565b67016345785d8a000081602001818151611a9791906134ac565b9150818152505080600360008573ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff1681526020019081526020016000206000820151816000019081611af39190613193565b5060208201518160010155604082015181600201556060820151816003015560808201518160040160006101000a81548160ff021916908315150217905550905050611b5382600267016345785d8a0000611b4e919061347b565b611bc9565b611b93600260009054906101000a900473ffffffffffffffffffffffffffffffffffffffff16600267016345785d8a0000611b8e919061347b565b611bc9565b505b5050565b600080826020015114159050919050565b600062015180826040015142611bc091906134ac565b10159050919050565b60008273ffffffffffffffffffffffffffffffffffffffff1682604051611bef90613511565b60006040518083038185875af1925050503d8060008114611c2c576040519150601f19603f3d011682016040523d82523d6000602084013e611c31565b606091505b505090506000151581151503611c805782826040517f3506b32c000000000000000000000000000000000000000000000000000000008152600401611c77929190613526565b60405180910390fd5b505050565b60007ff0c57e16840df040f15088dc2f81fe391c3923bec73e23a9662efc9c229c6a00905090565b611cb5612101565b611cbe81612141565b50565b611cc9612101565b565b611cd361162e565b73ffffffffffffffffffffffffffffffffffffffff16611cf161152e565b73ffffffffffffffffffffffffffffffffffffffff1614611d5057611d1461162e565b6040517f118cdaa7000000000000000000000000000000000000000000000000000000008152600401611d479190612b34565b60405180910390fd5b565b7f000000000000000000000000000000000000000000000000000000000000000073ffffffffffffffffffffffffffffffffffffffff163073ffffffffffffffffffffffffffffffffffffffff161480611dff57507f000000000000000000000000000000000000000000000000000000000000000073ffffffffffffffffffffffffffffffffffffffff16611de66121c7565b73ffffffffffffffffffffffffffffffffffffffff1614155b15611e36576040517fe07c8dba00000000000000000000000000000000000000000000000000000000815260040160405180910390fd5b565b611e40611ccb565b50565b8173ffffffffffffffffffffffffffffffffffffffff166352d1902d6040518163ffffffff1660e01b8152600401602060405180830381865afa925050508015611eab57506040513d601f19601f82011682018060405250810190611ea8919061354f565b60015b611eec57816040517f4c9c8ce3000000000000000000000000000000000000000000000000000000008152600401611ee39190612b34565b60405180910390fd5b7f360894a13ba1a3210667c828492db98dca3e2076cc3735a920a3ca505d382bbc60001b8114611f5357806040517faa1d49a4000000000000000000000000000000000000000000000000000000008152600401611f4a91906129e2565b60405180910390fd5b611f5d838361221e565b505050565b7f000000000000000000000000000000000000000000000000000000000000000073ffffffffffffffffffffffffffffffffffffffff163073ffffffffffffffffffffffffffffffffffffffff1614611fe7576040517fe07c8dba00000000000000000000000000000000000000000000000000000000815260040160405180910390fd5b565b6000611ff36120c0565b905060008160000160009054906101000a900473ffffffffffffffffffffffffffffffffffffffff169050828260000160006101000a81548173ffffffffffffffffffffffffffffffffffffffff021916908373ffffffffffffffffffffffffffffffffffffffff1602179055508273ffffffffffffffffffffffffffffffffffffffff168173ffffffffffffffffffffffffffffffffffffffff167f8be0079c531659141344cd1fd0a4f28419497f9722a3daafe3b4186f6b6457e060405160405180910390a3505050565b60007f9016d09d72d40fdae2fd8ceac6b6234c7706214fd39c1cd1e609a0528c199300905090565b600067016345785d8a0000826020015110159050919050565b612109612291565b61213f576040517fd7e6bcf800000000000000000000000000000000000000000000000000000000815260040160405180910390fd5b565b612149612101565b600073ffffffffffffffffffffffffffffffffffffffff168173ffffffffffffffffffffffffffffffffffffffff16036121bb5760006040517f1e4fbdf70000000000000000000000000000000000000000000000000000000081526004016121b29190612b34565b60405180910390fd5b6121c481611fe9565b50565b60006121f57f360894a13ba1a3210667c828492db98dca3e2076cc3735a920a3ca505d382bbc60001b6122b1565b60000160009054906101000a900473ffffffffffffffffffffffffffffffffffffffff16905090565b612227826122bb565b8173ffffffffffffffffffffffffffffffffffffffff167fbc7cd75a20ee27fd9adebab32041f755214dbc6bffa90cc0225b39da2e5c2d3b60405160405180910390a26000815111156122845761227e8282612388565b5061228d565b61228c61240c565b5b5050565b600061229b611c85565b60000160089054906101000a900460ff16905090565b6000819050919050565b60008173ffffffffffffffffffffffffffffffffffffffff163b0361231757806040517f4c9c8ce300000000000000000000000000000000000000000000000000000000815260040161230e9190612b34565b60405180910390fd5b806123447f360894a13ba1a3210667c828492db98dca3e2076cc3735a920a3ca505d382bbc60001b6122b1565b60000160006101000a81548173ffffffffffffffffffffffffffffffffffffffff021916908373ffffffffffffffffffffffffffffffffffffffff16021790555050565b60606000808473ffffffffffffffffffffffffffffffffffffffff16846040516123b291906135b8565b600060405180830381855af49150503d80600081146123ed576040519150601f19603f3d011682016040523d82523d6000602084013e6123f2565b606091505b5091509150612402858383612449565b9250505092915050565b6000341115612447576040517fb398979f00000000000000000000000000000000000000000000000000000000815260040160405180910390fd5b565b60608261245e57612459826124d8565b6124d0565b60008251148015612486575060008473ffffffffffffffffffffffffffffffffffffffff163b145b156124c857836040517f9996b3150000000000000000000000000000000000000000000000000000000081526004016124bf9190612b34565b60405180910390fd5b8190506124d1565b5b9392505050565b6000815111156124eb5780518082602001fd5b6040517f1425ea4200000000000000000000000000000000000000000000000000000000815260040160405180910390fd5b50805461252990612f5d565b6000825580601f1061253b575061255a565b601f016020900490600052602060002090810190612559919061255d565b5b50565b5b8082111561257657600081600090555060010161255e565b5090565b6000604051905090565b600080fd5b600080fd5b600080fd5b6000606082840312156125a9576125a861258e565b5b81905092915050565b600080fd5b600080fd5b600080fd5b60008083601f8401126125d7576125d66125b2565b5b8235905067ffffffffffffffff8111156125f4576125f36125b7565b5b6020830191508360018202830111156126105761260f6125bc565b5b9250929050565b6000806000608084860312156126305761262f612584565b5b600061263e86828701612593565b935050606084013567ffffffffffffffff81111561265f5761265e612589565b5b61266b868287016125c1565b92509250509250925092565b600080fd5b6000601f19601f8301169050919050565b7f4e487b7100000000000000000000000000000000000000000000000000000000600052604160045260246000fd5b6126c58261267c565b810181811067ffffffffffffffff821117156126e4576126e361268d565b5b80604052505050565b60006126f761257a565b905061270382826126bc565b919050565b600067ffffffffffffffff8211156127235761272261268d565b5b61272c8261267c565b9050602081019050919050565b82818337600083830152505050565b600061275b61275684612708565b6126ed565b90508281526020810184848401111561277757612776612677565b5b612782848285612739565b509392505050565b600082601f83011261279f5761279e6125b2565b5b81356127af848260208601612748565b91505092915050565b6000602082840312156127ce576127cd612584565b5b600082013567ffffffffffffffff8111156127ec576127eb612589565b5b6127f88482850161278a565b91505092915050565b600073ffffffffffffffffffffffffffffffffffffffff82169050919050565b600061282c82612801565b9050919050565b61283c81612821565b811461284757600080fd5b50565b60008135905061285981612833565b92915050565b6000806040838503121561287657612875612584565b5b60006128848582860161284a565b92505060206128958582860161284a565b9150509250929050565b6000602082840312156128b5576128b4612584565b5b60006128c38482850161284a565b91505092915050565b600067ffffffffffffffff8211156128e7576128e661268d565b5b6128f08261267c565b9050602081019050919050565b600061291061290b846128cc565b6126ed565b90508281526020810184848401111561292c5761292b612677565b5b612937848285612739565b509392505050565b600082601f830112612954576129536125b2565b5b81356129648482602086016128fd565b91505092915050565b6000806040838503121561298457612983612584565b5b60006129928582860161284a565b925050602083013567ffffffffffffffff8111156129b3576129b2612589565b5b6129bf8582860161293f565b9150509250929050565b6000819050919050565b6129dc816129c9565b82525050565b60006020820190506129f760008301846129d3565b92915050565b600081519050919050565b600082825260208201905092915050565b60005b83811015612a37578082015181840152602081019050612a1c565b60008484015250505050565b6000612a4e826129fd565b612a588185612a08565b9350612a68818560208601612a19565b612a718161267c565b840191505092915050565b6000819050919050565b612a8f81612a7c565b82525050565b60008115159050919050565b612aaa81612a95565b82525050565b600060a0820190508181036000830152612aca8188612a43565b9050612ad96020830187612a86565b612ae66040830186612a86565b612af36060830185612a86565b612b006080830184612aa1565b9695505050505050565b6000602082019050612b1f6000830184612aa1565b92915050565b612b2e81612821565b82525050565b6000602082019050612b496000830184612b25565b92915050565b60006020820190508181036000830152612b698184612a43565b905092915050565b6000602082019050612b866000830184612a86565b92915050565b600063ffffffff82169050919050565b612ba581612b8c565b8114612bb057600080fd5b50565b600081359050612bc281612b9c565b92915050565b600060208284031215612bde57612bdd612584565b5b6000612bec84828501612bb3565b91505092915050565b6000819050919050565b6000612c1a612c15612c1084612b8c565b612bf5565b612a7c565b9050919050565b612c2a81612bff565b82525050565b6000602082019050612c456000830184612c21565b92915050565b612c54816129c9565b8114612c5f57600080fd5b50565b600081519050612c7181612c4b565b92915050565b600081519050612c8681612833565b92915050565b60008060408385031215612ca357612ca2612584565b5b6000612cb185828601612c62565b9250506020612cc285828601612c77565b9150509250929050565b6000604082019050612ce160008301856129d3565b612cee60208301846129d3565b9392505050565b600080fd5b600081359050612d0981612c4b565b92915050565b600060608284031215612d2557612d24612cf5565b5b612d2f60606126ed565b90506000612d3f84828501612cfa565b6000830152506020612d5384828501612bb3565b6020830152506040612d678482850161284a565b60408301525092915050565b600060608284031215612d8957612d88612584565b5b6000612d9784828501612d0f565b91505092915050565b600082825260208201905092915050565b6000612dbd8385612da0565b9350612dca838584612739565b612dd38361267c565b840190509392505050565b600081519050919050565b600082825260208201905092915050565b6000819050602082019050919050565b612e1381612a7c565b82525050565b6000612e258383612e0a565b60208301905092915050565b6000602082019050919050565b6000612e4982612dde565b612e538185612de9565b9350612e5e83612dfa565b8060005b83811015612e8f578151612e768882612e19565b9750612e8183612e31565b925050600181019050612e62565b5085935050505092915050565b60006040820190508181036000830152612eb7818587612db1565b90508181036020830152612ecb8184612e3e565b9050949350505050565b612ede81612a95565b8114612ee957600080fd5b50565b600081519050612efb81612ed5565b92915050565b600060208284031215612f1757612f16612584565b5b6000612f2584828501612eec565b91505092915050565b7f4e487b7100000000000000000000000000000000000000000000000000000000600052602260045260246000fd5b60006002820490506001821680612f7557607f821691505b602082108103612f8857612f87612f2e565b5b50919050565b7f4e487b7100000000000000000000000000000000000000000000000000000000600052601160045260246000fd5b6000612fc882612a7c565b9150612fd383612a7c565b9250828201905080821115612feb57612fea612f8e565b5b92915050565b60008190508160005260206000209050919050565b60006020601f8301049050919050565b600082821b905092915050565b6000600883026130537fffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff82613016565b61305d8683613016565b95508019841693508086168417925050509392505050565b600061309061308b61308684612a7c565b612bf5565b612a7c565b9050919050565b6000819050919050565b6130aa83613075565b6130be6130b682613097565b848454613023565b825550505050565b600090565b6130d36130c6565b6130de8184846130a1565b505050565b5b81811015613102576130f76000826130cb565b6001810190506130e4565b5050565b601f8211156131475761311881612ff1565b61312184613006565b81016020851015613130578190505b61314461313c85613006565b8301826130e3565b50505b505050565b600082821c905092915050565b600061316a6000198460080261314c565b1980831691505092915050565b60006131838383613159565b9150826002028217905092915050565b61319c826129fd565b67ffffffffffffffff8111156131b5576131b461268d565b5b6131bf8254612f5d565b6131ca828285613106565b600060209050601f8311600181146131fd57600084156131eb578287015190505b6131f58582613177565b86555061325d565b601f19841661320b86612ff1565b60005b828110156132335784890151825560018201915060208501945060208101905061320e565b86831015613250578489015161324c601f891682613159565b8355505b6001600288020188555050505b505050505050565b6000604082019050818103600083015261327f8185612a43565b905061328e6020830184612a86565b9392505050565b6000819050919050565b600067ffffffffffffffff82169050919050565b60006132ce6132c96132c484613295565b612bf5565b61329f565b9050919050565b6132de816132b3565b82525050565b60006020820190506132f960008301846132d5565b92915050565b6000819050919050565b61331a613315826129c9565b6132ff565b82525050565b60008160e01b9050919050565b600061333882613320565b9050919050565b61335061334b82612b8c565b61332d565b82525050565b60008160601b9050919050565b600061336e82613356565b9050919050565b600061338082613363565b9050919050565b61339861339382612821565b613375565b82525050565b60006133aa8286613309565b6020820191506133ba828561333f565b6004820191506133ca8284613387565b601482019150819050949350505050565b60006133e682612a7c565b91506133f183612a7c565b92508282026133ff81612a7c565b9150828204841483151761341657613415612f8e565b5b5092915050565b7f4e487b7100000000000000000000000000000000000000000000000000000000600052603260045260246000fd5b7f4e487b7100000000000000000000000000000000000000000000000000000000600052601260045260246000fd5b600061348682612a7c565b915061349183612a7c565b9250826134a1576134a061344c565b5b828204905092915050565b60006134b782612a7c565b91506134c283612a7c565b92508282039050818111156134da576134d9612f8e565b5b92915050565b600081905092915050565b50565b60006134fb6000836134e0565b9150613506826134eb565b600082019050919050565b600061351c826134ee565b9150819050919050565b600060408201905061353b6000830185612b25565b6135486020830184612a86565b9392505050565b60006020828403121561356557613564612584565b5b600061357384828501612c62565b91505092915050565b600081519050919050565b60006135928261357c565b61359c81856134e0565b93506135ac818560208601612a19565b80840191505092915050565b60006135c48284613587565b91508190509291505056fea2646970667358221220baebcda3dce1ec34364dc8d05e65cecf6e61469bf7b99b644d524952acf7407364736f6c63430008180033";

type BlockBuilderRegistry2TestConstructorParams =
  | [signer?: Signer]
  | ConstructorParameters<typeof ContractFactory>;

const isSuperArgs = (
  xs: BlockBuilderRegistry2TestConstructorParams
): xs is ConstructorParameters<typeof ContractFactory> => xs.length > 1;

export class BlockBuilderRegistry2Test__factory extends ContractFactory {
  constructor(...args: BlockBuilderRegistry2TestConstructorParams) {
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
      BlockBuilderRegistry2Test & {
        deploymentTransaction(): ContractTransactionResponse;
      }
    >;
  }
  override connect(
    runner: ContractRunner | null
  ): BlockBuilderRegistry2Test__factory {
    return super.connect(runner) as BlockBuilderRegistry2Test__factory;
  }

  static readonly bytecode = _bytecode;
  static readonly abi = _abi;
  static createInterface(): BlockBuilderRegistry2TestInterface {
    return new Interface(_abi) as BlockBuilderRegistry2TestInterface;
  }
  static connect(
    address: string,
    runner?: ContractRunner | null
  ): BlockBuilderRegistry2Test {
    return new Contract(
      address,
      _abi,
      runner
    ) as unknown as BlockBuilderRegistry2Test;
  }
}
