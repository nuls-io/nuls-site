import { useState, useEffect, useRef, useCallback } from 'react'

function useMounted() {
  const [mounted, setMounted] = useState(false)
  const isMounted = useRef(false)
  const get = useCallback(() => {
    return isMounted.current
  }, [])
  useEffect(() => {
    isMounted.current = true
    setMounted(true)
  }, [])
  return mounted
}

export default useMounted
