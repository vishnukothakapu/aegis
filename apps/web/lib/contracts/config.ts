import { 
  DEPLOYED_ADDRESSES, 
  MONAD_TESTNET_CONFIG,
  AegisRegistryABI,
  AegisPolicyABI,
  AegisPassportABI,
  AegisExecutorABI
} from '@aegis/contracts';

export const AEGIS_CONTRACTS = {
  registry: {
    address: DEPLOYED_ADDRESSES.AegisRegistry,
    abi: AegisRegistryABI,
  },
  policy: {
    address: DEPLOYED_ADDRESSES.AegisPolicy,
    abi: AegisPolicyABI,
  },
  passport: {
    address: DEPLOYED_ADDRESSES.AegisPassport,
    abi: AegisPassportABI,
  },
  executor: {
    address: DEPLOYED_ADDRESSES.AegisExecutor,
    abi: AegisExecutorABI,
  }
} as const;

export { MONAD_TESTNET_CONFIG, DEPLOYED_ADDRESSES };
