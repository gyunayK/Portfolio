import { useState, useEffect } from 'react'

const useScrollCheck = () => {
  const [isScrolled, setIsScrolled] = useState(false)

  useEffect(() => {
    const checkScroll = () => {
      const triggerLength = window.innerHeight * 0.1
      const bottomSectionTrigger = window.innerWidth > 768 ? 300 : 665

      const isAtBottom =
        window.scrollY > document.documentElement.scrollHeight - window.innerHeight - bottomSectionTrigger &&
        window.innerWidth < 2000
      const isPastHeader = window.scrollY > window.innerHeight - triggerLength

      if (isAtBottom || isPastHeader) {
        setIsScrolled(true)
      } else {
        setIsScrolled(false)
      }
    }

    window.addEventListener('scroll', checkScroll)
    return () => window.removeEventListener('scroll', checkScroll)
  }, [])

  return isScrolled
}

export default useScrollCheck
