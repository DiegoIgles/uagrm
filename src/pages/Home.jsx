import { Link } from 'react-router-dom'
import Logo from '../components/Logo.jsx'
import { accountList } from '../data/accounts.js'

export default function Home() {
  return (
    <div className="home">
      <Logo />
      <h1>Bienvenido al Perfil</h1>
      <h2>Elige tu tipo de cuenta</h2>

      <ul className="account-grid">
        {accountList.map((acc) => (
          <li key={acc.slug}>
            <Link className="account-card" to={`/${acc.slug}`}>
              <img
                className="account-thumb"
                src={acc.img}
                alt={acc.label}
                onError={(e) => {
                  e.currentTarget.outerHTML =
                    `<div class="account-thumb account-thumb--fallback">${acc.icon}</div>`
                }}
              />
              <div className="account-title">{acc.label.toUpperCase()}</div>
            </Link>
          </li>
        ))}
      </ul>

      <h3>
        <a
          href="https://perfil.uagrm.edu.bo/recuperar/"
          target="_blank"
          rel="noreferrer"
        >
          ¿Olvidaste tu contraseña?
        </a>
      </h3>
      <h4>
        <a
          href="http://caja.uagrm.edu.bo/consultas_externos/Home/Invitado?tipo=4"
          target="_blank"
          rel="noreferrer"
        >
          Habilitación de servicios de cobros para personas externas
        </a>
      </h4>
    </div>
  )
}
