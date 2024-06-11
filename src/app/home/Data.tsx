import React, { FC } from 'react'
import SectionBgWrapper from '@/components/SectionBgWrapper'
import Button from '@/components/Button'
import { NULSExplorer } from '@/constants/links'
import { toThousands, fixNumber } from '@/utils/utils'

type IDataItem = {
  label: string
  value: string
}
const DataItem: FC<IDataItem> = ({ label, value }) => {
  return (
    <div className="h-[188px] bg-[#262628B2] rounded-lg flex flex-col items-center justify-center lg:h-[109px]">
      <div className="text-xl text-white font-bold mb-2 lg:text-lg">
        {label}
      </div>
      <div className="text-[44px] leading-[55px] text-main font-bold font-title lg:text-2xl">
        {value || '--'}
      </div>
    </div>
  )
}

async function getData() {
  // cache for 10s
  const res = await fetch('https://nulscan.io/api/api/nuls/assets/get', {
    next: { revalidate: 10 }
  })
  if (!res.ok) {
    return {}
  }
  return res.json()
}

function formatData(num: number) {
  return fixNumber(toThousands(num), 1)
}

async function Data() {
  const result = await getData()
  const data = result.data || {}
  return (
    <SectionBgWrapper src="/common/bg3.mp4" className="py-[132px] lg:py-16">
      <div className="abs-full z-[-1] bg-text opacity-70"></div>
      <div className="wrap">
        <h3 className="text-white text-center text-[40px] leading-[50px] font-medium pb-[72px] lg:text-32">
          Realtime Stats
        </h3>
        <div className="grid grid-cols-2 gap-4 lg:grid-cols-1 lg:px-6">
          <DataItem
            label="Total Supply"
            value={formatData(data.totalAssets || '')}
          />
          <DataItem
            label="Total Staked"
            value={formatData(data.deposit || '')}
          />
          <DataItem
            label="Circulating Supply"
            value={formatData(data.circulation || '')}
          />
          <DataItem
            label="NULS Burned"
            value={formatData(data.destroy || '')}
          />
        </div>
        <div className="text-center pt-[64px] lg:hidden">
          <Button href={NULSExplorer}>Explore NULS</Button>
        </div>
      </div>
    </SectionBgWrapper>
    // <section className="bg-[url('/home/home5.jpg')] bg-cover bg-center py-[132px] lg:py-16">

    // </section>
  )
}

export default Data
