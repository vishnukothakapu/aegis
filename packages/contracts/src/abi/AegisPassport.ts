export const AegisPassportABI = [
  {
    "type": "function",
    "name": "addCredential",
    "inputs": [
      {
        "name": "_agentId",
        "type": "string",
        "internalType": "string"
      },
      {
        "name": "_credentialUri",
        "type": "string",
        "internalType": "string"
      }
    ],
    "outputs": [],
    "stateMutability": "nonpayable"
  },
  {
    "type": "function",
    "name": "agentReputation",
    "inputs": [
      {
        "name": "",
        "type": "string",
        "internalType": "string"
      }
    ],
    "outputs": [
      {
        "name": "successfulActions",
        "type": "uint256",
        "internalType": "uint256"
      },
      {
        "name": "failedActions",
        "type": "uint256",
        "internalType": "uint256"
      },
      {
        "name": "trustScore",
        "type": "uint256",
        "internalType": "uint256"
      }
    ],
    "stateMutability": "view"
  },
  {
    "type": "function",
    "name": "updateReputation",
    "inputs": [
      {
        "name": "_agentId",
        "type": "string",
        "internalType": "string"
      },
      {
        "name": "_success",
        "type": "bool",
        "internalType": "bool"
      }
    ],
    "outputs": [],
    "stateMutability": "nonpayable"
  },
  {
    "type": "event",
    "name": "CredentialAdded",
    "inputs": [
      {
        "name": "agentId",
        "type": "string",
        "indexed": true,
        "internalType": "string"
      },
      {
        "name": "credentialUri",
        "type": "string",
        "indexed": false,
        "internalType": "string"
      }
    ],
    "anonymous": false
  }
] as const;
