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
  EventFragment,
  AddressLike,
  ContractRunner,
  ContractMethod,
  Listener,
} from "ethers";
import type {
  TypedContractEvent,
  TypedDeferredTopicFilter,
  TypedEventLog,
  TypedLogDescription,
  TypedListener,
  TypedContractMethod,
} from "../../common";

export declare namespace FraudProofPublicInputsLib {
  export type FraudProofPublicInputsStruct = {
    blockHash: BytesLike;
    blockNumber: BigNumberish;
    challenger: AddressLike;
  };

  export type FraudProofPublicInputsStructOutput = [
    blockHash: string,
    blockNumber: bigint,
    challenger: string
  ] & { blockHash: string; blockNumber: bigint; challenger: string };
}

export interface BlockBuilderRegistryInterface extends Interface {
  getFunction(
    nameOrSignature:
      | "UPGRADE_INTERFACE_VERSION"
      | "blockBuilders"
      | "initialize"
      | "isValidBlockBuilder"
      | "owner"
      | "proxiableUUID"
      | "renounceOwnership"
      | "setBurnAddress"
      | "stopBlockBuilder"
      | "submitBlockFraudProof"
      | "transferOwnership"
      | "unstake"
      | "updateBlockBuilder"
      | "upgradeToAndCall"
  ): FunctionFragment;

  getEvent(
    nameOrSignatureOrTopic:
      | "BlockBuilderSlashed"
      | "BlockBuilderStopped"
      | "BlockBuilderUpdated"
      | "BlockFraudProofSubmitted"
      | "Initialized"
      | "OwnershipTransferred"
      | "Upgraded"
  ): EventFragment;

  encodeFunctionData(
    functionFragment: "UPGRADE_INTERFACE_VERSION",
    values?: undefined
  ): string;
  encodeFunctionData(
    functionFragment: "blockBuilders",
    values: [AddressLike]
  ): string;
  encodeFunctionData(
    functionFragment: "initialize",
    values: [AddressLike, AddressLike]
  ): string;
  encodeFunctionData(
    functionFragment: "isValidBlockBuilder",
    values: [AddressLike]
  ): string;
  encodeFunctionData(functionFragment: "owner", values?: undefined): string;
  encodeFunctionData(
    functionFragment: "proxiableUUID",
    values?: undefined
  ): string;
  encodeFunctionData(
    functionFragment: "renounceOwnership",
    values?: undefined
  ): string;
  encodeFunctionData(
    functionFragment: "setBurnAddress",
    values: [AddressLike]
  ): string;
  encodeFunctionData(
    functionFragment: "stopBlockBuilder",
    values?: undefined
  ): string;
  encodeFunctionData(
    functionFragment: "submitBlockFraudProof",
    values: [FraudProofPublicInputsLib.FraudProofPublicInputsStruct, BytesLike]
  ): string;
  encodeFunctionData(
    functionFragment: "transferOwnership",
    values: [AddressLike]
  ): string;
  encodeFunctionData(functionFragment: "unstake", values?: undefined): string;
  encodeFunctionData(
    functionFragment: "updateBlockBuilder",
    values: [string]
  ): string;
  encodeFunctionData(
    functionFragment: "upgradeToAndCall",
    values: [AddressLike, BytesLike]
  ): string;

  decodeFunctionResult(
    functionFragment: "UPGRADE_INTERFACE_VERSION",
    data: BytesLike
  ): Result;
  decodeFunctionResult(
    functionFragment: "blockBuilders",
    data: BytesLike
  ): Result;
  decodeFunctionResult(functionFragment: "initialize", data: BytesLike): Result;
  decodeFunctionResult(
    functionFragment: "isValidBlockBuilder",
    data: BytesLike
  ): Result;
  decodeFunctionResult(functionFragment: "owner", data: BytesLike): Result;
  decodeFunctionResult(
    functionFragment: "proxiableUUID",
    data: BytesLike
  ): Result;
  decodeFunctionResult(
    functionFragment: "renounceOwnership",
    data: BytesLike
  ): Result;
  decodeFunctionResult(
    functionFragment: "setBurnAddress",
    data: BytesLike
  ): Result;
  decodeFunctionResult(
    functionFragment: "stopBlockBuilder",
    data: BytesLike
  ): Result;
  decodeFunctionResult(
    functionFragment: "submitBlockFraudProof",
    data: BytesLike
  ): Result;
  decodeFunctionResult(
    functionFragment: "transferOwnership",
    data: BytesLike
  ): Result;
  decodeFunctionResult(functionFragment: "unstake", data: BytesLike): Result;
  decodeFunctionResult(
    functionFragment: "updateBlockBuilder",
    data: BytesLike
  ): Result;
  decodeFunctionResult(
    functionFragment: "upgradeToAndCall",
    data: BytesLike
  ): Result;
}

