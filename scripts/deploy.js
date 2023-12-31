// const { ethers, upgrades } = require("hardhat");

// async function main() {
//   const [deployer] = await ethers.getSigners();
//   console.log("Deploying contracts with the account:", deployer.address);

//   const balance = await deployer.provider.getBalance(deployer.address);
//   // console.log("Account balance:", ethers.utils.formatEther(balance));
//   // const balanceInEther = ethers.utils.formatUnits(balance, "ether");
//   console.log("Account balance:", (await deployer.getBalance()).toString());

//   const Token = await ethers.getContractFactory("MyToken");
//   const token = await upgrades.deployProxy(Token, [50000000000]);

//   await token.deployed();
//   console.log("Token address:", token.address);

//   // You can add the code to verify the contract here if needed
// }

// main()
//   .then(() => process.exit(0))
//   .catch((error) => {
//     console.error(error);
//     process.exitCode = 1;
//   });


const { ethers, upgrades } = require("hardhat");

async function main() {
  const [deployer] = await ethers.getSigners();
  console.log("Deploying contracts with the account:", deployer.address);

  const balance = await deployer.provider.getBalance(deployer.address);
  console.log("Account balance:", ethers.utils.formatEther(balance));

  const Token = await ethers.getContractFactory("MyToken");
  const token = await upgrades.deployProxy(Token, [50000000000]);

  await token.deployed();
  console.log("Token address:", token.address);

  // You can add the code to verify the contract here if needed
}

main()
  .then(() => process.exit(0))
  .catch((error) => {
    console.error(error);
    process.exitCode = 1;
  });
