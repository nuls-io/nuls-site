
import { useState, useEffect, useRef } from 'react'
import { usePathname } from 'next/navigation'

export default function useHeaderMobile() {
  const pathname = usePathname()
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
  
  return {
    expandMenu,
    toggleMenu
  }
}