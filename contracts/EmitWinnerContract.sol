// SPDX-License-Identifier: UNLICENSED
pragma solidity ^0.8.9;

interface EmitWinnerContract {
    function attempt() external;
}

contract EmitWinner {
    function winnerAttempt(address emitWinnerContractAddress) external {
        EmitWinnerContract(emitWinnerContractAddress).attempt();
    }
}