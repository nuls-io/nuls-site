import type { Metadata } from 'next'
import SectionBgWrapper from '@/components/SectionBgWrapper'
import Button from '@/components/Button'

export const metadata: Metadata = {
  title: 'NULS AI',
  description:
    'The AI identity network that unlocks and enhances the value of AI data.'
}

interface ItemProps {
  title: string
  desc: string
}
function Item(props: ItemProps) {
  const { title, desc } = props
  return (
    <div className="border border-text rounded-lg bg-[#F0FFFA99] p-8 lg:h-auto lg:p-6">
      <h3 className="py-1 px-3 leading-[22px] bg-text rounded-lg font-medium inline-block text-white mb-[18px]">
        {title}
      </h3>
      <p className="text-sm">{desc}</p>
    </div>
  )
}

const items = [
  {
    title: 'AI Digital Identity',
    desc: 'Use your NULS AI identity as your digital presence in the NULS ecosystem and AI system.'
  },
  {
    title: 'AI Training',
    desc: 'By Training AI, you can provide data feeding for some AI models and contribute to them. It can also be bound to the AI ​​identity and become a valuable digital asset.'
  },
  {
    title: 'AI Nodes',
    desc: 'AI Nodes contribute computing resources to the AI ​​network to earn rewards.'
  }
]

export default function NULSAIPage() {
  return (
    <>
      <SectionBgWrapper
        src="/nuls-ai/bg1.mp4"
        // videoClass="opacity-20"
        className="pt-[266px] pb-[243px] lg:pt-[160px] lg:pb-[76px] lg:px-6">
        <div className="abs-full z-[-1] bg-text opacity-80"></div>
        <div className="wrap flex flex-col items-center">
          <h3 className="text-[56px] leading-[70px] font-medium text-center text-sub lg:text-m-title">
            NULS AI
          </h3>
          <div className="w-[715px] text-sm leading-[21px] text-center lg:w-full">
            <p className="text-main py-7">
              The AI identity network that unlocks and enhances the value of AI
              data.
            </p>
            <p className="text-sub">
              NULS AI is an artificial intelligence digital identity protocol
              that not only provides you with a unique digital identity but also
              generates passive income through our innovative reward mechanism.
              The AI digital identity can also automatically train and evolve in
              the future.
            </p>
          </div>
        </div>
      </SectionBgWrapper>

      <SectionBgWrapper
        src="/common/bg1.mp4"
        poster="/home/home4.png"
        className="pt-[98px] pb-[60px] lg:py-12 lg:px-6 lg:bg-sub">
        <div className="wrap">
          <h3 className="text-center text-[40px] leading-[50px] font-medium mb-[98px] lg:text-32 lg:mb-10">
            NULS AI Digital Identity
          </h3>
          <div className="grid grid-cols-3 gap-6 lg:grid-cols-1 lg:gap-4">
            {items.map(item => (
              <Item key={item.title} {...item} />
            ))}
          </div>
          <div className="text-center mt-[60px] lg:mt-8">
            <Button
              className="w-[252px] lg:w-full"
              px="px-0"
              py="py-[14.5px] lg:py-1"
              href="https://ai.nuls.io">
              Explore Now
            </Button>
          </div>
        </div>
      </SectionBgWrapper>
    </>
  )
}
