import Reveal from "@/components/Reaveal/Reveal";
import { skills } from "./skills";
import { motion } from "framer-motion";

const About = () => {
  return (
    <section id="about">
      <div className="w-full h-full bg-white py-16">
        <div className="flex flex-col items-center justify-center">
          <div className="flex flex-col items-center gap-4">
            <Reveal>
              <h2 className="font-Tektur text-[#AE00FF] text-lg font-bold tracking-wider">
                ABOUT
              </h2>
            </Reveal>
            <Reveal>
              <h1 className="text-5xl font-serif font-medium leading-8">
                Personal Info
              </h1>
            </Reveal>
            <Reveal>
              <h2 className="font-medium text-lg text-[#4d4d4d]">
                Get to know more about me{" "}
              </h2>
            </Reveal>
          </div>

          <div className="flex flex-col lg:flex-row justify-center gap-14 2xl:gap-40 mt-12 px-5 scale-90">
            <div className="w-full max-w-[500px] text-lg">
              <Reveal width="w-fit">
                <h1 className="text-2xl font-semibold">Hey there!</h1>
              </Reveal>

              <Reveal width="w-full">
                <p className="mt-4">
                  I&apos;m a software developer with a rich background in
                  front-end and back-end technologies. I love crafting robust
                  web applications that perform exceptionally and provide
                  enjoyable user experiences. In each project, I aim to blend
                  functional beauty with technical efficiency, creating super
                  responsive and user-friendly applications.
                </p>
              </Reveal>
              <Reveal width="w-full">
                <p className="mt-10">
                  I&apos;m really into optimizing application performance and
                  making sure that everything is speedy, responsive, and
                  efficient. I&apos;m all about embracing technical excellence
                  and working collaboratively with others to bring high-quality,
                  meaningful software to life. My ultimate goal is to build
                  scalable web applications that are not only effective but also
                  a joy to use both on the client side and server side.
                </p>
              </Reveal>
            </div>
            <div className="w-full max-w-[500px]">
              <h1 className="text-2xl font-semibold">Skills</h1>
              <div className="mt-4">
                <div className="grid grid-cols-1 xs:grid-cols-2 md:grid-cols-3 gap-10 text-white">
                  {skills.map((skill, index) => (
                    <motion.div
                      initial={{ scale: 0 }}
                      whileInView={{ scale: 1 }}
                      viewport={{ once: true }}
                      transition={{ duration: 0.5 }}
                      className="bg-[#4d4d4d] p-3 rounded-md flex flex-col items-center gap-y-1 text-4xl"
                    >
                      {skill.icon}
                      <h2 className="text-xl">{skill.name}</h2>
                    </motion.div>
                  ))}
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
