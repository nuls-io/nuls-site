import React from 'react'
import Button from '@/components/Button'
import clsx from 'clsx'
import { Github, Documentation } from '@/constants/links'

interface ItemProps {
  title: string
  desc: string
  className?: string
}
const Item = ({ title, desc, className = '' }: ItemProps) => {
  return (
    <div
      className={clsx(
        'w-[600px] h-[164px] p-8 border border-text rounded-lg lg:w-full lg:h-auto lg:p-4',
        className
      )}>
      <div className="inline-block py-[6px] px-[14px] text-main text-sm bg-text rounded-lg mb-6 lg:mb-3">
        {title}
      </div>
      <p className="text-sm">{desc}</p>
    </div>
  )
}

const items = [
  {
    title: 'Customizable',
    desc: 'By developing the modules needed for a business, you can easily build an application blockchain.'
  },
  {
    title: 'Modular',
    desc: 'Encapsulate complex underlying technology and divide the blockchain system into completely independent modules.',
    className: 'my-4'
  },
  {
    title: 'Microservices',
    desc: 'The microservices architecture allows individual modules to run independently, use different languages to develop modules and add them to the blockchain network.'
  }
]

function WhyNULS() {
  return (
    <section className="bg-sub py-[110px] lg:py-[74px] lg:px-6">
      <div className="wrap flex justify-between lg:flex-wrap">
        <div className="pt-[72px] lg:w-full lg:pt-0">
          <h3 className="text-text text-[40px] leading-[50px] font-bold lg:text-32 lg:text-center">
            What Makes <br className="lg:hidden" />
            NULS Great <br className="lg:hidden" />
            <span className="text-special">For Developers?</span>
          </h3>
          <p className="w-[530px] text-sm pt-[28px] pb-[40px] lg:w-full lg:text-center">
            The microservice-layer design of NULS makes it easy for developers
            to quickly create modules for anything. NULS provides fluid,
            cost-effective, time-saving solutions for developers with no
            previous blockchain experience.
          </p>
          <div>
            <Button href={Github} px="px-[68px]" className="mr-6 lg:w-full lg:mr-0 lg:mb-3 lg:py-1.5 ">
              GitHub
            </Button>
            <Button href={Documentation} type="default" className="lg:w-full lg:py-1.5">
              Documentation
            </Button>
          </div>
        </div>
        <div className="lg:w-full lg:mt-10">
          {items.map(item => (
            <Item key={item.title} {...item} />
          ))}
        </div>
      </div>
    </section>
  )
}

export default WhyNULS
