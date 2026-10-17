import { historicoInfo } from '../../data/historico.js'
import { avanceRows } from '../../data/avanceAcademico.js'

// Reuses the Histórico header layout (eh-*) with its own table (ea-*).
export default function AvanceAcademico() {
  const info = historicoInfo

  return (
    <div className="eh ea">
      <div className="eh-table-wrap">
        <div className="eh-scroll">
          <div className="eh-head">
            <h1 className="eh-title">Avance Académico</h1>
            <button type="button" className="eh-print" onClick={() => window.print()}>
              <svg viewBox="0 0 24 24" aria-hidden="true" className="eh-print-icon">
                <path d="M6 9V3h12v6h2a2 2 0 0 1 2 2v6h-4v4H6v-4H2v-6a2 2 0 0 1 2-2h2zm2 0h8V5H8v4zm8 8H8v3h8v-3z" />
              </svg>
              Imprimir
            </button>
          </div>

          <div className="eh-sub">
            <div className="eh-student">
              <div className="eh-student-label">ESTUDIANTE :</div>
              <div className="eh-student-reg">{info.registro}</div>
              <div className="eh-student-name">{info.nombre}</div>
            </div>
            <div className="eh-ppac-block">
              <div className="eh-ppac">P.P.A.C. {info.ppac}</div>
              <div className="eh-career">
                ({info.carreraCodigo}) {info.carreraNombre}
              </div>
            </div>
          </div>

          <table className="ea-table">
            <thead>
              <tr>
                <th className="ea-c-nivel">NIVEL</th>
                <th className="ea-c-materia">MATERIA</th>
                <th className="ea-c-periodo">PERIODO</th>
                <th className="ea-c-nota">NOTA</th>
              </tr>
            </thead>
            <tbody>
              {avanceRows.map((r, i) => (
                <tr key={i}>
                  <td className="ea-c-nivel">{r.nivel}</td>
                  <td className="ea-c-materia">{r.materia}</td>
                  <td className="ea-c-periodo">{r.periodo}</td>
                  <td className="ea-nota">{r.nota}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>

      <div className="ea-aviso">
        <div className="ea-aviso-label">AVISO:</div>
        <div className="ea-aviso-text">Documento no válido para trámites.</div>
      </div>
    </div>
  )
}
