'use client'

import { TabType } from './Tabs'

const items = [
  {
    src: '/ecosystem/NULS.svg',
    name: 'NULS Desktop Wallet',
    desc: 'NULS Desktop wallet is developed by the NULS core team for users to operate within the NULS ecosystem on desktop devices.',
    link: 'https://github.com/nuls-io/nuls-v2/releases',
    type: TabType.Wallets
  },
  {
    src: '/ecosystem/Nabox.svg',
    name: 'Nabox Wallet',
    desc: 'Nabox is the Multi-Chain DID wallet to Web3, supporting NULS, ENULS, and the most mainstream EVM blockchains, featured in aggregation, cross-chain, swap, and more.',
    link: 'https://nabox.io/',
    type: TabType.Wallets
  },
  {
    src: '/ecosystem/MetaMask.svg',
    name: 'MetaMask',
    desc: 'MetaMask is the leading self-custodial wallet. The safe and simple way to access blockchain applications and web3. Trusted by millions of users worldwide.',
    link: 'https://metamask.io/',
    type: TabType.Wallets
  },
  {
    src: '/ecosystem/ONTOWallet.svg',
    name: 'ONTO Wallet',
    desc: 'An all-in-one solution for Web3 to manage identity, data, and assets, with 1M+ users, 1,000+ supported dApps across 70+ blockchains.',
    link: 'https://onto.app/',
    type: TabType.Wallets
  },
  {
    src: '/ecosystem/TokenPocket.svg',
    name: 'Token Pocket',
    desc: 'Easy and safe to buy, store, send, swap tokens and collect NFTs. Trusted by 20+ millions users from 200+ countries and regions.',
    link: 'https://www.tokenpocket.pro',
    type: TabType.Wallets
  },
  {
    src: '/ecosystem/MathWallet.svg',
    name: 'Math Wallet',
    desc: 'MathWallet is a multi-platform (mobile/desktop/hardware) universal crypto wallet that enables token storage of 150+ blockchains.',
    link: 'https://www.mathwallet.org/',
    type: TabType.Wallets
  },
  {
    src: '/ecosystem/HyperPay.svg',
    name: 'Hyper Pay',
    desc: 'Hyper Pay Wallet is a multi-chain cryptocurrency wallet that offers a wide range of services and features for managing digital assets.',
    link: 'https://www.hyperpay.tech',
    type: TabType.Wallets
  },
  {
    src: '/ecosystem/FoxWallet.svg',
    name: 'Fox Wallet',
    desc: 'FoxWallet is a multi-chain web3 wallet where users can access a wide range of dApps, manage digital assets and interact with various blockchain networks.',
    link: 'https://foxwallet.com/',
    type: TabType.Wallets
  },
  {
    src: '/ecosystem/HebeWallet.svg',
    name: 'Hebe Wallet',
    desc: 'Secure cryptocurrency wallet for Ethereum Classic, Bitcoin, Ethereum, Ripple, Litecoin, Stellar, Nxt, Ardor and over 100+ main chains.',
    link: 'https://hebe.cc/',
    type: TabType.Wallets
  },
  ///////////////////////////////
  {
    src: '/ecosystem/NULS.svg',
    name: 'NULS POCM',
    desc: 'Stake your NULS with the project you like and start earning project tokens. Your NULS tokens never leave your wallet, and you can turn your PC off while you earn.',
    link: 'https://pocm.nuls.io/',
    type: [TabType.DeFi, TabType.Staking]
  },
  {
    src: '/ecosystem/NULS.svg',
    name: 'NULS Stake',
    desc: 'Delegate NULS on NULS main net to protect the network while receiving consensus rewards.',
    link: 'https://stake.nuls.io/',
    type: [TabType.DeFi, TabType.Staking]
  },
  {
    src: '/ecosystem/Swapbox.svg',
    name: 'SwapBox',
    desc: 'SwapBox aggregator aggregates the mainstream DEXs to provide users with asset exchange and asset cross-chain exchange, and intelligently find the best exchange path.',
    link: 'https://swapbox.nabox.io/',
    type: TabType.DeFi
  },
  {
    src: '/ecosystem/NERVE.svg',
    name: 'NerveSwap',
    desc: 'NerveSwap is our in-house AMM solution providing secure, fast, and cheap atomic transactions.',
    link: 'https://nerve.network/swap',
    type: TabType.DeFi
  },
  { 
    src: '/ecosystem/Nulswap.svg',
    name: 'Nulswap',
    desc: 'Nulswap is a decentralized exchange (DEX) and Liquidity Staking Derivatives (LSD) protocol built on the NULS blockchain.',
    link: {[TabType.DeFi]: 'https://nulswap.com/', [TabType.Staking]: 'https://app.nulswap.com/stake'},
    type: [TabType.DeFi, TabType.Staking]
  },
  {
    src: '/ecosystem/NERVE.svg',
    name: 'NerveBridge',
    desc: 'NerveBridge is a multi-chain asset cross-chain protocol that supports over 30 blockchains and 300+ tokens.',
    link: 'https://bridge.nerve.network/',
    type: TabType.DeFi
  },
  {
    src: '/ecosystem/PheasantSwap.svg',
    name: 'PheasantSwap',
    desc: 'PheasantSwap is the first decentralized exchange built on ENULS. It also supports Linea and Base blockchain.',
    link: 'https://pheasantswap.com/',
    type: TabType.DeFi
  },
  {
    src: '/ecosystem/WaterFinance.svg',
    name: 'Watertiger Finance',
    desc: 'WaterTiger was founded to foster the growth of NULS DeFi ecosystem by enabling users to generate boosted yields on their aNswap or Nulswap LP deposits.',
    link: 'https://watertiger.finance/',
    type: [TabType.DeFi, TabType.Staking]
  },
  //////////////////////////////////
  {
    src: '/ecosystem/NERVE.svg',
    name: 'NerveFarm',
    desc: 'NerveSwap is our in-house AMM solution providing secure, fast, and cheap atomic transactions. ',
    link: 'https://nerve.network/farm',
    type: TabType.Staking
  },
  {
    src: '/ecosystem/Swapbox.svg',
    name: 'SwapBox Farm',
    desc: 'SwapBox offers yielding solutions for the NULS token where users can deposit NULS LP to earn rewards.',
    link: 'https://swapbox.nabox.io/l2farm',
    type: TabType.Staking
  },
  {
    src: '/ecosystem/MyCointainer.svg',
    name: 'MyCointainer',
    desc: 'MyCointainer is an all-in-one licensed platform that has been running since 2018, offering a variety of ways to earn crypto.',
    link: 'https://www.mycointainer.com/',
    type: TabType.Staking
  },
  ////////////////////////
  {
    src: '/ecosystem/aleph.svg',
    name: 'aleph.im',
    desc: 'Incubated on NULS POCM platform, aleph.im is an open-source off-chain P2P network that decentralized key-value store, file storage, function execution and virtual machine provisioning.',
    link: 'https://aleph.im/ ',
    type: TabType['Infra&Tools']
  },
  {
    src: '/ecosystem/NULS.svg',
    name: 'NULS Multi-signature',
    desc: 'NULS Multi-sig is a digital signature that allows multiple users to sign a single transaction within the NULS ecosystem.',
    link: 'https://docs.nuls.io/Guide/g_multiSignature_dapp_Guide.html ',
    type: TabType.Wallets
  },
  {
    src: '/ecosystem/NULS.svg',
    name: 'NULS Scan',
    desc: 'NULS Scan provides functionalities such as transaction tracking, block information, address lookup, smart contract interaction, token information, network statistics, etc.',
    link: 'https://nulscan.io/',
    type: TabType['Infra&Tools']
  },
  {
    src: '/ecosystem/Wormhole3.svg',
    name: 'Wormhole3',
    desc: 'Wormhole3 is a web3 application governed by decentralized code and protocol.',
    link: 'https://alpha.wormhole3.io/square',
    type: TabType['Infra&Tools']
  },
  {
    src: '/ecosystem/NULS.svg',
    name: 'NULS Message Crypt',
    desc: 'Secure your message with NULS Message Crypt dApp, verify important information, or identify the ownership of a blockchain account.',
    link: 'https://github.com/nuls-io/nuls-tool-message-sign',
    type: TabType['Infra&Tools']
  },
  {
    src: '/ecosystem/NULS.svg',
    name: 'NULS Forum',
    desc: 'Discover the latest technical and community updates, events, and governance on NULS forum.',
    link: 'https://forum.nuls.io/',
    type: TabType['Infra&Tools']
  },
  {
    src: '/ecosystem/ENULSScan.svg',
    name: 'ENULS Scan',
    desc: 'ENULS Scan is a blockchain explorer specifically designed for the ENULS network.',
    link: 'https://evmscan.nuls.io/',
    type: TabType['Infra&Tools']
  },
  {
    src: '/ecosystem/Nomis.svg',
    name: 'Nomis',
    desc: 'Nomis is onchain Identity Protocol that enables users to leverage their onchain Reputation and get personalized web3 experiences.',
    link: 'https://nomis.cc/',
    type: TabType['Infra&Tools']
  },
  /////////////////////
  {
    src: '/ecosystem/IvyMaker.svg',
    name: 'IvyMaker',
    desc: 'An NFT creation and incentive platform designed for everyone - artists, creators, fans, and beyond.',
    link: 'https://ivymaker.io/',
    type: TabType.NFTs
  },
  {
    src: '/ecosystem/NiftyFuse.svg',
    name: 'NiftyFuse',
    desc: 'NiftyFuse is a decentralized protocol that makes NFTs deflationary via a mechanism that allows people to fuse two NFTs into 1',
    link: 'https://niftyfuse.pt/',
    type: TabType.NFTs
  },
  //////////////////
  {
    src: '/ecosystem/Suisse.svg',
    name: 'Suisse Blockchain',
    desc: 'The first regulated web3 blockchain startup accelerator based in the Swiss Crypto Valley, built on ENULS, serving the ecosystem.',
    link: 'https://suisseblockchain.io/#home',
    type: TabType.LaunchPad
  },
  {
    src: '/ecosystem/NERC20.svg',
    name: 'NERC20',
    desc: 'NERC20 is a new generation of ERC20 fair launch platform. Rapid deployment of fair issuance in EVM smart contracts, compatible with ENULS network.',
    link: 'https://nerc20.cash/',
    type: TabType.LaunchPad
  },
  {
    src: '/ecosystem/DAOStarter.svg',
    name: 'DAO Starter',
    desc: 'DAOStarter is a crypto incubator serving for Web3.0, building on. Multi-Chain.',
    link: 'https://www.daostarter.pro/#/index',
    type: TabType.LaunchPad
  },
  {
    src: '/ecosystem/PlaySky.svg',
    name: 'PlaySky',
    desc: 'PlaySky is a new generation of LaunchPad that contributes to its community.',
    link: 'https://playsky.io/',
    type: TabType.LaunchPad
  },
  {
    src: '/ecosystem/Fomoin.svg',
    name: 'Fomoin',
    desc: 'Fomoin is a digital marketing solution and one-stop incubation engine for #blockchain startups.',
    link: 'https://fomoin.finance/#/',
    type: TabType.LaunchPad
  },
  /////////////////////////
  {
    src: '/ecosystem/Heroes.svg',
    name: 'Heros Battle Arena',
    desc: "A free, play&fun multichain game inspired by the legendary 'Heroes Might and Magic', featuring AI, cash rewards & NFTs through strategic battles or lucky draws.",
    link: 'https://heroesbattlearena.online/',
    type: TabType.Gaming
  },
]

export default items