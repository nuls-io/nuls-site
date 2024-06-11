import React from 'react'
import Image from 'next/image'
import Video from '@/components/Video'
import Button from '@/components/Button'

function SectionOne() {
  return (
    <section className="relative pt-[190px] pb-[140px] overflow-hidden lg:pb-[56px]">
      <div className="abs-full z-[-1] bg-sub"></div>
      <div className="w-[766px] h-[918px] absolute right-0 top-[-110px] lg:w-full lg:h-full lg:top-0">
      {/* <div className="w-[918px] h-[766px] absolute right-0 top-[-110px] lg:w-full lg:h-full lg:top-0"> */}
        <Video src="/home/bg1.mp4"/>
      </div>
      <div className="wrap relative">
        <h1 className="w-[555px] text-[84px] leading-[96px] font-medium lg:text-[59px] lg:leading-[68px] lg:w-11/12 lg:text-center lg:mx-auto">
          The First <span className="lg:hidden">BTC</span>
          <span className="hidden lg:inline">BitCoin</span> Layer-2{' '}
          <span className="text-special">for RWA</span>
        </h1>
        <div className="flex pt-[28px] lg:pt-[76px] lg:flex-col lg:mx-[3%]">
          <Button href="" title="Launch App" className="mr-4 lg:mr-0 lg:mb-4 lg:py-3" />
          <Button href="" title="Our Vision" type="default" className="lg:py-3" />
        </div>
      </div>
    </section>
  )
}

export default SectionOne
