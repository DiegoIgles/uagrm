import { boletaInfo, boletaRows } from '../../data/boletaInscripcion.js'

export default function BoletaInscripcion() {
  const info = boletaInfo

  return (
    <div className="eb">
      {/* Top bar: section title + print button (shared eh-* styles) */}
      <div className="eh-head">
        <h1 className="eh-title">Boleta de Inscripción</h1>
        <button type="button" className="eh-print" onClick={() => window.print()}>
          <svg viewBox="0 0 24 24" aria-hidden="true" className="eh-print-icon">
            <path d="M6 9V3h12v6h2a2 2 0 0 1 2 2v6h-4v4H6v-4H2v-6a2 2 0 0 1 2-2h2zm2 0h8V5H8v4zm8 8H8v3h8v-3z" />
          </svg>
          Imprimir
        </button>
      </div>

      {/* Banner, career line and table share one horizontally-scrollable
          container so they scroll together and stay aligned on mobile. */}
      <div className="eh-table-wrap">
       <div className="eh-scroll">
        <div className="eb-banner">
        <div className="eb-bigtitle">Boleta de Inscripción</div>
        <div className="eb-id">
          <div className="eb-reg">{info.registro}</div>
          <div className="eb-name">{info.nombre}</div>
          <div className="eb-ci">{info.ci}</div>
        </div>
      </div>

      <hr className="eb-rule" />

      {/* Career line + enrollment type */}
      <div className="eb-carrera-row">
        <div>
          <div className="eb-carrera">{info.carrera}</div>
          <div className="eb-meta">MODALIDAD {info.modalidad}</div>
          <div className="eb-meta">LOCALIDAD {info.localidad}</div>
        </div>
        <div className="eb-origen">{info.tipo}</div>
      </div>

        <table className="eb-table">
          <thead>
            <tr>
              <th>PERIODO</th>
              <th>SIGLA</th>
              <th>GRUPO</th>
              <th className="eb-c-materia">MATERIA</th>
              <th>MODALIDAD</th>
              <th>NIVEL</th>
              <th className="eb-c-horario">HORARIO</th>
            </tr>
          </thead>
          <tbody>
            {boletaRows.map((r, i) => (
              <tr key={i}>
                <td>{r.periodo}</td>
                <td className="eb-sigla">{r.sigla}</td>
                <td>{r.grupo}</td>
                <td className="eb-c-materia">{r.materia}</td>
                <td>{r.modalidad}</td>
                <td>{r.nivel}</td>
                <td className="eb-horario">{r.horario}</td>
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
