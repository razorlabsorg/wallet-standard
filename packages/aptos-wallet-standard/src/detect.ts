import { Wallet, WalletWithFeatures } from '@wallet-standard/core'

import { MinimallyRequiredFeatures, WalletWithAptosFeatures } from './features'

// These features are absolutely required for wallets to function in the Aptos ecosystem.
// Eventually, as wallets have more consistent support of features, we may want to extend this list.
const APTOS_REQUIRED_FEATURES: (keyof MinimallyRequiredFeatures)[] = [
  'standard:connect',
  'standard:events'
]

export function isWalletWithAptosFeatures(
  wallet: Wallet,
  features: string[] = []
): wallet is WalletWithAptosFeatures {
  return [...APTOS_REQUIRED_FEATURES, ...features].every((feature) => feature in wallet.features)
}

export function isWalletWithRequiredAptosFeatureSet<AdditionalFeatures extends Wallet['features']>(
  wallet: Wallet,
  additionalFeatures: (keyof AdditionalFeatures)[] = []
): wallet is WalletWithFeatures<MinimallyRequiredFeatures & AdditionalFeatures> {
  return [...APTOS_REQUIRED_FEATURES, ...additionalFeatures].every(
    (feature) => feature in wallet.features
  )
}
