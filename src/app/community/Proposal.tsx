import React from 'react'
import SectionBgWrapper from '@/components/SectionBgWrapper'
import Button from '@/components/Button'
import { GovProposal, GovVotingGuide, writeProposals } from '@/constants/links'

interface ItemProps {
  title: string
  desc: string
  btnText: string
  link: string
}

const Item = (props: ItemProps) => {
  const { title, desc, btnText, link } = props
  return (
    <div className="h-[368px] bg-[#262628B2] rounded-lg py-[32px] pl-[32px] pr-[53px] flex flex-col justify-between lg:h-auto lg:p-6">
      <div className="flex-1">
        <h3 className="text-white text-2xl font-bold lg:text-xl">{title}</h3>
        <p className="pt-[19px] text-white text-sm lg:pt-4">{desc}</p>
      </div>
      <div className="lg:mt-6">
        <Button href={link} px="px-[32.5px]" py="py-[8.5px]" font="text-base">
          {btnText}
        </Button>
      </div>
    </div>
  )
}

const items = [
  {
    title: 'Voting Rights',
    desc: 'Every NULS token holder can exercise their right to vote. Every 1 NULS is equal to 1 vote. Community members should fully understand the operating mechanism of the NULS community, Council, proposals, rules, etc. and actively participate in the decentralized governance process of NULS. Voting is crucial to the development of NULS, so please vote often and responsibly.',
    btnText: 'Voting Guidelines',
    link: GovVotingGuide
  },
  {
    title: 'Proposals',
    desc: "NULS is an open ecosystem, we eagerly welcome visionary builders and creative minds to help foster the ecosystem's growth. Whether you require financial support from the NULS Foundation or wish to become a part of a team, you can submit your proposals on the forum to get started.",
    btnText: 'Write Proposals',
    link: writeProposals
  },
  {
    title: 'Voting',
    desc: 'The community voting tool is a decentralized product based on the NULS smart contract. The tool enables each NULS holder to exercise their voting rights and participate in the NULS community development and growth decision-making process.',
    btnText: 'Vote Now',
    link: GovProposal
  }
]

function Proposal() {
  return (
    <SectionBgWrapper
      src="/common/bg7.mp4"
      poster="/community/community3.png"
      className="py-[145px] lg:py-[74px] lg:px-6">
      <div className="abs-full bg-text z-[-1] opacity-60"></div>
      <div className="wrap">
        <div className="grid grid-cols-3 gap-[25px] lg:grid-cols-1 lg:gap-4">
          {items.map(item => (
            <Item key={item.title} {...item} />
          ))}
        </div>
      </div>
    </SectionBgWrapper>
  )
}

export default Proposal
