import type { Metadata } from 'next'
import Image from 'next/image'
import Wallets from './Wallets'
// import { NULSWallet, NaboxWallet } from '@/constants/links'

export const metadata: Metadata = {
  title: 'NULS Wallet',
  description:
    'NULS Wallets are developed by the NULS core team and the NULS Technical Community (NTC).We also provide several third-party wallets, some of which include staking capability.'
}

export default function WalletsPage() {
  return (
    <>
      <section className="bg-sub pt-[226px] pb-[135px] lg:pt-[160px] lg:pb-[76px] lg:px-6">
        <div className="wrap flex flex-col items-center">
          <h3 className="text-[56px] leading-[70px] font-medium text-center lg:text-m-title">
            NULS Wallets
          </h3>
          <p className="w-[715px] text-sm text-center mt-[37px] mb-[70px] lg:w-full lg:mb-16">
            NULS Wallets are developed by the NULS core team and the NULS
            Technical Community (NTC). We also provide several third-party
            wallets, some of which include staking capability. When using a
            third-party wallet you are responsible for the safety of your
            private key.
          </p>

          <Wallets />
          {/* <div className="flex overflow-hidden lg:flex-wrap">
            <div className="flex flex-col border border-text rounded-lg w-[384px] h-[471px] mr-[64px] overflow-hidden lg:w-full lg:mr-0 lg:mb-6 lg:h-[400px]">
              <div className="h-[276px] bg-text flex justify-center items-center lg:h-[220px]">
                <Image
                  src="/wallets/NULS.svg"
                  width={213}
                  height={213}
                  alt=""
                />
              </div>
              <div className="flex-1 py-6 px-8 flex flex-col justify-between">
                <h3 className="text-32 font-bold  lg:text-2xl">
                  NULS Desktop {' '}
                  <br className="lg:hidden" />
                  Wallet
                </h3>
                <a
                  className="text-special text-lg font-bold  hover:opacity-70 lg:text-lg"
                  href={NULSWallet}
                  target="_blank">
                  Try Wallet
                </a>
              </div>
            </div>
            <div className="flex flex-col border border-text rounded-lg w-[384px] h-[471px] overflow-hidden lg:w-full lg:h-[400px]">
              <div className="h-[276px] bg-custom-gradient flex justify-center items-center lg:h-[220px]">
                <Image
                  src="/wallets/Nabox.svg"
                  width={213}
                  height={213}
                  alt=""
                />
              </div>
              <div className="flex-1 py-6 px-8 flex flex-col justify-between">
                <h3 className="text-32 font-bold lg:text-2xl">
                  Nabox Wallet
                </h3>
                <a
                  className="text-special text-lg font-bold hover:opacity-70 lg:text-lg"
                  href={NaboxWallet}
                  target="_blank">
                  Try Wallet
                </a>
              </div>
            </div>
          </div> */}
        </div>
      </section>
    </>
  )
}
