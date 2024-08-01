import Text from './animatedText/Text'
import { MdKeyboardArrowDown } from 'react-icons/md'
import { motion } from 'framer-motion'
import { useState } from 'react'
import Reveal from '@/components/Reveal'

function Hero() {
  const [isDragging, setIsDragging] = useState(false)
  return (
    <>
      <div className="text-white flex flex-col self-center xs:pl-[5%] lg:pl-[15%] pb-2 z-10">
        <Reveal>
          <h2 className="mb-1 text-2xl text-special-purple">
            <span className="inline-block h-[2px] w-8 bg-[#e49dfc] mr-2 mb-1"></span>
            HELLO THERE
          </h2>
        </Reveal>
        <Reveal>
          <h1 className="text-5xl md:text-6xl font-Tektur w-fit">
            I am Gyunay Kadirov
          </h1>
        </Reveal>
        <Text />
        <div className="flex items-center translate-y-20">
          <motion.h3
            onMouseDown={() => setIsDragging(true)}
            onMouseUp={() => setIsDragging(false)}
            onMouseLeave={() => setIsDragging(false)}
            drag={window.innerWidth > 768}
            dragMomentum={{
              velocity: 4,
              from: 'center',
              power: 20,
              timeConstant: 1000
            }}
            dragConstraints={{
              top: -500,
              left: -100,
              right: 500,
              bottom: 100
            }}
            className={`text-sm md:text-lg tracking-widest mr-2 flex overflow-hidden
            ${isDragging ? 'md:cursor-grabbing' : 'md:cursor-grab'}
            `}
          >
            PULL ME
            <MdKeyboardArrowDown color="#e49dfc" size={'28px'} />
          </motion.h3>
        </div>
      </div>
    </>
  )
}

export default Hero
