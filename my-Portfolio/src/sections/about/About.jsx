import { skills } from './skills'
import { motion } from 'framer-motion'
import { useEffect, useRef, useState } from 'react'
import PropTypes from 'prop-types'

const About = () => {
  const cardsRef = useRef()
  const maxZIndex = useRef(1)

  useEffect(() => {
    const handleMouseMove = (e) => {
      const cards = cardsRef.current.children
      for (const card of cards) {
        const rect = card.getBoundingClientRect(),
          x = e.clientX - rect.left,
          y = e.clientY - rect.top

        card.style.setProperty('--mouse-x', `${Math.round(x)}px`)
        card.style.setProperty('--mouse-y', `${Math.round(y)}px`)
      }
    }

    const cardsContainer = cardsRef.current
    cardsContainer?.addEventListener('mousemove', handleMouseMove)

    return () => {
      cardsContainer?.removeEventListener('mousemove', handleMouseMove)
    }
  }, [])

  return (
    <section id="about" className="w-full h-full bg-white py-16 scroll-m-20">
      <div className="flex flex-col items-center justify-center">
        <div className="flex flex-col items-center gap-4">
          <h2 className="font-Tektur text-[#ae00ff] text-lg font-bold tracking-wider">ABOUT</h2>
          <h1 className="text-5xl font-serif font-medium p-3 -m-3 leading-8">Personal Info</h1>
          <h2 className="font-medium text-lg text-[#4d4d4d]">Get to know me </h2>
        </div>
        <div className="flex flex-col lg:flex-row justify-center gap-14 xxl:lgap-40 sm:mt-16 px-5 scale-90">
          <div className="w-full max-w-[500px] text-lg">
            <h1 className="text-2xl font-semibold">Hey there!</h1>
            <p className="mt-4">
              I am a software developer passionate about building reliable, efficient, and user-friendly web
              applications. I work on both the front-end and back-end, striving to create software that
              effectively addresses user needs without introducing unnecessary complexity.
            </p>
            <p className="mt-10">
              I prioritize clean code and collaboration, and I continuously seek ways to enhance both my
              skills and the quality of my work. My goal is to develop applications that people find genuinely
              useful and enjoyable.
            </p>
          </div>
          <div className="w-full max-w-[500px]">
            <h1 className="text-2xl font-semibold">Skills</h1>
            <div className="text-white bg-fixed" id="cards" ref={cardsRef}>
              {skills.map((skill, index) => (
                <SkillItem item={skill} key={index} maxZIndex={maxZIndex} index={index} />
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

const SkillItem = ({ item, maxZIndex, index }) => {
  const [zIndex, setZIndex] = useState(0)

  const bringToFront = () => {
    maxZIndex.current++
    setZIndex(maxZIndex.current)
  }

  const fadeInAnimationVariants = {
    initial: { opacity: 0, y: 100 },
    animate: (index) => ({ opacity: 1, y: 0, transition: { delay: 0.05 * index } })
  }

  return (
    <motion.div
      onMouseDown={bringToFront}
      variants={fadeInAnimationVariants}
      initial="initial"
      whileInView="animate"
      viewport={{ once: true }}
      custom={index}
      drag={window.innerWidth > 768}
      dragConstraints={{ top: -150, left: -150, right: 150, bottom: 150 }}
      whileHover={{ scale: 1.05, transition: { duration: 0.1 } }}
      whileTap={{ scale: 1.1, transition: { duration: 0.1 }, cursor: 'grabbing' }}
      style={{ cursor: 'grab', zIndex }}
      className="card mt-4"
    >
      <div className="card-content">
        {item.icon}
        <h2 className="text-xl">{item.name}</h2>
      </div>
    </motion.div>
  )
}

SkillItem.propTypes = {
  item: PropTypes.shape({ icon: PropTypes.node.isRequired, name: PropTypes.string.isRequired }).isRequired,
  maxZIndex: PropTypes.shape({ current: PropTypes.number }).isRequired,
  index: PropTypes.number.isRequired
}

export default About
