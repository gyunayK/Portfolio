import { useState, useEffect } from 'react'

const useActiveSection = () => {
  const [activeSection, setActiveSection] = useState('home')

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            setActiveSection(entry.target.id)
          }
        })
      },
      {
        rootMargin: '-50% 0px -50% 0px',
        threshold: 0
      }
    )

    const observeSections = () => {
      document.querySelectorAll('section').forEach((section) => {
        observer.observe(section)
      })
    }

    observeSections()

    const mutationObserver = new MutationObserver(observeSections)
    mutationObserver.observe(document.body, { childList: true, subtree: true })

    return () => {
      observer.disconnect()
      mutationObserver.disconnect()
    }
  }, [])

  return activeSection
}

export default useActiveSection
