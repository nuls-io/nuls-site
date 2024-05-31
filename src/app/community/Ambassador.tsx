import React from 'react'
import Image from 'next/image'
import Button from '@/components/Button'
import { writeAProposal } from '@/constants/links'

type ItemProps = {
  position: string
  name: string
  img: string
}
const Item = (props: ItemProps) => {
  const { position, name, img } = props
  return (
    <div>
      <div className="border border-text rounded-lg h-[244px] overflow-hidden lg:h-auto">
        <Image src={img} width={280} height={244} alt="" className="lg:w-full" />
      </div>
      <h3 className="font-medium text-sm text-special pt-[26px] pb-[8px] lg:pt-4">
        {position}
      </h3>
      <h3 className="font-bold text-[22px] leading-[27px] lg:text-lg">{name}</h3>
    </div>
  )
}

function Ambassador() {
  const ambassadors = [
    {
      name: 'Joao',
      position: 'Portugal Ambassador',
      img: '/community/member1.png'
    },
    {
      name: 'Emre',
      position: 'Turkey Ambassador',
      img: '/community/member2.png'
    },
    {
      name: 'Felipe Henrique',
      position: 'Brazil Ambassador',
      img: '/community/member3.png'
    },
    {
      name: 'GU',
      position: 'Vietnam Ambassador',
      img: '/community/member4.png'
    },
    { name: 'Red', position: 'India Ambassador', img: '/community/member5.png' }
  ]
  const councillors = [
    { name: 'Berzeck', position: 'Councillor', img: '/community/member6.png' },
    { name: 'Steven', position: 'Councillor', img: '/community/member7.png' },
    { name: 'KangWei', position: 'Councillor', img: '/community/member8.png' },
    { name: 'MudiW', position: 'Councillor', img: '/community/member-x.png' }
  ]
  const globalTeams = [
    {
      name: 'Patric Vogel',
      position: 'Brand Management & Communication',
      img: '/community/member9.png'
    },
    {
      name: 'Al Leong',
      position: 'Marketing Advisor',
      img: '/community/member10.png'
    },
    { name: 'Kathy', position: 'Architect', img: '/community/member11.png' },
    {
      name: 'Essam',
      position: 'Business Developer',
      img: '/community/member12.png'
    },
    { name: 'Sam', position: 'SCO Manager', img: '/community/member-x.png' }
  ]
  return (
    <section className="bg-sub pt-[120px] pb-[167px] lg:py-[74px] lg:px-6">
      <div className="wrap">
        <h3 className="text-[40px] leading-[50px] font-medium lg:text-32 lg:text-center">
          NULS Ambassadors
        </h3>
        <p className="w-[850px] pt-[24px] pb-[32px] text-sm lg:w-full lg:text-center lg:py-6">
          NULS ambassadors focus on improving the influence of NULS and the
          ecosystem around the world. Ambassadors are leaders in community
          development and are voted by the NULS community to organize quarterly
          elections. Becoming a NULS ambassador by starting to write an
          ambassador proposal in the NULS forum, the community will evaluate
          your strengths, discuss, and vote for your proposal.
        </p>
        <div className="pb-[64px] lg:pb-10">
          <Button href={writeAProposal} px="px-[52px]" py="py-[14.5px] lg:py-1" className="lg:w-full">
            Write a Proposal
          </Button>
        </div>
        <section className="mb-[108px] lg:mb-20">
          <div className="grid grid-cols-4 gap-x-6 gap-y-[65px] lg:grid-cols-2 lg:gap-x-4 lg:gap-y-8">
            {ambassadors.map(v => (
              <Item key={v.name} {...v} />
            ))}
          </div>
        </section>
        <section className="mb-[108px]  lg:mb-20">
          <h3 className="text-32 pb-10 font-medium lg:text-2xl lg:pb-6">NULS Councillors</h3>
          <div className="grid grid-cols-4 gap-x-6 gap-y-[65px] lg:grid-cols-2 lg:gap-x-4 lg:gap-y-8">
            {councillors.map(v => (
              <Item key={v.name} {...v} />
            ))}
          </div>
        </section>
        <section>
          <h3 className="text-32 pb-10 font-medium lg:text-2xl lg:pb-6">Global Team</h3>
          <div className="grid grid-cols-4 gap-x-6 gap-y-[65px] lg:grid-cols-2 lg:gap-x-4 lg:gap-y-8">
            {globalTeams.map(v => (
              <Item key={v.name} {...v} />
            ))}
          </div>
        </section>
      </div>
    </section>
  )
}

export default Ambassador
