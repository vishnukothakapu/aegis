// SPDX-License-Identifier: MIT
pragma solidity ^0.8.24;

/**
 * @title AegisPassport
 * @dev Manages agent's identity, reputation, and credential references.
 */
contract AegisPassport {
    struct Reputation {
        uint256 successfulActions;
        uint256 failedActions;
        uint256 trustScore;
    }

    // agentId => Reputation
    mapping(string => Reputation) public agentReputation;

    event CredentialAdded(string indexed agentId, string credentialUri);

    function addCredential(string memory _agentId, string memory _credentialUri) external {
        // TODO: Access control
        emit CredentialAdded(_agentId, _credentialUri);
    }

    function updateReputation(string memory _agentId, bool _success) external {
        // TODO: Access control (only Executor should call this)
        if (_success) {
            agentReputation[_agentId].successfulActions++;
            agentReputation[_agentId].trustScore++;
        } else {
            agentReputation[_agentId].failedActions++;
            if (agentReputation[_agentId].trustScore > 0) {
                agentReputation[_agentId].trustScore--;
            }
        }
    }
}
