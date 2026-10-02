// SPDX-License-Identifier: MIT
pragma solidity ^0.8.24;

import "forge-std/Test.sol";
import "../src/AegisRegistry.sol";

contract AegisRegistryTest is Test {
    AegisRegistry registry;

    function setUp() public {
        registry = new AegisRegistry();
    }

    function test_Example() public pure {
        assertTrue(true);
    }
}
