import type { Metadata } from 'next'
import Image from 'next/image'
import SectionBgWrapper from '@/components/SectionBgWrapper'
import Button from '@/components/Button'
import InteractWithENULS from './InteractWithENULS'
import {
  ChainList,
  ENULSBetaExplorer,
  ENULSBetaSNode,
  ENULSExplorer,
  ENULSFaucet,
  ENULSNode,
  ENULSNode2
} from '@/constants/links'

export const metadata: Metadata = {
  title: 'ENULS - EVM on NULS',
  description:
    'What is ENULS? ENULS, initiated by the NULS community, is a blockchain that is fully compatible with EVM and Web3 API interfaces.'
}

export default function ENULSPage() {
  return (
    <>
      <SectionBgWrapper
        className="pt-[162px] pb-[86px] lg:pt-[160px] lg:pb-[60px] lg:px-6"
        src="/common/bg4.mp4">
        <div className="wrap flex flex-col items-center">
          <h3 className="text-[84px] leading-[96px] font-medium text-center lg:text-m-title">
            What is <br />
            <span className="text-special">ENULS? </span>
          </h3>
          <p className="w-[521px] text-sm pt-[37px] text-center lg:w-full">
            ENULS, initiated by the NULS community, is a blockchain that is
            fully compatible with EVM and Web3 API interfaces. ENULS utilizes
            NULS as the primary asset within its network. Additionally, contract
            assets and chain assets from NULS can also be bridged to the ENULS
            network.
            <br />
            <br />
            ENULS can also be regarded as a layer 2 scaling solution for
            Ethereum, offering improved performance and lower gas fees.
            Moreover, the ENULS blockchain will support the efficient deployment
            of Ethereum ecosystem projects.
            <br />
            <br />
            The cross-chain capability of NULS's Parallel Chain - NerveNetwork
            will enable assets from ENULS to be transferred and interacted with
            multiple blockchains, including Ethereum, BNB Chain, Optimism,
            Arbitrum, Zksync, Tron, etc
          </p>
        </div>
      </SectionBgWrapper>

      <section className="relative h-[716px] lg:h-auto lg:bg-text lg:py-[74px] lg:px-6">
        <div className="absolute top-0 right-0 bottom-0 left-0 flex -z-10 lg:hidden">
          <div className="w-[42%] h-full bg-text"></div>
          <div className="flex-1 h-full bg-[#002918]"></div>
        </div>
        <div className="wrap h-full flex">
          <div className="w-[40%] flex flex-col justify-center lg:w-full">
            <h4 className="text-xl text-main font-bold lg:text-lg">
              Now Available
            </h4>
            <h3 className="text-[40px] leading-[46px] font-medium text-sub pt-[11px] pb-[38px] lg:text-32 lg:pb-[25px]">
              ENULS Mainnet
            </h3>
            <ul className="list-disc pl-[18px]">
              <li className="text-sm text-sub">
                Network Type: <span className="text-main">Ethereum</span>
              </li>
              <li className="text-sm text-sub">
                Network Name: <span className="text-main">ENULS Mainnet</span>
              </li>
              <li className="text-sm text-sub">
                Node RPC:{' '}
                <a
                  className="text-main underline underline-offset-2"
                  target="_blank"
                  href={ENULSNode}>
                  evmapi.nuls.io
                </a>
              </li>
              <li className="text-sm text-sub">
                Alternative NODE RPC:{' '}
                <a
                  className="text-main underline underline-offset-2"
                  target="_blank"
                  href={ENULSNode2}>
                  evmapi2.nuls.io
                </a>
              </li>
              <li className="text-sm text-sub">
                Chain: <span className="text-main">119</span>
              </li>
              <li className="text-sm text-sub">
                Symbol: <span className="text-main">NULS</span>
              </li>
              <li className="text-sm text-sub">
                Blockchain Explorer:{' '}
                <a
                  className="text-main underline underline-offset-2"
                  target="_blank"
                  href={ENULSExplorer}>
                  evmscan.nuls.io
                </a>
              </li>
            </ul>
            <div className="pt-[70px] lg:pt-[30px]">
              <Button
                href={ChainList}
                className="mr-6 lg:w-full lg:mr-0 lg:mb-3 lg:text-base"
                px="px-[21px]"
                py="py-[14.5px] lg:py-1">
                Add Using Chainlist
              </Button>
              <a
                href={ENULSExplorer}
                target="_blank"
                className="py-[14.5px] w-[146px] text-center text-lg rounded-[100px] border border-main text-main font-bold hover:opacity-70 lg:w-full lg:py-1 lg:text-base">
                EVMScan
              </a>
            </div>
          </div>
          <div className="pl-[86px] flex-1 flex justify-center items-center lg:hidden">
            <Image src="/enuls/enuls2.png" width={747} height={441} alt="" />
          </div>
        </div>
      </section>

      <InteractWithENULS />

      <section className="relative h-[716px] lg:h-auto lg:bg-text lg:py-[74px] lg:px-6">
        <div className="absolute top-0 right-0 bottom-0 left-0 flex -z-10 lg:hidden">
          <div className="flex-1 h-full bg-[#002918]"></div>
          <div className="w-[42%] h-full bg-text"></div>
        </div>
        <div className="wrap h-full flex">
          <div className="pr-[86px] flex-1 flex justify-center items-center lg:hidden">
            <Image src="/enuls/enuls2.png" width={747} height={441} alt="" />
          </div>
          <div className="w-[40%] flex flex-col justify-center pl-[78px] lg:w-full lg:pl-0">
            <h4 className="text-xl text-main font-bold">Available</h4>
            <h3 className="text-[40px] leading-[46px] font-medium text-sub pt-[11px] pb-[38px] lg:text-32 lg:pb-[25px]">
              ENULS Testnet
            </h3>
            <ul className="list-disc pl-[18px]">
              <li className="text-sm text-sub">
                Network Type: <span className="text-main">Ethereum</span>
              </li>
              <li className="text-sm text-sub">
                Network Name: <span className="text-main">ENULS Testnet</span>
              </li>
              <li className="text-sm text-sub">
                Node RPC:{' '}
                <a
                  className="text-main underline underline-offset-2"
                  target="_blank"
                  href={ENULSBetaSNode}>
                  beta.evmapi.nuls.io
                </a>
              </li>
              <li className="text-sm text-sub">
                Chain: <span className="text-main">120</span>
              </li>
              <li className="text-sm text-sub">
                Symbol: <span className="text-main">NULS</span>
              </li>
              <li className="text-sm text-sub">
                Blockchain Explorer:{' '}
                <a
                  className="text-main underline underline-offset-2"
                  target="_blank"
                  href={ENULSBetaExplorer}>
                  beta.evmscan.nuls.io
                </a>
              </li>
            </ul>
            <div className="pt-[70px] flex flex-col lg:pt-[30px] lg:flex-wrap">
              <Button
                href={ChainList}
                className="mb-[18px] lg:w-full lg:text-base"
                py="py-[14.5px] lg:py-1"
                px="lg:px-0">
                Add Using Chainlist
              </Button>
              <div className="lg:w-full lg:flex lg:justify-center lg:gap-3">
                <a
                  href={ENULSFaucet}
                  target="_blank"
                  className="py-[14.5px] w-[146px] text-center text-lg rounded-[100px] border border-main text-main font-bold mr-[14px] hover:opacity-70 lg:flex-1 lg:py-1 lg:mr-0">
                  Faucet
                </a>
                <a
                  href={ENULSBetaExplorer}
                  target="_blank"
                  className="py-[14.5px] w-[146px] text-center text-lg rounded-[100px] border border-main text-main font-bold hover:opacity-70 lg:flex-1 lg:py-1">
                  EVMScan
                </a>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  )
}
