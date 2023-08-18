import { skillsArray } from "./skills";

const About = () => {
  return (
    <section id="about">
      <div className="w-full h-full bg-white py-32">
        <div className="flex flex-col items-center justify-center ">
          <div className=" flex flex-col items-center gap-4">
            <h2 className="font-Tektur text-[#AE00FF] text-lg font-bold tracking-wider">
              ABOUT
            </h2>
            <h1 className="text-5xl font-serif font-medium leading-8">
              Personal Info
            </h1>
            <h2 className="font-medium text-lg text-[#4d4d4d]">
              Get to know more about me{" "}
            </h2>
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
                  {skillsArray.map((skill) => (
                    <div
                      key={skill.id}
                      className="bg-[#6e6e6e] p-3 rounded-md flex flex-col items-center gap-y-1"
                    >
                      {skill.icon}
                      <h2>{skill.name}</h2>
                    </div>
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
