import type { Metadata } from 'next'
import Button from '@/components/Button'
import { POCM, POCMRegister } from '@/constants/links'

export const metadata: Metadata = {
  title: 'SCO - Ready for liftoff!',
  description:
    'The SCO platform allows NULS based projects to issue and distribute tokens safely to NULS holders using the POCM (Proof of Credit Mining) smart-contract blockchains.'
}

export default function SCOPage() {
  return (
    <>
      <section className="py-[254px] bg-[url('/sco/sco1.jpg')] bg-cover bg-center bg-no-repeat lg:pt-[160px] lg:pb-[110px] lg:px-6 lg:bg-none lg:bg-text">
        <div className="wrap">
          <h3 className="text-[56px] leading-[64px] font-medium text-sub lg:text-m-title lg:text-center">
            Ready for <br className="lg:hidden" />
            <span className="text-main">Liftoff</span>
          </h3>
          <p className="w-[469px] text-sm text-sub pt-[18px] lg:w-full lg:text-center">
            The SCO platform allows NULS based projects to issue and distribute
            tokens safely to NULS holders using the POCM (Proof of Credit
            Mining) smart-contract blockchains.
          </p>
        </div>
      </section>

      <section className="bg-sub py-[138px] lg:py-[76px] lg:px-6">
        <div className="wrap flex items-center lg:flex-wrap">
          <div className="mr-[70px] lg:w-full lg:mr-0 lg:mb-6">
            <h3 className="text-special text-[20px] leading-[30px] font-bold mb-[13px]">Got NULS?</h3>
            <h3 className="text-text text-[40px] leading-[50px] font-medium lg:text-32">
              A Platform Out Of <br className="lg:hidden"/> This World
            </h3>
            <p className="w-[530px] text-sm py-8 lg:w-full lg:py-6">
              Stake into a project’s nodes and earn their token as reward, while
              the project earns NULS as reward. Projects can use the NULS
              consensus rewards to bootstrap and help fund development. Unlike
              IEOs and ICOs, stakers never risk their principal, and NULS never
              leave their wallet. Earn project tokens without risk while your
              device is off!
            </p>
            <div>
              <Button href={POCM} className="w-[195px] mr-6 lg:w-full lg:mr-0 lg:mb-3 lg:py-3">
                Stake Now
              </Button>
              <Button
                href={POCMRegister}
                type="default"
                className="w-[195px] lg:w-full lg:mr-0"
                px="px-0" py="py-[19.5px] lg:py-3">
                Project Sign-up
              </Button>
            </div>
          </div>
          <div>
            <div className="w-[600px] h-[164px] p-8 border border-text rounded-lg lg:w-full lg:h-auto lg:p-4">
              <div className="inline-block py-[6px] px-[14px] text-sub text-sm bg-text rounded-lg mb-6 lg:mb-3">
                Stakers
              </div>
              <p className="text-sm">
                Stake your NULS with the project you like and start earning
                project tokens now. Your NULS tokens never leave your wallet,
                and you can turn your PC off while you earn.
              </p>
            </div>
            <div className="w-[600px] h-[164px] p-8 border border-text rounded-lg mt-4 lg:w-full lg:h-auto lg:p-4">
              <div className="inline-block py-[6px] px-[14px] text-sub text-sm bg-text rounded-lg mb-6 lg:mb-3">
                Projects
              </div>
              <p className="text-sm">
                Use the SCO Platform, to bring NULS stakers to your project and
                earn continuous NULS consensus rewards for project development
                while sharing in the NULS economy and ecology.
              </p>
            </div>
          </div>
        </div>
      </section>
    </>
  )
}
