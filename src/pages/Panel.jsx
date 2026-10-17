import { useParams, useLocation, useNavigate, Navigate, Link } from 'react-router-dom'
import Logo from '../components/Logo.jsx'
import { accounts } from '../data/accounts.js'

// Simple post-login landing page for the simulated session.
export default function Panel() {
  const { tipo } = useParams()
  const location = useLocation()
  const navigate = useNavigate()
  const account = accounts[tipo]

  if (!account) return <Navigate to="/" replace />

  const username = location.state?.username
  // If the page is opened directly (no simulated session), send back to login.
  if (!username) return <Navigate to={`/${tipo}`} replace />

  return (
    <div>
      <Logo />
      <div className="container mt-4" style={{ maxWidth: 600 }}>
        <div className="card">
          <div className="card-header">Perfil · {account.title}</div>
          <div className="card-body text-center">
            <img
              className="account-thumb mb-3"
              src={account.img}
              alt={account.label}
              onError={(e) => {
                e.currentTarget.outerHTML =
                  `<div class="account-thumb account-thumb--fallback mb-3">${account.icon}</div>`
              }}
            />
            <h5>¡Bienvenido/a!</h5>
            <p className="text-muted mb-1">Sesión simulada iniciada como:</p>
            <p className="font-weight-bold text-brand">
              {account.label} · {username}
            </p>
            <button className="btn btn-secondary mt-3" onClick={() => navigate('/')}>
              Cerrar sesión
            </button>
            <div className="mt-3">
              <Link to="/">Inicio</Link>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}
