'use client'

import React, {
  FC,
  PropsWithChildren,
  createContext,
  useContext
} from 'react'
import useMobile from '@/hooks/useMobile'
import useMounted from '@/hooks/useMounted'

const MobileContext = createContext(false)

export const useMobileContext = () => {
  const isMobile = useContext(MobileContext)
  return isMobile
}


const MobileProvider: FC<PropsWithChildren> = props => {
  const { isMobile } = useMobile()
  const isMounted = useMounted()
  return (
    <MobileContext.Provider value={isMobile}>
      {props.children}
    </MobileContext.Provider>
  )
}

const Providers: FC<PropsWithChildren> = ({ children }) => {
  return <MobileProvider>{children}</MobileProvider>
}

export default Providers
