import { FaGithub } from 'react-icons/fa'
import PropTypes from 'prop-types'
import { Button, Link } from '@mui/material'
import { motion } from 'framer-motion'

function ProjectCard({ title, description, techStack, liveLink, githubLink, projectIMG }) {
  return (
    <motion.div
      initial={{ y: 100, opacity: 0 }}
      whileInView={{ y: 0, opacity: 1 }}
      transition={{ delay: 0.3 }}
      viewport={{ once: true }}
      className="max-w-sm bg-white xs:mx-4 md:mx-0 items-center justify-center py-8 rounded-md border-2 border-transparent hover:border-[#850fbb]"
    >
      <div className="flex flex-col space-y-5 text-center px-5 relative h-full max-h-[800px] justify-between ">
        <div className="absolute right-5 -top-6">
          <a href={githubLink} aria-label="Github Link" target="_black" rel="noopener noreferrer">
            <FaGithub className="text-3xl cursor-pointer" />
          </a>
        </div>
        <div
          className="w-full h-[200px] bg-no-repeat bg-contain"
          style={{ backgroundImage: `url('${projectIMG}')` }}
        />
        <h2 className="text-lg font-bold mb-1">{title}</h2>
        <p className="text-pretty">{description}</p>
        <div className="pt-4 w-full">
          <h2 className="font-bold mb-1">Tech Stack</h2>
          <p>{techStack}</p>
        </div>
        <Button
          color="warning"
          sx={{
            color: 'white',
            backgroundColor: '#a73bd9',
            '&:hover': {
              backgroundColor: '#c26bea'
            }
          }}
        >
          <Link href={liveLink} target="_blank" rel="noopener noreferrer">
            SEE LIVE
          </Link>
        </Button>
      </div>
    </motion.div>
  )
}

ProjectCard.propTypes = {
  title: PropTypes.string.isRequired,
  description: PropTypes.string.isRequired,
  techStack: PropTypes.string.isRequired,
  liveLink: PropTypes.string.isRequired,
  githubLink: PropTypes.string.isRequired,
  projectIMG: PropTypes.string.isRequired
}

export default ProjectCard
