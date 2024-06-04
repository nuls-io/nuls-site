import { useState, useEffect } from 'react'

function useMobile(mobileScreen = 1200) {
  const [mobile, setMobile] = useState(false)

  useEffect(() => {
    function handleResize() {
      // const clientWidth = document.documentElement.clientWidth
      if (window.innerWidth <= mobileScreen) {
        setMobile(true)
      } else {
        setMobile(false)
      }
    }
    handleResize()
    window.addEventListener('resize', handleResize)
    return () => {
      window.removeEventListener('resize', handleResize)
    }
  }, [mobileScreen])
  return {
    isMobile: mobile
  }
}

export default useMobile
