# Camelot DEX - Default token list

This GitHub repo contains the default token list used in the Camelot interface.

## Adding a token

You can request the addition of the token through an issue submission or a pull request.

### Option #1: submit an issue

To request the whitelisting of a token to Camelot,
[file an issue](https://github.com/CamelotLabs/default-token-list/issues/new?assignees=&labels=token+request&template=token-request.md&title=Add+%7BTOKEN_SYMBOL%7D%3A+%7BTOKEN_NAME%7D).

### Option #2: pull request

To directly submit the integration of your token to Camelot's default token list, you can create your entry and submit a PR with it.

**1. Fork this repo**

**2. (Optional) Add your token logo in src/assets/.**

*The URI logo path in "blockchain".json will need to be set as BASE_URL/assets/token_symbol.svg (cf example-chain.json)*

**3. Add your token in the relevant "blockchain".json file in src/tokens/.**

**4. Provide the following required information for your token.**

- chainId (number)
- symbol (string)
- name (string)
- address (string)
- logoURI (string): URI to the logo of your token, format should be squared, either .svg or .png with a 100x100 resolution
- decimals (number)
- quote (string): define the type of your token, should be one of the following values:
  - "native": e.g. WETH
  - "stable": e.g. USDC, USDT
  - "other": e.g. GRAIL, GMX
  - "derived_native": e.g. wstETH, rETH
  - "derived_stable": e.g. jUSDC, fUSDC

**5. Provide the following optional info IF NEEDED ONLY for your token.**

- excludeFromExchange (boolean): to exclude your token from the swap and liquidity list modal, only for illiquid assets that still need to be listed on the app
- priceChartPair (string): address, to force a specific asset to be paired with this token on the swap page chart
- priceOf (string): address, use the price of a different asset to estimate the USD value of your token, only for illiquid assets
- intermediaryTokens (array): array of addresses, add as a trusted intermediary tokens in Camelot's native router's quoted paths

### Disclaimer

Note filing an issue does not guarantee addition to this default token list.
We do not review token addition requests in any particular order, and we do not
guarantee that we will review your request to add the token to the default list.