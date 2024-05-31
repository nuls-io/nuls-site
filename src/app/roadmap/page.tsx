import type { Metadata } from 'next'
import React from 'react'
import clsx from 'clsx'

export const metadata: Metadata = {
  title: 'Roadmap - The path travelled and the road ahead',
  description:
    'As an emergent, self-iterating, open-source platform, NULS continues to shape the future of the industry, by driving innovation and removing bottlenecks. Since the genesis block of our NULS 1.0 mainnet, our adaptive development process has created new industry standards in security, optimization, interoperability, and scalability.'
}

type Item = {
  status: 'Done' | 'Ongoing' | 'In progress'
  desc: string | React.ReactElement
  pr?: string
}
type IRoadItem = {
  year: number
  items: Item[]
}

const Status = ({ type }: { type: Item['status'] }) => {
  return (
    <h3
      className={clsx(
        'px-[14px] py-[6px] text-sm rounded-lg mb-[18px] font-medium inline-block',
        type === 'Done' && 'bg-main text-text',
        type === 'Ongoing' && 'bg-text text-main',
        type === 'In progress' && 'bg-text text-sub'
      )}>
      {type}
    </h3>
  )
}

const RoadItem: React.FC<IRoadItem> = props => {
  const { year, items } = props
  return (
    <div className="mb-[80px] lg:mb-10">
      <h3 className="text-32px mb-[30px] font-medium lg:text-center lg:font-bold lg:text-2xl">
        {year}
      </h3>
      {items.length === 1 ? (
        <div className="p-8 border border-text rounded-lg lg:p-4">
          <Status type={items[0].status} />
          <p>{items[0].desc}</p>
        </div>
      ) : (
        <div className="grid grid-cols-4 gap-6 lg:grid-cols-1 lg:gap-4">
          {items.map((item, index) => (
            <div
              className={clsx(
                'p-8 border border-text rounded-lg lg:p-4',
                item.pr && item.pr
              )}
              key={index}>
              <Status type={item.status} />
              <p className="text-sm">{item.desc}</p>
              {/* {typeof item.desc === 'string' ? <p>{item.desc}</p> : <p>item.desc</p>} */}
            </div>
          ))}
        </div>
      )}
    </div>
  )
}

