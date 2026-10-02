export const MONAD_TESTNET_CONFIG = {
  chainId: 10143,
  chainName: 'Monad Testnet',
  rpcUrl: 'https://testnet-rpc.monad.xyz/',
  nativeCurrency: {
    name: 'Monad',
    symbol: 'MON',
    decimals: 18,
  },
  blockExplorerUrl: 'https://testnet.monadexplorer.com',
} as const;

export const DEPLOYED_ADDRESSES = {
  AegisRegistry: '0xe3E57B284ab80CD465e097C0DeDA5f28f00d1854',
  AegisPolicy: '0x354b349040b01A88Bf16cbB7E532060C2e24c6Fe',
  AegisPassport: '0x909F4F75049E442B4B45C7105ff6fef92eeb56ff',
  AegisExecutor: '0x6aB3113406143811B566567b2Ba002b8c20A90fC',
} as const;
