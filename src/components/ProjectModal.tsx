type Project = {
  title: string
  image: string
  fullDescription: string
  technologies: string[]
  github: string
}

type Props = {
  project: Project
  onClose: () => void
}

import '../styles/project-modal.css'

export default function ProjectModal({
  project,
  onClose,
}: Props) {

  return (

    <div
      className="modal-overlay"
      onClick={onClose}
    >

      <div
        className="modal-content"
        onClick={(e) => e.stopPropagation()}
      >

        <img
          src={project.image}
          alt={project.title}
        />

        <div className="modal-body">

          <h2>{project.title}</h2>

          <p>
            {project.fullDescription}
          </p>

          <div className="tags">

            {project.technologies.map((tech) => (

              <span key={tech}>
                {tech}
              </span>

            ))}

          </div>

          <a
            href={project.github}
            target="_blank"
          >
            GitHub →
          </a>

        </div>

      </div>

    </div>

  )

}