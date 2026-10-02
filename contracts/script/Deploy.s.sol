// SPDX-License-Identifier: MIT
pragma solidity ^0.8.24;

import "forge-std/Script.sol";
import "../src/AegisRegistry.sol";
import "../src/AegisPolicy.sol";
import "../src/AegisPassport.sol";
import "../src/AegisExecutor.sol";

contract Deploy is Script {
    function run() external {
        uint256 deployerPrivateKey = vm.envUint("PRIVATE_KEY");
        vm.startBroadcast(deployerPrivateKey);
        
        // 1. Deploy Core Contracts
        AegisRegistry registry = new AegisRegistry();
        AegisPolicy policyManager = new AegisPolicy();
        AegisPassport passport = new AegisPassport();
        AegisExecutor executor = new AegisExecutor(address(registry), address(policyManager));

        // 2. Setup Mock "ShopBot" Agent for MVP Testing
        string memory agentId = "shopbot-001";
        
        // Register the agent (owner will be the deployer address)
        registry.registerAgent(agentId, "ShopBot Electronics Procurement Agent");
        
        // Set policy: 100 tokens max tx, 500 tokens daily limit (using native token / wei for simplicity)
        uint256 maxTx = 100 ether; 
        uint256 dailyLimit = 500 ether;
        
        bytes32[] memory allowedActions = new bytes32[](1);
        allowedActions[0] = keccak256("PURCHASE");
        address[] memory allowedContracts = new address[](0);
        
        policyManager.setPolicy(agentId, maxTx, dailyLimit, allowedActions, allowedContracts);

        // 3. Log the deployed addresses
        console.log("=== Deployment Successful ===");
        console.log("AegisRegistry deployed to:", address(registry));
        console.log("AegisPolicy deployed to:", address(policyManager));
        console.log("AegisPassport deployed to:", address(passport));
        console.log("AegisExecutor deployed to:", address(executor));
        console.log("Mock Agent 'shopbot-001' registered with 100 native token limit.");
        
        vm.stopBroadcast();
    }
}
