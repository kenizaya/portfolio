import React, { useRef } from 'react'
import ProjectDetail from './ProjectDetail'
import projects from '../projects'
import ProjectImage from './ProjectImage'

const Projects = () => {
  return (
    <>
      {projects.map((project) => {
        const { id, title, description, live, repo, languages, type, image } =
          project
        return (
          <section
            key={id}
            className='min-h-screen md:flex justify-between mx-auto w-full overflow-hidden'
          >
            <ProjectDetail
              id={id}
              title={title}
              description={description}
              live={live}
              repo={repo}
              languages={languages}
              type={type}
            />
            <ProjectImage id={id} image={image} />
          </section>
        )
      })}
    </>
  )
}

export default Projects
