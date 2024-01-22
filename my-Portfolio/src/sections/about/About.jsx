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
            <h2 className="font-medium text-lg text-[#4d4d4d]">
              Get to know more about me{" "}
            </h2>
          </div>
          <div className="flex flex-col lg:flex-row justify-center gap-14 2xl:gap-40 mt-28 px-5">
            <div className="w-full max-w-[500px] text-lg">
              <h1 className="text-2xl font-semibold">Hello!</h1>
              <p className="mt-4">
                I&apos;m a Software Developer with a rich background in both
                front-end and back-end technologies. My journey in software
                development is driven by a genuine love for crafting robust web
                applications that not only perform exceptionally but also
                provide enjoyable user experiences. In each project, my aim is
                to blend functional beauty with technical efficiency, creating
                applications that are user-friendly and wonderfully responsive.
              </p>
              <p className="mt-10">
                I have a keen interest in optimizing application performance,
                with a particular focus on enhancing speed, responsiveness, and
                efficiency. Embracing technical excellence and a team-oriented
                approach, I enjoy working collaboratively to bring to life
                high-quality, meaningful software. My aspiration is to build
                scalable web applications that shine in client-side usability as
                well as in server-side effectiveness.
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
