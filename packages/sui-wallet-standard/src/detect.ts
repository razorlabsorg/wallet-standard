import { Wallet, WalletWithFeatures } from '@wallet-standard/core'

import { MinimallyRequiredFeatures, WalletWithSuiFeatures } from './features'

// These features are absolutely required for wallets to function in the Sui ecosystem.
// Eventually, as wallets have more consistent support of features, we may want to extend this list.
const SUI_REQUIRED_FEATURES: (keyof MinimallyRequiredFeatures)[] = [
  'standard:connect',
  'standard:events'
]

/** @deprecated Use isWalletWithRequiredFeatureSet instead since it provides more accurate typing! */
export function isWalletWithSuiFeatures(
  wallet: Wallet,
  /** Extra features that are required to be present, in addition to the expected feature set. */
  features: string[] = []
): wallet is WalletWithSuiFeatures {
  return [...SUI_REQUIRED_FEATURES, ...features].every((feature) => feature in wallet.features)
}

export function isWalletWithRequiredSuiFeatureSet<AdditionalFeatures extends Wallet['features']>(
  wallet: Wallet,
  additionalFeatures: (keyof AdditionalFeatures)[] = []
): wallet is WalletWithFeatures<MinimallyRequiredFeatures & AdditionalFeatures> {
  return [...SUI_REQUIRED_FEATURES, ...additionalFeatures].every(
    (feature) => feature in wallet.features
  )
}
