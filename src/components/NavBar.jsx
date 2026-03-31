import React from 'react'
import { Link } from 'react-router-dom'

const NavBar = () => {
  return (
    <nav className="navbar navbar-expand-lg d-flex justify-content-between align-items-center px-5 py-3 bg-white" style={{position:"relative",zIndex:"10"}}>
  
        <Link className="navbar-brand" to="/">Navbar</Link>
            <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
        <span className="navbar-toggler-icon"></span>
        </button>
  
        <div className="collapse navbar-collapse justify-content-end" id="navbarSupportedContent">
            <div className="navbar-nav d-flex align-items-center">
                <Link className="nav-link nav-hover" to="/About">About</Link>
                <Link className="nav-link nav-hover" to="/AMC">AMC</Link>
                <Link className="nav-link nav-hover" to="/Contact">Contact-Us</Link>
                <button className="btn btn-primary ms-3" >Get Started</button>
            </div>
        </div>
    </nav>
  )
}

export default NavBar


