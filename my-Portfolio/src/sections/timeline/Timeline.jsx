/* eslint-disable react/prop-types */
import { FaReact, FaBriefcase } from "react-icons/fa";
import { TbTilde } from "react-icons/tb";
import { MdSchool } from "react-icons/md";

const items = [
  {
    date: "Aug 2022",
    endDate: "Aug 2023",
    cardTitle: "Web and Mobile Application Development Diploma",
    cardDetailedText: "Cornerstone International Community College of Canada",
    icon: <MdSchool />,
  },
  {
    date: "Jun 2023",
    endDate: "Jul 2023",
    cardTitle: "Movie Deck - Full Stack App",
    cardDetailedText:
      "This movie application offers a platform for discovering and discussing films, with features for users to find new titles, learn about them, and curate a list of favorites. It also includes a comment system for community interaction. Designed for ease of use, it works seamlessly across devices. Future enhancements will add personalized recommendations and user-generated reviews.",
    icon: <FaReact />,
  },
  {
    date: "Aug 2023",
    endDate: "Oct 2023",
    cardTitle: "Kadirov - Full Stack App",
    cardDetailedText: "Kadirov: Your fashion-forward marketplace offers a curated selection of clothing and unique makeup accessories. Users can effortlessly filter, search, and favorite items. With secure Stripe checkout and personalized shopping features, it provides a seamless and enjoyable online shopping experience.",
    icon: <FaReact />,
  },
  {
    date: "Aug 2023",
    endDate: "Dec 2023",
    cardTitle: "Front End Developer",
    cardDetailedText:
      "At eEpic Technologies, I crafted responsive web solutions using Next.js and TypeScript, focusing on mobile-first design. My integration of diverse APIs enhanced the app's dynamic content and user engagement. I also improved performance by 15% with advanced GraphQL queries. Collaboratively, I helped integrate front and backend components, boosting team synergy and communication.",
    icon: <FaBriefcase />,
  },
  {
    date: "Aug 2022",
    endDate: "Present",
    cardTitle: "Front End Developer",
    cardDetailedText: "At Summations, I improved SEO and website performance through Next.js 14 for server-side rendering and mobile responsiveness. I reduced load times by 30% with asset optimization and code splitting. I also developed seven custom React hooks for better code efficiency and integrated custom Mantine UI components for an enhanced user experience, especially for academic users.",
    icon: <FaBriefcase />,
  },
];

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
            <div className="p-4 md:w-1/5 h-full">
              <span className="text-lg text-gray-700 ">{item.date}</span>
              {item.endDate && (
                <>
                  <TbTilde className="text-lg text-gray-700 ml-3 " />
                  <span className="text-lg text-gray-700 ">{item.endDate}</span>
                </>
              )}
            </div>
            <div className="flex-1 p-4 pr-4 border-l border-gray-300">
              <p className="text-2xl font-bold text-gray-700 text-bold">
                {item.cardTitle}
              </p>
              <p className="text-gray-700 mt-2">{item.cardDetailedText}</p>
            </div>
          </div>
        </div>
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
    <section className="bg-[#e7e7ea] py-32" id="timeline">
      <div className="flex flex-col justify-center">
        <div className="w-full px-4 mx-auto lg:max-w-5xl">
          <div className="flex flex-col items-center gap-4 mb-28">
            <h2 className="font-Tektur text-[#AE00FF] text-lg font-bold tracking-wider">
              TIMELINE
            </h2>
            <h1 className="text-5xl font-serif font-medium leading-8">
              Professional Path
            </h1>
            <h2 className="font-medium text-lg text-[#4d4d4d]">
              A Chronicle of My Career
            </h2>
          </div>

          <div className="relative">
            {/* Vertical line */}
            <div className="absolute hidden w-1 h-full transform -translate-x-1/2 bg-[#c9e2f5]  lg:block left-1/2"></div>

            {/* Items */}
            {items.map((item, index) => (
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
