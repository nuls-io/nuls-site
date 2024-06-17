import type { Metadata } from 'next'
import SectionBgWrapper from '@/components/SectionBgWrapper'
import Video from '@/components/Video'
import Button from '@/components/Button'
import { ModuleItem } from '../home/ModuleMarket'
import Features from './Features'
import { GetInTouch, NERVENetwork } from '@/constants/links'

export const metadata: Metadata = {
  title: 'About - The sky is not the limit',
  description:
    'NULS modular microservice design accelerates blockchain building. Use ChainFactory to get your chain running fast and reduce development costs. Then find Smart Contracts and Cross-chain technologies expanding your horizons.'
}

const modules = [
  { label: 'Microservices', href: '' },
  { label: 'Time-Tested', href: '' },
  { label: 'Built for Speed', href: '' },
  { label: 'Easy Maintenance', href: '' }
]

export default function AboutPage() {
  return (
    <>
      <section className="relative pt-[218px] pb-[120px] overflow-hidden lg:pt-40 lg:pb-[90px] lg:px-6">
        <div className="abs-full bg-sub z-[-1]"></div>
        <div className="absolute z-[-1] w-[1548px] h-[870px] top-[-35px] right-[-400px]">
          <Video src="/common/bg2.mp4" />
        </div>
        <div className="wrap">
          <h1 className="w-[619px] text-[56px] leading-[64px] font-medium lg:w-full lg:text-m-title lg:text-center">
            Making It Easier To <span className="text-special">Innovate</span>
          </h1>
          <p className="mt-8 mb-12 text-sm w-[484px] lg:w-full lg:text-center">
            NULS is a blockchain infrastructure that provides customizable
            services and is also a global open-source community blockchain
            project. NULS adopts micro-services to achieve a highly modular
            underlying architecture, using smart contracts and cross-chain
            technologies, combined with the ability of ChainBox to quickly build
            chains, reduce development costs, and accelerate blockchain business
            application landing.
          </p>
          <Button href={GetInTouch} className="lg:w-full lg:py-2">
            Talk to an Expert
          </Button>
        </div>
      </section>

      <SectionBgWrapper
        src="/common/bg6.mp4"
        className="py-[140px] lg:py-[74px] lg:px-6">
        <div className="wrap">
          <h3 className="text-sub text-center text-[40px] leading-[50px] font-medium mb-12 lg:text-32 lg:mb-8">
            The Perfect Foundation
          </h3>
          <p className="text-sm text-white text-center mb-[96px] lg:mb-12">
            With NULS, you get a company that sets a new industry standard in
            facilitating blockchain adoption. Our battle-tested platform
            provides the perfect foundation to build your application. Make sure
            your innovation blockchain application stands out from your
            competition, even in the stormiest of market conditions. Based on
            microservices, the NULS platform is easier and faster to develop
            apps. It also means it's easier to find issues or bugs as you debug
            code, and it's easier to maintain.
          </p>
          <div className="grid grid-cols-4 gap-6 lg:grid-cols-2 lg:gap-3">
            {modules.map(v => (
              <ModuleItem key={v.label} {...v} />
            ))}
          </div>
        </div>
      </SectionBgWrapper>

      <Features />

      <SectionBgWrapper
        src="/about/bg2.mp4"
        className="py-[211px] lg:py-[74px] lg:px-6">
        <div className="h-full wrap flex flex-col justify-center items-center">
          <h3 className="text-center text-[40px] leading-[50px] font-medium mb-10 lg:text-32 lg:mb-6">
            Highly Scalable
          </h3>
          <p className="w-[894px] text-center text-sm lg:w-full">
            Your future app can be that next technological landmark. It might
            change how people do business, propelling you to great success at
            the same time. NULS ensures that no matter how many lines of code
            your app contains, it will be stable, functional and above all,
            scalable! With NULS you can quickly grow your product without
            starting from scratch.
          </p>
        </div>
      </SectionBgWrapper>

      <SectionBgWrapper
        src="/common/bg9.mp4"
        className="py-[200px] lg:py-[74px] lg:px-6">
        <div className="wrap">
          <div className="w-[588px] p-8 bg-sub rounded-lg border border-text lg:w-full lg:p-6">
            <h3 className="text-2xl font-bold mb-5 lg:mb-4">
              Cross-Chain Connectivity
            </h3>
            <div className="mb-[34px] lg:mb-6">
              <p className="text-sm mb-5 lg:mb-4">
                In building an application, development teams must also work
                with different internal parts. Modules must be integrated to
                ensure that all processes are handled correctly, database
                architecture procedures are efficient and optimized, and
                programming comments are explicit.
              </p>
              <p className="text-sm">
                Here, NerveNetwork is like an elevator that provides cross-chain
                connectivity and development. It lets developers get
                effortlessly from one floor to the next.
              </p>
            </div>
            <Button
              href={NERVENetwork}
              px="px-[27px]"
              py="py-[9.5px]"
              font="text-base">
              Visit NerveNetwork
            </Button>
          </div>
        </div>
      </SectionBgWrapper>

      <SectionBgWrapper
        src="/common/bg3.mp4"
        className="pt-[130px] pb-[116px] lg:py-[74px] lg:px-6">
        <div className="abs-full z-[-1] bg-text opacity-70"></div>
        <div className="h-full wrap flex flex-col justify-center items-center">
          <h3 className="w-[782px] text-white text-center text-40 font-medium mb-10 lg:w-full lg:text-32 lg:mb-6">
            The NULS Platform Is An A-List Team That Stands Behind Yours
          </h3>
          <p className="w-[484px] text-white text-sm text-center mb-12 lg:w-full lg:mb-8">
            Microservices allows you to scale up much more quickly and allows
            you to organize around business capabilities.
          </p>
          <Button href={GetInTouch} px="px-[82px]" py="py-[20px] lg:py-2">
            Get in Touch
          </Button>
        </div>
      </SectionBgWrapper>
    </>
  )
}
