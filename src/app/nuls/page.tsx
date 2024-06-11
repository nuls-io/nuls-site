import type { Metadata } from 'next'
import Image from 'next/image'
import SectionBgWrapper from '@/components/SectionBgWrapper'
import Video from '@/components/Video'
import Button from '@/components/Button'
import {
  NULSNode,
  NULSNode2,
  NULSNode3,
  NULSExplorer,
  NULSBetaNode,
  NULSBetaExplorer,
  NULSWallet
} from '@/constants/links'

export default function NULSPage() {
  return (
    <>
      <SectionBgWrapper
        className="pt-[210px] pb-[128px] lg:pt-[160px] lg:pb-[60px] lg:px-6 lg:bg-sub"
        src="/common/bg4.mp4">
        <div className="wrap flex flex-col items-center">
          <h3 className="text-[84px] leading-[96px] font-medium text-center lg:text-m-title">
            What is <br />
            <span className="text-special">NULS? </span>
          </h3>
          <p className="w-[521px] text-sm pt-[37px] text-center lg:w-full">
            NULS is a blockchain infrastructure that provides customizable
            services and a global open-source community blockchain project.
            <br />
            <br />
            NULS adopts micro-services to achieve a highly modular underlying
            architecture, using smart contracts and cross-chain technologies,
            combined with the ability of ChainBox to quickly build chains,
            reduce development costs, and accelerate blockchain business
            application landing.
          </p>
        </div>
      </SectionBgWrapper>

      <section className="relative h-[548px] lg:h-auto lg:bg-text lg:py-[74px] lg:px-6">
        <div className="absolute top-0 right-0 bottom-0 left-0 flex -z-10 lg:hidden">
          <div className="w-[40%] h-full bg-text"></div>
          <div className="flex-1 h-full bg-[#000503]"></div>
        </div>
        <div className="wrap h-full flex">
          <div className="w-[40%] flex flex-col justify-center lg:w-full">
            <h4 className="text-xl text-main font-bold lg:text-lg">
              Now Available
            </h4>
            <h3 className="text-[40px] leading-[46px] font-medium text-sub pt-[11px] pb-[38px] lg:text-32 lg:pb-[25px]">
              NULS Mainnet
            </h3>
            <ul className="list-disc pl-[18px]">
              <li className="text-sm text-sub">
                Network Type: <span className="text-main">NULS</span>
              </li>
              <li className="text-sm text-sub">
                Network Name: <span className="text-main">NULS Mainnet</span>
              </li>
              <li className="text-sm text-sub">
                Node RPC:{' '}
                <a
                  className="text-main underline underline-offset-2"
                  target="_blank"
                  href={NULSNode}>
                  api.nuls.io/jsonrpc
                </a>
              </li>
              <li className="text-sm text-sub">
                Alternative NODE RPC:{' '}
                <a
                  className="text-main underline underline-offset-2"
                  target="_blank"
                  href={NULSNode2}>
                  sg.api.nuls.io/jsonrpc
                </a>{' '}
                |{' '}
                <a
                  className="text-main underline underline-offset-2"
                  target="_blank"
                  href={NULSNode3}>
                  api.nuls.info/jsonrpc
                </a>
              </li>
              <li className="text-sm text-sub">
                Chain: <span className="text-main">1</span>
              </li>
              <li className="text-sm text-sub">
                Symbol: <span className="text-main">NULS</span>
              </li>
              <li className="text-sm text-sub">
                Blockchain Explorer:{' '}
                <a
                  className="text-main underline underline-offset-2"
                  target="_blank"
                  href={NULSExplorer}>
                  nulscan.io
                </a>
              </li>
            </ul>
          </div>
          <div className="pl-16 flex-1 flex justify-center items-center lg:hidden">
            <div className="w-[583px] h-[444px] overflow-hidden">
              <Video src="/nuls/bg1.mp4" />
            </div>
          </div>
        </div>
      </section>

      <SectionBgWrapper
        src="/common/bg8.mp4"
        poster="/community/community2.png"
        className="pt-[184px] pb-40 lg:py-[74px] lg:px-6 lg:bg-sub">
        <div className="wrap flex flex-col items-center">
          <h3 className="text-40 font-medium text-center lg:text-32">
            Download Wallet
          </h3>
          <p className="w-[400px] text-sm mt-8 mb-11 text-center lg:w-full">
            NULS Desktop Wallet or Nabox Wallet, are both compatible with NULS
            blockchain
          </p>
          <div>
            <Button href={NULSWallet} className="w-[300px]" py="py-[15.5px]">
              Wallets
            </Button>
          </div>
        </div>
      </SectionBgWrapper>

      <section className="relative h-[548px] lg:h-auto lg:bg-text lg:py-[74px] lg:px-6">
        <div className="absolute top-0 right-0 bottom-0 left-0 flex -z-10 lg:hidden">
          <div className="flex-1 h-full bg-[#000503]"></div>
          <div className="w-[40%] h-full bg-text"></div>
        </div>
        <div className="wrap h-full flex">
          <div className="flex-1 flex justify-center items-center lg:hidden">
            <div className="w-full h-full overflow-hidden">
              <Video src="/nuls/bg3.mp4" />
            </div>
          </div>
          <div className="w-[40%] flex flex-col justify-center pl-[78px] lg:w-full lg:pl-0">
            <h4 className="text-xl text-main font-bold">Available</h4>
            <h3 className="text-[40px] leading-[46px] font-medium text-sub pt-[11px] pb-[38px] lg:text-32 lg:pb-[25px]">
              NULS Testnet
            </h3>
            <ul className="list-disc pl-[18px]">
              <li className="text-sm text-sub">
                Network Type: <span className="text-main">NULS</span>
              </li>
              <li className="text-sm text-sub">
                Network Name: <span className="text-main">NULS Testnet</span>
              </li>
              <li className="text-sm text-sub">
                Node RPC:{' '}
                <a
                  className="text-main underline underline-offset-2"
                  target="_blank"
                  href={NULSBetaNode}>
                  beta.api.nuls.io/jsonrpc
                </a>
              </li>
              <li className="text-sm text-sub">
                Chain: <span className="text-main">2</span>
              </li>
              <li className="text-sm text-sub">
                Symbol: <span className="text-main">tNULS</span>
              </li>
              <li className="text-sm text-sub">
                Blockchain Explorer:{' '}
                <a
                  className="text-main underline underline-offset-2"
                  target="_blank"
                  href={NULSBetaExplorer}>
                  beta.nulscan.io
                </a>
              </li>
            </ul>
          </div>
        </div>
      </section>
    </>
  )
}
