import type { Metadata } from 'next'
import SectionBgWrapper from '@/components/SectionBgWrapper'
import Video from '@/components/Video'
import Button from '@/components/Button'
import { NerveBridge, SwapBox } from '@/constants/links'

export const metadata: Metadata = {
  title: 'BTC Layer-2'
}

export default function BTCLayer2Page() {
  return (
    <>
      <section className="bg-[#000D07] overflow-hidden">
        <div className="wrap relative pt-[223px] pb-[200px] lg:pt-40 lg:pb-[90px] lg:px-6">
          <div
            style={{
              background:
                'linear-gradient(270deg, rgba(0, 13, 7, 0) 70.22%, #000D07 90.37%)'
            }}
            className="absolute top-0 w-[1298px] h-[750px] left-[300px] lg:hidden">
            <Video src="/btc-layer2/bg1.mp4" />
          </div>
          <div className="relative">
            <h3 className="w-[620px] text-56 font-medium text-sub lg:text-m-title lg:w-full lg:text-center">
              Bitcoin Layer-2 <br /> <span className="text-main">Solution</span>
            </h3>
            <p className="w-[515px] text-sm text-sub mt-8 lg:w-full lg:text-center">
              NULS is a Layer1 blockchain and also a Layer2 extension network of
              Bitcoin. The NULS blockchain interacts with NULS heterogeneous
              blockchains through NerveNetwork relay network.
              <br />
              <br />
              Within the NULS network, BTC/ETH is used as the gas fee for
              sending transactions and processing smart contracts. Nodes and
              Stakers of the NULS network will receive BTC/ETH as network
              rewards.
            </p>
          </div>
        </div>
      </section>

      <section className="bg-sub overflow-hidden">
        <div className="wrap relative py-[194px] lg:py-[74px] lg:px-6">
          <div className="absolute w-[2134px] h-[1086px] left-[146px] bottom-[112px] lg:hidden">
            <Video src="/common/bg2.mp4" />
          </div>
          <div className="absolute w-[2134px] h-[1086px] right-[339px] top-5 lg:hidden">
            <Video src="/common/bg2.mp4" />
          </div>
          <div className="w-full flex flex-col justify-center items-center relative">
            <h3 className="text-40 text-center font-medium">
              Bridge
              <br />
              <span className="text-special">BTC/ETH to NULS</span>
            </h3>
            <p className="text-sm mt-8 mb-12">
              Use NerveBridge or SwapBox to bridge BTC/ETH to the NULS network.
            </p>
            <div>
              <Button
                href={NerveBridge}
                className="w-[246px] mr-6 lg:w-full lg:mr-0 lg:mb-4"
                py="py-[14.5px] lg:py-1">
                NerveBridge
              </Button>
              <Button
                href={SwapBox}
                className="w-[246px] lg:w-full"
                py="py-[14.5px] lg:py-1">
                SwapBox
              </Button>
            </div>
          </div>
        </div>
      </section>

      <SectionBgWrapper
        src="/common/bg3.mp4"
        className="py-[116px] lg:bg-[url('/home/home5.jpg')] lg:bg-cover lg:bg-center lg:bg-no-repeat lg:py-[74px] lg:px-6">
        <div className="abs-full z-[-1] bg-text opacity-70"></div>
        <div className="wrap flex flex-col justify-center items-center">
          <h3 className="text-center text-sub text-40 font-medium lg:text-32">
            A New Component for ChainBox <br />{' '}
            <span className="text-main">Bitcoin Layer2 module</span>
          </h3>
          <p className="w-[656px] text-center text-sub text-sm my-10 lg:w-full lg:my-8">
            Use ChainBox to create a new BTC Layer2 network, and you can define
            one or more assets as the transaction fee of the network. For
            example, you can use BTC, ETH, NULS or your own coin as the gas fee
            for any parallel chains created by NULS ChainBox.
          </p>
          <div className="lg:w-full">
            <Button
              href="/chain-box"
              className="w-[266px] lg:w-full"
              py="py-[19.5px] lg:py-1">
              Explore ChainBox
            </Button>
          </div>
        </div>
      </SectionBgWrapper>
    </>
  )
}
