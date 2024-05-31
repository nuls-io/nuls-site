import React from 'react'
import Button from '@/components/Button'
import { NULSStaking, POCM } from '@/constants/links'

interface ItemProps {
  title: string
  desc: string
}
function Item(props: ItemProps) {
  const { title, desc } = props
  return (
    <div className="border border-text rounded-lg p-[32px] bg-sub lg:h-auto lg:p-6">
      <h3 className="w-[53px] h-[34px] leading-[34px] text-center bg-text rounded-lg font-medium text-white mb-[18px]">
        {title}
      </h3>
      <p className="text-sm">{desc}</p>
    </div>
  )
}

const items = [
  {
    title: '1',
    desc: 'POCM (Proof of Credit Mining) is the smart contract that allows projects to issue and distribute project tokens safely.'
  },
  {
    title: '2',
    desc: 'Got NULS? Stake into a project’s nodes and earn their token as reward, while the project earns NULS as reward. Projects can use the NULS consensus rewards to bootstrap and help fund development.'
  },
  {
    title: '3',
    desc: 'Unlike IEOs and ICOs, stakers never risk their principal, and NULS never leave their wallet. Earn project tokens without risk while your device is off!'
  }
]

function FundProject() {
  return (
    <section className=" py-[140px] bg-[url('/home/home4.png')] bg-cover bg-center bg-no-repeat lg:py-[74px] lg:px-6 lg:bg-none lg:bg-sub">
      <div className="wrap">
        <h3 className="text-center text-[40px] leading-[50px] font-medium mb-[88px] lg:text-32 lg:mb-10">
          Fund Your Project With
          <br className="lg:hidden" />
          The SCO Platform
        </h3>
        <div className="grid grid-cols-3 gap-6 lg:grid-cols-1 lg:gap-4">
          {items.map(item => (
            <Item key={item.title} {...item} />
          ))}
        </div>
        <div className="text-center mt-[60px] lg:mt-8">
          <Button className="w-[252px] lg:w-full" px="px-0" py="py-[14.5px] lg:py-1" href={POCM}>
            Get Started
          </Button>
        </div>
      </div>
    </section>
  )
}

export default FundProject
