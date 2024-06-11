import type { Metadata } from 'next'
import Video from '@/components/Video'
import Features from './Features'

export const metadata: Metadata = {
  title: 'ChainBox'
}

export default function ChainBoxPage() {
  return (
    <>
      <section className="bg-text overflow-hidden lg:px-6">
        <div className="wrap relative pt-[223px] pb-[158px] lg:pt-40 lg:pb-[90px]">
          <div>
            <h3 className="w-[620px] text-56 font-medium text-sub lg:text-m-title lg:w-full lg:text-center">
              What is <br /> <span className="text-main">NULS ChainBox?</span>
            </h3>
            <p className="w-[515px] text-sm text-sub mt-8 lg:w-full lg:text-center">
              ChainBox is an out-of-the-box solution for blockchain development.
              It encapsulates six underlying modules: ledger, accounts,
              transactions, blocks, consensus, and network. ChainBox eliminates
              the necessity for direct blockchain experience and the need to
              understand distributed data storage, point-to-point transmission,
              consensus mechanisms, and encryption algorithms.
              <br />
              <br />
              Developers can focus on creating independent business modules
              based on standard communication protocols, forming a brand-new
              application chain in minutes with ChainBox.
            </p>
          </div>
          <div className="absolute top-8 right-0 w-[697px] h-[730px] lg:hidden">
            <Video src="/chain-box/bg1.mp4" />
          </div>
        </div>
      </section>

      <Features />
    </>
  )
}
