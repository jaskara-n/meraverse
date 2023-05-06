const { ethers } = require("hardhat");
const abi = require("../artifacts/contracts/metaverse.sol/metaverse.json").abi;

async function getOwnerObjects() {
  const contract = await ethers.getContractAt(
    abi,
    "0xb64723B5d46605d6f74F128037B4F87a9C739895"
  );

  const tx = await contract.getOwnerObjects();

  console.log(tx);
}

getOwnerObjects().catch((error) => {
  console.error(error);
  process.exit(1);
});
