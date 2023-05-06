const { ethers, deployments, getNamedAccounts } = require("hardhat");

async function main() {
  const { deploy } = deployments;
  const { deployer } = await getNamedAccounts();

  console.log("Deploying ...");

  const contract = await deploy("metaverse", {
    from: deployer,
    args: [],
    log: true,
  });

  console.log("contract deployed to:", contract.address);
}

main().catch((error) => {
  console.error(error);
  process.exit(1);
});
