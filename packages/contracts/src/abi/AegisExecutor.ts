export const AegisExecutorABI = [
  {
    "type": "constructor",
    "inputs": [
      {
        "name": "_registry",
        "type": "address",
        "internalType": "address"
      },
      {
        "name": "_policyManager",
        "type": "address",
        "internalType": "address"
      }
    ],
    "stateMutability": "nonpayable"
  },
  {
    "type": "function",
    "name": "executeAction",
    "inputs": [
      {
        "name": "_agentId",
        "type": "string",
        "internalType": "string"
      },
      {
        "name": "_target",
        "type": "address",
        "internalType": "address"
      },
      {
        "name": "_amount",
        "type": "uint256",
        "internalType": "uint256"
      },
      {
        "name": "_calldata",
        "type": "bytes",
        "internalType": "bytes"
      }
    ],
    "outputs": [],
    "stateMutability": "payable"
  },
  {
    "type": "function",
    "name": "policyManager",
    "inputs": [],
    "outputs": [
      {
        "name": "",
        "type": "address",
        "internalType": "contract AegisPolicy"
      }
    ],
    "stateMutability": "view"
  },
  {
    "type": "function",
    "name": "registry",
    "inputs": [],
    "outputs": [
      {
        "name": "",
        "type": "address",
        "internalType": "contract AegisRegistry"
      }
    ],
    "stateMutability": "view"
  },
  {
    "type": "event",
    "name": "ActionApproved",
    "inputs": [
      {
        "name": "agentId",
        "type": "string",
        "indexed": true,
        "internalType": "string"
      },
      {
        "name": "target",
        "type": "address",
        "indexed": false,
        "internalType": "address"
      },
      {
        "name": "amount",
        "type": "uint256",
        "indexed": false,
        "internalType": "uint256"
      }
    ],
    "anonymous": false
  },
  {
    "type": "event",
    "name": "ActionBlocked",
    "inputs": [
      {
        "name": "agentId",
        "type": "string",
        "indexed": true,
        "internalType": "string"
      },
      {
        "name": "reason",
        "type": "string",
        "indexed": false,
        "internalType": "string"
      }
    ],
    "anonymous": false
  },
  {
    "type": "event",
    "name": "ActionRequested",
    "inputs": [
      {
        "name": "agentId",
        "type": "string",
        "indexed": true,
        "internalType": "string"
      },
      {
        "name": "target",
        "type": "address",
        "indexed": false,
        "internalType": "address"
      },
      {
        "name": "amount",
        "type": "uint256",
        "indexed": false,
        "internalType": "uint256"
      }
    ],
    "anonymous": false
  },
  {
    "type": "event",
    "name": "TransactionExecuted",
    "inputs": [
      {
        "name": "agentId",
        "type": "string",
        "indexed": true,
        "internalType": "string"
      },
      {
        "name": "target",
        "type": "address",
        "indexed": false,
        "internalType": "address"
      },
      {
        "name": "amount",
        "type": "uint256",
        "indexed": false,
        "internalType": "uint256"
      },
      {
        "name": "success",
        "type": "bool",
        "indexed": false,
        "internalType": "bool"
      }
    ],
    "anonymous": false
  }
] as const;
