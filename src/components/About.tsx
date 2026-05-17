import '../styles/about.css'

export default function About() {
  return (
    <section id="about" className="about-section">
      <div className="container about-content">
        <div>
          <h2>Sobre Mim</h2>

          <p>
            Desenvolvedor focado principalmente em backend,
            sistemas, engines e renderização gráfica.
            Gosto de estudar arquitetura de software,
            Linux e desenvolvimento low-level.
          </p>
        </div>

        <div>
          <h2>Tecnologias</h2>

          <div className="skills">
            <span>Java</span>
            <span>Spring Boot</span>
            <span>React</span>
            <span>TypeScript</span>
            <span>MongoDB</span>
            <span>Docker</span>
            <span>C++</span>
            <span>OpenGL</span>
            <span>Python</span>
          </div>
        </div>
      </div>
    </section>
  )
}