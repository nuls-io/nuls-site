'use client'

import React, { useState, useCallback } from 'react'
import { useSearchParams, useRouter, usePathname } from 'next/navigation'
import Tabs, { TabType } from './Tabs'
import Filter from './Filter'

const Content = () => {
  const router = useRouter()
  const pathname = usePathname()
  const searchParams = useSearchParams()
  const [activeTab, setActiveTab] = useState<TabType>(() => {
    const type = searchParams.get('type')
    return TabType[type as TabType] || TabType.All
  })

  const onTabChange = (tab: TabType) =>{
    setActiveTab(tab)
    const params = new URLSearchParams(searchParams.toString())
    params.set('type', tab)
    router.push(pathname + '?' + params.toString())
  }
  return (
    <>
      <Tabs activeTab={activeTab} onChange={onTabChange} />
      <Filter activeTab={activeTab} />
    </>
  )
}

export default Content
