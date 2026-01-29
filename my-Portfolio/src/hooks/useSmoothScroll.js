import { useCallback } from 'react'

const useSmoothScroll = () => {
  return useCallback((targetId, offset = 80) => {
    const target = document.getElementById(targetId)
    if (!target) return

    document.body.style.overflow = ''

    const elementPosition = target.getBoundingClientRect().top
    const startPosition = window.scrollY
    const finalPosition = startPosition + elementPosition - offset
    const distance = finalPosition - startPosition
    const duration = 800
    let start = null

    const easeInOutQuad = (t, b, c, d) => {
      t /= d / 2
      if (t < 1) return (c / 2) * t * t + b
      t--
      return (-c / 2) * (t * (t - 2) - 1) + b
    }

    const animation = (currentTime) => {
      if (start === null) start = currentTime
      const timeElapsed = currentTime - start
      const run = easeInOutQuad(timeElapsed, startPosition, distance, duration)
      window.scrollTo(0, run)
      if (timeElapsed < duration) requestAnimationFrame(animation)
    }

    requestAnimationFrame(animation)
  }, [])
}

export default useSmoothScroll