export default function RoadmapPage() {
  const roads: IRoadItem[] = [
    {
      year: 2017,
      items: [
        {
          status: 'Done',
          desc: (
            <>
              September 27th 2017, NULS began the journey with its first step as
              NULS officially announced to the world and the blockchian
              industry.
              <br />
              Since then, NULS have been striving to bring more cutting edge
              blockchain products to customers and users worldwide.
            </>
          )
        }
      ]
    },
    {
      year: 2018,
      items: [
        { status: 'Done', desc: 'NULS 1.0 AlphaTest-net' },
        {
          status: 'Done',
          desc: (
            <>
              NULS Main-net v1.0 launched, <br />
              <span className="font-bold">11th July 2018</span>
            </>
          )
        },
        { status: 'Done', desc: 'NULS Light wallet development' },
        {
          status: 'Done',
          desc: (
            <>
              NULS light wallet launched,
              <br />
              <span className="font-bold">Q3 2018</span>
            </>
          )
        },
        {
          status: 'Done',
          desc: (
            <>
              NULS 2.0 Research and <br /> development began
            </>
          )
        },
        {
          status: 'Done',
          desc: (
            <>
              NULS ChainBox research and <br /> development began
            </>
          )
        },
        {
          status: 'Done',
          desc: 'NULS microservices research and development began'
        }
      ]
    },
    {
      year: 2019,
      items: [
        { status: 'Done', desc: 'NULS 2.0 Alpha Test-net' },
        {
          status: 'Done',
          desc: (
            <>
              NULS 2.0 Public Beta Test-net
              <br />
              <span className="font-bold">8th July 2019</span>
            </>
          )
        },
        {
          status: 'Done',
          desc: (
            <>
              NULS ChainBox launched
              <br />
              <span className="font-bold">8th July 2019</span>
            </>
          )
        },
        {
          status: 'Done',
          desc: (
            <>
              NULS Main-net v2.0 launched,
              <br />
              <span className="font-bold">17th September 2019</span>
            </>
          )
        },
        {
          status: 'Done',
          desc: 'NULS SCO Platform launched'
        },
        {
          status: 'Done',
          desc: (
            <>
              NULS 2.0 Governance tool launched,
              <br />
              <span className="font-bold">1st November 2019</span>
            </>
          ),
          pr: 'pr-[10px]'
        },
        {
          status: 'Done',
          desc: (
            <>
              NerveNetwork Research and <br /> development begins
            </>
          )
        }
      ]
    },
    {
      year: 2020,
      items: [
        {
          status: 'Done',
          desc: (
            <>
              NerveNetwork v1.0 launched,
              <br />
              <span className="font-bold">10th July 2020</span>
            </>
          )
        },
        {
          status: 'Done',
          desc: (
            <>
              NerveNetwork NerveDEX launched,
              <br />
              <span className="font-bold">4th September 2020</span>
            </>
          ),
          pr: 'pr-[10px]'
        },
        {
          status: 'Done',
          desc: '20 projects activated on NULS SCO platform'
        },
        {
          status: 'Done',
          desc: 'Realized heterogeneous cross-chain ETH and ERC20 assets'
        },
        {
          status: 'Done',
          desc: 'NFT NRC721 Compatibility'
        }
      ]
    },
    {
      year: 2021,
      items: [
        {
          status: 'Done',
          desc: 'Support ecosystem Nabox Wallet development'
        },
        { status: 'Done', desc: 'NULS Brand refreshed and website updated' },
        {
          status: 'Done',
          desc: 'Support assets from Ethereum/BNB Chain/OKX Chain/Heco blockchains to cross-chain & interact to NULS',
          pr: 'pr-[15px]'
        },
        {
          status: 'Done',
          desc: 'NULS Multi-Signature DApp'
        },
        {
          status: 'Ongoing',
          desc: 'Docking several projects from supported blockchains to enable cross chain transactions'
        },
        {
          status: 'Ongoing',
          desc: 'Integrating more functionality from NULS ecosystem projects to Nabox',
          pr: 'pr-[25px]'
        }
      ]
    },
    {
      year: 2022,
      items: [
        {
          status: 'Done',
          desc: 'Optimize the modular performance of NULS smart contract',
          pr: 'pr-[20px]'
        },
        {
          status: 'Done',
          desc: 'Incubate and support AMM protocol projects based on NULS'
        },
        {
          status: 'Done',
          desc: 'NULS Message Signature DApp'
          // pr: 'pr-[15px]'
        },
        {
          status: 'Done',
          desc: (
            <>
              Support assets from Avalanche/
              <br />
              Arbitrum/Cronos/Fantom and more blockchains to cross-chain
            </>
          ),
          pr: 'pr-[10px]'
        },
        {
          status: 'Done',
          desc: 'Support the development of NFT ecosystem projects in NULS ecosystem'
        },
        {
          status: 'Done',
          desc: 'Support DeFi/GameFi and more applications as NULS ecosystem grows'
        }
      ]
    },
    {
      year: 2023,
      items: [
        {
          status: 'Done',
          desc: 'ENULS Mainnet Activation'
        },
        {
          status: 'Done',
          desc: 'Organize and launch the NULS Ecosystem Projects Fund'
        },
        {
          status: 'Done',
          desc: (
            <>
              Optimize NULS Blockchain Browser
              <br />
              Data Displaying
            </>
          ),
          pr: 'pr-[25px]'
        },
        {
          status: 'Done',
          desc: 'Launch NULS Ecosystem Project Incentive Program'
        },
        {
          status: 'Done',
          desc: 'Assist NerveNetwork to Integrate More Blockchains and Interoperate with NULS/ENULS'
        },
        {
          status: 'Done',
          desc: 'Optimize NULS Underlying Structure and NVM Framework'
        },
        {
          status: 'Done',
          desc: 'Support DeFi, GameFi, and more Ecosystem DApps on NULS/ ENULS'
        }
      ]
    },
    {
      year: 2024,
      items: [
        {
          status: 'In progress',
          desc: 'New NULS blockchain Explorer launched'
        },
        {
          status: 'In progress',
          desc: 'Support NerveNetwork to research and integrate BTC/BRC20/LN assets cross-chain'
        },
        {
          status: 'In progress',
          desc: 'Develop ChainBox Bitcoin Layer2 module'
        },
        {
          status: 'In progress',
          desc: 'Optimize NULS/ENULS Documentation'
        },
        {
          status: 'In progress',
          desc: 'Optimize Public Service API'
        },
        {
          status: 'In progress',
          desc: 'Optimize NerveNetwork Document/AMM Protocol'
        },
        {
          status: 'In progress',
          desc: 'Assist NerveNetwork to Integrate More Blockchains and Interoperate with NULS/ENULS'
        },
        {
          status: 'In progress',
          desc: 'Optimize NULS Underlying Structure and NVM Framework'
        },
        {
          status: 'In progress',
          desc: 'Extend NULS Parachains Use Scenarios through ChainBox Technology'
        },
        {
          status: 'In progress',
          desc: 'Assist NerveNertwork to Enable NFT cross-chain Function'
        },
        {
          status: 'In progress',
          desc: 'Develop 10 ecosystem projects every quarter to build on NULS/ENULS',
          pr: 'pr-[15px]'
        },
        {
          status: 'In progress',
          desc: 'Develop 5 SCO projects every month'
        },
        {
          status: 'In progress',
          desc: 'Support DeFi, GameFi, and more Ecosystem DApps on NULS/ ENULS',
          pr: 'pr-[25px]'
        }
      ]
    }
  ]

  return (
    <>
      <section className="pt-[240px] pb-[163px] bg-[url('/roadmap/roadmap1.jpg')] bg-center bg-cover bg-no-repeat lg:pt-[160px] lg:pb-[90px] lg:px-6 lg:bg-none lg:bg-[#D7EAE3]">
        <div className="wrap">
          <h1 className="w-[535px] text-[56px] leading-[64px] font-medium lg:text-m-title lg:w-full lg:text-center">
            The Path <br className="lg:hidden" />
            Travelled and <br className="lg:hidden" />
            <span className="text-special">the Road Ahead</span>
          </h1>
          <p className="mt-[37px] text-sm w-[616px] lg:w-full lg:text-center lg:mt-8">
            As an emergent, self-iterating, open-source platform, NULS continues
            to shape the future of the industry, by driving innovation and
            removing bottlenecks. Since the genesis block of our NULS 1.0
            mainnet, our adaptive development process has created new industry
            standards in security, optimization, interoperability, and
            scalability.
          </p>
        </div>
      </section>

      <section className="bg-sub pt-[128px] pb-[70px] lg:py-[76px] lg:px-6">
        <div className="wrap">
          {roads.map(road => (
            <RoadItem key={road.year} {...road} />
          ))}
        </div>
      </section>
    </>
  )
}
