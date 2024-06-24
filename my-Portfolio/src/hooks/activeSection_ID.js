import { useState, useEffect } from 'react'

const useActiveSection = (threshold) => {
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
        threshold
      }
    )

    const observeSections = () => {
      const sections = document.querySelectorAll('section')
      sections.forEach((section) => {
        observer.observe(section)
      })
    }

    const mutationObserver = new MutationObserver(() => {
      observeSections()
    })

    mutationObserver.observe(document.body, {
      childList: true,
      subtree: true
    })

    return () => {
      observer.disconnect()
      mutationObserver.disconnect()
    }
  }, [threshold])

  return activeSection
}

export default useActiveSection
