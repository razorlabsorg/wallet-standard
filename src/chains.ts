/** M2 Devnet */
export const M2_DEVNET_CHAIN = 'm2:devnet';

/** M2 Testnet */
export const M2_TESTNET_CHAIN = 'm2:testnet';

/** M2 Localnet */
export const M2_LOCALNET_CHAIN = 'm2:localnet';

/** M2 Mainnet */
export const M2_MAINNET_CHAIN = 'm2:mainnet';

export const M2_CHAINS = [
	M2_DEVNET_CHAIN,
	M2_TESTNET_CHAIN,
	M2_LOCALNET_CHAIN,
	M2_MAINNET_CHAIN,
] as const;

export type M2Chain =
	| typeof M2_DEVNET_CHAIN
	| typeof M2_TESTNET_CHAIN
	| typeof M2_LOCALNET_CHAIN
	| typeof M2_MAINNET_CHAIN;