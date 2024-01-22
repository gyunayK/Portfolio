import { skills } from "./skills";

const About = () => {
  return (
    <section id="about">
      <div className="w-full h-full bg-white py-16">
        <div className="flex flex-col items-center justify-center ">
          <div className=" flex flex-col items-center gap-4">
            <h2 className="font-Tektur text-[#AE00FF] text-lg font-bold tracking-wider">
              ABOUT
            </h2>
            <h1 className="text-5xl font-serif font-medium leading-8">
              Personal Info
            </h1>
            <h2 className="font-medium text-lg text-[#4d4d4d]">Get to know more about me </h2>
          </div>
          <div className="flex flex-col lg:flex-row justify-center gap-14 2xl:gap-40 mt-28 px-5">
            <div className="w-full max-w-[500px] text-xl">
              <h1 className="text-2xl font-semibold">Hello!</h1>
              <p className="mt-4">
                I am an innovative front-end developer with a solid expertise in
                React and Node.js. I specialize in delivering enhanced website
                performance and creating superior user experiences through
                responsive design and strategic content management. I am skilled
                in applying SEO best practices and advanced programming
                techniques to drive web project success. I am committed to
                collaborative development, continuous technical improvement, and
                deploying robust, high-quality web solutions.
              </p>
              <p className="mt-10">
                My skill set spans a diverse range of front-end and back-end
                technologies.
              </p>
            </div>
            <div className="w-full max-w-[500px]">
              <h1 className="text-2xl font-semibold">Skills</h1>
              <div className="mt-4">
                <div className="grid grid-cols-1 xs:grid-cols-2 md:grid-cols-3 gap-10 text-white">
                  {skills.map((skill, index) => (
                    <div
                      key={index}
                      className="bg-[#4d4d4d] p-3 rounded-md flex flex-col items-center gap-y-1 text-4xl"
                    >
                      {skill.icon}
                      <h2 className="text-xl">{skill.name}</h2>
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
