/* eslint-disable react/prop-types */
import { TbTilde } from "react-icons/tb";
import { timelineEvents } from "./timelineEvents";
import Reveal from "../../components/Reveal/Reveal";

const TimelineItem = ({ item, alignment }) => {
  const isLeftAligned = alignment === "left";
  return (
    <div
      className={`flex ${
        isLeftAligned ? "justify-start" : "justify-end"
      } items-start w-full mx-auto`}
    >
      <div
        className={`w-full lg:w-1/2 ${isLeftAligned ? "lg:pr-8" : "lg:pl-8"}`}
      >
        <Reveal width={"w-fit"}>
          <div className="relative flex-1 mb-10 bg-white rounded shadow lg:mb-8 ">
            <div
              className={`absolute inline-block w-4 overflow-hidden -translate-y-1/2 ${
                isLeftAligned ? "top-3 -right-4" : "top-7 -left-4"
              }`}
            >
              <div
                className={`hidden h-10 ${
                  isLeftAligned ? "origin-bottom-left" : "origin-top-right"
                } transform -rotate-45 bg-white shadow lg:block `}
              ></div>
            </div>
            <div className="relative z-20 flex  items-center">
              <div className="p-4 md:w-1/5 h-full  flex flex-col text-center items-center">
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
                <p className="text-2xl font-bold text-gray-700 text-bold">
                  {item.jobTitle}
                </p>
                <p className="text-gray-700 mt-2">{item.jobDetails}</p>
              </div>
            </div>
          </div>
        </Reveal>
      </div>
      <div
        className={`absolute flex items-center justify-center w-8 h-8 text-white transform -translate-x-1/2 -translate-y-4 bg-fuchsia-500 rounded-full left-1/2 ${
          isLeftAligned ? "lg:translate-y-[4px]" : "lg:translate-y-[3px]"
        }`}
      >
        {item.icon}
      </div>
    </div>
  );
};

export default function Timeline() {
  return (
    <section className="bg-[#e7e7ea] py-16" id="timeline">
      <div className="flex flex-col justify-center">
        <div className="w-full px-4 mx-auto lg:max-w-5xl">
          <div className="flex flex-col items-center gap-4 mb-12">
            <Reveal>
              <h2 className="font-Tektur text-[#AE00FF] text-lg font-bold tracking-wider">
                TIMELINE
              </h2>
            </Reveal>
            <Reveal width='p-3 -m-3'>
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
            <div className="absolute hidden w-1 h-full transform -translate-x-1/2 bg-[#c9e2f5]  lg:block left-1/2"></div>
            {/* Items */}
            {timelineEvents.map((item, index) => (
              <TimelineItem
                key={index}
                item={item}
                alignment={index % 2 === 0 ? "left" : "right"}
              />
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
