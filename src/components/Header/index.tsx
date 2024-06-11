'use client'

import { useState, useEffect, useRef } from 'react'
import Link from 'next/link'
import Image from 'next/image'
import clsx from 'clsx'
import { MenuItem, SubMenu } from './MenuItem'
import Joinin from '../Joinin'
import useHeaderMobile from './useHeaderMobile'

export default function Header() {
  const [show, setShow] = useState(true)
  const scrollDistence = useRef(0)
  const diffDistence = useRef(0)

  const { isMobile, expandMenu, toggleMenu } = useHeaderMobile()

  useEffect(() => {
    function handleScroll() {
      let scrollTop = window.scrollY || document.documentElement.scrollTop
      if (scrollDistence.current > scrollTop) {
        // scroll up
        if (!show) {
          setShow(true)
        }
      } else {
        // scroll down
        diffDistence.current = scrollTop - scrollDistence.current
        if (diffDistence.current > 10 && show) {
          diffDistence.current = 0
          setShow(false)
        }
      }
      scrollDistence.current = scrollTop
    }
    window.addEventListener('scroll', handleScroll)
    return () => window.removeEventListener('scroll', handleScroll)
  }, [show])

  return (
    <>
      {!isMobile ? (
        <header
          className={clsx(
            'w-full fixed top-6 z-[999] duration-700 lg:hidden',
            !show && 'opacity-0 translate-y-[-100%]'
          )}>
          <div className="wrap flex bg-sub h-[64px] border border-r-0 border-text rounded-lg">
            <Link
              href="/"
              className="flex justify-center items-center w-16 h-full border-r border-text">
              <Image src="/nuls-logo.svg" width={16} height={27} alt="" />
            </Link>
            <div className="flex-1 flex h-full">
              <MenuItem href="/about" label="About" borderRight={true} />
              <SubMenu label="Solutions" borderRight={true}>
                <MenuItem
                  href="/chain-box"
                  label="ChainBox"
                  borderBottom={true}
                />
                <MenuItem
                  href=""
                  label="AI"
                  onClick={() => alert('Coming soon')}
                  borderBottom={true}
                />
                <MenuItem
                  href="/btc-layer2"
                  label="BTC Layer-2"
                  borderBottom={true}
                />
                <MenuItem href="/module-market" label="Module Market" />
              </SubMenu>
              <MenuItem
                href="/ecosystem"
                label="Ecosystem"
                borderRight={true}
              />
              <MenuItem
                href="/developers"
                label="Developers"
                borderRight={true}
              />
              <SubMenu label="Use NULS" borderRight={true}>
                <MenuItem href="/wallets" label="Wallets" borderBottom={true} />
                <MenuItem href="/sco" label="SCO" borderBottom={true} />
                <MenuItem href="/earn" label="Earn" borderBottom={true} />
                <MenuItem href="/nuls" label="NULS" borderBottom={true} />
                <MenuItem href="/enuls" label="ENULS" />
              </SubMenu>
              <MenuItem
                href="/community"
                label="Community"
                borderRight={true}
                className="rounded-r-lg"
              />
            </div>
          </div>
        </header>
      ) : (
        <header
          className={clsx(
            'hidden w-full fixed top-0 z-[999] pt-[42px] px-4 transition-header duration-500 overflow-auto lg:block',
            !show && 'opacity-0 translate-y-[-100%]',
            expandMenu ? 'h-full bg-sub pb-10' : 'h-[108px]'
          )}>
          <div
            className={clsx(
              'p-3 bg-sub rounded-lg border border-text duration-500'
            )}>
            <div className="flex justify-between items-center">
              <Link
                href="/"
                className="flex justify-center items-center w-4 h-7">
                <Image src="/nuls-logo.svg" width={16} height={28} alt="" />
              </Link>
              <div className="cursor-pointer" onClick={toggleMenu}>
                <Image
                  className={expandMenu ? 'hidden' : 'block'}
                  src="/menu.png"
                  width={40}
                  height={40}
                  alt=""
                />
                <Image
                  className={expandMenu ? 'block' : 'hidden'}
                  src="/close.png"
                  width={40}
                  height={40}
                  alt=""
                />
              </div>
            </div>
            <div className={expandMenu ? 'block pt-4' : 'hidden'}>
              <MenuItem href="/about" label="About" borderRight={true} />
              <SubMenu label="Solutions" borderRight={true}>
                <MenuItem
                  href=""
                  onClick={() => alert('Coming soon')}
                  label="ChainBox"
                  borderBottom={true}
                  borderRight={false}
                />
                <MenuItem
                  href=""
                  label="AI"
                  onClick={() => alert('Coming soon')}
                  borderBottom={true}
                />
                <MenuItem
                  href="/btc-layer2"
                  label="BTC Layer-2"
                  borderBottom={true}
                />
                <MenuItem href="/module-market" label="Module Market" />
              </SubMenu>
              <MenuItem
                href="/ecosystem"
                label="Ecosystem"
                borderRight={true}
              />
              <MenuItem
                href="/developers"
                label="Developers"
                borderRight={true}
              />
              <SubMenu label="Use NULS" borderRight={true}>
                <MenuItem href="/wallets" label="Wallets" borderBottom={true} />
                <MenuItem href="/sco" label="SCO" borderBottom={true} />
                <MenuItem href="/earn" label="Earn" borderBottom={true} />
                <MenuItem href="/nuls" label="NULS" borderBottom={true} />
                <MenuItem href="/enuls" label="ENULS" />
              </SubMenu>
              <MenuItem
                href="/community"
                label="Community"
                borderRight={true}
                className="rounded-r-lg"
              />
            </div>
          </div>
          <div className={expandMenu ? 'block pt-8 px-3' : 'hidden'}>
            <Joinin color="text-text" borderColor="border-text" />
            <p className="mt-8 text-sm text-center">
              NULS © 2024. All rights reserved.
            </p>
          </div>
        </header>
      )}
    </>
  )
}
