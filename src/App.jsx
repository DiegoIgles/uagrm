import { Routes, Route } from 'react-router-dom'
import Home from './pages/Home.jsx'
import Login from './pages/Login.jsx'
import Panel from './pages/Panel.jsx'
import EstudiantePanel from './pages/EstudiantePanel.jsx'
import NotFound from './pages/NotFound.jsx'

export default function App() {
  return (
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/:tipo" element={<Login />} />
      <Route path="/estudiantes/panel" element={<EstudiantePanel />} />
      <Route path="/:tipo/panel" element={<Panel />} />
      <Route path="*" element={<NotFound />} />
    </Routes>
  )
}
