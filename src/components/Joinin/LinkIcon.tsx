import { FC, PropsWithChildren } from 'react'
import clsx from 'clsx'

export interface ILinkIcon extends PropsWithChildren {
  href: string
  color?: string
  borderColor?: string
}
const LinkIcon: FC<ILinkIcon> = ({ children, href, color = 'text-white', borderColor = 'border-[#383838]' }) => {
  return (
    <a
      href={href}
      target="_blank"
      className={clsx(
        'flex justify-center items-center h-[48px] rounded-lg  hover:text-text hover:border-main hover:bg-main duration-300',
        color ? color : 'text-white',
        borderColor ? `border ${borderColor}` : 'border border-[#383838]'
      )}>
      {children}
    </a>
  )
}

export default LinkIcon
