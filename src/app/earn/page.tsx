import type { Metadata } from 'next'
import Image from 'next/image'
import Button from '@/components/Button'
import EarnNULS from './EarnNULS'
import FundProject from './FundProject'
import {
  NaboxChrome,
  NaboxWallet,
  NULSWallet,
  NULSStaking,
  POCM,
  NODEGuide
} from '@/constants/links'

export const metadata: Metadata = {
  title: 'Earn - Ways to earn with NULS',
  description:
    'Our award-winning Proof of Credit (PoC) consensus mechanism secures the NULS network by combining Delegated Proof of Stake with an added credit rating feature. Earn NULS by staking into a node or operating a NULS master node.'
}

export default function EarnPage() {
  return (
    <>
      <section className="pt-[237px] pb-[230px] bg-[url('/earn/earn1.jpg')] bg-center bg-cover bg-no-repeat lg:pt-[160px] lg:pb-[90px] lg:px-6 lg:bg-none lg:bg-sub">
        <div className="wrap">
          <h1 className="w-[535px] text-[56px] leading-[64px] font-medium lg:w-full lg:text-m-title lg:text-center">
            Proof <br className="lg:hidden" />
            of <span className="text-special">Credit</span>
          </h1>
          <p className="mt-[37px] text-sm w-[406px] lg:w-full lg:text-center">
            Our award-winning Proof of Credit (PoC) consensus mechanism secures
            the NULS network by combining Delegated Proof of Stake with an added
            credit rating feature. Earn NULS by staking into a node or operating
            a NULS master node
          </p>
        </div>
      </section>

      <section className="relative h-[716px] lg:bg-text lg:h-auto lg:py-[74px] lg:px-6">
        <div className="absolute top-0 right-0 bottom-0 left-0 flex -z-10 lg:hidden">
          <div className="flex-1 h-full bg-[#002918]"></div>
          <div className="flex-1 h-full bg-text"></div>
        </div>
        <div className="wrap h-full flex items-center">
          <div className="flex-1 flex justify-center items-center lg:hidden">
            <Image src="/earn/earn2.png" width={518} height={476} alt="" />
          </div>
          <div className="flex-1">
            <div className="pl-[92px] lg:pl-0">
              <h3 className="text-[40px] leading-[46px] font-medium text-sub lg:text-32 lg:text-center">
                Nabox Wallet
              </h3>
              <p className="text-sm text-sub mt-[38px] mb-[48px] lg:my-8">
                Nabox is a cross-chain DID application built for Web3. With
                Nabox, you can manage assets across different blockchains
                whether for DeFi, GameFi, NFTs, and other use cases that come
                up. Nabox is your gateway to the multi-chain world.
                <br />
                <br />
                Nabox uses an asymmetric cryptographic algorithm as the basis of
                Nabox’s DID. Users use the same set of keys and public keys to
                manage assets and data on different blockchains.
              </p>
              <div>
                <Button
                  className="w-[177px] mr-6 lg:w-full lg:mr-0 lg:mb-3 lg:text-base"
                  px="px-0"
                  py="py-[14.5px] lg:py-3"
                  href={NaboxChrome}>
                  Chrome Plugin
                </Button>
                <Button
                  className="w-[177px] lg:w-full lg:text-base"
                  px="px-0"
                  py="py-[14.5px] lg:py-3"
                  href={NaboxWallet}>
                  Mobile
                </Button>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="bg-sub pt-[159px] pb-[186px] lg:py-[74px] lg:px-6">
        <div className="wrap flex">
          <div className="w-[452px] mr-[58px] lg:w-full lg:mr-0">
            <h3 className="text-[40px] leading-[46px] font-medium lg:text-32 lg:text-center">
              NULS Light Wallet
            </h3>
            <p className="text-sm mt-[38px] mb-[48px]  lg:my-8">
              The web and light wallets feature full staking and voting
              capabilities. You do not need to leave the wallet running to
              receive staking rewards.{' '}
              <span className="font-bold">
                NULS staking allows you to earn rewards while your PC is off.
              </span>
              <br />
              <br />
              Before using any wallet, please be sure to back up your private
              key, keystore file, and password to a safe place. Additionally, it
              is recommended to use incognito mode, or turn off browser add-ons
              to further ensure the safety of your tokens.
            </p>
            <Button
              className="w-[252px] lg:w-full lg:text-base"
              px="px-0"
              py="py-[14.5px] lg:py-3"
              href={NULSWallet}>
              Desktop Light Wallet
            </Button>
          </div>
          <div className="lg:hidden">
            <Image src="/earn/earn3.png" width={690} height={387} alt="" />
          </div>
        </div>
      </section>

      <EarnNULS />

      <FundProject />

      <section className="py-[132px] bg-[url('/home/home5.jpg')] bg-cover bg-center bg-no-repeat lg:py-[74px] lg:px-6">
        <div className="wrap flex flex-col justify-center items-center">
          <h3 className="text-center text-sub text-[40px] leading-[50px] font-medium lg:text-32">
            Operating a NULS Node
          </h3>
          <p className="w-[484px] text-center text-sub text-sm mt-[48px] mb-[72px] lg:w-full lg:my-10">
            Node operation requires use of the full node wallet. Operate a NULS
            Masternode or have one hosted by our partners at{' '}
            <span>NodeForge.io</span>
          </p>
          <div className="lg:w-full">
            <Button
              href={NODEGuide}
              className="w-[266px] mr-6 lg:w-full lg:mr-0 lg:mb-3"
              px="px-0"
              py="py-[19.5px] lg:py-1">
              Node Guide
            </Button>
            <Button
              href={NODEGuide}
              className="w-[252px] lg:w-full"
              px="px-0"
              py="py-[19.5px] lg:py-1">
              Manual Guide
            </Button>
          </div>
        </div>
      </section>
    </>
  )
}
