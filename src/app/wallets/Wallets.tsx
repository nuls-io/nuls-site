import React from 'react'
import Image from 'next/image'
import Link from 'next/link'
import clsx from 'clsx'
import { NULSWallet, NaboxWallet } from '@/constants/links'

interface WalletProps {
  title: string | React.ReactElement
  src?: string
  background?: string
  link: string
}

const Wallet = (props: WalletProps) => {
  const { title, src, background = 'bg-[#1C1D21]', link } = props
  return (
    <div className="flex flex-col border border-text rounded-lg h-[471px] overflow-hidden lg:w-full lg:mr-0 lg:mb-6 lg:h-[400px]">
      <div
        className={clsx(
          'h-[276px] flex flex-col justify-center items-center lg:h-[220px]',
          background
        )}>
        {src ? (
          <Image src={src} width={213} height={213} alt="" />
        ) : (
          <>
            <Image src="/wallets/Wallet.svg" width={46} height={42} alt="" />
            <h4 className="text-2xl text-white font-bold mt-5">Explore NULS with</h4>
          </>
        )}
      </div>
      <div className="flex-1 py-6 px-8 flex flex-col justify-between">
        <h3 className="text-32 font-bold  lg:text-2xl">{title}</h3>
        {link.startsWith('/') ? (
          <Link
            className="text-special text-lg font-bold  hover:opacity-70 lg:text-lg"
            href={link}>
            Try Wallet
          </Link>
        ) : (
          <a
            className="text-special text-lg font-bold  hover:opacity-70 lg:text-lg"
            href={link}
            target="_blank">
            Try Wallet
          </a>
        )}
      </div>
    </div>
  )
}

const wallets: WalletProps[] = [
  {
    title: (
      <>
        NULS Desktop <br className="lg:hidden" />
        Wallet
      </>
    ),
    src: '/wallets/NULS.svg',
    link: NULSWallet
  },
  {
    title: 'Nabox Wallet',
    src: '/wallets/Nabox.svg',
    link: NaboxWallet
  },
  { title: 'More Wallets', src: '', link: '/ecosystem?type=Wallets' }
]

function Wallets() {
  return (
    <div className="w-full grid grid-cols-3 gap-6 lg:grid-cols-1">
      {wallets.map(wallet => (
        <Wallet key={wallet.link} {...wallet} />
      ))}
    </div>
  )
}

export default Wallets
