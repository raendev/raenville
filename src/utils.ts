import { keyStores, WalletConnection, Near } from 'near-api-js'

// Create a Near config object
export const near = new Near({
  helperUrl: process.env.REACT_APP_HELPER_URL || 'https://helper.testnet.near.org',
  keyStore: new keyStores.BrowserLocalStorageKeyStore(),
  networkId: process.env.REACT_APP_NETWORK_ID || 'testnet',
  nodeUrl: process.env.REACT_APP_NODE_URL || 'https://rpc.testnet.near.org',
  walletUrl: process.env.REACT_APP_WALLET_URL || 'https://helper.testnet.near.org',
})

// Initialize main interface to NEAR network
export const connection = new WalletConnection(near, 'raenville')

/**
 * Get the Account ID. If still unauthorized, it's an empty string.
 */
export function getCurrentUser(): string {
  return connection.getAccountId()
}

export function login() {
  connection.requestSignIn(process.env.REACT_APP_CONTRACT_NAME)
}