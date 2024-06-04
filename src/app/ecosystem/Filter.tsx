'use client'

import React, { useState, useEffect } from 'react'
import Image from 'next/image'
import items from './ecosystemItems'
import clsx from 'clsx'
import ExpandIcon from '@/components/ExpandIcon'
import Collapse from '@/components/Collapse'
import useMobile from '@/hooks/useMobile'
import { TabType } from './Tabs'

type IProps = {
  src: string
  name: string
  desc: string
  link: string
  isMobile: boolean
}
const Item = (props: IProps) => {
  const { src, name, desc, link, isMobile } = props
  const [expand, setExpand] = useState(false)
  return (
    <div className="h-[350px] p-8 pb-[26px] border border-text rounded-lg flex flex-col justify-between lg:h-auto lg:p-4">
      <div className="flex justify-between items-center">
        <div className="lg:flex items-center">
          <div className="w-[45px] h-[45px] rounded-md border border-main">
            <Image src={src} width={45} height={45} alt="" />
          </div>
          <h3 className="text-[26px] leading-[32px] font-bold my-[18px] lg:text-lg lg:my-0 lg:ml-3">
            {name}
          </h3>
        </div>
        <ExpandIcon color="bg-text" expand={expand} setExpand={setExpand} />
      </div>
      {!isMobile ? (
        <div
          className={clsx(
            'flex-1 flex flex-col justify-between lg:hidden'
          )}>
          <p className="text-sm lg:py-4">{desc}</p>
          <a
            className="font-bold text-lg text-special"
            href={link}
            target="_blank">
            Learn More
          </a>
        </div>
      ) : (
        <Collapse visible={expand} className="hidden lg:block">
          <div className={clsx('flex-1 flex flex-col justify-between')}>
            <p className="text-sm lg:py-4">{desc}</p>
            <a
              className="font-bold text-lg text-special"
              href={link}
              target="_blank">
              Learn More
            </a>
          </div>
        </Collapse>
      )}
    </div>
  )
}

const Filter = ({ activeTab }: { activeTab: TabType }) => {
  const { isMobile } = useMobile()
  const [list, setList] = useState<Omit<IProps, 'isMobile'>[]>([])
  useEffect(() => {
    if (activeTab === TabType.All) {
      const list = items.map(v => ({
        ...v,
        link: Array.isArray(v.link) ? v.link[0] : v.link
      }))
      setList(list)
    } else {
      //activeTab in v.link ? v.link[activeTab] : v.link
      const list = items
        .filter(v => v.type === activeTab || v.type.includes(activeTab))
        // @ts-ignore
        .map(v => ({ ...v, link: v.link[activeTab] || v.link }))
      setList(list)
    }
  }, [activeTab])
  return (
    <div className="grid grid-cols-4 gap-6 pt-9 lg:grid-cols-1 lg:pt-5">
      {list.map(item => (
        <Item key={item.name} {...item} isMobile={isMobile} />
      ))}
    </div>
  )
}

export default Filter
