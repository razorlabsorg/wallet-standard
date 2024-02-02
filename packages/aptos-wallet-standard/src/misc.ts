import { AptosAccount, AptosClient } from "movement-sdk";

const aptosClient = new AptosClient('https://')

export type RawTransaction = Awaited<ReturnType<typeof aptosClient.generateTransaction>>;

export type TransactionHash = `0x${string}`

export type AccountInfo = {
    account: AptosAccount
    ansName?: string
}

export interface NetworkInfo {
    name: string
    chainId: string
    url?: string
}

export interface UserApproval<TResponseArgs> {
  status: 'approved'
  args: TResponseArgs
}

export interface UserRejection {
  status: 'rejected'
}

export type UserResponse<TResponseArgs> = UserApproval<TResponseArgs> | UserRejection

export enum TransactionResponseType {
  Pending = "pending_transaction",
  User = "user_transaction",
  Genesis = "genesis_transaction",
  BlockMetadata = "block_metadata_transaction",
  StateCheckpoint = "state_checkpoint_transaction",
}

export type MoveStructId = `${string}::${string}::${string}`;
// These are the same, unfortunately, it reads really strangely to take a StructId for a Function and there wasn't a
// good middle ground name.
export type MoveFunctionId = MoveStructId;

export enum MoveFunctionVisibility {
  PRIVATE = "private",
  PUBLIC = "public",
  FRIEND = "friend",
}

/**
 * Move function ability
 */
export enum MoveAbility {
  STORE = "store",
  DROP = "drop",
  KEY = "key",
  COPY = "copy",
}

/**
 * Move abilities tied to the generic type param and associated with the function that uses it
 */
export type MoveFunctionGenericTypeParam = {
  constraints: Array<MoveAbility>;
};

export type MoveFunction = {
  name: string;
  visibility: MoveFunctionVisibility;
  /**
   * Whether the function can be called as an entry function directly in a transaction
   */
  is_entry: boolean;
  /**
   * Whether the function is a view function or not
   */
  is_view: boolean;
  /**
   * Generic type params associated with the Move function
   */
  generic_type_params: Array<MoveFunctionGenericTypeParam>;
  /**
   * Parameters associated with the move function
   */
  params: Array<string>;
  /**
   * Return type of the function
   */
  return: Array<string>;
};

export type MoveScriptBytecode = {
  bytecode: string;
  abi?: MoveFunction;
};

/**
 * The union of all single account signatures.
 */
export type AccountSignature =
  | TransactionEd25519Signature
  | TransactionSecp256k1Signature
  | TransactionMultiEd25519Signature;

export type EntryFunctionPayloadResponse = {
  type: string;
  function: MoveFunctionId;
  /**
   * Type arguments of the function
   */
  type_arguments: Array<string>;
  /**
   * Arguments of the function
   */
  arguments: Array<any>;
};

export type ScriptPayloadResponse = {
  type: string;
  code: MoveScriptBytecode;
  /**
   * Type arguments of the function
   */
  type_arguments: Array<string>;
  /**
   * Arguments of the function
   */
  arguments: Array<any>;
};

export type MultisigPayloadResponse = {
  type: string;
  multisig_address: string;
  transaction_payload?: EntryFunctionPayloadResponse;
};


export type TransactionPayloadResponse = EntryFunctionPayloadResponse | ScriptPayloadResponse | MultisigPayloadResponse;

export type TransactionEd25519Signature = {
  type: string;
  public_key: string;
  signature: "ed25519_signature";
};

export type TransactionSecp256k1Signature = {
  type: string;
  public_key: string;
  signature: "secp256k1_ecdsa_signature";
};

export type TransactionMultiEd25519Signature = {
  type: "multi_ed25519_signature";
  /**
   * The public keys for the Ed25519 signature
   */
  public_keys: Array<string>;
  /**
   * Signature associated with the public keys in the same order
   */
  signatures: Array<string>;
  /**
   * The number of signatures required for a successful transaction
   */
  threshold: number;
  bitmap: string;
};

export type TransactionMultiAgentSignature = {
  type: "multi_agent_signature";
  sender: AccountSignature;
  /**
   * The other involved parties' addresses
   */
  secondary_signer_addresses: Array<string>;
  /**
   * The associated signatures, in the same order as the secondary addresses
   */
  secondary_signers: Array<AccountSignature>;
};

export type TransactionFeePayerSignature = {
  type: "fee_payer_signature";
  sender: AccountSignature;
  /**
   * The other involved parties' addresses
   */
  secondary_signer_addresses: Array<string>;
  /**
   * The associated signatures, in the same order as the secondary addresses
   */
  secondary_signers: Array<AccountSignature>;
  fee_payer_address: string;
  fee_payer_signer: AccountSignature;
};


export type TransactionSignature =
  | TransactionEd25519Signature
  | TransactionSecp256k1Signature
  | TransactionMultiEd25519Signature
  | TransactionMultiAgentSignature
  | TransactionFeePayerSignature;

export type PendingTransactionResponse = {
  type: TransactionResponseType.Pending;
  hash: string;
  sender: string;
  sequence_number: string;
  max_gas_amount: string;
  gas_unit_price: string;
  expiration_timestamp_secs: string;
  payload: TransactionPayloadResponse;
  signature?: TransactionSignature;
};
