// Account types shown on the home page and their login routes.
// `demo` holds the mock credentials used by the simulated login.
export const accounts = {
  estudiantes: {
    slug: 'estudiantes',
    label: 'Estudiante',
    title: 'Estudiantes',
    icon: '🎓',
    img: '/img/estudiante.png',
    codePlaceholder: 'Código',
    directLinks: [
      { label: 'Inscripción Web', href: 'http://inscripcion.uagrm.edu.bo/' },
      { label: 'Formulario de seguimiento a Titulados', href: 'http://titulados.uagrm.edu.bo' }
    ],
    demo: { username: '222044810', password: 'Promise12344' }
  },
  docentes: {
    slug: 'docentes',
    label: 'Docente',
    title: 'Docentes',
    icon: '👨‍🏫',
    img: '/img/docente.png',
    codePlaceholder: 'Código',
    directLinks: [],
    demo: { username: '2000002', password: 'docente' }
  },
  administrativos: {
    slug: 'administrativos',
    label: 'Administrativo',
    title: 'Administrativos',
    icon: '🗂️',
    img: '/img/administrativo.png',
    codePlaceholder: 'Código',
    directLinks: [],
    demo: { username: '3000003', password: 'admin' }
  }
}

export const accountList = Object.values(accounts)
