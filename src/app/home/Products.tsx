import React, { FC } from 'react'
import SectionBgWrapper from '@/components/SectionBgWrapper'
import Video from '@/components/Video'
import Image from 'next/image'
import Link from 'next/link'

type IProduct = {
  title: string
  src: string
  desc: string
  path: string
}
const Product: FC<IProduct> = ({ title, src, desc, path }) => {
  return (
    <div className="bg-sub border border-text rounded-lg overflow-hidden">
      <div className="relative">
        <div className="h-[276px]">
          <Video src={src} />
        </div>
        <div
          className="absolute w-full h-full top-0 left-0"
          style={{
            background:
              'linear-gradient(180deg, rgba(0, 44, 26, 0) 0%, #002C1A 100%'
          }}></div>

        {/* <Image
          className="w-full max-h-[276px]"
          width={384}
          height={276}
          src={src}
          alt=""
        /> */}
        <h3 className="absolute left-6 bottom-6 text-32 font-bold text-main lg:text-2xl lg:bottom-4">
          {title}
        </h3>
      </div>
      <div className="h-[195px] py-6 px-8 flex flex-col justify-between lg:h-[185px] lg:p-4">
        <p className="text-sm text-text">{desc}</p>
        <Link
          href={path}
          className="text-lg text-special font-bold hover:opacity-70">
          Learn More
        </Link>
      </div>
    </div>
  )
}

const products = [
  {
    title: 'ENULS',
    src: '/home/bg3.mov',
    desc: 'ENULS, initiated by the NULS community, is a blockchain that is fully compatible with EVM and Web3 API interfaces.',
    path: '/enuls'
  },
  {
    title: 'NULS ChainBox',
    src: '/common/bg5.mov',
    desc: 'NULS ChainBox solution provides developers an extensive suite of tools used to build highly customized blockchains choosing modules from a common repository, modifying them, or even adding new ones.',
    path: '/enuls'
  },
  {
    title: 'NULS SCO',
    src: '/home/bg4.mov',
    desc: 'The SCO platform allows NULS based projects to issue and distribute tokens safely to NULS holders using the POCM (Proof of Credit Mining) smart-contract blockchains.',
    path: '/sco'
  }
]

function Products() {
  return (
    <SectionBgWrapper
      src="/common/bg1.mp4"
      className="pt-[122px] pb-[151px] lg:py-[76px] lg:px-6 lg:bg-sub">
      <div className="wrap">
        <h3 className="text-center text-[40px] leading-[50px] font-medium mb-[96px] lg:text-32 lg:mb-10">
          Products to help you invent
        </h3>
        <div className="grid grid-cols-3 gap-6 lg:grid-cols-1">
          {products.map(v => (
            <Product key={v.title} {...v} />
          ))}
        </div>
      </div>
    </SectionBgWrapper>
  )
}

export default Products
