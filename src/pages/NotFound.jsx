import { Link } from 'react-router-dom'
import Logo from '../components/Logo.jsx'

export default function NotFound() {
  return (
    <div className="home">
      <Logo />
      <h1>404</h1>
      <h2>Página no encontrada</h2>
      <p className="text-center">
        <Link to="/">Volver al inicio</Link>
      </p>
    </div>
  )
}
