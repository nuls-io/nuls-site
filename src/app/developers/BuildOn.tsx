import React from 'react'
import Button from '@/components/Button'
import { NULSExplorer, ENULSExplorer, Documentation, ENULSDoc } from '@/constants/links'

interface ItemProps {
  title: string
  desc: string
  btnText: string
  link: string
  docLink: string
  className?: string
}

const Item = (props: ItemProps) => {
  const { title, desc, btnText, link, docLink } = props
  return (
    <div className="w-[588px] p-8 bg-sub rounded-lg border border-text mb-5 lg:w-full lg:p-6">
      <h3 className="text-2xl font-bold mb-5 lg:text-xl lg:mb-3">{title}</h3>
      <p className="text-sm mb-5 lg:mb-3">{desc}</p>
      <div>
        <Button
          href={link}
          className="mr-3 lg:w-full lg:mr-0 lg:mb-3"
          px="px-[47.5px]"
          py="py-[8.5px] lg:py-1.5"
          font="text-base">
          {btnText}
        </Button>
        <Button
          href={docLink}
          className="lg:w-full"
          px="px-[47.5px]"
          py="py-[8.5px] lg:py-1.5"
          font="text-base"
          type="default">
          Documentation
        </Button>
      </div>
    </div>
  )
}

const items: ItemProps[] = [
  {
    title: 'Build on NULS',
    desc: 'Join the thriving ecosystem and grow with NULS. Be a builder, using our dev-friendly tools to build a blockchain you prefer, NULS ChainBox, Modular wear-house will help to achieve your goal. Deploying projects on NULS, and receiving ecosystem grant from the NULS foundation.',
    btnText: 'Explore NULS',
    link: NULSExplorer,
    docLink: Documentation
  },
  {
    title: 'Build on ENULS',
    desc: 'ENULS is the parallel chain of NULS, built on top of the NULS ChainBox solution. ENULS is fully compatible with EVM and Web3 API interfaces and utilizes NULS as the primary asset within its network.',
    btnText: 'Explore ENULS',
    link: ENULSExplorer,
    docLink: ENULSDoc
  }
]

function BuildOn() {
  return (
    <section className="py-[160px] bg-[url('/about/about6.png')] bg-cover bg-right-bottom bg-no-repeat lg:py-[74px] lg:px-6">
      <div className="wrap">
        {items.map(item => (
          <Item key={item.title} {...item} />
        ))}
      </div>
    </section>
  )
}

export default BuildOn
