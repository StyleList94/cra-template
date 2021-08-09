# Create React Ethereum DApp Template

[![react-scripts](https://img.shields.io/npm/v/react-scripts?label=react-scripts)](https://github.com/facebook/create-react-app)
[![@web3-react/core](https://img.shields.io/badge/%40web3--react%2Fcore-v6.1.9-blue)](https://github.com/NoahZinsmeister/web3-react)

###### Create React Ethereum DApp Easy and Fast

## Get Started

```zsh
npx create-react-app my-app --template eth-dapp-typescript

# or yarn
yarn create react-app my-app --template eth-dapp-typescript
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
  @types/
    index.d.ts
  src/
    components/
      ConnectWallet.tsx
      WalletInfo.tsx
    hooks/
      index.ts
    lib/
      connectors/
        index.ts
        portis-connector.ts
    App.css
    App.tsx
    App.test.tsx
    index.css
    index.tsx
    react-app-env.d.ts
    reportWebVitals.ts
    setupTests.ts
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
