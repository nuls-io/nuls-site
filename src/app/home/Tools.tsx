'use client'

import React, { FC, useEffect, useState, useRef } from 'react'
import Image from 'next/image'
import clsx from 'clsx'
import SectionBgWrapper from '@/components/SectionBgWrapper'
import Video from '@/components/Video'
import Button from '@/components/Button'
import ExpandIcon from '@/components/ExpandIcon'
import Collapse from '@/components/Collapse'
import useMobile from '@/hooks/useMobile'
import { Forum, NERVENetwork, NULSExplorer, Nulswap } from '@/constants/links'

type ITool = {
  title: string
  src: string
  desc: string
  path: string
  isMobile: boolean
}
const Tool: FC<ITool> = ({ title, src, desc, path, isMobile }) => {
  const [expand, setExpand] = useState(false)
  return (
    <div className="p-6 pt-8 pr-9 bg-[#262628B2] w-[328px] h-[229px] rounded-lg mr-6 shrink-0 lg:w-full lg:h-auto lg:p-6 lg:mb-3 lg:mr-0">
      <div className="flex flex-col justify-between h-full">
        <div className="flex justify-between items-center">
          <div className="flex items-center">
            <Image width={28} height={28} src={src} alt="" />
            <h3 className="ml-3 text-2xl font-bold text-white lg:text-xl">
              {title}
            </h3>
          </div>
          <ExpandIcon expand={expand} setExpand={setExpand} />
        </div>
        {!isMobile ? (
          <div
            className={clsx(
              'flex-1 flex flex-col justify-between overflow-hidden lg:hidden'
            )}>
            <p className="text-sm text-white mt-5 lg:mb-3">{desc}</p>
            <div>
              <Button
                title="Learn More"
                href={path}
                className="text-base w-[140px] lg:text-sm"
                px="px-0"
                py="py-[8.5px] lg:py-1"
                font="text-base"
              />
            </div>
          </div>
        ) : (
          <Collapse visible={expand} className="hidden lg:block">
            <div className={clsx('flex-1 overflow-hidden')}>
              <p className="text-sm text-white mt-5 mb-3">{desc}</p>
              <div>
                <Button
                  title="Learn More"
                  href={path}
                  className="w-[140px]"
                  px="px-0"
                  py="py-1"
                  font="text-sm"
                />
              </div>
            </div>
          </Collapse>
        )}
      </div>
    </div>
  )
}

const tools = [
  {
    title: 'AI',
    src: '/home/icon-AI.png',
    desc: 'Developed in 2017, NULS is an industry pioneer. The ecosystem’s expansion to focus on .',
    path: '/'
  },
  {
    title: 'Earn',
    src: '/home/icon-Staking.png',
    desc: 'Stake your NULS with the project you like and start earning project tokens.',
    path: '/earn'
  },
  {
    title: 'Wallets',
    src: '/home/icon-Wallet.png',
    desc: 'Wallets to explore the NULS ecosystem.',
    path: '/wallets'
  },
  {
    title: 'NerveNetwork',
    src: '/home/icon-Nerve.png',
    desc: 'NULS ecosystem DeFi hub for token swapping, bridging, yielding, and more.',
    path: NERVENetwork
  },
  {
    title: 'Nulswap',
    src: '/home/icon-Nulswap.png',
    desc: 'AMM protocol with AI staking feature built on NULS.',
    path: Nulswap
  },
  {
    title: 'Explorer',
    src: '/home/icon-Explorer.png',
    desc: 'NULS dashboard for transaction tracking, block information, address lookup, and more.',
    path: NULSExplorer
  },
  {
    title: 'Forum',
    src: '/home/icon-Forum.png',
    desc: 'Get the latest NULS technical and community updates.',
    path: Forum
  },
  {
    title: 'Explorer More',
    src: '/home/icon-more.png',
    desc: 'Find more dApps to interact with on our ecosystem page',
    path: '/ecosystem'
  }
]

function Tools() {
  const { isMobile } = useMobile()
  const scrollRef = useRef<HTMLDivElement>(null)

  const [cur, setCur] = useState(0)
  const prev = () => {
    const nextCur = cur - 1
    setCur(nextCur)
    scrollRef.current!.style.transform = `translateX(-${
      nextCur * translateXPath
    }px)`
  }
  const next = () => {
    const nextCur = cur + 1
    setCur(nextCur)
    scrollRef.current!.style.transform = `translateX(-${
      nextCur * translateXPath
    }px)`
  }
  const translateXPath = 328 + 24
  const maxCur = tools.length - 1 - 2
  return (
    <section
      // className="h-[950px] bg-[url('/home/home2.jpg')] bg-center bg-cover bg-no-repeat overflow-hidden lg:bg-text lg:h-auto lg:bg-[url('/home/home2-mobile.png')] lg:bg-top lg:bg-[length:100%_auto] lg:px-6 lg:pb-10">
      className="relative h-[950px] overflow-hidden lg:h-auto lg:px-6 lg:pb-10">
      <div className="abs-full z-[-1] bg-[#000]"></div>
      <div className="abs-full z-[-1] lg:h-[50%]">
        <Video src="/home/bg2.mp4" />
      </div>
      <div className="pt-[346px] mb-[57px] flex justify-center lg:pt-[192px] lg:mb-[138px]">
        <Image src="/home/home3.png" width={260} height={116} alt="" />
      </div>

      <div className="wrap">
        <div className="flex justify-end mb-4 lg:hidden">
          <button
            onClick={prev}
            disabled={cur === 0}
            className={clsx(
              'w-[50px] h-[50px] rounded-full text-white flex justify-center items-center bg-[#141217] bg-clip-padding mr-2',
              cur === 0 ? 'opacity-70' : 'hover:bg-[#212026]'
            )}>
            <div className="w-4 h-4 rotate-180">
              <svg
                aria-hidden="true"
                fill="currentColor"
                role="img"
                viewBox="0 0 20 21"
                xmlns="http://www.w3.org/2000/svg">
                <title>Arrow Right</title>
                <polygon points="16.172 9 10.101 2.929 11.515 1.515 20 10 19.293 10.707 11.515 18.485 10.101 17.071 16.172 11 0 11 0 9"></polygon>
              </svg>
            </div>
          </button>
          <button
            onClick={next}
            disabled={cur === maxCur}
            className={clsx(
              'w-[50px] h-[50px] rounded-full text-white flex justify-center items-center bg-[#141217] bg-clip-padding mr-2',
              cur === maxCur ? 'opacity-70' : 'hover:bg-[#212026]'
            )}>
            <div className="w-4 h-4">
              <svg
                aria-hidden="true"
                fill="currentColor"
                role="img"
                viewBox="0 0 20 21"
                xmlns="http://www.w3.org/2000/svg">
                <title>Arrow Right</title>
                <polygon points="16.172 9 10.101 2.929 11.515 1.515 20 10 19.293 10.707 11.515 18.485 10.101 17.071 16.172 11 0 11 0 9"></polygon>
              </svg>
            </div>
          </button>
        </div>

        <div className="flex duration-300 lg:flex-wrap" ref={scrollRef}>
          {tools.map(v => (
            <Tool key={v.title} {...v} isMobile={isMobile} />
          ))}
        </div>
      </div>
    </section>
  )
}

export default Tools
