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
  DepositContract2,
  DepositContract2Interface,
} from "../../../contracts/lib/DepositContract2";

const _abi = [
  {
    inputs: [],
    name: "InvalidInitialization",
    type: "error",
  },
  {
    inputs: [],
    name: "MerkleTreeFull",
    type: "error",
  },
  {
    inputs: [],
    name: "NotInitializing",
    type: "error",
  },
  {
    inputs: [],
    name: "ReentrancyGuardReentrantCall",
    type: "error",
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
    inputs: [
      {
        internalType: "bytes32",
        name: "leafHash",
        type: "bytes32",
      },
    ],
    name: "deposit",
    outputs: [],
    stateMutability: "nonpayable",
    type: "function",
  },
  {
    inputs: [],
    name: "depositCount",
    outputs: [
      {
        internalType: "uint256",
        name: "",
        type: "uint256",
      },
    ],
    stateMutability: "view",
    type: "function",
  },
  {
    inputs: [],
    name: "getDepositRoot",
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
    inputs: [
      {
        internalType: "uint8",
        name: "leafType",
        type: "uint8",
      },
      {
        internalType: "uint32",
        name: "originNetwork",
        type: "uint32",
      },
      {
        internalType: "address",
        name: "originAddress",
        type: "address",
      },
      {
        internalType: "uint32",
        name: "destinationNetwork",
        type: "uint32",
      },
      {
        internalType: "address",
        name: "destinationAddress",
        type: "address",
      },
      {
        internalType: "uint256",
        name: "amount",
        type: "uint256",
      },
      {
        internalType: "bytes32",
        name: "metadataHash",
        type: "bytes32",
      },
    ],
    name: "getLeafValue",
    outputs: [
      {
        internalType: "bytes32",
        name: "",
        type: "bytes32",
      },
    ],
    stateMutability: "pure",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "bytes32",
        name: "leafHash",
        type: "bytes32",
      },
      {
        internalType: "bytes32[32]",
        name: "smtProof",
        type: "bytes32[32]",
      },
      {
        internalType: "uint32",
        name: "index",
        type: "uint32",
      },
      {
        internalType: "bytes32",
        name: "root",
        type: "bytes32",
      },
    ],
    name: "verifyMerkleProof",
    outputs: [
      {
        internalType: "bool",
        name: "",
        type: "bool",
      },
    ],
    stateMutability: "pure",
    type: "function",
  },
] as const;

