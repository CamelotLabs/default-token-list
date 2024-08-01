const { version } = require("../package.json");
require('dotenv').config()
const arbitrumSepolia = require("./tokens/arbitrum-sepolia.json");
const arbitrumOne = require("./tokens/arbitrum-one.json");
const gravity = require("./tokens/gravity.json");
const proofOfPlay = require("./tokens/proof-of-play.json");
const rari = require("./tokens/rari.json");
const reya = require("./tokens/reya.json");
const sanko = require("./tokens/sanko.json");
const xai = require("./tokens/xai.json");

const BASE_URL = process.env.BASE_URL || "https://token-list.camelot.exchange"

module.exports = function buildList() {
    const tokens = [...arbitrumSepolia, ...arbitrumOne, ...gravity, ...proofOfPlay, ...rari, ...reya, ...sanko, ...xai]
  const processedTokens = JSON.parse(JSON.stringify(tokens).replace(/BASE_URL/g, BASE_URL))
  const parsed = version.split(".");

  return {
    name: "Camelot default token list",
    timestamp: new Date().toISOString(),
    version: {major: +parsed[0], minor: +parsed[1], patch: +parsed[2],},
    tags: {},
    logoURI: "https://app.camelot.exchange/images/logo-sm.svg",
    keywords: ["camelot", "default"],
    tokens: processedTokens
      // sort them by symbol for easy readability
      .sort((t1, t2) => {
        if (t1.chainId === t2.chainId) {
          return t1.symbol.toLowerCase() < t2.symbol.toLowerCase() ? -1 : 1;
        }
        return t1.chainId < t2.chainId ? -1 : 1;
      }),
  }
};
