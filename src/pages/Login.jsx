import { useState } from 'react'
import { useParams, useNavigate, Navigate } from 'react-router-dom'
import Logo from '../components/Logo.jsx'
import { accounts } from '../data/accounts.js'

// Replicates the original Bootstrap login card (Código + Contraseña).
// Authentication is simulated locally against the demo credentials in
// src/data/accounts.js — no real backend is contacted.
export default function Login() {
  const { tipo } = useParams()
  const navigate = useNavigate()
  const account = accounts[tipo]

  const [username, setUsername] = useState('')
  const [password, setPassword] = useState('')
  const [message, setMessage] = useState(null) // { style, text }
  const [busy, setBusy] = useState(false)

  if (!account) return <Navigate to="/" replace />

  const regexUser = /^\d{1,9}$/
  const regexPass = /^[a-zA-Z0-9._-]{1,40}$/

  const submit = (e) => {
    e.preventDefault()
    const u = username.trim()
    const p = password.trim()

    if (!u) return setMessage({ style: 'danger', text: 'Ingrese el código' })
    if (!regexUser.test(u))
      return setMessage({ style: 'danger', text: 'El código contiene caracteres no válidos' })
    if (!p) return setMessage({ style: 'danger', text: 'Ingrese la contraseña' })
    if (!regexPass.test(p))
      return setMessage({ style: 'danger', text: 'La contraseña contiene caracteres no válidos' })

    setBusy(true)
    setMessage(null)

    // Simulated async auth
    setTimeout(() => {
      if (u === account.demo.username && p === account.demo.password) {
        setMessage({ style: 'success', text: 'Sesión iniciada con éxito' })
        setTimeout(() => navigate(`/${account.slug}/panel`, { state: { username: u } }), 600)
      } else {
        setBusy(false)
        setMessage({ style: 'danger', text: 'Código o contraseña incorrectos' })
      }
    }, 500)
  }

  return (
    <div>
      <Logo />
      <div className="container mt-4">
        <div className="card text-center" style={{ width: '20rem', margin: '0 auto' }}>
          <div className="card-header">Inicio de sesión</div>
          <div className="card-body">
            <h5 className="card-title">{account.title}</h5>

            {message && (
              <div className={`alert alert-${message.style} alert-dismissible fade show`} role="alert">
                {message.text}
                <button
                  type="button"
                  className="close"
                  aria-label="Close"
                  onClick={() => setMessage(null)}
                >
                  <span aria-hidden="true">&times;</span>
                </button>
              </div>
            )}

            <form onSubmit={submit}>
              <div className="form-group">
                <input
                  type="text"
                  className="form-control form-control-lg"
                  placeholder={account.codePlaceholder}
                  value={username}
                  onChange={(e) => setUsername(e.target.value)}
                  autoComplete="username"
                />
              </div>
              <div className="form-group">
                <input
                  type="password"
                  className="form-control form-control-lg"
                  placeholder="Contraseña"
                  value={password}
                  onChange={(e) => setPassword(e.target.value)}
                  autoComplete="current-password"
                />
              </div>
              <button type="submit" className="btn btn-secondary btn-lg btn-block" disabled={busy}>
                {busy ? 'Ingresando…' : 'Iniciar Sesión'}
              </button>
            </form>

            <ul className="list-group list-group-flush">
              <li className="list-group-item">
                <a href="https://perfil.uagrm.edu.bo/recuperar/" target="_blank" rel="noreferrer">
                  ¿Olvidaste tu contraseña?
                </a>
              </li>
            </ul>

            {account.directLinks.length > 0 && (
              <>
                <h6 className="card-subtitle mt-3 mb-2 text-muted">Acceso directo a:</h6>
                <ul className="list-group list-group-flush">
                  {account.directLinks.map((l) => (
                    <li className="list-group-item" key={l.href}>
                      <a href={l.href} target="_blank" rel="noreferrer">
                        {l.label}
                      </a>
                    </li>
                  ))}
                </ul>
              </>
            )}

          </div>
        </div>
      </div>
    </div>
  )
}
