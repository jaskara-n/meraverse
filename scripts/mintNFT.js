const { ethers } = require("hardhat");
const abi = require("../artifacts/contracts/metaverse.sol/metaverse.json").abi;

async function mintNFT() {
  const value = ethers.utils.parseUnits("0.1", 1);
  const contract = await ethers.getContractAt(
    abi,
    "0xb64723B5d46605d6f74F128037B4F87a9C739895"
  );

  const tx = await contract.mint(
    "test",
    value,
    value,
    value,
    value,
    value,
    value
  );

  console.log("minted!");
}

mintNFT().catch((error) => {
  console.error(error);
  process.exit(1);
});
