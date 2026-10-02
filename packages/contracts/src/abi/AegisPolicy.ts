export const AegisPolicyABI = [
  {
    "type": "function",
    "name": "policies",
    "inputs": [
      {
        "name": "",
        "type": "string",
        "internalType": "string"
      }
    ],
    "outputs": [
      {
        "name": "maxTransaction",
        "type": "uint256",
        "internalType": "uint256"
      },
      {
        "name": "dailyLimit",
        "type": "uint256",
        "internalType": "uint256"
      }
    ],
    "stateMutability": "view"
  },
  {
    "type": "function",
    "name": "setPolicy",
    "inputs": [
      {
        "name": "_agentId",
        "type": "string",
        "internalType": "string"
      },
      {
        "name": "_maxTransaction",
        "type": "uint256",
        "internalType": "uint256"
      },
      {
        "name": "_dailyLimit",
        "type": "uint256",
        "internalType": "uint256"
      },
      {
        "name": "_allowedActions",
        "type": "bytes32[]",
        "internalType": "bytes32[]"
      },
      {
        "name": "_allowedContracts",
        "type": "address[]",
        "internalType": "address[]"
      }
    ],
    "outputs": [],
    "stateMutability": "nonpayable"
  },
  {
    "type": "event",
    "name": "PolicyCreated",
    "inputs": [
      {
        "name": "agentId",
        "type": "string",
        "indexed": true,
        "internalType": "string"
      },
      {
        "name": "maxTransaction",
        "type": "uint256",
        "indexed": false,
        "internalType": "uint256"
      },
      {
        "name": "dailyLimit",
        "type": "uint256",
        "indexed": false,
        "internalType": "uint256"
      }
    ],
    "anonymous": false
  },
  {
    "type": "event",
    "name": "PolicyUpdated",
    "inputs": [
      {
        "name": "agentId",
        "type": "string",
        "indexed": true,
        "internalType": "string"
      },
      {
        "name": "maxTransaction",
        "type": "uint256",
        "indexed": false,
        "internalType": "uint256"
      },
      {
        "name": "dailyLimit",
        "type": "uint256",
        "indexed": false,
        "internalType": "uint256"
      }
    ],
    "anonymous": false
  }
] as const;
