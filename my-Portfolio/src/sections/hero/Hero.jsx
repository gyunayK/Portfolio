import Text from "./animatedText/Text";
import { MdKeyboardArrowDown } from "react-icons/md";
import { motion } from "framer-motion";
import { useRef, useState } from "react";

function Hero() {
  const constraintsRef = useRef(null);
  const [isDragging, setIsDragging] = useState(false);
  return (
    <>
      <div className="text-white flex flex-col self-center xs:pl-[5%] lg:pl-[15%] pb-2 z-10 ">
        <h2 className="mb-1 text-2xl text-special-purple">
          <span className="inline-block h-[2px] w-8 bg-[#e49dfc] mr-2 mb-1"></span>
          HELLO THERE
        </h2>
        <h1 className="text-5xl md:text-6xl font-Tektur pa">
          I am Gyunay Kadirov
        </h1>
        <Text />
        <motion.div className="flex items-center translate-y-20">
          <motion.div ref={constraintsRef} className="" />
          <motion.h3
            onMouseDown={() => setIsDragging(true)}
            onMouseUp={() => setIsDragging(false)}
            onDragEnd={() => setIsDragging(false)}
            drag
            dragConstraints={constraintsRef}
            dragElastic={1}
            dragMomentum={false}
            className={`text-sm md:text-lg tracking-widest mr-2 flex overflow-hidden
            ${isDragging ? "cursor-grabbing" : "cursor-grab"}
            `}
          >
            SCROLL DOWN
            <MdKeyboardArrowDown color="#e49dfc" size={"28px"} />
          </motion.h3>
        </motion.div>
      </div>
    </>
  );
}

export default Hero;
