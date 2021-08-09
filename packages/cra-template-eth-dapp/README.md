# Create React Ethereum DApp Template

[![react-scripts](https://img.shields.io/npm/v/react-scripts?label=react-scripts)](https://github.com/facebook/create-react-app)
[![@web3-react/core](https://img.shields.io/badge/%40web3--react%2Fcore-v6.1.9-blue)](https://github.com/NoahZinsmeister/web3-react)

###### Create React Ethereum DApp Easy and Fast

## Get Started

```zsh
npx create-react-app my-app --template eth-dapp

# or yarn
yarn create react-app my-app --template eth-dapp
```

## Structure

```bash
my-app/
  README.md
  node_modules/
  package.json
  public/
    index.html
    favicon.ico
    logo192.png
    logo512.png
    manifest.json
    robots.txt
  src/
    components/
      ConnectWallet.js
      WalletInfo.js
    hooks/
      index.js
    lib/
      connectors/
        index.js
        portis-connector.js
    App.css
    App.js
    App.test.js
    index.css
    index.js
    reportWebVitals.js
    setupTests.js
```

## Features

### Connector(Default)

- MetaMask(injected)
- Portis(Override connector)
- WalletConnect
- WalletLink(Coinbase)

### Network / Chain ID

- Mainnet / 1
- Ropsten / 3
- Rinkeby / 4
- Goerli / 5
- Kovan / 42
- Matic Mainnet / 137
- Matic Testnet(Mumbai) / 80001
