// SPDX-License-Identifier: MIT
pragma solidity ^0.8.24;

/**
 * @title AegisPolicy
 * @dev Manages permissions for agents.
 */
contract AegisPolicy {
    struct Policy {
        uint256 maxTransaction;
        uint256 dailyLimit;
        bytes32[] allowedActions;
        address[] allowedContracts;
    }

    // agentId => Policy
    mapping(string => Policy) public policies;

    event PolicyCreated(string indexed agentId, uint256 maxTransaction, uint256 dailyLimit);
    event PolicyUpdated(string indexed agentId, uint256 maxTransaction, uint256 dailyLimit);

    function setPolicy(
        string memory _agentId, 
        uint256 _maxTransaction, 
        uint256 _dailyLimit,
        bytes32[] memory _allowedActions,
        address[] memory _allowedContracts
    ) external {
        // TODO: add access control to ensure only owner sets policy
        policies[_agentId] = Policy({
            maxTransaction: _maxTransaction,
            dailyLimit: _dailyLimit,
            allowedActions: _allowedActions,
            allowedContracts: _allowedContracts
        });

        emit PolicyUpdated(_agentId, _maxTransaction, _dailyLimit);
    }
}
