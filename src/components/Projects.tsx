import ProjectCard from './ProjectCard'
import '../styles/projects.css'

export default function Projects() {
  return (
    <section id="projects" className="projects-section">
      <div className="container">
        <h2>Projetos</h2>

        <div className="projects-grid">
          <ProjectCard
            title="Engine 2D"
            description="Engine 2D feita em C++ utilizando OpenGL para renderização e gerenciamento de entidades."
            tags={['C++', 'OpenGL', 'GameDev']}
          />

          <ProjectCard
            title="Flashcards API"
            description="API REST desenvolvida em Java Spring Boot para gerenciamento de estudos e flashcards."
            tags={['Java', 'Spring Boot', 'MongoDB']}
          />

          <ProjectCard
            title="Linux Launcher"
            description="Launcher rápido para Linux focado em produtividade e busca instantânea de arquivos."
            tags={['Python', 'Linux', 'Desktop']}
          />
        </div>
      </div>
    </section>
  )
}