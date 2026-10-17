// Mock student profile shown on the "Datos Personales" dashboard.
// Values taken from the reference screenshot of the real portal.
export const studentProfile = {
  registro: '222044810',
  apellidosNombres: 'ROJAS PAZ ELENA',
  cedula: '8936512',
  sexo: 'FEMENINO',
  estadoCivil: 'Soltera',
  fechaNacimiento: '27/03/2004',
  pais: 'BOLIVIA',
  departamento: 'SANTA CRUZ',
  provincia: 'ANDRES IBANEZ',
  nacionalidad: 'BOLIVIA',
  direccion: 'B/BOLIVAR C/4 VILLA1°MAYO',
  telefono: '74178733',
  celular: '74178733',
  email: 'elenarojaspaz.2s@gmail.com',
  modalidadIngreso: 'P.A.B.',
  periodo: '1/2022',
  tipoSangre: 'O RH+',
  tituloBachiller: '131924'
}

// Left sidebar menu. `variant` controls the color (blue / cream like the
// original), `action` marks the few that actually do something in the demo.
export const studentMenu = [
  { label: 'Datos Personales', variant: 'blue', section: 'datos' },
  { label: 'Certificados', variant: 'blue', section: 'certificados' },
  { label: 'Histórico', variant: 'blue', section: 'historico' },
  { label: 'Avance Académico', variant: 'blue', section: 'avance' },
  { label: 'Boleta de Inscripción', variant: 'blue', section: 'boleta' },
  { label: 'Casos Especiales', variant: 'blue' },
  { label: 'Postulación a Beca Estudio de Apoyo y Práctica Preprofesional', variant: 'blue' },
  { label: 'Malla Curricular', variant: 'blue' },
  { label: 'Notas Semestrales', variant: 'blue' },
  { label: 'Consulta Libros', variant: 'blue' },
  { label: 'Pagos en Caja', variant: 'blue' },
  { label: 'Bloqueos', variant: 'blue' },
  { label: 'Avance de Contenidos', variant: 'blue' },
  { label: 'Evaluación Académica', variant: 'blue' },
  { label: 'Fecha de Análisis', variant: 'blue' },
  { label: 'Form. Beca', variant: 'blue' },
  { label: 'Control de Materias', variant: 'blue' },
  { label: 'Cambiar contraseña', variant: 'blue' },
  { label: 'Solicitar Servicio', variant: 'cream' },
  { label: 'Expociencia', variant: 'cream', gapBefore: true },
  { label: 'Form. Titulados', variant: 'cream' },
  { label: 'Sistema para Auxiliares', variant: 'cream' },
  { label: 'Salir', variant: 'blue', action: 'logout' }
]
