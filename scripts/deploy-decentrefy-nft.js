const { ethers, upgrades } = require("hardhat");

async function main() {
    const contracFactory = await ethers.getContractFactory("DecentrefyNft");
    const myContract = await upgrades.deployProxy(contracFactory, [ 
        "0x7D4a82306Eb4de7C7B1D686AFC56b1E7999ba7F9", // Owner
        "https://apinft.bunnygirlnft.com/metadata/genesis/", // Token URI Prefix
        "Decentrefy Nft", // Token name
        "DCN", // Token Symbol
    ]);

    await myContract.deployed();
    console.log("Decentrefy Nft deployed to:", myContract.address);
}

main().catch((error) => {
    console.error(error);
    process.exitCode = 1;
});
  