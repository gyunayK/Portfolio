import ProjectCard from "./ProjectCard";
import { projects } from "./projectsList";
import Reveal from "@/components/Reveal/Reveal";

function Projects() {
  return (
    <section id="work">
      <div className="w-full h-full bg-[#ededed] py-16">
        <div className="flex flex-col items-center justify-center ">
          <div className=" flex flex-col items-center gap-4">
            <Reveal>
              <h2 className="font-Tektur text-[#A200EC] text-lg font-bold tracking-widest">
                WORKS
              </h2>
            </Reveal>
            <Reveal width='p-3 -m-3'>
              <h1 className="text-5xl font-serif font-medium leading-8">
                Latest Projects
              </h1>
            </Reveal>
            <Reveal>
              <h2 className="font-medium text-lg text-center text-[#4d4d4d]">
                Explore My Recent Creations{" "}
              </h2>
            </Reveal>
          </div>
          <div className="sm:mt-12 grid md:grid-cols-2 gap-0 md:gap-[100px] scale-90">
            {projects.map((project, index) => (
              // <Reveal key={index}>
              <ProjectCard {...project} key={index}/>
              // </Reveal>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}

export default Projects;
