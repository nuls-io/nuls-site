import React from 'react'
import Image from 'next/image'
import Link from 'next/link'

type INews = {
  title: string
  href: string
  createTime: string
  src: string
}

const News: React.FC<INews> = ({ title, href, createTime, src }) => {
  return (
    <div>
      <div className="border border-text rounded-lg mb-6 overflow-hidden lg:mb-[16px]">
        <Image className="w-full h-[246px] lg:h-[204px]" src={src} width={382} height={246} alt="" />
      </div>
      <div className="flex flex-col justify-between h-[154px] lg:h-[116px]">
        <div>
          <p className="font-title text-sm mb-[10px]">{createTime}</p>
          <p className="font-title text-[22px] leading-[28px] font-bold lg:text-base">
            {title}
          </p>
        </div>
        <Link href={href} className="text-lg font-bold text-special">
          Learn Article
        </Link>
      </div>
    </div>
  )
}

const news = [
  {
    title: 'The Importance of Federated Learning in Web3 AI',
    href: '/',
    createTime: 'Apr 12, 2024',
    src: '/home/news1.png'
  },
  {
    title: "Introducing: NULS Network's VP of Global Partnerships & Investment",
    href: '/',
    createTime: 'Apr 12, 2024',
    src: '/home/news2.png'
  },
  {
    title: 'Introducing NULS v3: Unleashing the Power of Edge AI',
    href: '/',
    createTime: 'Apr 12, 2024',
    src: '/home/news3.png'
  }
]

function LatestNews() {
  return (
    <section className="bg-sub">
      <div className="wrap pt-[140px] pb-[88px] lg:py-[76px] lg:px-6">
        <h3 className="text-[40px] leading-[50px] mb-10 font-medium lg:text-32">
          Latest News
        </h3>
        <div className="grid grid-cols-3 gap-[26px] lg:grid-cols-1 lg:gap-10">
          {news.map(v => (
            <News key={v.title} {...v} />
          ))}
        </div>
      </div>
    </section>
  )
}

export default LatestNews
