/* eslint-disable react/prop-types */
import { TimelineEvents } from './TimelineEvents'
import Reveal from '@/components/Reveal/Reveal'
import TimelineItem from './TimelineItem'

export default function Timeline() {
  return (
    <section className="bg-[#e7e7ea] py-16" id="timeline">
      <div className="flex flex-col justify-center">
        <div className="w-full px-4 mx-auto lg:max-w-5xl">
          <div className="flex flex-col items-center gap-4 sm:mb-12">
            <Reveal>
              <h2 className="font-Tektur text-[#AE00FF] text-lg font-bold tracking-wider">
                TIMELINE
              </h2>
            </Reveal>
            <Reveal width="p-3 -m-3">
              <h1 className="text-5xl font-serif font-medium leading-10 text-center">
                Professional Path
              </h1>
            </Reveal>
            <Reveal>
              <h2 className="font-medium text-lg text-[#4d4d4d]">
                A Chronicle of My Career
              </h2>
            </Reveal>
          </div>
          <div className="relative scale-90">
            {/* Vertical line */}
            <div className="absolute hidden w-1 h-full transform -translate-x-1/2 bg-violet-400 lg:block left-1/2"></div>
            {/* Items */}
            {TimelineEvents.map((item, index) => (
              <TimelineItem
                key={index}
                item={item}
                alignment={index % 2 === 0 ? 'left' : 'right'}
              />
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}
