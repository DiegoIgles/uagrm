import { Link } from 'react-router-dom'

// UAGRM logo linking back to the home page. Falls back to text if the
// remote image cannot load.
export default function Logo() {
  return (
    <div>
      <p className="col-xl-4 col-lg-5 col-md-7 col-sm-10 col-xs-12 my-5 mx-auto brand-logo">
        <Link to="/" style={{ textDecoration: 'none' }}>
          <img
            src="/img/logo-uagrm.png"
            alt="Logo UAGRM"
            onError={(e) => {
              e.currentTarget.replaceWith(
                Object.assign(document.createElement('span'), {
                  className: 'd-block text-center text-brand font-weight-bold',
                  style: 'font-size:1.5rem',
                  textContent: 'U.A.G.R.M.'
                })
              )
            }}
          />
        </Link>
      </p>
    </div>
  )
}
