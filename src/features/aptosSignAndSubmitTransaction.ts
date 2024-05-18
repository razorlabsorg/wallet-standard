// Copyright © Aptos Foundation
// SPDX-License-Identifier: Apache-2.0

import { Types } from 'aptos'
import { UserResponse } from '../misc'
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

export type AptosSignAndSubmitTransactionMethod = (
  input: AptosSignAndSubmitTransactionInput
) => Promise<UserResponse<AptosSignAndSubmitTransactionOutput>>

export type AptosSignAndSubmitTransactionInput = {
  function: string;
  type: string;
  type_arguments: string[];
  arguments: [];
}
/** Output of signing transactions. */
export type AptosSignAndSubmitTransactionOutput = Types.PendingTransaction
