# DBank Web3 App

A blockchain web3 app created with DFINITY's Internet Computer.

## Overview

DBank is a blockchain-based Web3 app built using Motoko and DFINITY's Internet Computer.

# Features
- Check your account balance.
- Top up your account with funds.
- Withdraw funds from your account.
- Compound interest over time.

## Technologies Used
- DFINITY's Internet Computer
- JavaScript
- Motoko

## Getting Started

To get started with DBank, follow these steps:

1. Clone this repository to your local machine.

```bash
git clone git@github.com:Roberta-Freitas/dbank-web3-app.git
```

2. Install project dependencies:

```bash
npm install
```

3. Start the development environment:

```bash
dfx start --background
dfx deploy
```

4. Access your DBank app at [http://localhost:4943?canisterId={asset_canister_id}](http://localhost:4943?canisterId={asset_canister_id}).

## Development

- **Backend**: The backend of this app is written in Motoko. You can make changes to the backend by editing the Motoko code located in the `src/dbank` directory.

- **Frontend**: The frontend is built using JavaScript and can be found in the `src/declarations/dbank_frontend` directory. You can make changes to the frontend code to customize the user interface.

- **Local Development**: To test your changes locally, follow the instructions in the default README provided.

## Deployment

To deploy your changes to the Internet Computer, run:

```bash
dfx deploy
```

This will deploy your canisters and generate your candid interface.
