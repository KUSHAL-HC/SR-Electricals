import React from 'react'
import conclusion from '../assets/conclusion.png'

const Footer = () => {
  return (
<footer className="bg-dark text-light py-3">
  <div className="container d-flex flex-column flex-md-row justify-content-between align-items-center">
    
    <h5 className="m-0">Spares & Services</h5>

    <div>
      <a href="/" className="text-light text-decoration-none me-3">
        Home
      </a>

      <a href="/about" className="text-light text-decoration-none me-3">
        About
      </a>

      <a href="/contact" className="text-light text-decoration-none">
        Contact
      </a>
    </div>

    <p className="m-0 mt-2 mt-md-0">
      © 2026 All Rights Reserved
    </p>

  </div>
</footer>
  )
}

export default Footer
