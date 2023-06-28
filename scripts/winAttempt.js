const hre = require("hardhat");

const ATTEMPT_CONTRACT_ADDR="0xcF469d3BEB3Fc24cEe979eFf83BE33ed50988502"

async function main() {
  const myContract = await hre.ethers.getContractFactory("EmitWinner");
  const emitter = await myContract.deploy();
  console.log(`Contract deployed to ${myContract}`);

  await emitter.winnerAttempt(ATTEMPT_CONTRACT_ADDR);

  //Transaction Hash: https://goerli.etherscan.io/tx/0x6d44c7d83893137196753c46c4c576fc241628f3bf0d0cc20263980b15500e9a
}
// We recommend this pattern to be able to use async/await everywhere
// and properly handle errors.
main().catch((error) => {
  console.error(error);
  process.exitCode = 1;
});
