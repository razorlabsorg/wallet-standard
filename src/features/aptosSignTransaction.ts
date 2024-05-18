// Copyright © Aptos Foundation
// SPDX-License-Identifier: Apache-2.0

import { AnyRawTransaction, AptosClient } from 'aptos'
import { UserResponse } from '../misc'

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

export type AptosSignTransactionInput = {
  function: string;
  type: string;
  type_arguments: string[];
  arguments: [];
}

export type AptosSignTransactionMethod = (
  input: AptosSignTransactionInput
) => Promise<UserResponse<AptosSignTransactionOutput>>

/** Output of signing transactions. */
export type AptosSignTransactionOutput = ReturnType<AptosClient['signTransaction']>
