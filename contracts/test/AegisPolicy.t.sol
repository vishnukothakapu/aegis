// SPDX-License-Identifier: MIT
pragma solidity ^0.8.24;

import "forge-std/Test.sol";
import "../src/AegisPolicy.sol";

contract AegisPolicyTest is Test {
    AegisPolicy policyManager;

    function setUp() public {
        policyManager = new AegisPolicy();
    }

    function test_Example() public pure {
        assertTrue(true);
    }
}
