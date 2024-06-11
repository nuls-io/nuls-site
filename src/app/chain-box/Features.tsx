import React from 'react'
import SectionBgWrapper from '@/components/SectionBgWrapper'
import Button from '@/components/Button'

const Feature = (props: (typeof features)[0]) => {
  const { title, desc, link } = props
  return (
    <div className="h-[316px] flex flex-col justify-between border border-text rounded-lg p-8 pr-12 bg-[#F0FFFA99] lg:h-auto">
      <div>
        <h3 className="text-2xl font-bold">{title}</h3>
        <p className="text-sm mt-5 mb-8">{desc}</p>
      </div>

      <Button href={link} className="w-[195px]" py="py-[8.5px] lg:py-1">
        Learn More
      </Button>
    </div>
  )
}

const features = [
  {
    title: 'Module Market',
    desc: 'The modular design of NULS supports easy replacement and insertion of all core functional modules, including the consensus module, staking module, crosschain module, etc, making it easier, and customizable, for anyone to build a new blockchain.',
    link: ''
  },
  {
    title: 'Building Module',
    desc: 'Create or improve a module to customize your blockchain according to the standard interface provided by the NULS microservice framework. It allows you to implement some of the functions you want directly at the blockchain protocol layer instead of the smart contract layer.',
    link: ''
  },
  {
    title: 'Building Chain',
    desc: 'Use the Module Market provided by ChainBox to create your blockchain efficiently, including browser and light wallet. Blockchain built using NULS ChainBox tech will also be supported by Nabox Wallet.',
    link: ''
  }
]

function Features() {
  return (
    <SectionBgWrapper
      className="pt-[170px] pb-[222px] lg:py-[74px] lg:px-6"
      src="/common/bg1.mp4">
      <div className="wrap">
        <div className="grid grid-cols-3 gap-6 lg:grid-cols-1">
          {features.map(feature => (
            <Feature key={feature.title} {...feature} />
          ))}
        </div>
      </div>
    </SectionBgWrapper>
  )
}

export default Features
