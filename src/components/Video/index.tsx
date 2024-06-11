import React, { FC, ComponentProps } from 'react'

const Video: FC<ComponentProps<'video'>> = props => {
  const { className, children, src, ...rest } = props
  return (
    <video
      className={className || 'w-full h-full object-cover'}
      playsInline
      autoPlay
      loop
      muted
      data-wf-ignore="true"
      data-object-fit="cover"
      {...rest}>
      {children ? children : <source src={src} data-wf-ignore="true" />}
    </video>
  )
}

export default Video
