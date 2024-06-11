import type { Metadata } from 'next'
import Video from '@/components/Video'
import Button from '@/components/Button'
import WhyNULS from './WhyNULS'
import Features from './Features'
import BuildOn from './BuildOn'
import { NODEGuide } from '@/constants/links'


export const metadata: Metadata = {
  title: 'Developer - What makes NULS great for developers?',
  description:
    'The microservice-layer design of NULS makes it easy for developers to quickly create modules for anything. NULS provides fluid, cost-effective, time-saving solutions for developers with no previous blockchain experience.'
}

export default function DevelopersPage() {
  return (
    <>
      <section className="relative bg-text pt-[250px] pb-[173px] overflow-hidden lg:pt-40 lg:pb-[90px] lg:px-6">
        <div className="absolute top-0 right-[-100px] w-[1044px] h-[926px] lg:hidden">
          <Video src="/developers/bg1.mp4" />
        </div>
        <div className="wrap relative">
          <h3 className="w-[620px] text-[56px] leading-[64px] font-medium text-sub lg:text-m-title lg:w-full lg:text-center">
            Build the Project of <span className="text-main">Your Dreams</span>
          </h3>
          <p className="w-[484px] text-sm text-sub pt-[32px] pb-[48px] lg:w-full lg:text-center">
            NULS is an open-source, enterprise-grade, adaptive blockchain
            platform that offers fast-track business solutions for developers.
          </p>
          <Button href={NODEGuide} px="px-[53.5px]" py="py-[14.5px] lg:py-2" className="lg:w-full">
            Run a Node
          </Button>
        </div>
      </section>

      <WhyNULS />

      <Features />

      <BuildOn />
    </>
  )
}
