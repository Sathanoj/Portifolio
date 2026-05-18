import '../styles/about.css'

export default function About() {
  return (
    <section id="about" className="about-section">
      <div className="container about-content">
        <div>
          <h2>Sobre Mim</h2>

          <p>
            Desenvolvedor focado principalmente em renderização gráfica e game development.
          </p>
        </div>

        <div>
          <h2>Tecnologias mais usadas</h2>

          <div className="skills">
            <span>React</span>
            <span>TypeScript</span>
            <span>Python</span>
            <span>Docker</span>
            <span>C#</span>
            <span>OpenGL</span>
          </div>
        </div>
      </div>
    </section>
  )
}