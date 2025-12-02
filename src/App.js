import { BrowserRouter as Router, Routes, Route, NavLink, useLocation } from 'react-router-dom'
import { useState } from 'react'
import Inicio from './pages/Inicio'
import Contacto from './pages/Contacto'
import SobreMi from './pages/SobreMi'
import Proyectos from './pages/Proyectos'
import Habilidades from './pages/Habilidades'
import './styles/inicio.css'
import './styles/contacto.css'
import './styles/proyectos.css'
import './styles/habilidades.css'
import './styles/sobre-mi.css'
import 'bootstrap/dist/css/bootstrap.min.css'
import '@fortawesome/fontawesome-free/css/all.min.css'

function Header() {
  const location = useLocation()
  const [menuOpen, setMenuOpen] = useState(false)

  const toggleMenu = () => {
    setMenuOpen(!menuOpen)
  }

  const closeMenu = () => {
    setMenuOpen(false)
  }

  return (
    <header className="header">
      <div className="logo">Mi Portafolio</div>
      <nav>
        <ul className={`nav-links ${menuOpen ? 'show' : ''}`}>
          <li>
            <NavLink
              to="/"
              className={location.pathname === '/' ? 'active' : ''}
              onClick={closeMenu}
            >
              Inicio
            </NavLink>
          </li>
          <li>
            <NavLink
              to="/sobre-mi"
              className={location.pathname === '/sobre-mi' ? 'active' : ''}
              onClick={closeMenu}
            >
              Sobre mí
            </NavLink>
          </li>
          <li>
            <NavLink
              to="/proyectos"
              className={location.pathname === '/proyectos' ? 'active' : ''}
              onClick={closeMenu}
            >
              Proyectos
            </NavLink>
          </li>
          <li>
            <NavLink
              to="/habilidades"
              className={location.pathname === '/habilidades' ? 'active' : ''}
              onClick={closeMenu}
            >
              Habilidades
            </NavLink>
          </li>
          <li>
            <NavLink
              to="/contacto"
              className={location.pathname === '/contacto' ? 'active' : ''}
              onClick={closeMenu}
            >
              Contacto
            </NavLink>
          </li>
        </ul>
      </nav>
      <div className="menu-toggle" id="menu-toggle" onClick={toggleMenu}>
        <i className={`fas ${menuOpen ? 'fa-times' : 'fa-bars'}`}></i>
      </div>
    </header>
  )
}

function Footer() {
  return (
    <footer className="footer">
      <div className="social-icons">
        <a href="https://github.com/settings/profile"><i className="fab fa-github"></i></a>
        <a href="https://www.linkedin.com/in/hans-joe-orellana-manhualaya-384369333/"><i className="fab fa-linkedin"></i></a>
        <a href="https://x.com/Hns_Orm_23"><i className="fab fa-twitter"></i></a>
      </div>
      <p>&copy; 2025 Mi Portafolio. Todos los derechos reservados.</p>
    </footer>
  )
}

function App() {
  return (
    <Router>
      <Header />
      <Routes>
        <Route path="/" element={<Inicio />} />
        <Route path="/sobre-mi" element={<SobreMi />} />
        <Route path="/proyectos" element={<Proyectos />} />
        <Route path="/habilidades" element={<Habilidades />} />
        <Route path="/contacto" element={<Contacto />} />
      </Routes>
      <Footer />
    </Router>
  )
}

export default App