export namespace BlockBuilderSlashedEvent {
  export type InputTuple = [blockBuilder: AddressLike, challenger: AddressLike];
  export type OutputTuple = [blockBuilder: string, challenger: string];
  export interface OutputObject {
    blockBuilder: string;
    challenger: string;
  }
  export type Event = TypedContractEvent<InputTuple, OutputTuple, OutputObject>;
  export type Filter = TypedDeferredTopicFilter<Event>;
  export type Log = TypedEventLog<Event>;
  export type LogDescription = TypedLogDescription<Event>;
}

export namespace BlockBuilderStoppedEvent {
  export type InputTuple = [blockBuilder: AddressLike];
  export type OutputTuple = [blockBuilder: string];
  export interface OutputObject {
    blockBuilder: string;
  }
  export type Event = TypedContractEvent<InputTuple, OutputTuple, OutputObject>;
  export type Filter = TypedDeferredTopicFilter<Event>;
  export type Log = TypedEventLog<Event>;
  export type LogDescription = TypedLogDescription<Event>;
}

export namespace BlockBuilderUpdatedEvent {
  export type InputTuple = [
    blockBuilder: AddressLike,
    url: string,
    stakeAmount: BigNumberish
  ];
  export type OutputTuple = [
    blockBuilder: string,
    url: string,
    stakeAmount: bigint
  ];
  export interface OutputObject {
    blockBuilder: string;
    url: string;
    stakeAmount: bigint;
  }
  export type Event = TypedContractEvent<InputTuple, OutputTuple, OutputObject>;
  export type Filter = TypedDeferredTopicFilter<Event>;
  export type Log = TypedEventLog<Event>;
  export type LogDescription = TypedLogDescription<Event>;
}

export namespace BlockFraudProofSubmittedEvent {
  export type InputTuple = [
    blockNumber: BigNumberish,
    blockBuilder: AddressLike,
    challenger: AddressLike
  ];
  export type OutputTuple = [
    blockNumber: bigint,
    blockBuilder: string,
    challenger: string
  ];
  export interface OutputObject {
    blockNumber: bigint;
    blockBuilder: string;
    challenger: string;
  }
  export type Event = TypedContractEvent<InputTuple, OutputTuple, OutputObject>;
  export type Filter = TypedDeferredTopicFilter<Event>;
  export type Log = TypedEventLog<Event>;
  export type LogDescription = TypedLogDescription<Event>;
}

export namespace InitializedEvent {
  export type InputTuple = [version: BigNumberish];
  export type OutputTuple = [version: bigint];
  export interface OutputObject {
    version: bigint;
  }
  export type Event = TypedContractEvent<InputTuple, OutputTuple, OutputObject>;
  export type Filter = TypedDeferredTopicFilter<Event>;
  export type Log = TypedEventLog<Event>;
  export type LogDescription = TypedLogDescription<Event>;
}

export namespace OwnershipTransferredEvent {
  export type InputTuple = [previousOwner: AddressLike, newOwner: AddressLike];
  export type OutputTuple = [previousOwner: string, newOwner: string];
  export interface OutputObject {
    previousOwner: string;
    newOwner: string;
  }
  export type Event = TypedContractEvent<InputTuple, OutputTuple, OutputObject>;
  export type Filter = TypedDeferredTopicFilter<Event>;
  export type Log = TypedEventLog<Event>;
  export type LogDescription = TypedLogDescription<Event>;
}

export namespace UpgradedEvent {
  export type InputTuple = [implementation: AddressLike];
  export type OutputTuple = [implementation: string];
  export interface OutputObject {
    implementation: string;
  }
  export type Event = TypedContractEvent<InputTuple, OutputTuple, OutputObject>;
  export type Filter = TypedDeferredTopicFilter<Event>;
  export type Log = TypedEventLog<Event>;
  export type LogDescription = TypedLogDescription<Event>;
}

export interface BlockBuilderRegistry extends BaseContract {
  connect(runner?: ContractRunner | null): BlockBuilderRegistry;
  waitForDeployment(): Promise<this>;

  interface: BlockBuilderRegistryInterface;

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

  UPGRADE_INTERFACE_VERSION: TypedContractMethod<[], [string], "view">;

  blockBuilders: TypedContractMethod<
    [arg0: AddressLike],
    [
      [string, bigint, bigint, bigint, boolean] & {
        blockBuilderUrl: string;
        stakeAmount: bigint;
        stopTime: bigint;
        numSlashes: bigint;
        isValid: boolean;
      }
    ],
    "view"
  >;

