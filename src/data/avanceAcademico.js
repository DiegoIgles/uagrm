import { historicoRows, NOTA_APROBACION } from './historico.js'

// Career codes that belong to Ingeniería Informática.
const CARRERAS_INFORMATICA = ['187 - 3', '187 - 6']

// Avance Académico = all PASSED subjects (numeric grade >= approval) from the
// Ingeniería Informática career, derived from the Histórico so both stay in sync.
export const avanceRows = historicoRows
  .filter(
    (r) =>
      CARRERAS_INFORMATICA.includes(r.carrera) &&
      typeof r.nota === 'number' &&
      r.nota >= NOTA_APROBACION
  )
  .map(({ nivel, materia, periodo, nota }) => ({ nivel, materia, periodo, nota }))
