import logo from '/lark_logo.png'

const Navigation = () => {
  return (
    <div>
      <nav className="navbar navbar-expand-md sticky-top border-bottom" style={{"backgroundColor": "var(--primary-green-color)"}}>
  <div className="container">
  <a className="navbar-brand d-flex justify-content-start px-3" href="#aboutus">
      <img src={logo} alt="logo" style={{height: "45px"}}/>
    </a>
    <button className="navbar-toggler" type="button" data-bs-toggle="offcanvas" data-bs-target="#offcanvas" aria-controls="offcanvas" aria-label="Toggle navigation">
      <span className="navbar-toggler-icon"></span>
    </button>
    <div className="offcanvas offcanvas-end" tabIndex="-1" id="offcanvas" aria-labelledby="offcanvasLabel">
      <div className="offcanvas-header">
        <h5 className="offcanvas-title" id="offcanvasLabel">Aperture</h5>
        <button type="button" className="btn-close" data-bs-dismiss="offcanvas" aria-label="Close"></button>
      </div>
      <div className="offcanvas-body">
        <ul className="navbar-nav flex-grow-1 justify-content-between">
          <li className="nav-item"><a className="nav-link" href="#">
            <svg className="bi" width="24" height="24"><use xlinkHref="#aperture"></use></svg>
          </a></li>
          <li className="nav-item"><a className="nav-link" style={{"color": "var(--primary-white-color)"}} href="#">Tour</a></li>
          <li className="nav-item"><a className="nav-link" style={{"color": "var(--primary-white-color)"}} href="#">Product</a></li>
          <li className="nav-item"><a className="nav-link" style={{"color": "var(--primary-white-color)"}} href="#">Features</a></li>
          <li className="nav-item"><a className="nav-link" style={{"color": "var(--primary-white-color)"}} href="#">Enterprise</a></li>
          <li className="nav-item"><a className="nav-link" style={{"color": "var(--primary-white-color)"}} href="#">Support</a></li>
          <li className="nav-item"><a className="nav-link" style={{"color": "var(--primary-white-color)"}} href="#">Pricing</a></li>
          <li className="nav-item"><a className="nav-link" style={{"color": "var(--primary-white-color)"}} href="#">
            <svg className="bi" width="24" height="24"><use xlinkHref="#cart"></use></svg>
          </a></li>
        </ul>
      </div>
    </div>
  </div>
</nav>
    </div>
  )
}

export default Navigation
