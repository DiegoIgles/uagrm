import { studentProfile } from '../../data/studentProfile.js'

// Read-only field: bold navy label over a gray disabled input, like the original.
function Field({ label, value, grow = 1 }) {
  return (
    <div className="ep-field" style={{ flexGrow: grow, flexBasis: 0 }}>
      <label className="ep-label">{label}</label>
      <input className="ep-input" value={value} readOnly tabIndex={-1} />
    </div>
  )
}

export default function DatosPersonales() {
  const p = studentProfile
  return (
    <>
      <h1 className="ep-title">
        <svg className="ep-title-icon" viewBox="0 0 24 24" aria-hidden="true">
          <path d="M6 2h12a1 1 0 0 1 1 1v18l-7-4-7 4V3a1 1 0 0 1 1-1z" />
        </svg>
        DATOS PERSONALES
      </h1>

      <div className="ep-grid">
        <div className="ep-row">
          <Field label="Registro" value={p.registro} grow={1} />
          <Field label="Apellidos y Nombres" value={p.apellidosNombres} grow={2.6} />
          <Field label="Cédula de Identidad" value={p.cedula} grow={1.2} />
          <Field label="Sexo" value={p.sexo} grow={1.2} />
          <Field label="Estado Civil" value={p.estadoCivil} grow={1.2} />
        </div>

        <div className="ep-row">
          <Field label="Fecha de Nacimiento" value={p.fechaNacimiento} grow={1.3} />
          <Field label="País" value={p.pais} grow={1} />
          <Field label="Departamento" value={p.departamento} grow={1.3} />
          <Field label="Provincia" value={p.provincia} grow={2} />
        </div>

        <div className="ep-row">
          <Field label="Nacionalidad" value={p.nacionalidad} grow={1} />
          <Field label="Dirección" value={p.direccion} grow={2.8} />
          <Field label="Teléfono" value={p.telefono} grow={1.1} />
          <Field label="Celular" value={p.celular} grow={1.1} />
        </div>

        <div className="ep-row">
          <Field label="Email" value={p.email} grow={1.7} />
          <Field label="Modalidad de Ingreso" value={p.modalidadIngreso} grow={1.3} />
          <Field label="Periodo" value={p.periodo} grow={0.7} />
          <Field label="Tipo de Sangre" value={p.tipoSangre} grow={1} />
          <Field label="Título de Bachiller" value={p.tituloBachiller} grow={1.1} />
        </div>
      </div>

      <div className="ep-photo-block">
        <label className="ep-label">Foto</label>
        <div className="ep-photo">
          <img
            className="ep-photo-img"
            src="/img/foto-perfil.jpg"
            alt="Foto del estudiante"
            onError={(e) => {
              e.currentTarget.outerHTML =
                '<svg viewBox="0 0 24 24" class="ep-photo-ph"><path d="M12 12a5 5 0 1 0 0-10 5 5 0 0 0 0 10zm0 2c-5 0-9 2.5-9 6v2h18v-2c0-3.5-4-6-9-6z"></path></svg>'
            }}
          />
        </div>
      </div>
    </>
  )
}
