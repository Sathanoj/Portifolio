import '../styles/hero.css'

export default function Hero() {
  return (
    <section className="hero">

      <div className="container hero-layout">

        <div className="hero-content">

          <small>
            Backend • OpenGL • APIs • Games
          </small>

          <h1>
            Desenvolvendo
            aplicações,
            engines e sistemas.
          </h1>

          <p>
            Portfolio focado em desenvolvimento backend,
            renderização gráfica, engines e arquitetura
            de software. Aqui você encontrará projetos que demonstram minhas habilidades técnicas e minha paixão por criar soluções eficientes e inovadoras.
          </p>

          <div className="hero-buttons">

            <a href="#projects" className="primary-btn">
              Ver Projetos
            </a>

            <a
              href="https://github.com/Sathanoj"
              target="_blank"
            >
              GitHub
            </a>

          </div>

        </div>

        <div className="hero-visual">

          <div className="terminal-card">

            <div className="terminal-top">
              <span></span>
              <span></span>
              <span></span>
            </div>

            <div className="terminal-content">

              <p>
                <span className="green">
                  jonathas@linux
                </span>
                :~/engine$
              </p>

              <p>Initializing renderer...</p>
              <p>Loading shaders...</p>
              <p>Generating entities...</p>
              <p>Renderer initialized.</p>

              <br />

              <p className="blue">
                FPS: 144
              </p>

              <p className="blue">
                Entities: 220
              </p>

              <p className="blue">
                OpenGL Context: OK
              </p>

            </div>

          </div>

        </div>

      </div>

    </section>
  )
}