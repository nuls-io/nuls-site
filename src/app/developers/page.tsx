import type { Metadata } from 'next'
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
      <section className="pt-[250px] pb-[173px] bg-[url('/developers/developers1.jpg')] bg-cover bg-right-bottom bg-no-repeat lg:pt-40 lg:pb-[90px] lg:px-6 lg:bg-none lg:bg-text">
        <div className="wrap">
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
