const hre = require("hardhat");

const CONTRACT_ADDR="0x0B502a10B958A7264ac2e737aEF5Ce3e57aFfE0E"

async function main() {
  const contract = await hre.ethers.getContractAt("Contract", CONTRACT_ADDR);
  
  const tx = await contract.changeX(29);

  await tx.wait();
}
// We recommend this pattern to be able to use async/await everywhere
// and properly handle errors.
main().catch((error) => {
  console.error(error);
  process.exitCode = 1;
});
