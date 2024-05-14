import { Network } from 'aptos'

export type TransactionHash = `0x${string}`

export interface NetworkInfo {
  name: Network // Name of the network.
  chainId: number // Chain ID of the network.
  url?: string // RPC URL of the network.
}

export type AccountInfo = {
  address: string
  publicKey: string | string[]
  minKeysRequired?: number
  ansName?: string
}

export enum UserResponseStatus {
  APPROVED = 'Approved',
  REJECTED = 'Rejected'
}

export interface UserApproval<TResponseArgs> {
  status: UserResponseStatus.APPROVED
  args: TResponseArgs
}

export interface UserRejection {
  status: UserResponseStatus.REJECTED
}

export type UserResponse<TResponseArgs> = UserApproval<TResponseArgs> | UserRejection
