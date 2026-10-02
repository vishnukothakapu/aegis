// SPDX-License-Identifier: MIT
pragma solidity ^0.8.24;

import "./AegisRegistry.sol";
import "./AegisPolicy.sol";

/**
 * @title AegisExecutor
 * @dev The final execution gate.
 */
contract AegisExecutor {
    AegisRegistry public registry;
    AegisPolicy public policyManager;

    event ActionRequested(string indexed agentId, address target, uint256 amount);
    event ActionApproved(string indexed agentId, address target, uint256 amount);
    event ActionBlocked(string indexed agentId, string reason);
    event TransactionExecuted(string indexed agentId, address target, uint256 amount, bool success);

    constructor(address _registry, address _policyManager) {
        registry = AegisRegistry(_registry);
        policyManager = AegisPolicy(_policyManager);
    }

    /**
     * @dev Called by the Agent or Agent Engine.
     */
    function executeAction(
        string memory _agentId,
        address _target,
        uint256 _amount,
        bytes memory _calldata
    ) external payable {
        require(_target != address(0), "Invalid target");
        emit ActionRequested(_agentId, _target, _amount);

        // 1. Identity Check
        (, address owner, , string memory status, ) = registry.agents(_agentId);
        require(owner != address(0), "Agent not found");
        require(keccak256(bytes(status)) == keccak256(bytes("ACTIVE")), "Agent not active");

        // 2. Policy Check
        (uint256 maxTx, ) = policyManager.policies(_agentId);
        
        if (_amount > maxTx) {
            emit ActionBlocked(_agentId, "Transaction exceeds maximum transaction limit");
            revert("Policy Check Failed: Amount exceeds max limit");
        }

        // TODO: Add external risk/reputation checks if needed, or rely on off-chain engine

        emit ActionApproved(_agentId, _target, _amount);

        // 3. Execute
        (bool success, ) = _target.call{value: _amount}(_calldata);
        
        emit TransactionExecuted(_agentId, _target, _amount, success);
        require(success, "Execution failed");
    }
}
