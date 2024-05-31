import type { Metadata } from 'next'
import Image from 'next/image'

export const metadata: Metadata = {
  title: 'Partners - Trusted by our partners and collaborators',
  description:
    'Our partners enjoy the benefit of NULS technical expertise and blockchain business solutions in an ecosystem designed for success.'
}

export default function PartnersPage() {
  const investors = [
    { src: '/partners/investor1.png', href: '' },
    { src: '/partners/investor2.png', href: '' },
    { src: '/partners/investor3.png', href: '' },
    { src: '/partners/investor4.png', href: '' },
    { src: '/partners/investor5.png', href: '' },
    { src: '/partners/investor6.png', href: '' },
    { src: '/partners/investor7.png', href: '' },
    { src: '/partners/investor8.png', href: '' },
    { src: '/partners/investor9.png', href: '' },
    { src: '/partners/investor10.png', href: '' }
  ]
  const exchanges = [
    { src: '/partners/exchange1.png', href: '' },
    { src: '/partners/exchange2.png', href: '' },
    { src: '/partners/exchange3.png', href: '' },
    { src: '/partners/exchange4.png', href: '' },
    { src: '/partners/exchange5.png', href: '' },
    { src: '/partners/exchange6.png', href: '' },
    { src: '/partners/exchange7.png', href: '' },
    { src: '/partners/exchange8.png', href: '' },
    { src: '/partners/exchange9.png', href: '' },
    { src: '/partners/exchange10.png', href: '' },
    { src: '/partners/exchange11.png', href: '' },
    { src: '/partners/exchange12.png', href: '' },
    { src: '/partners/exchange13.png', href: '' },
    { src: '/partners/exchange14.png', href: '' },
    { src: '/partners/exchange15.png', href: '' },
    { src: '/partners/exchange16.png', href: '' },
    { src: '/partners/exchange17.png', href: '' },
    { src: '/partners/exchange18.png', href: '' },
    { src: '/partners/exchange19.png', href: '' },
    { src: '/partners/exchange20.png', href: '' },
    { src: '/partners/exchange21.png', href: '' },
    { src: '/partners/exchange22.png', href: '' },
  ]
  return (
    <>
      <section className="pt-[313px] pb-[275px] bg-[url('/partners/partners1.jpg')] bg-center bg-cover bg-no-repeat lg:pt-[160px] lg:pb-[120px] lg:px-6">
        <h3 className="text-center text-[56px] leading-[64px] font-medium text-sub lg:text-m-title">
          Trusted by our
          <br className="lg:hidden" />
          Partners and Collaborators
        </h3>
      </section>

      <section className="bg-sub py-[140px] lg:py-[76px] lg:px-6">
        <div className="wrap">
          <h3 className="text-[40px] leading-[50px] font-medium text-center mb-20 lg:text-32 lg:mb-10">
            Strategic Investors
          </h3>
          <div className="grid grid-cols-5 gap-3 mb-40 lg:grid-cols-2 lg:mb-20">
            {investors.map(investor => (
              <div
                key={investor.src}
                className="border border-text rounded-lg h-[99px] lg:h-[60px]">
                <Image
                  src={investor.src}
                  width={625}
                  height={313}
                  alt=""
                  className="w-full h-full"
                />
              </div>
            ))}
          </div>
          <h3 className="text-[40px] leading-[50px] font-medium text-center mb-20 lg:text-32 lg:mb-10 lg:break-all">
            Exchange/Liquidity
          </h3>
          <div className="flex justify-center gap-3 flex-wrap lg:grid lg:grid-cols-2">
            {exchanges.map(exchange => (
              <div
                key={exchange.src}
                className="border border-text rounded-lg h-[99px] w-[226px] lg:w-full lg:h-[60px]">
                <Image
                  src={exchange.src}
                  width={625}
                  height={313}
                  alt=""
                  className="w-full h-full"
                />
              </div>
            ))}
          </div>
        </div>
      </section>
    </>
  )
}
