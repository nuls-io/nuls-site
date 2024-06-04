import Link from 'next/link'
import Joinin from '../Joinin'
import {
  WhitePaper,
  Blog,
  Youtube,
  Forum,
  NULSExplorer,
  ENULSExplorer,
  Github,
  BrandAssets,
  Documentation
} from '@/constants/links'

interface IConfig {
  label: string
  children: IConfigChild[]
}

interface IConfigChild {
  label: string
  path: string
  inner?: boolean
}

const linkConfig: IConfig[] = [
  {
    label: 'Learn',
    children: [
      {
        label: 'White Paper',
        path: WhitePaper
      },
      {
        label: 'Blog',
        path: Blog
      },
      {
        label: 'Youtube',
        path: Youtube
      },
      {
        label: 'Forum',
        path: Forum
      }
    ]
  },
  {
    label: 'Use NULS',
    children: [
      {
        label: 'Wallets',
        path: '/wallets',
        inner: true
      },
      {
        label: 'Staking',
        path: '/ecosystem?type=Staking',
        inner: true
      },
      {
        label: 'SCO Platform',
        path: '/sco',
        inner: true
      },
      {
        label: 'NULS Explorer',
        path: NULSExplorer
      },
      {
        label: 'ENULS Explorer',
        path: ENULSExplorer
      }
    ]
  },
  {
    label: 'Developers',
    children: [
      {
        label: 'GitHub',
        path: Github
      },
      {
        label: 'Brand Assets',
        path: BrandAssets
      },
      {
        label: 'Documentation',
        path: Documentation
      }
    ]
  },
  {
    label: 'About',
    children: [
      {
        label: 'Partners',
        path: '/partners',
        inner: true
      },
      {
        label: 'Roadmap',
        path: '/roadmap',
        inner: true
      },
      {
        label: 'Community',
        path: '/community',
        inner: true
      }
    ]
  }
]

export default function Footer() {
  const renderLinks = (config: IConfig[] | IConfigChild[]) => {
    return config.map(item => {
      if ('children' in item) {
        return (
          <div key={item.label} className="flex flex-col flex-1 lg:w-1/2 lg:flex-auto lg:mb-6">
            <h3 className="text-lg text-white mb-5 font-medium">
              {item.label}
            </h3>
            {renderLinks(item.children)}
          </div>
        )
      }
      return item.inner ? (
        <Link
          key={item.label}
          className="text-label text-sm mb-2 duration-300 hover:text-main"
          href={item.path}>
          {item.label}
        </Link>
      ) : (
        <a
          key={item.label}
          className="text-label text-sm mb-2 duration-300 hover:text-main"
          href={item.path}
          target="_blank">
          {item.label}
        </a>
      )
    })
  }

  return (
    <>
      <section className="py-[95px] bg-main lg:py-[54px]">
        <div className="wrap flex justify-between items-center flex-wrap">
          <h3 className="w-[612px] text-[26px] leading-[32px] font-bold lg:w-full lg:text-2xl lg:text-center lg:mb-10 lg:px-6">
            Receive occasional updates about the NULS network and our latest
            innovations
          </h3>
          <div className="flex flex-wrap lg:w-full lg:px-4">
            <input
              type="text"
              placeholder="Email Address"
              className="placeholder:text-text outline-0 border border-text rounded-lg px-6 py-4 bg-[transparent] text-2xl font-semibold mr-[14px] lg:w-full lg:text-xl lg:rounded-[54px] lg:mr-0 lg:mb-[14px]"
            />
            <div className="h-[64px] leading-[64px] bg-text rounded-lg text-center text-xl text-main px-[35px] cursor-pointer hover:opacity-70 lg:w-full lg:text-[20px] lg:rounded-[54px]">
              Sign Up
            </div>
          </div>
        </div>
      </section>
      <footer className="bg-text pt-20 pb-10 lg:py-12 lg:px-6">
        <div className="wrap">
          <div className="flex flex-wrap mb-24 lg:mb-6">
            <div className="flex-1 flex flex-wrap">{renderLinks(linkConfig)}</div>
            <div className="w-[282px] lg:w-full">
              <h3 className="text-lg text-white mb-5 font-medium">Join in</h3>
              <Joinin />
            </div>
          </div>
          <div className="flex flex-wrap">
            <p className="text-white flex-1 lg:hidden">
              NULS © 2017-2024. All rights reserved.
            </p>
            <Link href="/legal-disclaimer" className="w-[282px]">
              <span className="text-white underline underline-offset-4 mr-4">
                Terms & Conditions
              </span>
              <span className="text-white underline underline-offset-4">
                Privacy Policy
              </span>
            </Link>
            <p className="text-xs text-white w-full mt-6 hidden lg:block">
              NULS © 2017-2024. All rights reserved.
            </p>
          </div>
        </div>
      </footer>
    </>
  )
}
