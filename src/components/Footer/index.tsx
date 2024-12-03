import Link from 'next/link'
import Joinin from '../Joinin'
import {
  WhitePaper,
  Blog,
  Youtube,
  Forum,
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
        path: '/wallets'
      },
      {
        label: 'Staking',
        path: '/ecosystem?type=Staking'
      },
      {
        label: 'SCO Platform',
        path: '/sco'
      },
      {
        label: 'NULS Explorer',
        path: '/nuls'
      },
      {
        label: 'ENULS Explorer',
        path: '/enuls'
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
        path: '/brand-assets'
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
        path: '/partners'
      },
      {
        label: 'Roadmap',
        path: '/roadmap'
      },
      {
        label: 'Community',
        path: '/community'
      }
    ]
  }
]

export default function Footer() {
  const renderLinks = (config: IConfig[] | IConfigChild[]) => {
    return config.map(item => {
      if ('children' in item) {
        return (
          <div
            key={item.label}
            className="flex flex-col flex-1 lg:w-1/2 lg:flex-auto lg:mb-6">
            <h3 className="text-lg text-white mb-5 font-medium">
              {item.label}
            </h3>
            {renderLinks(item.children)}
          </div>
        )
      }
      return item.path.startsWith('/') ? (
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
  )
}
