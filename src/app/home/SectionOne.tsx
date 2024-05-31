import React from 'react'
import Image from 'next/image'
import Button from '@/components/Button'

function SectionOne() {
  return (
    <section className="bg-sub pt-[190px] pb-[140px] overflow-hidden bg-[url('/home/home1.png')] bg-right-bottom bg-no-repeat lg:bg-[url('/home/home1-mobile.png')] lg:bg-top lg:bg-[length:100%_auto] lg:pb-[56px]">
      <div className="wrap">
        <h1 className="w-[555px] text-[84px] leading-[96px] font-medium lg:text-[59px] lg:leading-[68px] lg:w-11/12 lg:text-center lg:mx-auto">
          The First <span className="lg:hidden">BTC</span>
          <span className="hidden lg:inline">BitCoin</span> Layer-2{' '}
          <span className="text-special">for AI</span>
        </h1>
        <div className="flex pt-[28px] lg:pt-[76px] lg:flex-col lg:mx-[3%]">
          <Button href="" title="Launch App" className="mr-4 lg:mr-0 lg:mb-4 lg:py-3" py="" />
          <Button href="" title="Our Vision" type="default" className="lg:py-3" />
        </div>
      </div>
    </section>
  )
}

export default SectionOne
