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

export declare namespace IRollup {
  export type WithdrawalStruct = {
    recipient: AddressLike;
    tokenIndex: BigNumberish;
    amount: BigNumberish;
    salt: BytesLike;
  };

  export type WithdrawalStructOutput = [
    recipient: string,
    tokenIndex: bigint,
    amount: bigint,
    salt: string
  ] & { recipient: string; tokenIndex: bigint; amount: bigint; salt: string };

  export type WithdrawalProofPublicInputsStruct = {
    withdrawalTreeRoot: BytesLike;
    withdrawalAggregator: AddressLike;
  };

  export type WithdrawalProofPublicInputsStructOutput = [
    withdrawalTreeRoot: string,
    withdrawalAggregator: string
  ] & { withdrawalTreeRoot: string; withdrawalAggregator: string };

  export type FraudProofPublicInputsStruct = {
    blockHash: BytesLike;
    blockNumber: BigNumberish;
    blockBuilder: AddressLike;
    challenger: AddressLike;
  };

  export type FraudProofPublicInputsStructOutput = [
    blockHash: string,
    blockNumber: bigint,
    blockBuilder: string,
    challenger: string
  ] & {
    blockHash: string;
    blockNumber: bigint;
    blockBuilder: string;
    challenger: string;
  };
}

export interface RollupInterface extends Interface {
  getFunction(
    nameOrSignature:
      | "UPGRADE_INTERFACE_VERSION"
      | "getBlockHash"
      | "getDepositTreeRoot"
      | "getLastProcessedDepositId"
      | "getLastProcessedWithdrawalId"
      | "initialize"
      | "owner"
      | "postBlock"
      | "postWithdrawalRequests"
      | "processDeposits"
      | "proxiableUUID"
      | "renounceOwnership"
      | "submitBlockFraudProof"
      | "submitWithdrawals"
      | "transferOwnership"
      | "upgradeToAndCall"
  ): FunctionFragment;

  getEvent(
    nameOrSignatureOrTopic:
      | "BlockFraudProofSubmitted"
      | "BlockPosted"
      | "DepositsProcessed"
      | "Initialized"
      | "OwnershipTransferred"
      | "Upgraded"
      | "WithdrawRequested"
  ): EventFragment;

