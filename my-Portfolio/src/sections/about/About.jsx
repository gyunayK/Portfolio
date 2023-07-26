import {
  FaReact,
  FaHtml5,
  FaCss3Alt,
  FaSass,
  FaNodeJs,
} from "react-icons/fa";
import { SiJavascript, SiTailwindcss, SiMongodb } from "react-icons/si";
import { TbBrandNextjs } from "react-icons/tb";

const About = () => {
  return (
    <section>
      <div className="w-full h-full bg-white py-32">
        <div className="flex flex-col items-center justify-center ">
          <div className=" flex flex-col items-center gap-4">
            <h2 className="font-Tektur text-[#b931f8] text-lg font-bold tracking-wider">
              ABOUT
            </h2>
            <h1 className="text-5xl font-serif font-medium leading-8">
              Personal Info
            </h1>
            <h4 className="font-medium text-lg">Get to know more about me </h4>
          </div>
          <div className="flex flex-col lg:flex-row justify-center gap-14 2xl:gap-40 mt-28">
            <div className="w-full px-2 md:px-0 md:max-w-[500px]">
              <h1 className="text-2xl font-semibold">Hello!</h1>
              <p className="text-xl mt-4 text-[#515151]">
                My name is Gyunay Kadirov I am a Full Stack Developer who
                expertly combines professionalism with a dash of fun. I thrive
                on tackling challenges head-on, all while fostering a
                collaborative team environment. I am a self-motivated individual
                who embraces growth.
              </p>
              <p className="text-xl mt-10 text-[#515151]">
                My skill set spans a diverse range of front-end and back-end
                technologies and frameworks.
              </p>
            </div>
            <div className="w-full px-2 md:px-0 md:max-w-[500px]">
              <h1 className="text-2xl font-semibold">Skills</h1>
              <div className="mt-4">
                <div className="grid grid-cols-2 xs:grid-cols-3 md:grid-cols-3 gap-10 text-[#ffffff]">
                  <div className="bg-[#6e6e6e] p-3 rounded-md flex flex-col items-center">
                    <FaHtml5 className="text-4xl " />
                    <h2>HTML</h2>
                  </div>
                  <div className="bg-[#6e6e6e] p-3 rounded-md flex flex-col items-center">
                    <FaCss3Alt className="text-4xl " />
                    <h2>CSS</h2>
                  </div>
                  <div className="bg-[#6e6e6e] p-3 rounded-md flex flex-col items-center">
                    <SiJavascript className="text-4xl " />
                    <h2>Java Script</h2>
                  </div>
                  <div className="bg-[#6e6e6e] p-3 rounded-md flex flex-col items-center">
                    <TbBrandNextjs className="text-4xl " />
                    <h2>Next.js</h2>
                  </div>

                  <div className="bg-[#6e6e6e] p-3 rounded-md flex flex-col items-center">
                    <FaReact className="text-4xl " />
                    <h2>React</h2>
                  </div>
                  <div className="bg-[#6e6e6e] p-3 rounded-md flex flex-col items-center">
                    <FaNodeJs className="text-4xl " />
                    <h2>Node.js</h2>
                  </div>
                  <div className="bg-[#6e6e6e] p-3 rounded-md flex flex-col items-center">
                    <SiMongodb className="text-4xl " />
                    <h2>MongoDB</h2>
                  </div>
                  <div className="bg-[#6e6e6e] p-3 rounded-md flex flex-col items-center">
                    <SiTailwindcss className="text-4xl " />
                    <h2>Tailwind</h2>
                  </div>

                  <div className="bg-[#6e6e6e] p-3 rounded-md flex flex-col items-center">
                    <FaSass className="text-4xl " />
                    <h2>SASS</h2>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
