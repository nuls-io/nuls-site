import type { Metadata } from 'next'
import SectionBgWrapper from '@/components/SectionBgWrapper'
import Video from '@/components/Video'
import Button from '@/components/Button'
import Proposal from './Proposal'
import Ambassador from './Ambassador'
import { Gov, GovCouncil } from '@/constants/links'

export const metadata: Metadata = {
  title: 'Community - Participation and Governance',
  description:
    'The community governance tool is a decentralized product based on the NULS smart contract. The tool enables each NULS holder to exercise their voting rights and participate in the NULS community development and growth decision-making process.'
}

export default function CommunityPage() {
  return (
    <>
      <section className="relative bg-text pt-[227px] pb-[147px] overflow-hidden lg:pt-40 lg:pb-[90px] lg:px-6">
        <div className="absolute top-[-150px] right-[-150px] w-[1082px] h-[972px] lg:hidden">
          <Video src="/community/bg1.mp4" />
        </div>
        <div className="wrap relative">
          <h3 className="w-[620px] text-[56px] leading-[64px] font-medium text-sub lg:text-m-title lg:w-full lg:text-center">
            Participation <br className="lg:hidden" /> and{' '}
            <span className="text-main">Governance</span>
          </h3>
          <p className="w-[484px] text-sm text-sub pt-[32px] pb-[48px] lg:w-full lg:text-center">
            The community governance tool is a decentralized product based on
            the NULS smart contract. The tool enables each NULS holder to
            exercise their voting rights and participate in the NULS community
            development and growth decision-making process.
          </p>
          <Button
            href={Gov}
            px="px-[53.5px]"
            py="py-[14.5px] lg:py-2"
            className="lg:w-full">
            Governance
          </Button>
        </div>
      </section>

      <SectionBgWrapper
        src="/common/bg8.mp4"
        poster="/community/community2.png"
        className="pt-[172px] pb-[175px] lg:py-[74px] lg:px-6">
        <div className="wrap flex flex-col items-center">
          <h3 className="text-[40px] leading-[50px] font-medium w-[337px] text-center lg:text-32 lg:w-full">
            NULS Community Councilor
          </h3>
          <p className="pt-[56px] pb-[50px] w-[590px] text-sm text-center lg:w-full lg:py-10">
            The NULS Community Council is a member organization composed of NULS
            holders who execute the Foundation Management Regulations on behalf
            of the NULS Foundation and NULS global community. The Council is
            managed by Councilors who represent the interests of the global
            community and promote community advancement and growth across the
            world.
          </p>
          <div className="lg:w-full">
            <Button
              className="lg:w-full"
              href={GovCouncil}
              px="px-[113px]"
              py="py-[14.5px]  lg:py-2">
              Councilor
            </Button>
          </div>
        </div>
      </SectionBgWrapper>

      <Proposal />

      <Ambassador />
    </>
  )
}
