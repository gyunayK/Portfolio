import ProjectCard from './ProjectCard'
import { projects } from './projectsList'

function Projects() {
  return (
    <section id="work">
      <div className="w-full h-full bg-white py-16">
        <div className="flex flex-col items-center justify-center">
          <div className="flex flex-col items-center gap-4">
            <h2 className="font-Tektur text-[#A200EC] text-lg font-bold tracking-widest">WORKS</h2>
            <h1 className="text-5xl font-serif font-medium leading-8">Latest Projects</h1>
            <h2 className="font-medium text-lg text-center text-[#4d4d4d]">Explore My Recent Creations </h2>
          </div>
          <div className="sm:mt-16 grid md:grid-cols-2 gap-0 md:gap-20">
            {projects.map((project, index) => (
              <ProjectCard {...project} key={index} />
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}

export default Projects