  initialize: TypedContractMethod<
    [_rollup: AddressLike, _fraudVerifier: AddressLike],
    [void],
    "nonpayable"
  >;

  isValidBlockBuilder: TypedContractMethod<
    [blockBuilder: AddressLike],
    [boolean],
    "view"
  >;

  owner: TypedContractMethod<[], [string], "view">;

  proxiableUUID: TypedContractMethod<[], [string], "view">;

  renounceOwnership: TypedContractMethod<[], [void], "nonpayable">;

  setBurnAddress: TypedContractMethod<
    [_burnAddress: AddressLike],
    [void],
    "nonpayable"
  >;

  stopBlockBuilder: TypedContractMethod<[], [void], "nonpayable">;

  submitBlockFraudProof: TypedContractMethod<
    [
      publicInputs: FraudProofPublicInputsLib.FraudProofPublicInputsStruct,
      proof: BytesLike
    ],
    [void],
    "nonpayable"
  >;

  transferOwnership: TypedContractMethod<
    [newOwner: AddressLike],
    [void],
    "nonpayable"
  >;

  unstake: TypedContractMethod<[], [void], "nonpayable">;

  updateBlockBuilder: TypedContractMethod<[url: string], [void], "payable">;

  upgradeToAndCall: TypedContractMethod<
    [newImplementation: AddressLike, data: BytesLike],
    [void],
    "payable"
  >;

  getFunction<T extends ContractMethod = ContractMethod>(
    key: string | FunctionFragment
  ): T;

  getFunction(
    nameOrSignature: "UPGRADE_INTERFACE_VERSION"
  ): TypedContractMethod<[], [string], "view">;
  getFunction(
    nameOrSignature: "blockBuilders"
  ): TypedContractMethod<
    [arg0: AddressLike],
    [
      [string, bigint, bigint, bigint, boolean] & {
        blockBuilderUrl: string;
        stakeAmount: bigint;
        stopTime: bigint;
        numSlashes: bigint;
        isValid: boolean;
      }
    ],
    "view"
  >;
  getFunction(
    nameOrSignature: "initialize"
  ): TypedContractMethod<
    [_rollup: AddressLike, _fraudVerifier: AddressLike],
    [void],
    "nonpayable"
  >;
  getFunction(
    nameOrSignature: "isValidBlockBuilder"
  ): TypedContractMethod<[blockBuilder: AddressLike], [boolean], "view">;
  getFunction(
    nameOrSignature: "owner"
  ): TypedContractMethod<[], [string], "view">;
  getFunction(
    nameOrSignature: "proxiableUUID"
  ): TypedContractMethod<[], [string], "view">;
  getFunction(
    nameOrSignature: "renounceOwnership"
  ): TypedContractMethod<[], [void], "nonpayable">;
  getFunction(
    nameOrSignature: "setBurnAddress"
  ): TypedContractMethod<[_burnAddress: AddressLike], [void], "nonpayable">;
  getFunction(
    nameOrSignature: "stopBlockBuilder"
  ): TypedContractMethod<[], [void], "nonpayable">;
  getFunction(
    nameOrSignature: "submitBlockFraudProof"
  ): TypedContractMethod<
    [
      publicInputs: FraudProofPublicInputsLib.FraudProofPublicInputsStruct,
      proof: BytesLike
    ],
    [void],
    "nonpayable"
  >;
  getFunction(
    nameOrSignature: "transferOwnership"
  ): TypedContractMethod<[newOwner: AddressLike], [void], "nonpayable">;
  getFunction(
    nameOrSignature: "unstake"
  ): TypedContractMethod<[], [void], "nonpayable">;
  getFunction(
    nameOrSignature: "updateBlockBuilder"
  ): TypedContractMethod<[url: string], [void], "payable">;
  getFunction(
    nameOrSignature: "upgradeToAndCall"
  ): TypedContractMethod<
    [newImplementation: AddressLike, data: BytesLike],
    [void],
    "payable"
  >;

