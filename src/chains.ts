/** M1 Devnet */
export const M1_DEVNET_CHAIN = 'movement:m1:devnet';

/** M1 Testnet */
export const M1_TESTNET_CHAIN = 'movement:m1:testnet';

/** M1 Localnet */
export const M1_LOCALNET_CHAIN = 'movement:m1:localnet';

/** M1 Mainnet */
export const M1_MAINNET_CHAIN = 'movement:m1:mainnet';

/** M2 Devnet */
export const M2_DEVNET_CHAIN = 'movement:m2:devnet';

/** M2 Testnet */
export const M2_TESTNET_CHAIN = 'movement:m2:testnet';

/** M2 Localnet */
export const M2_LOCALNET_CHAIN = 'movement:m2:localnet';

/** M2 Mainnet */
export const M2_MAINNET_CHAIN = 'movement:m2:mainnet';

export const MOVEMENT_CHAINS = [
	M1_DEVNET_CHAIN,
	M1_TESTNET_CHAIN,
	M1_LOCALNET_CHAIN,
	M1_MAINNET_CHAIN,
	M2_DEVNET_CHAIN,
	M2_TESTNET_CHAIN,
	M2_LOCALNET_CHAIN,
	M2_MAINNET_CHAIN,
] as const;

export type MovementChain =
	| typeof M1_DEVNET_CHAIN
	| typeof M1_TESTNET_CHAIN
	| typeof M1_LOCALNET_CHAIN
	| typeof M1_MAINNET_CHAIN
	| typeof M2_DEVNET_CHAIN
	| typeof M2_TESTNET_CHAIN
	| typeof M2_LOCALNET_CHAIN
	| typeof M2_MAINNET_CHAIN;