  encodeFunctionData(
    functionFragment: "UPGRADE_INTERFACE_VERSION",
    values?: undefined
  ): string;
  encodeFunctionData(
    functionFragment: "getBlockHash",
    values: [BigNumberish]
  ): string;
  encodeFunctionData(
    functionFragment: "getDepositTreeRoot",
    values?: undefined
  ): string;
  encodeFunctionData(
    functionFragment: "getLastProcessedDepositId",
    values?: undefined
  ): string;
  encodeFunctionData(
    functionFragment: "getLastProcessedWithdrawalId",
    values?: undefined
  ): string;
  encodeFunctionData(
    functionFragment: "initialize",
    values: [AddressLike, AddressLike, AddressLike, AddressLike]
  ): string;
  encodeFunctionData(functionFragment: "owner", values?: undefined): string;
  encodeFunctionData(
    functionFragment: "postBlock",
    values: [
      boolean,
      BytesLike,
      BigNumberish,
      BytesLike,
      BytesLike,
      [BigNumberish, BigNumberish],
      [BigNumberish, BigNumberish, BigNumberish, BigNumberish],
      [BigNumberish, BigNumberish, BigNumberish, BigNumberish]
    ]
  ): string;
  encodeFunctionData(
    functionFragment: "postWithdrawalRequests",
    values: [
      IRollup.WithdrawalStruct[],
      IRollup.WithdrawalProofPublicInputsStruct,
      BytesLike
    ]
  ): string;
  encodeFunctionData(
    functionFragment: "processDeposits",
    values: [BigNumberish, BytesLike[]]
  ): string;
  encodeFunctionData(
    functionFragment: "proxiableUUID",
    values?: undefined
  ): string;
  encodeFunctionData(
    functionFragment: "renounceOwnership",
    values?: undefined
  ): string;
  encodeFunctionData(
    functionFragment: "submitBlockFraudProof",
    values: [IRollup.FraudProofPublicInputsStruct, BytesLike]
  ): string;
  encodeFunctionData(
    functionFragment: "submitWithdrawals",
    values: [BigNumberish]
  ): string;
  encodeFunctionData(
    functionFragment: "transferOwnership",
    values: [AddressLike]
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
    functionFragment: "getBlockHash",
    data: BytesLike
  ): Result;
  decodeFunctionResult(
    functionFragment: "getDepositTreeRoot",
    data: BytesLike
  ): Result;
  decodeFunctionResult(
    functionFragment: "getLastProcessedDepositId",
    data: BytesLike
  ): Result;
  decodeFunctionResult(
    functionFragment: "getLastProcessedWithdrawalId",
    data: BytesLike
  ): Result;
  decodeFunctionResult(functionFragment: "initialize", data: BytesLike): Result;
  decodeFunctionResult(functionFragment: "owner", data: BytesLike): Result;
  decodeFunctionResult(functionFragment: "postBlock", data: BytesLike): Result;
  decodeFunctionResult(
    functionFragment: "postWithdrawalRequests",
    data: BytesLike
  ): Result;
  decodeFunctionResult(
    functionFragment: "processDeposits",
    data: BytesLike
  ): Result;
  decodeFunctionResult(
    functionFragment: "proxiableUUID",
    data: BytesLike
  ): Result;
  decodeFunctionResult(
    functionFragment: "renounceOwnership",
    data: BytesLike
  ): Result;
  decodeFunctionResult(
    functionFragment: "submitBlockFraudProof",
    data: BytesLike
  ): Result;
  decodeFunctionResult(
    functionFragment: "submitWithdrawals",
    data: BytesLike
  ): Result;
  decodeFunctionResult(
    functionFragment: "transferOwnership",
    data: BytesLike
  ): Result;
  decodeFunctionResult(
    functionFragment: "upgradeToAndCall",
    data: BytesLike
  ): Result;
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

export namespace BlockPostedEvent {
  export type InputTuple = [
    prevBlockHash: BytesLike,
    blockBuilder: AddressLike,
    blockNumber: BigNumberish,
    depositTreeRoot: BytesLike,
    signatureHash: BytesLike
  ];
  export type OutputTuple = [
    prevBlockHash: string,
    blockBuilder: string,
    blockNumber: bigint,
    depositTreeRoot: string,
    signatureHash: string
  ];
  export interface OutputObject {
    prevBlockHash: string;
    blockBuilder: string;
    blockNumber: bigint;
    depositTreeRoot: string;
    signatureHash: string;
  }
  export type Event = TypedContractEvent<InputTuple, OutputTuple, OutputObject>;
  export type Filter = TypedDeferredTopicFilter<Event>;
  export type Log = TypedEventLog<Event>;
  export type LogDescription = TypedLogDescription<Event>;
}

export namespace DepositsProcessedEvent {
  export type InputTuple = [depositTreeRoot: BytesLike];
  export type OutputTuple = [depositTreeRoot: string];
  export interface OutputObject {
    depositTreeRoot: string;
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

export namespace WithdrawRequestedEvent {
  export type InputTuple = [
    withdrawalRequest: BytesLike,
    withdrawalAggregator: AddressLike
  ];
  export type OutputTuple = [
    withdrawalRequest: string,
    withdrawalAggregator: string
  ];
  export interface OutputObject {
    withdrawalRequest: string;
    withdrawalAggregator: string;
  }
  export type Event = TypedContractEvent<InputTuple, OutputTuple, OutputObject>;
  export type Filter = TypedDeferredTopicFilter<Event>;
  export type Log = TypedEventLog<Event>;
  export type LogDescription = TypedLogDescription<Event>;
}

export interface Rollup extends BaseContract {
  connect(runner?: ContractRunner | null): Rollup;
  waitForDeployment(): Promise<this>;

  interface: RollupInterface;

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

