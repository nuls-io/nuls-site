import React from 'react'
import Image from 'next/image'
import clsx from 'clsx'

interface ItemProps {
  title: string
  desc: string | React.ReactElement
  src: string
  className?: string
}
const Item = ({ title, desc, src, className }: ItemProps) => {
  return (
    <div
      className={clsx(
        'flex border border-text rounded-lg overflow-hidden lg:flex-col',
        className
      )}>
      <Image src={src} width={440} height={276} alt="" className="lg:w-full lg:h-[276px]" />
      <div className="flex-1 pt-[40px] pr-[32px] pl-[40px] lg:p-6">
        <h3 className="text-32 text-main font-bold mb-[18px] lg:text-3xl">{title}</h3>
        <p className="text-sm">{desc}</p>
      </div>
    </div>
  )
}

const items = [
  {
    title: 'Ease of Use',
    desc: (
      <>
        NULS handles the workload of your application with a platform that
        provides fluid, cost-effective and time-saving solutions for developers
        with no previous blockchain experience. We make it easy for developers
        to create modules for any purpose quickly.
        <br />
        <br />
        A firm foundation based on the work of thousands of people means
        you don’t have to worry about whether the construction is sustainable.
        So set up your variables and process modules with a view of what is to
        come next, rather than having to keep looking back.
      </>
    ),
    src: '/about/about2.png'
  },
  {
    title: 'Microservice Architecture',
    desc: (
      <>
        Microservices allows you to scale up much more quickly and allows you to
        organize around business capabilities. You can organize around
        autonomous cross-functional teams, just like a construction site with
        independent, parallel work being performed.
        <br />
        <br />
        If you have a large project, need quick and autonomous delivery, plan to
        scale your solution or need to frequently update separate parts of your
        system, microservices are your best bet.
      </>
    ),
    src: '/about/about3.png',
    className: 'my-[18px]'
  },
  {
    title: 'ECO Friendly',
    desc: 'Here at NULS we pride ourselves on being one of the most energy efficient projects in the crypto space with our award winning Proof-of-Credit mechanism which requires very little energy to operate.',
    src: '/about/about4.png'
  }
]

function Features() {
  return (
    <section className="py-[130px] bg-sub lg:py-[74px] lg:px-6">
      <div className="wrap">
        {items.map(item => <Item key={item.title} {...item} />)}
        {/* <div className="flex border border-text rounded-lg overflow-hidden">
          <Image src="/about/about2.png" width={440} height={276} alt="" />
          <div className="flex-1 pt-[40px] pr-[32px] pl-[40px]">
            <h3 className="text-32 text-main font-bold mb-[18px]">
              Ease of Use
            </h3>
            <p className="text-sm mb-[20px]">
              NULS handles the workload of your application with a platform that
              provides fluid, cost-effective and time-saving solutions for
              developers with no previous blockchain experience. We make it easy
              for developers to create modules for any purpose quickly.
            </p>
            <p className="text-sm">
              A firm foundation based on the work of thousands of people means
              you don’t have to worry about whether the construction is
              sustainable. So set up your variables and process modules with a
              view of what is to come next, rather than having to keep looking
              back.
            </p>
          </div>
        </div>
        <div className="flex border border-text rounded-lg overflow-hidden my-[18px]">
          <Image src="/about/about3.png" width={440} height={276} alt="" />
          <div className="flex-1 pt-[40px] pr-[32px] pl-[40px]">
            <h3 className="text-32 text-main font-bold mb-[18px]">
              Microservice Architecture
            </h3>
            <p className="text-sm mb-[20px]">
              Microservices allows you to scale up much more quickly and allows
              you to organize around business capabilities. You can organize
              around autonomous cross-functional teams, just like a construction
              site with independent, parallel work being performed.
            </p>
            <p className="text-sm">
              If you have a large project, need quick and autonomous delivery,
              plan to scale your solution or need to frequently update separate
              parts of your system, microservices are your best bet.
            </p>
          </div>
        </div>
        <div className="flex border border-text rounded-lg overflow-hidden">
          <Image src="/about/about4.png" width={440} height={276} alt="" />
          <div className="flex-1 pt-[40px] pr-[32px] pl-[40px]">
            <h3 className="text-32 text-main font-bold mb-[18px]">
              ECO Friendly
            </h3>
            <p className="text-sm mb-[20px]">
              Here at NULS we pride ourselves on being one of the most energy
              efficient projects in the crypto space with our award winning
              Proof-of-Credit mechanism which requires very little energy to
              operate.
            </p>
          </div>
        </div> */}
      </div>
    </section>
  )
}

export default Features
