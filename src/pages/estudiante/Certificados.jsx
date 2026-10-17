import { certificadosEmitidos, certificadosParaEmision } from '../../data/certificados.js'

export default function Certificados() {
  return (
    <div className="ec">
      <h1 className="ep-title">
        <svg className="ep-title-icon" viewBox="0 0 24 24" aria-hidden="true">
          <path d="M6 2h12a1 1 0 0 1 1 1v18l-7-4-7 4V3a1 1 0 0 1 1-1z" />
        </svg>
        CERTIFICADOS
      </h1>

      <p className="ec-intro">
        Utiliza esta sección para emitir certificaciones oficiales de manera rápida y
        sencilla. Cada certificado tiene un tiempo de vigencia específico y puede ser
        verificado mediante{' '}
        <a className="ec-link" href="#" onClick={(e) => e.preventDefault()}>
          un código QR
        </a>{' '}
        impreso en el documento.
      </p>

      {/* Certificados emitidos */}
      <section className="ec-panel">
        <div className="ec-panel-head">Certificados emitidos</div>
        <div className="ec-panel-body">
          <div className="ec-table-wrap">
            <table className="ec-table">
              <thead>
                <tr>
                  <th>Nro.</th>
                  <th>Descripción</th>
                  <th>Fecha de emisión</th>
                  <th>Fecha de vigencia</th>
                  <th>Emisión</th>
                  <th className="ec-c-right">Descargar</th>
                </tr>
              </thead>
              <tbody>
                {certificadosEmitidos.map((c) => (
                  <tr key={c.nro}>
                    <td className="ec-strong">{c.nro}</td>
                    <td className="ec-desc">{c.descripcion}</td>
                    <td>{c.emision}</td>
                    <td>{c.vigencia}</td>
                    <td>
                      {c.gratuito && <span className="ec-badge ec-badge--gratuito">Gratuito</span>}
                    </td>
                    <td className="ec-c-right">
                      {c.expirado ? (
                        <span className="ec-badge ec-badge--expirado">Expirado</span>
                      ) : (
                        <button
                          type="button"
                          className="ec-download"
                          title="Descargar certificado"
                          aria-label="Descargar certificado"
                        >
                          <svg viewBox="0 0 24 24" aria-hidden="true">
                            <path d="M12 3v10m0 0l-4-4m4 4l4-4M5 21h14" />
                          </svg>
                        </button>
                      )}
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>
      </section>

      {/* Certificados para emisión */}
      <section className="ec-panel">
        <div className="ec-panel-head">Certificados para emisión</div>
        <div className="ec-panel-body">
          {certificadosParaEmision.map((c) => (
            <div className="ec-card" key={c.titulo}>
              <div className="ec-card-info">
                <h2 className="ec-card-title">{c.titulo}</h2>
                <div className="ec-card-sub">{c.dependencia}</div>
                <div className="ec-card-badges">
                  <span className="ec-badge ec-badge--vigencia">Vigencia: {c.vigenciaDias} días</span>
                  {c.gratuito && <span className="ec-badge ec-badge--gratuito">Gratuito</span>}
                </div>
              </div>
              <button type="button" className="ec-emitir">
                Emitir
              </button>
            </div>
          ))}
        </div>
      </section>
    </div>
  )
}
