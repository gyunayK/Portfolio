import { useEffect, useRef } from 'react'
import { motion, useInView, useAnimation } from 'framer-motion'

function Reveal({ children, width }) {
  const ref = useRef(null)
  const isInView = useInView(ref, { once: true })

  const mainControls = useAnimation()
  const slideControls = useAnimation()

  useEffect(() => {
    if (isInView) {
      mainControls.start('visible')
      slideControls.start('visible')
    }
  }, [isInView])
  return (
    <div
      ref={ref}
      className={`relative ${width ? width : 'w-fit'} overflow-hidden`}
    >
      <motion.div
        variants={{
          hidden: { opacity: 0, y: 75 },
          visible: { opacity: 1, y: 0 }
        }}
        initial="hidden"
        animate={mainControls}
        transition={{ duration: 0.4, delay: 0.25 }}
      >
        {children}
      </motion.div>
      <motion.div
        variants={{
          hidden: { left: 0 },
          visible: { left: '100%' }
        }}
        initial="hidden"
        animate={slideControls}
        transition={{ duration: 0.4, ease: 'easeIn' }}
        className="absolute top-0 left-0 bottom-0 right-0 bg-purple-500 "
      />
    </div>
  )
}

export default Reveal
