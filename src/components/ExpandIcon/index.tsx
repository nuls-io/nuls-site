import React from 'react'
import clsx from 'clsx'

interface IProps {
  color?: string
  expand: boolean
  setExpand: (expand: boolean) => void
}
function ExpandIcon({ color = 'bg-[#E4EDEA]', expand, setExpand }: IProps) {
  return (
    <button className={clsx('relative w-6 h-6 hidden justify-center items-center lg:flex')} onClick={() => setExpand(!expand)}>
      <span
        className={clsx(
          'absolute left-0 inline-block w-[22px] h-[1.5px] duration-300',
          color,
          expand && 'rotate-45'
        )}></span>
      <span
        className={clsx(
          'absolute left-0  inline-block w-[22px] h-[1.5px] rotate-90 duration-300',
          color,
          expand && 'rotate-[135deg]'
        )}></span>
    </button>
  )
}

export default ExpandIcon
