import type { Metadata } from 'next'
import { ModuleItem, modules } from '../home/ModuleMarket'

export const metadata: Metadata = {
  title: 'Module Market'
}

export default function ModuleMarketPage() {
  return (
    <section className="bg-[url('/home/home6.jpg')] bg-cover bg-center bg-no-repeat pt-[226px] pb-[138px] lg:pt-[160px] lg:pb-[76px] lg:px-6">
      <div className="wrap">
        <h3 className="text-white text-center text-[56px] leading-[70px] font-medium lg:text-m-title">
          Module Market
        </h3>
        <div className="flex justify-center">
          <p className="w-[715px] text-white text-center text-sm mt-8 mb-[70px] lg:w-full lg:my-8">
            The modular design of NULS supports easy replacement and insertion
            of all core functional modules, including the consensus module,
            staking module, crosschain module, etc, making it easier,
            customizable, for anyone to build a new blockchain.
          </p>
        </div>

        <div className="grid grid-cols-5 gap-6 lg:grid-cols-2">
          {modules.map(v => (
            <ModuleItem key={v.label} {...v} />
          ))}
        </div>
      </div>
    </section>
  )
}
