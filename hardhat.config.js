
require("@nomiclabs/hardhat-waffle");
require("@nomiclabs/hardhat-ethers");
const dotenv = require("dotenv");

dotenv.config();

// Go to https://www.alchemyapi.io, sign up, create
// a new App in its dashboard, and replace "KEY" with its key
// const ALCHEMY_API_KEY = "";

// Replace this private key with your Ropsten account private key
// To export your private key from Metamask, open Metamask and
// go to Account Details > Export Private Key
// Be aware of NEVER putting real Ether into testing accounts
// const ROPSTEN_PRIVATE_KEY = "";

module.exports = {
  solidity: "0.8.1",
  networks: {
    ropsten: {
      url: `https://eth-ropsten.alchemyapi.io/v2/${process.env.ALCHEMY_API_KEY}`,
      accounts: [`${process.env.PRIVATE_KEY}`]
    }
  }
};



