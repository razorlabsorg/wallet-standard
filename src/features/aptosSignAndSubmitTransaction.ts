import { TxnBuilderTypes, Types } from 'movement-sdk'
import { IdentifierString, WalletAccount } from '@wallet-standard/core'
/** Version of the feature. */
export type AptosSignAndSubmitTransactionVersion = '1.0.0'
/** Name of the feature. */
export const AptosSignAndSubmitTransactionNamespace = 'aptos:signAndSubmitTransaction'
/**
 * A Wallet Standard feature for signing a transaction, and returning the
 * hash of the transaction.
 */
export type AptosSignAndSubmitTransactionFeature = {
  /** Namespace for the feature. */
  [AptosSignAndSubmitTransactionNamespace]: {
    /** Version of the feature API. */
    version: AptosSignAndSubmitTransactionVersion
    signAndSubmitTransaction: AptosSignAndSubmitTransactionMethod
  }
}
/** TODO: docs */
export type AptosSignAndSubmitTransactionMethod = (
  transaction: AptosSignAndSubmitTransactionInput
) => Promise<AptosSignAndSubmitTransactionOutput>

/** TODO: docs */
export type AptosSignAndSubmitTransactionInput = {
  tx: TxnBuilderTypes.RawTransaction
  account: WalletAccount
  chain: IdentifierString
}
/** Output of signing transactions. */
export type AptosSignAndSubmitTransactionOutput = Types.PendingTransaction
