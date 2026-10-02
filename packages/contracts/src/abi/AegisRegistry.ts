export const AegisRegistryABI = [
  {
    "type": "function",
    "name": "agents",
    "inputs": [
      {
        "name": "",
        "type": "string",
        "internalType": "string"
      }
    ],
    "outputs": [
      {
        "name": "agentId",
        "type": "string",
        "internalType": "string"
      },
      {
        "name": "owner",
        "type": "address",
        "internalType": "address"
      },
      {
        "name": "metadata",
        "type": "string",
        "internalType": "string"
      },
      {
        "name": "status",
        "type": "string",
        "internalType": "string"
      },
      {
        "name": "createdAt",
        "type": "uint256",
        "internalType": "uint256"
      }
    ],
    "stateMutability": "view"
  },
  {
    "type": "function",
    "name": "registerAgent",
    "inputs": [
      {
        "name": "_agentId",
        "type": "string",
        "internalType": "string"
      },
      {
        "name": "_metadata",
        "type": "string",
        "internalType": "string"
      }
    ],
    "outputs": [],
    "stateMutability": "nonpayable"
  },
  {
    "type": "event",
    "name": "AgentCreated",
    "inputs": [
      {
        "name": "agentId",
        "type": "string",
        "indexed": true,
        "internalType": "string"
      },
      {
        "name": "owner",
        "type": "address",
        "indexed": true,
        "internalType": "address"
      },
      {
        "name": "metadata",
        "type": "string",
        "indexed": false,
        "internalType": "string"
      }
    ],
    "anonymous": false
  }
] as const;
