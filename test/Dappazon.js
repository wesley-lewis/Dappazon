const { expect } = require("chai")
const { ethers } = require("hardhat")

const tokens = (n) => {
  return ethers.utils.parseUnits(n.toString(), 'ether')
}

describe("Dappazon", () => {
  let dappazon, deployer, buyer
  beforeEach(async () => {
    // Setup accounts
    [deployer, buyer] = await ethers.getSigners()
    console.log(deployer.address, buyer.address)

    // Deploy contract
    const Dappazon = await ethers.getContractFactory("Dappazon")
    dappazon = await Dappazon.deploy()

  })

  describe("Deployment", () => {
    it("Sets the owner", async () => {
      expect(await dappazon.owner()).to.equal(deployer.address)
    })
  })

})
