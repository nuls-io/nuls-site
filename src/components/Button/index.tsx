import { FC, ReactNode } from 'react'
import Link, { LinkProps } from 'next/link'
import clsx from 'clsx'

// type LinkType = typeof Link

interface IProps extends LinkProps {
  type?: 'primary' | 'default'
  title?: string
  px?: string
  py?: string
  font?: string
  className?: string
  children?: ReactNode
}

const Button: FC<IProps> = props => {
  const {
    children,
    type = 'primary',
    px,
    py,
    font,
    title,
    className,
    href = '',
    ...rest
  } = props

  if (!href) {
    return (
      <span
        className={clsx(
          'text-center text-text font-bold border rounded-[100px]',
          type === 'primary' ? 'bg-main border-main' : 'border-text',
          px ? px : 'px-12',
          py ? py : 'py-5',
          font ? font : 'text-lg',
          className
        )}
        {...rest}>
        {children || title}
      </span>
    )
  }

  /* const Component =
    typeof href === 'string' && !href.startsWith('/') ? 'a' : 'Link'

  return (
    <Component
      href={href}
      target="_blank"
      className={clsx(
        'text-center text-text font-bold border rounded-[100px] duration-300 hover:opacity-70',
        type === 'primary' ? 'bg-main border-main' : 'border-text',
        px ? px : 'px-12',
        py ? py : 'py-5',
        font ? font : 'text-lg',
        className
      )}
      {...rest}>
      {children || title}
    </Component>
  ) */

  if (typeof href === 'string' && !href.startsWith('/')) {
    return (
      <a
        href={href}
        target="_blank"
        className={clsx(
          'text-center text-text font-bold border rounded-[100px] duration-300 hover:opacity-70',
          type === 'primary' ? 'bg-main border-main' : 'border-text',
          px ? px : 'px-12',
          py ? py : 'py-5',
          font ? font : 'text-lg',
          className
        )}
        {...rest}>
        {children || title}
      </a>
    )
  }
  return (
    <Link
      href={href}
      className={clsx(
        'text-center text-text font-bold border rounded-[100px] duration-300 hover:opacity-70',
        type === 'primary' ? 'bg-main border-main' : 'border-text',
        px ? px : 'px-12',
        py ? py : 'py-5',
        font ? font : 'text-lg',
        className
      )}
      {...rest}>
      {children || title}
    </Link>
  )
}

export default Button
