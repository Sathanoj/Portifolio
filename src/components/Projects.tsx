import { useState } from 'react'

import ProjectCard from './ProjectCard'
import ProjectModal from './ProjectModal'

import { projects } from '../data/projects'

import '../styles/projects.css'

export default function Projects() {

  const [selectedProject, setSelectedProject]
    = useState<any>(null)

  return (

    <section
      id="projects"
      className="projects-section"
    >

      <div className="container">

        <h2>Projetos</h2>

        <div className="projects-grid">

          {projects.map((project) => (

            <div
              key={project.id}
              onClick={() =>
                setSelectedProject(project)
              }
            >

              <ProjectCard
                title={project.title}
                description={project.description}
                tags={project.technologies}
              />

            </div>

          ))}

        </div>

      </div>

      {selectedProject && (

        <ProjectModal
          project={selectedProject}
          onClose={() =>
            setSelectedProject(null)
          }
        />

      )}

    </section>

  )

}