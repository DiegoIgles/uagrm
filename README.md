# UAGRM · Perfil (clon en React)

Réplica del portal [perfil.uagrm.edu.bo](https://perfil.uagrm.edu.bo/) hecha con **Vite + React + React Router v6** y **Bootstrap 4**.

> Proyecto educativo / demo. El login es **simulado localmente**, no se conecta a ningún servidor real de la UAGRM.

## Requisitos
- Node.js 18+ (probado con v22)

## Uso
```bash
npm install
npm run dev      # servidor de desarrollo (http://localhost:5173)
npm run build    # build de producción en dist/
npm run preview  # previsualizar el build
```

## Rutas
| Ruta | Descripción |
|------|-------------|
| `/` | Inicio — elige tipo de cuenta |
| `/estudiantes` | Login de estudiantes |
| `/docentes` | Login de docentes |
| `/administrativos` | Login de administrativos |
| `/:tipo/panel` | Panel tras iniciar sesión (sesión simulada) |
| `*` | 404 |

## Credenciales demo (login simulado)
| Tipo | Código | Contraseña |
|------|--------|------------|
| Estudiante | `222044810` | `Promise12344` |
| Docente | `2000002` | `docente` |
| Administrativo | `3000003` | `admin` |

Puedes editarlas en [`src/data/accounts.js`](src/data/accounts.js).

## Estructura
```
src/
  main.jsx            # entrada, BrowserRouter + Bootstrap
  App.jsx             # definición de rutas
  styles.css          # paleta UAGRM y estilos propios
  data/accounts.js    # tipos de cuenta y credenciales demo
  components/Logo.jsx # logo reutilizable
  pages/
    Home.jsx          # selección de tipo de cuenta
    Login.jsx         # tarjeta de inicio de sesión (Bootstrap)
    Panel.jsx         # landing tras login simulado
    NotFound.jsx      # 404
```

## Notas sobre el diseño
- Paleta tomada del original: rojo `#a30d0a` / `#C02428`, azul `#006699`, morado `#551A8B`.
- Se usa Bootstrap 4 como en el sitio real (tarjetas, formularios, alertas).
- El logo y los iconos de tipo de cuenta son las imágenes reales descargadas del sitio original, guardadas en `public/img/`. Si alguna no carga, se muestra un emoji/texto como fallback.
