import React, { ComponentProps, useState, useRef } from 'react'
import clsx from 'clsx'
import { CSSTransition } from 'react-transition-group'
import './index.css'

interface CollapseProps extends ComponentProps<'div'> {
  className?: string
  horizontal?: boolean
  visible: boolean
}

const Collapse = (props: CollapseProps) => {
  const { className, horizontal = false, visible, children } = props
  // horizontal need to define the width of the children
  const [height, setHeight] = useState(0)
  const [width, setWidth] = useState(0)
  const nodeRef = useRef<HTMLDivElement>(null)
  const onEntering = () => {
    if (horizontal) {
      nodeRef.current && setWidth(nodeRef.current.scrollWidth)
      return
    }
    nodeRef.current && setHeight(nodeRef.current.scrollHeight)
  }
  const onEntered = () => {
    if (horizontal) {
      setWidth(0)
      return
    }
    setHeight(0)
  }
  const onExit = () => {
    if (horizontal) {
      nodeRef.current && setWidth(nodeRef.current.scrollWidth)
      return
    }
    nodeRef.current && setHeight(nodeRef.current.scrollHeight)
  }
  const onExiting = () => {
    if (horizontal) {
      setWidth(0)
      return
    }
    setHeight(0)
  }
  const onExited = () => {
    if (horizontal) {
      setWidth(0)
      return
    }
    setHeight(0)
  }
  const currentHeight = height === 0 ? null : { height }
  const currentWidth = width === 0 ? null : { width }
  return (
    <CSSTransition
      in={visible}
      nodeRef={nodeRef}
      timeout={350}
      onEntering={onEntering}
      onEntered={onEntered}
      onExit={onExit}
      onExiting={onExiting}
      onExited={onExited}>
      {state => {
        return (
          <div
            ref={nodeRef}
            className={clsx(className, {
              'collapse-horizontal': horizontal,
              collapsing: state === 'entering' || state === 'exiting',
              'collapse-hide': state === 'exited'
            })}
            style={{ ...currentHeight, ...currentWidth }}>
            {children}
          </div>
        )
      }}
    </CSSTransition>
  )
}

export default Collapse
