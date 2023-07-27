import ProjectCard from "./ProjectCard";
import { projects } from "./projects";

function Projects() {
  return (
    <section>
      <div className="w-full h-full bg-[#ededed] py-32">
        <div className="flex flex-col items-center justify-center ">
          <div className=" flex flex-col items-center gap-4">
            <h2 className="font-Tektur text-[#b931f8] text-lg font-bold tracking-widest">
              WORKS
            </h2>
            <h1 className="text-5xl font-serif font-medium leading-8">
              Latest Projects
            </h1>
            <h4 className="font-medium text-lg text-center">
              Here you can find some of the projects i created recently{" "}
            </h4>
          </div>
          <div className="mt-24 grid md:grid-cols-2 gap-6">
            {projects.map((project) => (
              <ProjectCard key={project.title} {...project} />
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}

export default Projects;
