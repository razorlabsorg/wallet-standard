import type {
  IdentifierRecord,
  StandardConnectFeature,
  StandardDisconnectFeature,
  StandardEventsFeature,
  WalletWithFeatures
} from '@wallet-standard/core'

import type { AptosSignAndSubmitTransactionFeature } from './aptosSignAndSubmitTransaction'
import { AptosSignMessageFeature } from './aptosSignMessage'
import { AptosSignTransactionFeature } from './aptosSignTransaction'

/**
 * Wallet Standard features that are unique to Aptos, and that all Aptos wallets are expected to implement.
 */
export type AptosFeatures = AptosSignAndSubmitTransactionFeature &
  AptosSignTransactionFeature &
  AptosSignMessageFeature

/**
 * Represents a wallet with all Aptos features.
 */
export type WalletWithAptosFeatures = WalletWithFeatures<
  StandardConnectFeature &
    StandardEventsFeature &
    AptosFeatures &
    // Disconnect is an optional feature:
    Partial<StandardDisconnectFeature>
>
/**
 * Represents a wallet with the absolute minimum feature set required to function in the Aptos ecosystem.
 */
export type WalletWithRequiredFeatures = WalletWithFeatures<
  MinimallyRequiredFeatures &
    Partial<AptosFeatures> &
    Partial<StandardDisconnectFeature> &
    IdentifierRecord<unknown>
>
/**
 * Represents the absolute minimum feature set required to function in the Aptos ecosystem.
 */
export type MinimallyRequiredFeatures = StandardConnectFeature & StandardEventsFeature

export * from './aptosSignAndSubmitTransaction'
export * from './aptosSignTransaction'
export * from './aptosSignMessage'
export * from './aptosGetAccount'
export * from './aptosConnect'
export * from './aptosGetNetwork'
export * from './aptosOnAccountChange'
export * from './aptosOnNetworkChange'
export * from './aptosChangeNetwork'
