import React from 'react'
import PropTypes from 'prop-types';

export default function Navbar(props) {
  return (
    <div>
      <nav className={`navbar navbar-expand-lg navbar-${props.mode} bg-${props.mode}`} >
        <div className="container-fluid">
          <a className="navbar-brand" href="/">{props.title}</a>
          <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
            <span className="navbar-toggler-icon"></span>
          </button>
          <div className="collapse navbar-collapse" id="navbarSupportedContent">
            <ul className="navbar-nav me-auto mb-2 mb-lg-0">
              <li className="nav-item">
                <a className="nav-link active" aria-current="page" href="/">Home</a>
              </li>
              <li className="nav-item">
                <a className="nav-link" href="/">{props.about}</a>
              </li>
            </ul>
            {/* <form className="d-flex" role="search">
              <input className="form-control me-2" type="search" placeholder="Search" aria-label="Search"/>
              <button className="btn btn-light" type="submit">Search</button>
            </form> */}
            {/* Dark Mode */}
            <div className={`form-check form-switch text-${props.mode==='light'?'dark':'light'}`}>
              <input className="form-check-input" type="checkbox" id="flexSwitchCheckDefault" onClick={props.toggleMode}/>
              <label className="form-check-label" htmlFor="flexSwitchCheckDefault">Enable Dark Mode</label>
            </div>

            {/* Brown Mode */}
            <div className={`form-check form-switch text-${props.mode==='light'?'dark':'light'}`}>
              <input className="form-check-input" type="checkbox" id="flexSwitchCheckDefault" onClick={props.brownMode}/>
              <label className="form-check-label" htmlFor="flexSwitchCheckDefault">Enable Brown Mode</label>
            </div>

            {/* Skyblue mode */}
            <div className={`form-check form-switch text-${props.mode==='light'?'dark':'light'}`}>
              <input className="form-check-input" type="checkbox" id="flexSwitchCheckDefault" onClick={props.skyMode}/>
              <label className="form-check-label" htmlFor="flexSwitchCheckDefault">Enable Skyblue Mode</label>
            </div>
          </div>
        </div>
      </nav>
    </div>
  )
}

Navbar.prototype = {
    title: PropTypes.string.isRequired,
    about: PropTypes.string.isRequired
}

// Navbar.defaultProps = {
//     title: "Home",
//     about: "About Us"
// }