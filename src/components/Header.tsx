import '../styles/header.css'

export default function Header() {
  return (
    <header className="header">
      <div className="container header-content">
        <h2 className="logo">Jonathas Portifolio</h2>

        <nav>
          <a href="#projects">Projetos</a>
          <a href="#about">Sobre</a>
          <a href="#contact">Contato</a>
        </nav>
      </div>
    </header>
  )
}