import { Wallet, WalletWithFeatures } from '@wallet-standard/core'

import { MinimallyRequiredSuiFeatures, MinimallyRequiredAptosFeatures } from './features'

// These features are absolutely required for wallets to function in the M2 ecosystem.
// Eventually, as wallets have more consistent support of features, we may want to extend this list.
const REQUIRED_SUI_FEATURES: (keyof MinimallyRequiredSuiFeatures)[] = [
  'standard:connect',
  'standard:events'
]

// These features are absolutely required for wallets to function in the Aptos ecosystem.
// Eventually, as wallets have more consistent support of features, we may want to extend this list.
const REQUIRED_APTOS_FEATURES: (keyof MinimallyRequiredAptosFeatures)[] = [
  'aptos:connect',
  'aptos:signAndSubmitTransaction',
  'aptos:signMessage',
  'aptos:signTransaction'
]

export function isWalletWithRequiredSuiFeatureSet<AdditionalFeatures extends Wallet['features']>(
  wallet: Wallet,
  additionalFeatures: (keyof AdditionalFeatures)[] = []
): wallet is WalletWithFeatures<MinimallyRequiredSuiFeatures & AdditionalFeatures> {
  return [...REQUIRED_SUI_FEATURES, ...additionalFeatures].every(
    (feature) => feature in wallet.features
  )
}

export function isWalletWithRequiredAptosFeatureSet<AdditionalFeatures extends Wallet['features']>(
  wallet: Wallet,
  additionalFeatures: (keyof AdditionalFeatures)[] = []
): wallet is WalletWithFeatures<MinimallyRequiredAptosFeatures & AdditionalFeatures> {
  return [...REQUIRED_APTOS_FEATURES, ...additionalFeatures].every(
    (feature) => feature in wallet.features
  )
}
