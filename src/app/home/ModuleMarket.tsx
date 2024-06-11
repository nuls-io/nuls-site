import React from 'react'
import SectionBgWrapper from '@/components/SectionBgWrapper'
import Button from '@/components/Button'

type IDataItem = {
  label: string
  href: string
}
export const ModuleItem: React.FC<IDataItem> = ({ label, href }) => {
  return (
    <div className="h-[207px] bg-[#262628B2] rounded-lg flex items-center justify-center lg:h-[109px]">
      <Button
        href={href}
        className="rounded-[8px] font-medium"
        px="px-[14px]"
        py="py-[6px]"
        font="text-sm lg:text-xs">
        {label}
      </Button>
    </div>
  )
}

export const modules = [
  { label: 'Ledger', href: '' },
  { label: 'Accounts', href: '' },
  { label: 'Transactions', href: '' },
  { label: 'Blocks', href: '' },
  { label: 'Consensus', href: '' },
  { label: 'Cross-Chain', href: '' },
  { label: 'Network', href: '' },
  { label: 'BTC Layer-2', href: '' },
  { label: 'RWA', href: '' }
]

function ModuleMarket() {
  return (
    <SectionBgWrapper
      src="/common/bg6.mp4"
      poster="/home/home6.jpg"
      mobileHide={false}
      className="pt-[120px] pb-[153px] lg:py-16 lg:px-6">
      <div className="wrap">
        <h3 className="text-white text-center text-[40px] leading-[50px] font-medium mb-[72px] lg:text-32 lg:mb-[54px]">
          Module Market
        </h3>
        <div className="grid grid-cols-5 gap-6 lg:grid-cols-2 lg:gap-4">
          {modules.map(v => (
            <ModuleItem key={v.label} {...v} />
          ))}
        </div>
      </div>
    </SectionBgWrapper>
  )
}

export default ModuleMarket