const _bytecode =
  "0x608060405234801561001057600080fd5b50610bb4806100206000396000f3fe608060405234801561001057600080fd5b50600436106100575760003560e01c80632dfdf0b51461005c5780633ae050471461007a5780633e19704314610098578063b214faa5146100c8578063fb570834146100e4575b600080fd5b610064610114565b6040516100719190610440565b60405180910390f35b61008261011a565b60405161008f9190610474565b60405180910390f35b6100b260048036038101906100ad91906105bf565b6101f8565b6040516100bf9190610474565b60405180910390f35b6100e260048036038101906100dd9190610661565b61023a565b005b6100fe60048036038101906100f991906106b4565b610246565b60405161010b9190610739565b60405180910390f35b60205481565b6000806000602054905060008060001b905060005b60208110156101ee576001808285901c160361018a576000816020811061015957610158610754565b5b01548460405160200161016d9291906107a4565b6040516020818303038152906040528051906020012093506101b6565b838260405160200161019d9291906107a4565b6040516020818303038152906040528051906020012093505b81826040516020016101c99291906107a4565b604051602081830303815290604052805190602001209150808060010191505061012f565b5082935050505090565b60008787878787878760405160200161021797969594939291906108a5565b604051602081830303815290604052805190602001209050979650505050505050565b61024381610317565b50565b60008085905060005b602081101561030857600180828763ffffffff16901c1663ffffffff16036102b85785816020811061028457610283610754565b5b60200201358260405160200161029b9291906107a4565b6040516020818303038152906040528051906020012091506102fb565b818682602081106102cc576102cb610754565b5b60200201356040516020016102e29291906107a4565b6040516020818303038152906040528051906020012091505b808060010191505061024f565b50828114915050949350505050565b600081905060016020600261032c9190610a88565b6103369190610ad3565b60205410610370576040517fef5ccf6600000000000000000000000000000000000000000000000000000000815260040160405180910390fd5b600060206000815461038190610b07565b919050819055905060005b6020811015610411576001808284901c16036103c45782600082602081106103b7576103b6610754565b5b0181905550505050610424565b600081602081106103d8576103d7610754565b5b0154836040516020016103ec9291906107a4565b604051602081830303815290604052805190602001209250808060010191505061038c565b50600061042157610420610b4f565b5b50505b50565b6000819050919050565b61043a81610427565b82525050565b60006020820190506104556000830184610431565b92915050565b6000819050919050565b61046e8161045b565b82525050565b60006020820190506104896000830184610465565b92915050565b600080fd5b600060ff82169050919050565b6104aa81610494565b81146104b557600080fd5b50565b6000813590506104c7816104a1565b92915050565b600063ffffffff82169050919050565b6104e6816104cd565b81146104f157600080fd5b50565b600081359050610503816104dd565b92915050565b600073ffffffffffffffffffffffffffffffffffffffff82169050919050565b600061053482610509565b9050919050565b61054481610529565b811461054f57600080fd5b50565b6000813590506105618161053b565b92915050565b61057081610427565b811461057b57600080fd5b50565b60008135905061058d81610567565b92915050565b61059c8161045b565b81146105a757600080fd5b50565b6000813590506105b981610593565b92915050565b600080600080600080600060e0888a0312156105de576105dd61048f565b5b60006105ec8a828b016104b8565b97505060206105fd8a828b016104f4565b965050604061060e8a828b01610552565b955050606061061f8a828b016104f4565b94505060806106308a828b01610552565b93505060a06106418a828b0161057e565b92505060c06106528a828b016105aa565b91505092959891949750929550565b6000602082840312156106775761067661048f565b5b6000610685848285016105aa565b91505092915050565b600080fd5b60008190508260208002820111156106ae576106ad61068e565b5b92915050565b60008060008061046085870312156106cf576106ce61048f565b5b60006106dd878288016105aa565b94505060206106ee87828801610693565b935050610420610700878288016104f4565b925050610440610712878288016105aa565b91505092959194509250565b60008115159050919050565b6107338161071e565b82525050565b600060208201905061074e600083018461072a565b92915050565b7f4e487b7100000000000000000000000000000000000000000000000000000000600052603260045260246000fd5b6000819050919050565b61079e6107998261045b565b610783565b82525050565b60006107b0828561078d565b6020820191506107c0828461078d565b6020820191508190509392505050565b60008160f81b9050919050565b60006107e8826107d0565b9050919050565b6108006107fb82610494565b6107dd565b82525050565b60008160e01b9050919050565b600061081e82610806565b9050919050565b610836610831826104cd565b610813565b82525050565b60008160601b9050919050565b60006108548261083c565b9050919050565b600061086682610849565b9050919050565b61087e61087982610529565b61085b565b82525050565b6000819050919050565b61089f61089a82610427565b610884565b82525050565b60006108b1828a6107ef565b6001820191506108c18289610825565b6004820191506108d1828861086d565b6014820191506108e18287610825565b6004820191506108f1828661086d565b601482019150610901828561088e565b602082019150610911828461078d565b60208201915081905098975050505050505050565b7f4e487b7100000000000000000000000000000000000000000000000000000000600052601160045260246000fd5b60008160011c9050919050565b6000808291508390505b60018511156109ac5780860481111561098857610987610926565b5b60018516156109975780820291505b80810290506109a585610955565b945061096c565b94509492505050565b6000826109c55760019050610a81565b816109d35760009050610a81565b81600181146109e957600281146109f357610a22565b6001915050610a81565b60ff841115610a0557610a04610926565b5b8360020a915084821115610a1c57610a1b610926565b5b50610a81565b5060208310610133831016604e8410600b8410161715610a575782820a905083811115610a5257610a51610926565b5b610a81565b610a648484846001610962565b92509050818404811115610a7b57610a7a610926565b5b81810290505b9392505050565b6000610a9382610427565b9150610a9e83610427565b9250610acb7fffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff84846109b5565b905092915050565b6000610ade82610427565b9150610ae983610427565b9250828203905081811115610b0157610b00610926565b5b92915050565b6000610b1282610427565b91507fffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff8203610b4457610b43610926565b5b600182019050919050565b7f4e487b7100000000000000000000000000000000000000000000000000000000600052600160045260246000fdfea26469706673582212200a5ce957b56351d740fe1d0b82d988021b6f83527b8665854b0b0c5ca6b4e1db64736f6c63430008180033";

type DepositContract2ConstructorParams =
  | [signer?: Signer]
  | ConstructorParameters<typeof ContractFactory>;

const isSuperArgs = (
  xs: DepositContract2ConstructorParams
): xs is ConstructorParameters<typeof ContractFactory> => xs.length > 1;

export class DepositContract2__factory extends ContractFactory {
  constructor(...args: DepositContract2ConstructorParams) {
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
      DepositContract2 & {
        deploymentTransaction(): ContractTransactionResponse;
      }
    >;
  }
  override connect(runner: ContractRunner | null): DepositContract2__factory {
    return super.connect(runner) as DepositContract2__factory;
  }

  static readonly bytecode = _bytecode;
  static readonly abi = _abi;
  static createInterface(): DepositContract2Interface {
    return new Interface(_abi) as DepositContract2Interface;
  }
  static connect(
    address: string,
    runner?: ContractRunner | null
  ): DepositContract2 {
    return new Contract(address, _abi, runner) as unknown as DepositContract2;
  }
}
