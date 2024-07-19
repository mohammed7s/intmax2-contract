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
  WithdrawalQueueLib,
  WithdrawalQueueLibInterface,
} from "../../../../contracts/common/queue/WithdrawalQueueLib";

const _abi = [
  {
    inputs: [],
    name: "QueueIsEmpty",
    type: "error",
  },
] as const;

const _bytecode =
  "0x60566050600b82828239805160001a6073146043577f4e487b7100000000000000000000000000000000000000000000000000000000600052600060045260246000fd5b30600052607381538281f3fe73000000000000000000000000000000000000000030146080604052600080fdfea2646970667358221220d0dd869c59f0cd887bb5598ac7e4a2d446684692e7458c89b1b37085c80bf03764736f6c63430008180033";

type WithdrawalQueueLibConstructorParams =
  | [signer?: Signer]
  | ConstructorParameters<typeof ContractFactory>;

const isSuperArgs = (
  xs: WithdrawalQueueLibConstructorParams
): xs is ConstructorParameters<typeof ContractFactory> => xs.length > 1;

export class WithdrawalQueueLib__factory extends ContractFactory {
  constructor(...args: WithdrawalQueueLibConstructorParams) {
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
      WithdrawalQueueLib & {
        deploymentTransaction(): ContractTransactionResponse;
      }
    >;
  }
  override connect(runner: ContractRunner | null): WithdrawalQueueLib__factory {
    return super.connect(runner) as WithdrawalQueueLib__factory;
  }

  static readonly bytecode = _bytecode;
  static readonly abi = _abi;
  static createInterface(): WithdrawalQueueLibInterface {
    return new Interface(_abi) as WithdrawalQueueLibInterface;
  }
  static connect(
    address: string,
    runner?: ContractRunner | null
  ): WithdrawalQueueLib {
    return new Contract(address, _abi, runner) as unknown as WithdrawalQueueLib;
  }
}
