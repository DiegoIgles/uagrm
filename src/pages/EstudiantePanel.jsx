import { useState } from 'react'
import { useLocation, useNavigate, Navigate } from 'react-router-dom'
import { studentMenu } from '../data/studentProfile.js'
import DatosPersonales from './estudiante/DatosPersonales.jsx'
import Historico from './estudiante/Historico.jsx'
import Certificados from './estudiante/Certificados.jsx'
import AvanceAcademico from './estudiante/AvanceAcademico.jsx'
import BoletaInscripcion from './estudiante/BoletaInscripcion.jsx'

export default function EstudiantePanel() {
  const location = useLocation()
  const navigate = useNavigate()
  const [menuOpen, setMenuOpen] = useState(false) // mobile sidebar toggle
  const [section, setSection] = useState('datos') // active content section

  // Require a (simulated) session, otherwise send back to the login card.
  if (!location.state?.username) return <Navigate to="/estudiantes" replace />

  const onMenu = (item) => {
    if (item.action === 'logout') return navigate('/')
    if (item.section) setSection(item.section)
    setMenuOpen(false) // close the menu on mobile after choosing
  }

  return (
    <div className={`ep${menuOpen ? ' menu-open' : ''}`}>
      {/* Top navy banner with three photo thumbnails on the right.
          Drop files in public/img/ as encabezado-1/2/3.png — if one is
          missing, a gradient placeholder is shown instead. */}
      <header className="ep-header">
        <div className="ep-header-thumbs">
          {[1, 2, 3].map((n) => (
            <img
              key={n}
              className="ep-header-thumb"
              src={`/img/encabezado-${n}.png`}
              alt={`Encabezado ${n}`}
              onError={(e) => {
                e.currentTarget.outerHTML = '<span class="ep-header-thumb"></span>'
              }}
            />
          ))}
        </div>
      </header>

      {/* Mobile-only toggle: shows/hides the sidebar, like the original. */}
      <button
        type="button"
        className="ep-menu-toggle"
        onClick={() => setMenuOpen((v) => !v)}
        aria-expanded={menuOpen}
      >
        ☰ {menuOpen ? 'Ocultar menú' : 'Ver menú'}
      </button>

      <div className="ep-body">
        {/* Left sidebar menu */}
        <nav className="ep-sidebar">
          <div className="ep-sidebar-title">
            Consultas
            <br />
            Estudiantes
          </div>
          <ul className="ep-menu">
            {studentMenu.map((item) => (
              <li
                key={item.label}
                className={[
                  'ep-menu-item',
                  `ep-menu-${item.variant}`,
                  item.section && item.section === section ? 'ep-menu-active' : '',
                  item.gapBefore ? 'ep-menu-gap' : ''
                ].join(' ').trim()}
                onClick={() => onMenu(item)}
              >
                {item.label}
              </li>
            ))}
          </ul>
        </nav>

        {/* Main content: active section */}
        <main className="ep-main">
          {section === 'historico' && <Historico />}
          {section === 'certificados' && <Certificados />}
          {section === 'avance' && <AvanceAcademico />}
          {section === 'boleta' && <BoletaInscripcion />}
          {section === 'datos' && <DatosPersonales />}
        </main>
      </div>
    </div>
  )
}
