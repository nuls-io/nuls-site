import React from 'react'
import Button from '@/components/Button'
import { NULSStaking, POCM } from '@/constants/links'

interface ItemProps {
  title: string
  desc: string
  link: string
}
function EarnItem(props: ItemProps) {
  const { title, desc, link } = props
  return (
    <div className="h-[217px] bg-[#262628B2] rounded-lg py-[32px] pl-[32px] pr-[53px] flex flex-col justify-between lg:h-auto lg:p-6">
      <div className="flex-1">
        <h3 className="text-white text-2xl font-bold lg:text-xl">
          {title}
        </h3>
        <p className="pt-[19px] text-white text-sm lg:py-3">
          {desc}
        </p>
      </div>
      <div>
        <Button
          href={link}
          px="px-[32.5px]"
          py="py-[8.5px] lg:py-1"
          font="text-base">
          Visit
        </Button>
      </div>
    </div>
  )
}

const items = [
  { title: 'Consensus Staking', desc: 'Stake your NULS on Consensus', link: NULSStaking },
  { title: 'SCO Staking', desc: 'Stake your NULS with SCO projects and earn the project tokens instead of NULS', link: POCM },
  { title: '3rd Party Staking', desc: 'NULS can also be used with 3rd party platforms to earn', link: '/ecosystem?type=Staking' },
]

function EarnNULS() {
  return (
    <section className="bg-text pt-[124px] pb-[161px] bg-[url('/community/community3.png')] bg-center bg-cover bg-no-repeat lg:py-[74px] lg:px-6 lg:bg-none lg:bg-text">
      <div className="wrap">
        <h3 className="text-[40px] leading-[46px] font-medium text-sub mb-[56px] lg:text-32 lg:text-center lg:mb-10">
          More Ways To
          <br />
          <span className="text-main">Earn With NULS</span>
        </h3>
        <div className="grid grid-cols-3 gap-[25px] lg:grid-cols-1 lg:gap-4">
          {items.map(item => <EarnItem key={item.title} {...item} />)}
        </div>
      </div>
    </section>
  )
}

export default EarnNULS
