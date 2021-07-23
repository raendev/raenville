import { Near, keyStores } from 'near-api-js'

export default new Near({
  keyStore: new keyStores.InMemoryKeyStore(),
  // @ts-expect-error
  networkId: process.env.NETWORK_ID,
  // @ts-expect-error
  nodeUrl: process.env.NODE_URL,
})
