'use client'

import {
  FC,
  PropsWithChildren,
  useState,
  ComponentProps,
  useEffect
} from 'react'
import Link from 'next/link'
import clsx from 'clsx'
import { usePathname } from 'next/navigation'

interface IProps extends ComponentProps<'a'> {
  href: string
  label: string
  borderRight?: boolean
  borderBottom?: boolean
  className?: string
}

export const MenuItem: FC<IProps> = ({
  href,
  label,
  borderRight = false,
  borderBottom = false,
  className = '',
  ...rest
}) => {
  const pathname = usePathname()
  const isActive = pathname === href
  return (
    <div className={clsx('flex-1', className)}>
      {!href ? (
        <>
          <span
            className={clsx(
              'menu-item',
              borderRight && 'border-r border-text',
              borderBottom && 'border-b border-text',
              isActive && 'text-main',
              className
            )}
            {...rest}>
            {label}
          </span>
        </>
      ) : href.startsWith('/') ? (
        <Link
          href={href}
          className={clsx(
            'menu-item',
            borderRight && 'border-r border-text',
            borderBottom && 'border-b border-text',
            isActive && 'text-main',
            className
          )}
          {...rest}>
          {label}
        </Link>
      ) : (
        <a
          href={href}
          target="_blank"
          className={clsx(
            'menu-item',
            borderRight && 'border-r border-text',
            borderBottom && 'border-b border-text',
            isActive && 'text-main',
            className
          )}
          {...rest}>
          {label}
        </a>
      )}
    </div>
  )
}

export const SubMenu: FC<PropsWithChildren<Omit<IProps, 'href'>>> = props => {
  const { children, label, ...rest } = props
  const pathname = usePathname()
  const [expand, setExpand] = useState(false)
  const onMouseOver = () => {
    if (document.documentElement.clientWidth > 1200) {
      setExpand(true)
    }
  }
  const onMouseLeave = () => {
    if (document.documentElement.clientWidth > 1200) {
      setExpand(false)
    }
  }
  useEffect(() => {
    setExpand(false)
  }, [pathname])
  return (
    <div
      className={clsx('relative flex-1 lg:overflow-hidden')}
      onMouseOver={onMouseOver}
      onMouseLeave={onMouseLeave}
      >
      <div className="relative hover:text-white" onClick={() => setExpand(expand => !expand)}>
        <div
          className={clsx(
            'menu-item',
            'border-r border-text',
            'relative'
          )}>
          {label}
          <div
            className={clsx(
              'hidden lg:flex w-5 h-5 justify-center items-center absolute right-3 top-3 duration-300',
              expand ? 'rotate-0' : '-rotate-90'
            )}>
            <svg
              width="13"
              height="8"
              viewBox="0 0 13 8"
              fill="none"
              xmlns="http://www.w3.org/2000/svg">
              <path
                d="M1.5 1.5L6.5 6.5L11.5 1.5"
                stroke="currentColor"
                strokeWidth="1.5"
                strokeLinecap="round"
                strokeLinejoin="round"
              />
            </svg>
          </div>
        </div>
      </div>

      <div
        className={clsx(
          'duration-300',
          expand ? 'h-[248px] opacity-100' : 'h-0 opacity-0'
        )}>
        <div className="h-2 bg-[transparent]"></div>
        <div
          className={clsx(
            'absolute w-full top-[100%] mt-2 border border-text rounded-lg overflow-hidden lg:static lg:px-4 lg:border-none'
          )}>
          {children}
        </div>
      </div>
    </div>
  )
}
