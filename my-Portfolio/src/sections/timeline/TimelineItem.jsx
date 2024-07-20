import Reveal from '@/components/Reveal/Reveal'
import { TbTilde } from 'react-icons/tb'

export default function TimelineItem({ item, alignment }) {
  const isLeftAligned = alignment === 'left'
  return (
    <div
      className={`flex ${
        isLeftAligned ? 'justify-start' : 'justify-end'
      } items-start w-full mx-auto`}
    >
      <div
        className={`w-full lg:w-1/2 ${isLeftAligned ? 'lg:pr-8' : 'lg:pl-8'}`}
      >
        <Reveal width={'w-fit'}>
          <div className="relative flex-1 mb-10 bg-white rounded shadow lg:mb-8 ">
            <div
              className={`absolute bg-black inline-block w-4 overflow-hidden -translate-y-1/2 ${
                isLeftAligned ? 'top-3 -right-4' : 'top-7 -left-4'
              }`}
            >
              <div
                className={`absolute h-10 ${
                  isLeftAligned ? 'origin-bottom-left' : 'origin-top-right'
                } transform -rotate-45 bg-black shadow z-[1001] `}
              ></div>
            </div>
            <div className="relative z-20 flex flex-col sm:flex-row items-center">
              <div className="sm:p-4 pt-6 md:w-1/5 h-full flex gap-x-3 sm:flex-col text-center items-center">
                <span className="text-lg text-gray-700 ">{item.date}</span>
                {item.endDate && (
                  <>
                    <TbTilde className="text-lg text-gray-700" />
                    <span className="text-lg text-gray-700 ">
                      {item.endDate}
                    </span>
                  </>
                )}
              </div>
              <div className="flex-1 p-4 pr-4 border-l border-gray-300">
                <p className="text-2xl font-bold text-gray-700 text-bold text-center sm:text-start">
                  {item.jobTitle}
                </p>
                <p className="text-gray-700 mt-2 text-start">
                  {item.jobDetails}
                </p>
              </div>
            </div>
          </div>
        </Reveal>
      </div>
      <div
        className={`absolute flex items-center justify-center w-8 h-8 text-white transform -translate-x-1/2 -translate-y-4 bg-fuchsia-500 rounded-full left-1/2 ${
          isLeftAligned ? 'lg:translate-y-[4px]' : 'lg:translate-y-[3px]'
        }`}
      >
        {item.icon}
      </div>
    </div>
  )
}
