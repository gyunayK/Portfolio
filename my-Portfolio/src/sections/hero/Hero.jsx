import Text from "./animatedText/Text";
import { MdKeyboardArrowDown } from "react-icons/md";

function Hero() {
  return (
    <>
      {/* <div className="absolute  bg-black opacity-75 h-[100dvh]   "></div> */}
      <div className="text-white flex flex-col self-center xs:pl-[5%] lg:pl-[15%] pb-2 z-10 ">
        <h2 className="mb-1 text-2xl text-special-purple">
          <span className="inline-block h-[2px] w-8 bg-[#e49dfc] mr-2 mb-1"></span>
          HELLO THERE
        </h2>
        <h1 className="text-5xl md:text-6xl text-white font-Tektur">
          I am Gyunay Kadirov.
        </h1>
        <Text />
        <div className="flex items-center translate-y-20">
          <h3 className="text-sm md:text-lg tracking-widest mr-2">
            SCROLL DOWN
          </h3>
          <MdKeyboardArrowDown color="#e49dfc" size={"28px"} />
        </div>
      </div>
    </>
  );
}

export default Hero;
