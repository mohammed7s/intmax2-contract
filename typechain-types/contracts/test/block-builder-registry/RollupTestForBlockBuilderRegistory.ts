/* Autogenerated file. Do not edit manually. */
/* tslint:disable */
/* eslint-disable */
import type {
  BaseContract,
  BigNumberish,
  BytesLike,
  FunctionFragment,
  Result,
  Interface,
  AddressLike,
  ContractRunner,
  ContractMethod,
  Listener,
} from "ethers";
import type {
  TypedContractEvent,
  TypedDeferredTopicFilter,
  TypedEventLog,
  TypedListener,
  TypedContractMethod,
} from "../../../common";

export interface RollupTestForBlockBuilderRegistoryInterface extends Interface {
  getFunction(
    nameOrSignature: "getBlockHashAndBuilder" | "setTestData"
  ): FunctionFragment;

  encodeFunctionData(
    functionFragment: "getBlockHashAndBuilder",
    values: [BigNumberish]
  ): string;
  encodeFunctionData(
    functionFragment: "setTestData",
    values: [BigNumberish, BytesLike, AddressLike]
  ): string;

  decodeFunctionResult(
    functionFragment: "getBlockHashAndBuilder",
    data: BytesLike
  ): Result;
  decodeFunctionResult(
    functionFragment: "setTestData",
    data: BytesLike
  ): Result;
}

export interface RollupTestForBlockBuilderRegistory extends BaseContract {
  connect(runner?: ContractRunner | null): RollupTestForBlockBuilderRegistory;
  waitForDeployment(): Promise<this>;

  interface: RollupTestForBlockBuilderRegistoryInterface;

  queryFilter<TCEvent extends TypedContractEvent>(
    event: TCEvent,
    fromBlockOrBlockhash?: string | number | undefined,
    toBlock?: string | number | undefined
  ): Promise<Array<TypedEventLog<TCEvent>>>;
  queryFilter<TCEvent extends TypedContractEvent>(
    filter: TypedDeferredTopicFilter<TCEvent>,
    fromBlockOrBlockhash?: string | number | undefined,
    toBlock?: string | number | undefined
  ): Promise<Array<TypedEventLog<TCEvent>>>;

  on<TCEvent extends TypedContractEvent>(
    event: TCEvent,
    listener: TypedListener<TCEvent>
  ): Promise<this>;
  on<TCEvent extends TypedContractEvent>(
    filter: TypedDeferredTopicFilter<TCEvent>,
    listener: TypedListener<TCEvent>
  ): Promise<this>;

  once<TCEvent extends TypedContractEvent>(
    event: TCEvent,
    listener: TypedListener<TCEvent>
  ): Promise<this>;
  once<TCEvent extends TypedContractEvent>(
    filter: TypedDeferredTopicFilter<TCEvent>,
    listener: TypedListener<TCEvent>
  ): Promise<this>;

  listeners<TCEvent extends TypedContractEvent>(
    event: TCEvent
  ): Promise<Array<TypedListener<TCEvent>>>;
  listeners(eventName?: string): Promise<Array<Listener>>;
  removeAllListeners<TCEvent extends TypedContractEvent>(
    event?: TCEvent
  ): Promise<this>;

  getBlockHashAndBuilder: TypedContractMethod<
    [_key: BigNumberish],
    [[string, string]],
    "view"
  >;

  setTestData: TypedContractMethod<
    [key: BigNumberish, _hash: BytesLike, _address: AddressLike],
    [void],
    "nonpayable"
  >;

  getFunction<T extends ContractMethod = ContractMethod>(
    key: string | FunctionFragment
  ): T;

  getFunction(
    nameOrSignature: "getBlockHashAndBuilder"
  ): TypedContractMethod<[_key: BigNumberish], [[string, string]], "view">;
  getFunction(
    nameOrSignature: "setTestData"
  ): TypedContractMethod<
    [key: BigNumberish, _hash: BytesLike, _address: AddressLike],
    [void],
    "nonpayable"
  >;

  filters: {};
}
