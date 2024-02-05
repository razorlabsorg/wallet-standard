import { AptosClient } from 'movement-sdk'
import { RawTransaction } from '../misc'
import { IdentifierString, WalletAccount } from '@wallet-standard/core'

/** Version of the feature. */
export type AptosSignTransactionVersion = '1.0.0'
/** Name of the feature. */
export const AptosSignTransactionNamespace = 'aptos:signTransaction'
/**
 * A Wallet Standard feature for signing a Aptos transaction, and returning the
 * account authenticator.
 */
export type AptosSignTransactionFeature = {
  /** Namespace for the feature. */
  [AptosSignTransactionNamespace]: {
    /** Version of the feature API. */
    version: AptosSignTransactionVersion
    signTransaction: AptosSignTransactionMethod
  }
}
/** TODO: docs */
export type AptosSignTransactionMethod = (
  input: AptosSignTransactionInput
) => Promise<AptosSignTransactionOutput>

export interface AptosSignTransactionInput {
  transaction: RawTransaction
  account: WalletAccount
  chain: IdentifierString
}

/** Output of signing transactions. */
export type AptosSignTransactionOutput = ReturnType<AptosClient['signTransaction']>
