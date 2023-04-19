import "@nomiclabs/hardhat-waffle";

import "hardhat-deploy";
import "@nomiclabs/hardhat-ethers";
import "@openzeppelin/hardhat-upgrades";
import "@nomiclabs/hardhat-etherscan";
import "solidity-coverage";

const {
  infuraProjectId,
  accountPrivateKey,
  etherscanApiKey,
  alchemyApi,
  testMnemonics,
} = require("./.secrets.js");

/**
 * @type import('hardhat/config').HardhatUserConfig
 */
module.exports = {
  paths: {
    sources: "./contracts",
  },
  defaultNetwork: "hardhat",
  // namedAccounts: {
  //   deployer: { default: 0 },
  //   alice: { default: 1 },
  //   bob: { default: 2 },
  //   rando: { default: 3 },
  // },

  networks: {
    hardhat: {
      accounts: {
        mnemonic: testMnemonics,
      },
      forking: {
        url: "https://bsc-dataseed.binance.org/",
        // blockNumber: 19376198,
      },
      // blockGasLimit: 12e6,

      // loggingEnabled: false,
      // mining: {
      //   auto: true,
      //   interval: [1000, 5000],
      // },

      allowUnlimitedContractSize: true,
    },

    goerli: {
      url: `https://goerli.infura.io/v3/${infuraProjectId}`,
      chainId: 5,
      //gasPrice: 20000000000,
      accounts: [accountPrivateKey["test"]],
    },

    eth_mainnet: {
      url: `https://mainnet.infura.io/v3/${infuraProjectId}`,
      chainId: 1,
      //gasPrice: 20000000000,
      accounts: [accountPrivateKey["mainnet"]],
    },
  },

  etherscan: {
    // Your API key for Etherscan
    // Obtain one at https://etherscan.io/
    apiKey: etherscanApiKey,
    customChains: [
      // additional etherscan config
    ],
  },

  solidity: {
    compilers: [
      {
        version: "0.8.14",
        settings: {
          optimizer: {
            enabled: true,
            runs: 200,
          },
        },
      }
    ],
  },
  gasReporter: {
    enabled: true,
  },
};