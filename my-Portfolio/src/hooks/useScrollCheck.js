import { useState, useEffect } from 'react'

const useScrollCheck = () => {
  const [isScrolled, setIsScrolled] = useState(false)

  useEffect(() => {
    const checkScroll = () => {
      let bottomSectionTrigger
      const triggerLength = window.innerHeight * 0.1

      if (window.innerWidth > 768) {
        bottomSectionTrigger = 300
      } else {
        bottomSectionTrigger = 665
      }

      if (
        window.scrollY >
          document.documentElement.scrollHeight -
            window.innerHeight -
            bottomSectionTrigger &&
        window.innerWidth < 2000
      ) {
        setIsScrolled(true)
      } else if (window.scrollY > window.innerHeight - triggerLength) {
        setIsScrolled(true)
      } else {
        setIsScrolled(false)
      }
    }

    window.addEventListener('scroll', checkScroll)

    return () => {
      window.removeEventListener('scroll', checkScroll)
    }
  }, [])

  return isScrolled
}

export default useScrollCheck
