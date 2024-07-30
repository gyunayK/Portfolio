import Reveal from '@/components/Reveal'
import { skills } from './skills'
import { motion } from 'framer-motion'
import { useEffect, useRef } from 'react'

const About = () => {
  const cardsRef = useRef()

  useEffect(() => {
    const handleMouseMove = (e) => {
      const cards = cardsRef.current.children
      for (const card of cards) {
        const rect = card.getBoundingClientRect(),
          x = e.clientX - rect.left,
          y = e.clientY - rect.top

        card.style.setProperty('--mouse-x', `${x}px`)
        card.style.setProperty('--mouse-y', `${y}px`)
      }
    }

    const cardsContainer = cardsRef.current
    cardsContainer.addEventListener('mousemove', handleMouseMove)

    return () => {
      cardsContainer.removeEventListener('mousemove', handleMouseMove)
    }
  }, [])

  return (
    <section id="about">
      <div className="w-full h-full bg-white py-16">
        <div className="flex flex-col items-center justify-center">
          <div className="flex flex-col items-center gap-4">
            <Reveal>
              <h2 className="font-Tektur text-[#ae00ff] text-lg font-bold tracking-wider">ABOUT</h2>
            </Reveal>
            <Reveal width="p-3 -m-3">
              <h1 className="text-5xl font-serif font-medium leading-8">Personal Info</h1>
            </Reveal>
            <Reveal>
              <h2 className="font-medium text-lg text-[#4d4d4d]">Get to know more about me </h2>
            </Reveal>
          </div>
          <div className="flex flex-col lg:flex-row justify-center gap-14 2xl:gap-40 sm:mt-12 px-5 scale-90">
            <div className="w-full max-w-[500px] text-lg">
              <Reveal width="w-fit">
                <h1 className="text-2xl font-semibold">Hey there!</h1>
              </Reveal>
              <Reveal width="mt-4">
                <p>
                  I am a software developer specializing in front-end and back-end development. My passion
                  lies in crafting web applications that stand out for their performance and user-centric
                  design. Each project is an opportunity to blend innovative functionality with aesthetic
                  appeal, ensuring a seamless and engaging user experience.
                </p>
              </Reveal>
              <Reveal width="mt-10">
                <p>
                  I focus on application performance, striving for responsiveness and efficiency. My goal is
                  to create software that is not just powerful and reliable, but also intuitive and enjoyable
                  to use. Collaborating with teams to bring high-quality, scalable applications to life is
                  what drives me in the tech industry.
                </p>
              </Reveal>
            </div>
            <div className="w-full max-w-[500px]">
              <Reveal>
                <h1 className="text-2xl font-semibold pb-5">Skills</h1>
              </Reveal>
              <div
                className="grid grid-cols-1 xs:grid-cols-2 md:grid-cols-3 gap-5 text-white bg-fixed"
                id="cards"
                ref={cardsRef}
              >
                {skills.map((skill, index) => (
                  <motion.div
                    initial={{ scale: 0 }}
                    whileInView={{ scale: 1 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.5 }}
                    className="card"
                    key={index}
                  >
                    <div className="card-content">
                      {skill.icon}
                      <h2 className="text-xl">{skill.name}</h2>
                    </div>
                  </motion.div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

export default About