  getEvent(
    key: "BlockBuilderSlashed"
  ): TypedContractEvent<
    BlockBuilderSlashedEvent.InputTuple,
    BlockBuilderSlashedEvent.OutputTuple,
    BlockBuilderSlashedEvent.OutputObject
  >;
  getEvent(
    key: "BlockBuilderStopped"
  ): TypedContractEvent<
    BlockBuilderStoppedEvent.InputTuple,
    BlockBuilderStoppedEvent.OutputTuple,
    BlockBuilderStoppedEvent.OutputObject
  >;
  getEvent(
    key: "BlockBuilderUpdated"
  ): TypedContractEvent<
    BlockBuilderUpdatedEvent.InputTuple,
    BlockBuilderUpdatedEvent.OutputTuple,
    BlockBuilderUpdatedEvent.OutputObject
  >;
  getEvent(
    key: "BlockFraudProofSubmitted"
  ): TypedContractEvent<
    BlockFraudProofSubmittedEvent.InputTuple,
    BlockFraudProofSubmittedEvent.OutputTuple,
    BlockFraudProofSubmittedEvent.OutputObject
  >;
  getEvent(
    key: "Initialized"
  ): TypedContractEvent<
    InitializedEvent.InputTuple,
    InitializedEvent.OutputTuple,
    InitializedEvent.OutputObject
  >;
  getEvent(
    key: "OwnershipTransferred"
  ): TypedContractEvent<
    OwnershipTransferredEvent.InputTuple,
    OwnershipTransferredEvent.OutputTuple,
    OwnershipTransferredEvent.OutputObject
  >;
  getEvent(
    key: "Upgraded"
  ): TypedContractEvent<
    UpgradedEvent.InputTuple,
    UpgradedEvent.OutputTuple,
    UpgradedEvent.OutputObject
  >;

  filters: {
    "BlockBuilderSlashed(address,address)": TypedContractEvent<
      BlockBuilderSlashedEvent.InputTuple,
      BlockBuilderSlashedEvent.OutputTuple,
      BlockBuilderSlashedEvent.OutputObject
    >;
    BlockBuilderSlashed: TypedContractEvent<
      BlockBuilderSlashedEvent.InputTuple,
      BlockBuilderSlashedEvent.OutputTuple,
      BlockBuilderSlashedEvent.OutputObject
    >;

    "BlockBuilderStopped(address)": TypedContractEvent<
      BlockBuilderStoppedEvent.InputTuple,
      BlockBuilderStoppedEvent.OutputTuple,
      BlockBuilderStoppedEvent.OutputObject
    >;
    BlockBuilderStopped: TypedContractEvent<
      BlockBuilderStoppedEvent.InputTuple,
      BlockBuilderStoppedEvent.OutputTuple,
      BlockBuilderStoppedEvent.OutputObject
    >;

    "BlockBuilderUpdated(address,string,uint256)": TypedContractEvent<
      BlockBuilderUpdatedEvent.InputTuple,
      BlockBuilderUpdatedEvent.OutputTuple,
      BlockBuilderUpdatedEvent.OutputObject
    >;
    BlockBuilderUpdated: TypedContractEvent<
      BlockBuilderUpdatedEvent.InputTuple,
      BlockBuilderUpdatedEvent.OutputTuple,
      BlockBuilderUpdatedEvent.OutputObject
    >;

    "BlockFraudProofSubmitted(uint32,address,address)": TypedContractEvent<
      BlockFraudProofSubmittedEvent.InputTuple,
      BlockFraudProofSubmittedEvent.OutputTuple,
      BlockFraudProofSubmittedEvent.OutputObject
    >;
    BlockFraudProofSubmitted: TypedContractEvent<
      BlockFraudProofSubmittedEvent.InputTuple,
      BlockFraudProofSubmittedEvent.OutputTuple,
      BlockFraudProofSubmittedEvent.OutputObject
    >;

    "Initialized(uint64)": TypedContractEvent<
      InitializedEvent.InputTuple,
      InitializedEvent.OutputTuple,
      InitializedEvent.OutputObject
    >;
    Initialized: TypedContractEvent<
      InitializedEvent.InputTuple,
      InitializedEvent.OutputTuple,
      InitializedEvent.OutputObject
    >;

    "OwnershipTransferred(address,address)": TypedContractEvent<
      OwnershipTransferredEvent.InputTuple,
      OwnershipTransferredEvent.OutputTuple,
      OwnershipTransferredEvent.OutputObject
    >;
    OwnershipTransferred: TypedContractEvent<
      OwnershipTransferredEvent.InputTuple,
      OwnershipTransferredEvent.OutputTuple,
      OwnershipTransferredEvent.OutputObject
    >;

    "Upgraded(address)": TypedContractEvent<
      UpgradedEvent.InputTuple,
      UpgradedEvent.OutputTuple,
      UpgradedEvent.OutputObject
    >;
    Upgraded: TypedContractEvent<
      UpgradedEvent.InputTuple,
      UpgradedEvent.OutputTuple,
      UpgradedEvent.OutputObject
    >;
  };
}
