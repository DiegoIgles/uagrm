import { historicoInfo, historicoRows, NOTA_APROBACION } from '../../data/historico.js'

export default function Historico() {
  const info = historicoInfo

  return (
    <div className="eh">
      {/* Header + table share one horizontally-scrollable container so that,
          on narrow screens, the titles scroll together with the table and
          stay aligned with it. */}
      <div className="eh-table-wrap">
       <div className="eh-scroll">
        <div className="eh-head">
          <h1 className="eh-title">Histórico</h1>
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

        <table className="eh-table">
          <thead>
            <tr>
              <th className="eh-c-nivel">NIVEL</th>
              <th className="eh-c-carrera">CARRERA</th>
              <th className="eh-c-materia">MATERIA</th>
              <th className="eh-c-cr">CR</th>
              <th className="eh-c-periodo">PERIODO</th>
              <th className="eh-c-nota">NOTA</th>
            </tr>
          </thead>
          <tbody>
            {historicoRows.map((r, i) => {
              const aprobado = r.nota >= NOTA_APROBACION
              return (
                <tr key={i}>
                  <td className="eh-c-nivel">{r.nivel}</td>
                  <td className="eh-c-carrera">{r.carrera}</td>
                  <td className="eh-c-materia">{r.materia}</td>
                  <td className="eh-c-cr">{r.cr}</td>
                  <td className="eh-c-periodo">{r.periodo}</td>
                  <td className={`eh-nota ${aprobado ? 'eh-nota--ok' : 'eh-nota--bad'}`}>
                    {r.nota}
                  </td>
                </tr>
              )
            })}
          </tbody>
        </table>
       </div>
      </div>
    </div>
  )
}
