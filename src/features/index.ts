import type {
  IdentifierRecord,
  StandardConnectFeature,
  StandardDisconnectFeature,
  StandardEventsFeature,
  WalletWithFeatures
} from '@wallet-standard/core'

import type { SuiSignAndExecuteTransactionBlockFeature } from './suiSignAndExecuteTransactionBlock'
import { SuiSignMessageFeature } from './suiSignMessage'
import { SuiSignPersonalMessageFeature } from './suiSignPersonalMessage'
import type { SuiSignTransactionBlockFeature } from './suiSignTransactionBlock'
import type { AptosSignAndSubmitTransactionFeature } from './aptosSignAndSubmitTransaction'
import { AptosSignMessageFeature } from './aptosSignMessage'
import { AptosGetAccountFeature } from './aptosGetAccount'
import { AptosConnectFeature } from './aptosConnect'
import { AptosGetNetworkFeature } from './aptosGetNetwork'
import { AptosOnAccountChangeFeature } from './aptosOnAccountChange'
import { AptosOnNetworkChangeFeature } from './aptosOnNetworkChange'
import { AptosChangeNetworkFeature } from './aptosChangeNetwork'
import { AptosSignTransactionFeature } from './aptosSignTransaction'

/**
 * Wallet Standard features that are unique to Aptos, and that all Aptos wallets are expected to implement.
 */
export type AptosFeatures = AptosSignAndSubmitTransactionFeature &
  AptosSignTransactionFeature &
  AptosSignMessageFeature &
  AptosConnectFeature &
  AptosOnAccountChangeFeature &
  AptosOnNetworkChangeFeature &
  AptosGetNetworkFeature &
  AptosChangeNetworkFeature &
  AptosGetAccountFeature &
  StandardDisconnectFeature

/**
 * Wallet Standard features that are unique to Sui, and that all Sui wallets are expected to implement.
 */
export type SuiFeatures = SuiSignTransactionBlockFeature &
  SuiSignAndExecuteTransactionBlockFeature &
  SuiSignPersonalMessageFeature &
  // This deprecated feature should be removed once wallets update to the new method:
  Partial<SuiSignMessageFeature>

export type WalletWithSuiFeatures = WalletWithFeatures<
  StandardConnectFeature &
    StandardEventsFeature &
    SuiFeatures &
    // Disconnect is an optional feature:
    Partial<StandardDisconnectFeature>
>

/**
 * Represents a wallet with all Aptos features.
 */
export type WalletWithAptosFeatures = WalletWithFeatures<AptosFeatures>

/**
 * Represents a wallet with the absolute minimum feature set required to function in the Sui ecosystem.
 */
export type WalletWithRequiredSuiFeatures = WalletWithFeatures<
  MinimallyRequiredSuiFeatures &
    Partial<SuiFeatures> &
    Partial<StandardDisconnectFeature> &
    IdentifierRecord<unknown>
>

/**
 * Represents a wallet with the absolute minimum feature set required to function in the Aptos ecosystem.
 */
export type WalletWithRequiredAptosFeatures = WalletWithFeatures<
  MinimallyRequiredAptosFeatures & IdentifierRecord<unknown>
>

export type MinimallyRequiredSuiFeatures = StandardConnectFeature & StandardEventsFeature

/**
 * Represents the absolute minimum feature set required to function in the Aptos ecosystem.
 */
export type MinimallyRequiredAptosFeatures = AptosFeatures

export * from './suiSignMessage'
export * from './suiSignTransactionBlock'
export * from './suiSignAndExecuteTransactionBlock'
export * from './suiSignPersonalMessage'
export * from './aptosSignAndSubmitTransaction'
export * from './aptosSignMessage'
export * from './aptosGetAccount'
export * from './aptosConnect'
export * from './aptosGetNetwork'
export * from './aptosOnAccountChange'
export * from './aptosOnNetworkChange'
export * from './aptosChangeNetwork'
