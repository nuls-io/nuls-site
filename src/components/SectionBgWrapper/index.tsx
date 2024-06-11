import React, { FC, ComponentProps } from 'react'
import clsx from 'clsx'
import Video from '../Video'

// style='margin: 0px; left: 0px; top: 50%; width: 100%; height: auto; right: auto; bottom: auto; position: absolute;'

interface IProps extends ComponentProps<'video'> {
  className?: string
  videoClass?: string
  mobileHide?: boolean
}
const SectionBgWrapper: FC<IProps> = props => {
  const { className, videoClass, children, mobileHide = false, ...rest } = props
  return (
    <section className={clsx('relative', className)}>
      <div className={clsx('absolute top-0 right-0 bottom-0 left-0 -z-[1]', mobileHide && 'lg:hidden')}>
        <div className="w-full h-full overflow-hidden">
          <Video
            className={
              videoClass ||
              'w-full h-full absolute -top-full -right-full -bottom-full -left-full m-auto -z-50 object-cover'
            }
            {...rest}></Video>
        </div>
      </div>
      {children}
    </section>
  )
}

export default SectionBgWrapper
