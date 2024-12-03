import type { Metadata } from 'next'
import Image from 'next/image'
import clsx from 'clsx'
import SectionBgWrapper from '@/components/SectionBgWrapper'

export const metadata: Metadata = {
  title: 'Partners - Trusted by our partners and collaborators',
  description:
    'Our partners enjoy the benefit of NULS technical expertise and blockchain business solutions in an ecosystem designed for success.'
}

export default function PartnersPage() {
  const investors = [
    { src: '/partners/investers/BITMAIN.svg', href: '' },
    { src: '/partners/investers/DWF.svg', href: '' },
    { src: '/partners/investers/Ulysses.png', href: '' },
    { src: '/partners/investers/ChainCapital.svg', href: '' },
    { src: '/partners/investers/Waterdrip.svg', href: '' }
  ]
  const strategicPartners = [
    { src: '/partners/strategic-partners/NERVE.svg', href: '' },
    { src: '/partners/strategic-partners/Nabox.png', href: '' },
    { src: '/partners/strategic-partners/Ape.svg', href: '' },
    { src: '/partners/strategic-partners/Suisse.svg', href: '' },
    { src: '/partners/strategic-partners/Gecko.svg', href: '' },
    { src: '/partners/strategic-partners/CMC.svg', href: '' },
    { src: '/partners/strategic-partners/CoinGecko.svg', href: '' },
    { src: '/partners/strategic-partners/Chainlink.svg', href: '' },
    { src: '/partners/strategic-partners/Certik.svg', href: '' },
    { src: '/partners/strategic-partners/ankr.svg', href: '' }
  ]
  const exchanges = [
    { src: '/partners/exchanges/Binance.svg', href: '' },
    { src: '/partners/exchanges/OKX.svg', href: '' },
    { src: '/partners/exchanges/Gate.svg', href: '' },
    { src: '/partners/exchanges/HTX.svg', href: '' },
    { src: '/partners/exchanges/BingX.svg', href: '' },
    { src: '/partners/exchanges/bitvavo.svg', href: '' },
    { src: '/partners/exchanges/MEXC.svg', href: '' },
    { src: '/partners/exchanges/BitMart.svg', href: '' },
    { src: '/partners/exchanges/CoinEx.svg', href: '' },
    { src: '/partners/exchanges/NovaDAX.svg', href: '' },
    { src: '/partners/exchanges/SwapBox.svg', href: '' },
    { src: '/partners/exchanges/NERVESWAP.svg', href: '' },
    { src: '/partners/exchanges/Nulswap.svg', href: '' },
    { src: '/partners/exchanges/PheasantSwap.svg', href: '' },
    { src: '/partners/exchanges/PancakeSwap.svg', href: '' },
    { src: '/partners/exchanges/DODO.svg', href: '' },
    { src: '/partners/exchanges/SWFT.svg', href: '' }
  ]
  const crossChainSupport = [
    { src: '/partners/cross-chain-support/bitcoin.svg', href: '' },
    { src: '/partners/cross-chain-support/Ethereum.svg', href: '' },
    { src: '/partners/cross-chain-support/BNBChain.svg', href: '' },
    { src: '/partners/cross-chain-support/Polygon.svg', href: '' },
    { src: '/partners/cross-chain-support/OKX.svg', href: '' },
    { src: '/partners/cross-chain-support/Avalanche.svg', href: '' },
    { src: '/partners/cross-chain-support/Arbi.svg', href: '' },
    { src: '/partners/cross-chain-support/Harmony.svg', href: '' },
    { src: '/partners/cross-chain-support/KCC.svg', href: '' },
    { src: '/partners/cross-chain-support/Cronos.svg', href: '' },
    { src: '/partners/cross-chain-support/Fantom.svg', href: '' },
    { src: '/partners/cross-chain-support/TRON.svg', href: '' },
    { src: '/partners/cross-chain-support/Metis.svg', href: '' },
    { src: '/partners/cross-chain-support/IoTeX.svg', href: '' },
    { src: '/partners/cross-chain-support/KAIA.svg', href: '' },
    { src: '/partners/cross-chain-support/smartBCH.svg', href: '' },
    { src: '/partners/cross-chain-support/Op.svg', href: '' },
    { src: '/partners/cross-chain-support/KAVA.svg', href: '' },
    { src: '/partners/cross-chain-support/EthereumPoW.svg', href: '' },
    { src: '/partners/cross-chain-support/ENULS.svg', href: '' },
    { src: '/partners/cross-chain-support/REI.svg', href: '' },
    { src: '/partners/cross-chain-support/zkSync.svg', href: '' },
    { src: '/partners/cross-chain-support/EOSEVM.svg', href: '' },
    { src: '/partners/cross-chain-support/polygonzkEVM.svg', href: '' },
    { src: '/partners/cross-chain-support/Linea.svg', href: '' },
    { src: '/partners/cross-chain-support/CELO.svg', href: '' },
    { src: '/partners/cross-chain-support/EthereumClassic.svg', href: '' },
    { src: '/partners/cross-chain-support/BASE.svg', href: '' },
    { src: '/partners/cross-chain-support/Scroll.svg', href: '' },
    { src: '/partners/cross-chain-support/Bitgert.svg', href: '' },
    { src: '/partners/cross-chain-support/Manta.svg', href: '' },
    { src: '/partners/cross-chain-support/Zeta.svg', href: '' },
    { src: '/partners/cross-chain-support/XLayer.svg', href: '' },
    { src: '/partners/cross-chain-support/Shardeum.svg', href: '' },
    { src: '/partners/cross-chain-support/MODE.svg', href: '' },
    { src: '/partners/cross-chain-support/Blast.svg', href: '' },
    { src: '/partners/cross-chain-support/Merlin.svg', href: '' },
    { src: '/partners/cross-chain-support/Pulse.svg', href: '' },
    { src: '/partners/cross-chain-support/FREECASH.svg', href: '' },
    { src: '/partners/cross-chain-support/HECO.svg', href: '' },

    { src: '/partners/cross-chain-support/NERVE.svg', href: '' },
    { src: '/partners/cross-chain-support/BCH.svg', href: '' }
  ]
  const partners = [
    { title: 'Investers', items: investors },
    { title: 'Strategic Partners', items: strategicPartners },
    {
      title: 'Exchange/Liquidity',
      items: exchanges,
      titleClass: 'lg:break-all'
    },
    {
      title: 'Cross-Chain Support',
      items: crossChainSupport
    }
  ]
  return (
    <>
      <SectionBgWrapper
        src="/common/bg5.mov"
        poster="/partners/partners1.jpg"
        className="pt-[313px] pb-[275px] lg:pt-[160px] lg:pb-[120px] lg:px-6">
        <div className="absolute w-full h-full top-0 left-0 bg-text opacity-40 z-[-1]"></div>
        <h3 className="text-center text-[56px] leading-[64px] font-medium text-sub lg:text-m-title">
          Trusted by our
          <br className="lg:hidden" />
          Partners and Collaborators
        </h3>
      </SectionBgWrapper>

      <section className="bg-sub py-[140px] lg:py-[76px] lg:px-6">
        <div className="wrap">
          {partners.map((partner, i) => (
            <div key={i}>
              <h3
                className={clsx(
                  'text-[40px] leading-[50px] font-medium text-center mb-20 lg:text-32 lg:mb-10',
                  partner.titleClass
                )}>
                {partner.title}
              </h3>
              <div
                className={clsx(
                  'grid grid-cols-5 gap-3 lg:grid-cols-4 md:grid-cols-3 sm:grid-cols-2',
                  i === partners.length - 1 ? '' : 'mb-40 lg:mb-20'
                )}>
                {partner.items.map(item => (
                  <div key={item.src}>
                    <Image
                      src={item.src}
                      width={226}
                      height={99}
                      alt=""
                      className="w-full"
                    />
                  </div>
                ))}
              </div>
            </div>
          ))}
        </div>
      </section>
    </>
  )
}
