import React from 'react'
import { NavLink,useLocation} from 'react-router-dom'
import logo from '../assets/logo_SRE.webp'

const NavBar = () => {

  const location = useLocation();

  return (
    <nav className="navbar navbar-expand-lg d-flex justify-content-between align-items-center px-5 py-3 bg-white" style={{position:"relative",zIndex:"10"}}>
  
        <NavLink className="navbar-brand" to="/"><img src={logo} style={{width:"100px",height:"50px"}}/></NavLink>
            <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
        <span className="navbar-toggler-icon"></span>
        </button>
  
        <div className="collapse navbar-collapse justify-content-end" id="navbarSupportedContent">
            <div className="navbar-nav d-flex align-items-center">
                <NavLink className="nav-link nav-hover" to="/About" style={({isActive})=>({borderBottom: isActive?'2px solid red':'none'})}>About</NavLink>
                <NavLink className="nav-link nav-hover" to="/AMC" style={({isActive})=>({borderBottom: isActive?'2px solid red':'none'})}>AMC</NavLink>
                <NavLink className="nav-link nav-hover" to="/Contact" style={({isActive})=>({borderBottom: isActive?'2px solid red':'none'})}>Contact-Us</NavLink>
            </div>
        </div>
    </nav>
  )
}

export default NavBar


