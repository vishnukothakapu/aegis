// SPDX-License-Identifier: MIT
pragma solidity ^0.8.24;

import "forge-std/Test.sol";
import "../src/AegisExecutor.sol";
import "../src/AegisRegistry.sol";
import "../src/AegisPolicy.sol";

// Mock contract that acts as a merchant receiving payments
contract MockTarget {
    uint256 public received;
    
    fallback() external payable {
        received += msg.value;
    }
    receive() external payable {
        received += msg.value;
    }
}

contract AegisExecutorTest is Test {
    AegisRegistry registry;
    AegisPolicy policyManager;
    AegisExecutor executor;
    MockTarget target;
    
    string agentId = "shopbot-001";
    address agentOwner = address(1);

    function setUp() public {
        // Deploy contracts
        registry = new AegisRegistry();
        policyManager = new AegisPolicy();
        executor = new AegisExecutor(address(registry), address(policyManager));
        target = new MockTarget();

        // 1. Register the agent
        vm.prank(agentOwner);
        registry.registerAgent(agentId, "ShopBot Electronics Agent");

        // 2. Set the policy (Max tx: 100, Daily limit: 500)
        uint256 maxTx = 100 ether; 
        uint256 dailyLimit = 500 ether;
        bytes32[] memory allowedActions = new bytes32[](1);
        allowedActions[0] = keccak256("PURCHASE");
        address[] memory allowedContracts = new address[](0);
        
        vm.prank(agentOwner);
        policyManager.setPolicy(agentId, maxTx, dailyLimit, allowedActions, allowedContracts);
    }

    function test_Success_TransactionUnderLimit() public {
        uint256 purchaseAmount = 75 ether;
        
        // Simulating the AI Agent proposing a $75 transaction
        executor.executeAction{value: purchaseAmount}(
            agentId,
            address(target),
            purchaseAmount,
            ""
        );

        // Assert that the transaction passed through the executor and reached the target
        assertEq(target.received(), purchaseAmount);
    }

    function test_Revert_TransactionExceedsLimit() public {
        uint256 purchaseAmount = 1200 ether;
        
        // We expect Aegis to block this transaction according to our PRD scenario
        vm.expectRevert("Policy Check Failed: Amount exceeds max limit");
        
        // Simulating the AI Agent proposing a $1,200 transaction
        executor.executeAction{value: purchaseAmount}(
            agentId,
            address(target),
            purchaseAmount,
            ""
        );
    }
}
