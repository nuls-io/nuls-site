import type { Metadata } from 'next'
import React from 'react'
import Content from './Content'

export const metadata: Metadata = {
  title: 'Ecosystem - Explore NULS',
  description:
    "Explore NULS Ecosystem Search our database of projects and find the most interesting projects and dApps. Submit a project It's easy interact with NULS ALLTOOLSWALLETSDeFiLaunchPadNFTMARKETPLACEGAMINGAggregatorMEME Aleph EARHART STAKE NULS DOMAINS ENULS ID NULS MULTI SIGNATURE NULS EXPLORER Wormhole3 Message Crypt NULS FORUM NABOX hebe wallet hyperpay Desktop Wallet NULS POCM swapbox nulswap NerveBridge Nerveswap WaterTiger"
}

export default function EcosystemPage() {
  
  return (
    <section className="bg-sub pt-[225px] pb-[140px] lg:pt-40 lg:pb-[90px] lg:px-6">
      <div className="wrap">
        <h3 className="text-[56px] leading-[64px] font-medium text-center mb-[124px] lg:text-m-title lg:mb-[56px]">
          Ecosystem
        </h3>
        <Content />
      </div>
    </section>
  )
}
