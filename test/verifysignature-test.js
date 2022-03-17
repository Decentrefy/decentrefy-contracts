const { expect } = require("chai");
const { ethers } = require("hardhat");

describe("VerifySignature", function () {
  it("...", async function () {
    const Verify = await ethers.getContractFactory("VerifySignature");
    const v = await Verify.deploy();
    await v.deployed();

    console.log(`Hash1: ` + await v.hash1("1234"));
    console.log(`Hash2: ` + await v.hash2("1234"));

  });
});
