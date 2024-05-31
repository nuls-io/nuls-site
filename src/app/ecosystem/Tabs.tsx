'use client'

import React from 'react'
import clsx from 'clsx'

export enum TabType {
  All = 'All',
  Wallets = 'Wallets',
  DeFi = 'DeFi',
  Staking = 'Staking',
  'Infra&Tools' = 'Infra&Tools',
  NFTs = 'NFTs',
  LaunchPad = 'LaunchPad',
  Gaming = 'Gaming'
}

const tabs = [
  { type: TabType.All, label: 'All' },
  { type: TabType.Wallets, label: 'Wallet' },
  { type: TabType.DeFi, label: 'DeFi' },
  { type: TabType.Staking, label: 'Staking' },
  { type: TabType['Infra&Tools'], label: 'Infra&Tools' },
  { type: TabType.NFTs, label: 'NFTs' },
  { type: TabType.LaunchPad, label: 'LaunchPad' },
  { type: TabType.Gaming, label: 'Gaming' }
]

const Tabs = ({
  activeTab,
  onChange
}: {
  activeTab: TabType
  onChange: (type: TabType) => void
}) => {
  return (
    <div className="pb-5 lg:overflow-x-auto">
      <div className="grid grid-cols-8 gap-6 lg:w-[1008px] lg:gap-4">
        {tabs.map(tab => (
          <div
            className={clsx(
              'cursor-pointer text-center text-lg font-title font-bold py-3 border-b hover:text-main hover:border-main lg:text-xs lg:py-[10px]',
              activeTab === tab.type
                ? 'text-main border-main'
                : 'text-text border-text'
            )}
            key={tab.type}
            onClick={() => onChange(tab.type)}>
            {tab.label}
          </div>
        ))}
      </div>
    </div>
  )
}

export default Tabs
