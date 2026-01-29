import { useEffect, useRef } from 'react'
import PropTypes from 'prop-types' // <--- 1. Import this
import { motion, useInView, useAnimation } from 'framer-motion'

function Reveal({ children, width = 'fit-content' }) {
  const ref = useRef(null)
  const isInView = useInView(ref, { once: true })

  const mainControls = useAnimation()
  const slideControls = useAnimation()

  useEffect(() => {
    if (isInView) {
      mainControls.start('visible')
      slideControls.start('visible')
    }
  }, [isInView, mainControls, slideControls])

  return (
    <div ref={ref} style={{ position: 'relative', width, overflow: 'hidden' }}>
      <motion.div
        variants={{
          hidden: { opacity: 0, y: 75 },
          visible: { opacity: 1, y: 0 }
        }}
        initial="hidden"
        animate={mainControls}
        transition={{ duration: 0.5, delay: 0.25 }}
      >
        {children}
      </motion.div>
    </div>
  )
}

Reveal.propTypes = {
  children: PropTypes.node.isRequired,
  width: PropTypes.string
}

export default Reveal
