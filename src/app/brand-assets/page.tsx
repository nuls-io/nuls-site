import type { Metadata } from 'next'
import Button from '@/components/Button'
import Image from 'next/image'

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

export default function NULSAIPage() {
  return (
    <>
      <section className="pt-[168px] pb-20 bg-main lg:px-6">
        <div className="wrap flex flex-col items-center">
          <h3 className="text-[56px] leading-[70px] font-bold text-center lg:text-m-title">
            Brand Assets
          </h3>
          <p className="w-[715px] text-sm text-center mt-8 mb-10 lg:w-full lg:mb-16">
            These guidelines describe the visual guidelines that represent NULS
            corporate identity. This includes our name, logo and other elements
            such as color, type and graphics.
          </p>
          <Button
            className="bg-text text-white w-[300px] lg:w-[240px]"
            px="px-0"
            py="py-[14.5px] lg:py-1"
            href="https://nuls.io/wp-content/uploads/2021/04/2021_Brand_Guidelines_apr2021.pdf">
            Brand Guidelines
          </Button>
        </div>
      </section>
      <section className="bg-text py-[100px] flex justify-center">
        <div className="text-white wrap flex items-center justify-between">
          <div className="lg:text-center">
            <div className="font-bold text-40">
              Our&nbsp;&nbsp;&nbsp;<span className="text-main">Logo</span>
            </div>
            <div className="w-[490px] mt-8 mb-10 lg:w-full">
              With bold and powerful design choices we’ve expertly crafted a new
              fresh look to better represent us as a company and as a community
              as a whole.
            </div>
            <Button
              className="w-[250px] lg:w-[220px]"
              px="px-0"
              py="py-[14.5px] lg:py-1"
              href="https://drive.google.com/drive/folders/1A9vgkGtNSSUmha6lZ1T_0P9SlRTOOmOJ">
              Download Logos
            </Button>
          </div>
          <Image
            className="lg:hidden"
            src="/brand-assets/logo.png"
            width={582}
            height={181}
            alt=""
          />
        </div>
      </section>

      <section className="bg-sub py-[100px] flex justify-center lg:py-16">
        <div className="wrap lg:text-center">
          <h3 className="font-bold text-40 ">
            <span className="text-main">Roboto Mono</span> and{' '}
            <span className="text-main">Roboto Flex</span> are our fonts
          </h3>
          <p className="mt-8 mb-10">
            The font design maintains consistency, ensuring good visual effects
            in different scenarios and applications.
          </p>
          <Button
            className="w-[250px] lg:w-[220px]"
            px="px-0"
            py="py-[14.5px] lg:py-1"
            href="https://fonts.google.com/specimen/Lato?query=lato">
            Download Font
          </Button>
        </div>
      </section>
    </>
  )
}