  getBlockHash: TypedContractMethod<
    [blockNumber: BigNumberish],
    [string],
    "view"
  >;

  getDepositTreeRoot: TypedContractMethod<[], [string], "view">;

  getLastProcessedDepositId: TypedContractMethod<[], [bigint], "view">;

  getLastProcessedWithdrawalId: TypedContractMethod<[], [bigint], "view">;

  initialize: TypedContractMethod<
    [
      _scrollMessenger: AddressLike,
      _verifier: AddressLike,
      _liquidity: AddressLike,
      _blockBuilderRegistry: AddressLike
    ],
    [void],
    "nonpayable"
  >;

  owner: TypedContractMethod<[], [string], "view">;

  postBlock: TypedContractMethod<
    [
      isRegistrationBlock: boolean,
      txTreeRoot: BytesLike,
      senderFlags: BigNumberish,
      publicKeysHash: BytesLike,
      accountIdsHash: BytesLike,
      aggregatedPublicKey: [BigNumberish, BigNumberish],
      aggregatedSignature: [
        BigNumberish,
        BigNumberish,
        BigNumberish,
        BigNumberish
      ],
      messagePoint: [BigNumberish, BigNumberish, BigNumberish, BigNumberish]
    ],
    [bigint],
    "nonpayable"
  >;

  postWithdrawalRequests: TypedContractMethod<
    [
      _withdrawalRequests: IRollup.WithdrawalStruct[],
      publicInputs: IRollup.WithdrawalProofPublicInputsStruct,
      proof: BytesLike
    ],
    [void],
    "nonpayable"
  >;

  processDeposits: TypedContractMethod<
    [lastProcessedDepositId: BigNumberish, depositHashes: BytesLike[]],
    [void],
    "nonpayable"
  >;

  proxiableUUID: TypedContractMethod<[], [string], "view">;

  renounceOwnership: TypedContractMethod<[], [void], "nonpayable">;

  submitBlockFraudProof: TypedContractMethod<
    [publicInputs: IRollup.FraudProofPublicInputsStruct, proof: BytesLike],
    [void],
    "nonpayable"
  >;

  submitWithdrawals: TypedContractMethod<
    [lastProcessedWithdrawId: BigNumberish],
    [void],
    "nonpayable"
  >;

  transferOwnership: TypedContractMethod<
    [newOwner: AddressLike],
    [void],
    "nonpayable"
  >;

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
    nameOrSignature: "getBlockHash"
  ): TypedContractMethod<[blockNumber: BigNumberish], [string], "view">;
  getFunction(
    nameOrSignature: "getDepositTreeRoot"
  ): TypedContractMethod<[], [string], "view">;
  getFunction(
    nameOrSignature: "getLastProcessedDepositId"
  ): TypedContractMethod<[], [bigint], "view">;
  getFunction(
    nameOrSignature: "getLastProcessedWithdrawalId"
  ): TypedContractMethod<[], [bigint], "view">;
  getFunction(
    nameOrSignature: "initialize"
  ): TypedContractMethod<
    [
      _scrollMessenger: AddressLike,
      _verifier: AddressLike,
      _liquidity: AddressLike,
      _blockBuilderRegistry: AddressLike
    ],
    [void],
    "nonpayable"
  >;
  getFunction(
    nameOrSignature: "owner"
  ): TypedContractMethod<[], [string], "view">;
  getFunction(
    nameOrSignature: "postBlock"
  ): TypedContractMethod<
    [
      isRegistrationBlock: boolean,
      txTreeRoot: BytesLike,
      senderFlags: BigNumberish,
      publicKeysHash: BytesLike,
      accountIdsHash: BytesLike,
      aggregatedPublicKey: [BigNumberish, BigNumberish],
      aggregatedSignature: [
        BigNumberish,
        BigNumberish,
        BigNumberish,
        BigNumberish
      ],
      messagePoint: [BigNumberish, BigNumberish, BigNumberish, BigNumberish]
    ],
    [bigint],
    "nonpayable"
  >;
  getFunction(
    nameOrSignature: "postWithdrawalRequests"
  ): TypedContractMethod<
    [
      _withdrawalRequests: IRollup.WithdrawalStruct[],
      publicInputs: IRollup.WithdrawalProofPublicInputsStruct,
      proof: BytesLike
    ],
    [void],
    "nonpayable"
  >;
  getFunction(
    nameOrSignature: "processDeposits"
  ): TypedContractMethod<
    [lastProcessedDepositId: BigNumberish, depositHashes: BytesLike[]],
    [void],
    "nonpayable"
  >;
  getFunction(
    nameOrSignature: "proxiableUUID"
  ): TypedContractMethod<[], [string], "view">;
  getFunction(
    nameOrSignature: "renounceOwnership"
  ): TypedContractMethod<[], [void], "nonpayable">;
  getFunction(
    nameOrSignature: "submitBlockFraudProof"
  ): TypedContractMethod<
    [publicInputs: IRollup.FraudProofPublicInputsStruct, proof: BytesLike],
    [void],
    "nonpayable"
  >;
  getFunction(
    nameOrSignature: "submitWithdrawals"
  ): TypedContractMethod<
    [lastProcessedWithdrawId: BigNumberish],
    [void],
    "nonpayable"
  >;
  getFunction(
    nameOrSignature: "transferOwnership"
  ): TypedContractMethod<[newOwner: AddressLike], [void], "nonpayable">;
  getFunction(
    nameOrSignature: "upgradeToAndCall"
  ): TypedContractMethod<
    [newImplementation: AddressLike, data: BytesLike],
    [void],
    "payable"
  >;

