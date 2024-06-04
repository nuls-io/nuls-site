
import { useState, useEffect, useRef } from 'react'
import { usePathname } from 'next/navigation'
import useMobile from '@/hooks/useMobile'

export default function useHeaderMobile() {
  const pathname = usePathname()
  const { isMobile } = useMobile()
  const [expandMenu, setExpandMenu] = useState(false)
  const toggleMenu = () => {
    if (!expandMenu) {
      document.body.style.overflow = 'hidden'
    } else {
      document.body.style.overflow = 'overlay'
    }
    setExpandMenu(expandMenu => !expandMenu)
  }

  useEffect(() => {
    setExpandMenu(false)
    document.body.style.overflow = 'overlay'
  }, [pathname])
  
  useEffect(() => {
    if (isMobile && expandMenu) {
      document.body.style.overflow = 'hidden'
    } else {
      document.body.style.overflow = 'overlay'
    }
  }, [isMobile, expandMenu])
  return {
    isMobile,
    expandMenu,
    toggleMenu
  }
}