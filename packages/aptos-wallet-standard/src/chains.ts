export type ChainsId = `${string}:${string}:${string}` // e.g. 'm1:devnet'
/** M1 Devnet */
export const M1_DEVNET_CHAIN = 'movement:m1:devnet'

/** M1 Testnet */
export const M1_TESTNET_CHAIN = 'movement:m1:testnet'

/** M1 Localnet */
export const M1_LOCALNET_CHAIN = 'movement:m1:localnet'

/** M1 Mainnet */
export const M1_MAINNET_CHAIN = 'movement:m1:mainnet'

export const M1_CHAINS = [
  M1_DEVNET_CHAIN,
  M1_TESTNET_CHAIN,
  M1_LOCALNET_CHAIN,
  M1_MAINNET_CHAIN
] as const

export type M1Chain =
  | typeof M1_DEVNET_CHAIN
  | typeof M1_TESTNET_CHAIN
  | typeof M1_LOCALNET_CHAIN
  | typeof M1_MAINNET_CHAIN