  getEvent(
    key: "BlockFraudProofSubmitted"
  ): TypedContractEvent<
    BlockFraudProofSubmittedEvent.InputTuple,
    BlockFraudProofSubmittedEvent.OutputTuple,
    BlockFraudProofSubmittedEvent.OutputObject
  >;
  getEvent(
    key: "BlockPosted"
  ): TypedContractEvent<
    BlockPostedEvent.InputTuple,
    BlockPostedEvent.OutputTuple,
    BlockPostedEvent.OutputObject
  >;
  getEvent(
    key: "DepositsProcessed"
  ): TypedContractEvent<
    DepositsProcessedEvent.InputTuple,
    DepositsProcessedEvent.OutputTuple,
    DepositsProcessedEvent.OutputObject
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
  getEvent(
    key: "WithdrawRequested"
  ): TypedContractEvent<
    WithdrawRequestedEvent.InputTuple,
    WithdrawRequestedEvent.OutputTuple,
    WithdrawRequestedEvent.OutputObject
  >;

  filters: {
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

    "BlockPosted(bytes32,address,uint256,bytes32,bytes32)": TypedContractEvent<
      BlockPostedEvent.InputTuple,
      BlockPostedEvent.OutputTuple,
      BlockPostedEvent.OutputObject
    >;
    BlockPosted: TypedContractEvent<
      BlockPostedEvent.InputTuple,
      BlockPostedEvent.OutputTuple,
      BlockPostedEvent.OutputObject
    >;

    "DepositsProcessed(bytes32)": TypedContractEvent<
      DepositsProcessedEvent.InputTuple,
      DepositsProcessedEvent.OutputTuple,
      DepositsProcessedEvent.OutputObject
    >;
    DepositsProcessed: TypedContractEvent<
      DepositsProcessedEvent.InputTuple,
      DepositsProcessedEvent.OutputTuple,
      DepositsProcessedEvent.OutputObject
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

    "WithdrawRequested(bytes32,address)": TypedContractEvent<
      WithdrawRequestedEvent.InputTuple,
      WithdrawRequestedEvent.OutputTuple,
      WithdrawRequestedEvent.OutputObject
    >;
    WithdrawRequested: TypedContractEvent<
      WithdrawRequestedEvent.InputTuple,
      WithdrawRequestedEvent.OutputTuple,
      WithdrawRequestedEvent.OutputObject
    >;
  };
}
