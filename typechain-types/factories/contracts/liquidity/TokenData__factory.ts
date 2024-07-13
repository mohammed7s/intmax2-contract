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
  TokenData,
  TokenDataInterface,
} from "../../../contracts/liquidity/TokenData";

const _abi = [
  {
    inputs: [],
    name: "InvalidInitialization",
    type: "error",
  },
  {
    inputs: [],
    name: "InvalidTokenAddress",
    type: "error",
  },
  {
    inputs: [],
    name: "InvalidTokenInfo",
    type: "error",
  },
  {
    inputs: [],
    name: "NotInitializing",
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
        internalType: "address",
        name: "_usdc",
        type: "address",
      },
      {
        internalType: "address",
        name: "_wbtc",
        type: "address",
      },
    ],
    name: "__TokenInfo_init",
    outputs: [],
    stateMutability: "nonpayable",
    type: "function",
  },
] as const;

const _bytecode =
  "0x6080604052600060025534801561001557600080fd5b5061066f806100256000396000f3fe608060405234801561001057600080fd5b506004361061002b5760003560e01c8063a7f3084f14610030575b600080fd5b61004a6004803603810190610045919061055d565b61004c565b005b610054610088565b610063600080600060016100c8565b50610073600183600060016100c8565b50610083600182600060016100c8565b505050565b610090610405565b6100c6576040517fd7e6bcf800000000000000000000000000000000000000000000000000000000815260040160405180910390fd5b565b60008060025490506001600260008282546100e391906105d6565b925050819055506003604051806060016040528088600381111561010a5761010961060a565b5b81526020018773ffffffffffffffffffffffffffffffffffffffff16815260200186815250908060018154018082558091505060019003906000526020600020906002020160009091909190915060008201518160000160006101000a81548160ff021916908360038111156101835761018261060a565b5b021790555060208201518160000160016101000a81548173ffffffffffffffffffffffffffffffffffffffff021916908373ffffffffffffffffffffffffffffffffffffffff16021790555060408201518160010155505082156101fd576101fb8163ffffffff16600061042590919063ffffffff16565b505b600060038111156102115761021061060a565b5b8660038111156102245761022361060a565b5b036102905780600460008073ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff16815260200190815260200160002060006101000a81548163ffffffff021916908363ffffffff160217905550809150506103fd565b600073ffffffffffffffffffffffffffffffffffffffff168573ffffffffffffffffffffffffffffffffffffffff16036102f6576040517f1eb00b0600000000000000000000000000000000000000000000000000000000815260040160405180910390fd5b6001600381111561030a5761030961060a565b5b86600381111561031d5761031c61060a565b5b036103895780600460008773ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff16815260200190815260200160002060006101000a81548163ffffffff021916908363ffffffff160217905550809150506103fd565b80600560008773ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff168152602001908152602001600020600086815260200190815260200160002060006101000a81548163ffffffff021916908363ffffffff160217905550809150505b949350505050565b600061040f61043f565b60000160089054906101000a900460ff16905090565b6000610437836000018360001b610467565b905092915050565b60007ff0c57e16840df040f15088dc2f81fe391c3923bec73e23a9662efc9c229c6a00905090565b600061047383836104d7565b6104cc5782600001829080600181540180825580915050600190039060005260206000200160009091909190915055826000018054905083600101600084815260200190815260200160002081905550600190506104d1565b600090505b92915050565b600080836001016000848152602001908152602001600020541415905092915050565b600080fd5b600073ffffffffffffffffffffffffffffffffffffffff82169050919050565b600061052a826104ff565b9050919050565b61053a8161051f565b811461054557600080fd5b50565b60008135905061055781610531565b92915050565b60008060408385031215610574576105736104fa565b5b600061058285828601610548565b925050602061059385828601610548565b9150509250929050565b6000819050919050565b7f4e487b7100000000000000000000000000000000000000000000000000000000600052601160045260246000fd5b60006105e18261059d565b91506105ec8361059d565b9250828201905080821115610604576106036105a7565b5b92915050565b7f4e487b7100000000000000000000000000000000000000000000000000000000600052602160045260246000fdfea264697066735822122068fd94880117b49fb4ce8c1903962afc599fccf95e9eae17ca277ce3e74daae364736f6c63430008180033";

type TokenDataConstructorParams =
  | [signer?: Signer]
  | ConstructorParameters<typeof ContractFactory>;

const isSuperArgs = (
  xs: TokenDataConstructorParams
): xs is ConstructorParameters<typeof ContractFactory> => xs.length > 1;

export class TokenData__factory extends ContractFactory {
  constructor(...args: TokenDataConstructorParams) {
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
      TokenData & {
        deploymentTransaction(): ContractTransactionResponse;
      }
    >;
  }
  override connect(runner: ContractRunner | null): TokenData__factory {
    return super.connect(runner) as TokenData__factory;
  }

  static readonly bytecode = _bytecode;
  static readonly abi = _abi;
  static createInterface(): TokenDataInterface {
    return new Interface(_abi) as TokenDataInterface;
  }
  static connect(address: string, runner?: ContractRunner | null): TokenData {
    return new Contract(address, _abi, runner) as unknown as TokenData;
  }
}
