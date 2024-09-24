// SPDX-License-Identifier: MIT
pragma solidity ^0.8.13;

contract MyContract {
    uint public myNumber = 5;
    constructor() {}
    function setMyNumber(uint _newNumber) public {
        myNumber = _newNumber;
    }

    function getMyNumber() public view returns (uint) {
        return myNumber;
    }
}
