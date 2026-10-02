// SPDX-License-Identifier: MIT
pragma solidity ^0.8.24;

/**
 * @title AegisRegistry
 * @dev Agent identity registry.
 */
contract AegisRegistry {
    struct Agent {
        string agentId;
        address owner;
        string metadata;
        string status;
        uint256 createdAt;
    }

    mapping(string => Agent) public agents;

    event AgentCreated(string indexed agentId, address indexed owner, string metadata);

    function registerAgent(string memory _agentId, string memory _metadata) external {
        require(agents[_agentId].owner == address(0), "Agent already exists");
        
        agents[_agentId] = Agent({
            agentId: _agentId,
            owner: msg.sender,
            metadata: _metadata,
            status: "ACTIVE",
            createdAt: block.timestamp
        });

        emit AgentCreated(_agentId, msg.sender, _metadata);
    }
}
