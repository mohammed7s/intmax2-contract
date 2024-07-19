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
  BlockBuilderInfoLibTest,
  BlockBuilderInfoLibTestInterface,
} from "../../../../contracts/test/block-builder-registry/BlockBuilderInfoLibTest";

const _abi = [
  {
    inputs: [
      {
        components: [
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
        internalType: "struct IBlockBuilderRegistry.BlockBuilderInfo",
        name: "info",
        type: "tuple",
      },
    ],
    name: "isChallengeDuration",
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
    inputs: [
      {
        components: [
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
        internalType: "struct IBlockBuilderRegistry.BlockBuilderInfo",
        name: "info",
        type: "tuple",
      },
    ],
    name: "isStakeAmountSufficient",
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
  {
    inputs: [
      {
        components: [
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
        internalType: "struct IBlockBuilderRegistry.BlockBuilderInfo",
        name: "info",
        type: "tuple",
      },
    ],
    name: "isStaking",
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
  "0x608060405234801561001057600080fd5b506104db806100206000396000f3fe608060405234801561001057600080fd5b50600436106100415760003560e01c806320932d641461004657806342f3205b146100765780636f403374146100a6575b600080fd5b610060600480360381019061005b91906103cf565b6100d6565b60405161006d9190610427565b60405180910390f35b610090600480360381019061008b91906103cf565b6100e8565b60405161009d9190610427565b60405180910390f35b6100c060048036038101906100bb91906103cf565b6100fa565b6040516100cd9190610427565b60405180910390f35b60006100e18261010c565b9050919050565b60006100f38261011d565b9050919050565b600061010582610136565b9050919050565b600080826020015114159050919050565b600067016345785d8a0000826020015110159050919050565b60006201518082604001514261014c9190610471565b10159050919050565b6000604051905090565b600080fd5b600080fd5b600080fd5b6000601f19601f8301169050919050565b7f4e487b7100000000000000000000000000000000000000000000000000000000600052604160045260246000fd5b6101b78261016e565b810181811067ffffffffffffffff821117156101d6576101d561017f565b5b80604052505050565b60006101e9610155565b90506101f582826101ae565b919050565b600080fd5b600080fd5b600080fd5b600067ffffffffffffffff8211156102245761022361017f565b5b61022d8261016e565b9050602081019050919050565b82818337600083830152505050565b600061025c61025784610209565b6101df565b90508281526020810184848401111561027857610277610204565b5b61028384828561023a565b509392505050565b600082601f8301126102a05761029f6101ff565b5b81356102b0848260208601610249565b91505092915050565b6000819050919050565b6102cc816102b9565b81146102d757600080fd5b50565b6000813590506102e9816102c3565b92915050565b60008115159050919050565b610304816102ef565b811461030f57600080fd5b50565b600081359050610321816102fb565b92915050565b600060a0828403121561033d5761033c610169565b5b61034760a06101df565b9050600082013567ffffffffffffffff811115610367576103666101fa565b5b6103738482850161028b565b6000830152506020610387848285016102da565b602083015250604061039b848285016102da565b60408301525060606103af848285016102da565b60608301525060806103c384828501610312565b60808301525092915050565b6000602082840312156103e5576103e461015f565b5b600082013567ffffffffffffffff81111561040357610402610164565b5b61040f84828501610327565b91505092915050565b610421816102ef565b82525050565b600060208201905061043c6000830184610418565b92915050565b7f4e487b7100000000000000000000000000000000000000000000000000000000600052601160045260246000fd5b600061047c826102b9565b9150610487836102b9565b925082820390508181111561049f5761049e610442565b5b9291505056fea26469706673582212201279286864fa1c4213b98b6eaeb4b82e740ae1e130ac74d90edefa17aea7084e64736f6c63430008180033";

type BlockBuilderInfoLibTestConstructorParams =
  | [signer?: Signer]
  | ConstructorParameters<typeof ContractFactory>;

const isSuperArgs = (
  xs: BlockBuilderInfoLibTestConstructorParams
): xs is ConstructorParameters<typeof ContractFactory> => xs.length > 1;

export class BlockBuilderInfoLibTest__factory extends ContractFactory {
  constructor(...args: BlockBuilderInfoLibTestConstructorParams) {
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
      BlockBuilderInfoLibTest & {
        deploymentTransaction(): ContractTransactionResponse;
      }
    >;
  }
  override connect(
    runner: ContractRunner | null
  ): BlockBuilderInfoLibTest__factory {
    return super.connect(runner) as BlockBuilderInfoLibTest__factory;
  }

  static readonly bytecode = _bytecode;
  static readonly abi = _abi;
  static createInterface(): BlockBuilderInfoLibTestInterface {
    return new Interface(_abi) as BlockBuilderInfoLibTestInterface;
  }
  static connect(
    address: string,
    runner?: ContractRunner | null
  ): BlockBuilderInfoLibTest {
    return new Contract(
      address,
      _abi,
      runner
    ) as unknown as BlockBuilderInfoLibTest;
  }
}
