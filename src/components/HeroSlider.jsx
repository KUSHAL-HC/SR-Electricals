import React from 'react'
import heroImage from "../assets/hero-image.png"
import '../App.css'

const HeroSlider = () => {


  return (
    <div>
  <div id="heroCarousel" className="carousel slide" data-bs-ride="carousel">
    <div className="carousel-indicators">
      <button type="button" data-bs-target="#heroCarousel" data-bs-slide-to="0" className="active"></button>
      <button type="button" data-bs-target="#heroCarousel" data-bs-slide-to="1"></button>

      <button type="button" data-bs-target="#heroCarousel" data-bs-slide-to="2"></button>
    </div>
    <div className="carousel-inner">
      <div className="carousel-item active hero-image">
        <img src={heroImage} className="d-block w-100" alt="slide1" style={{height: "600px",objectFit: "cover",filter: "brightness(50%)",}}/>
        <div className="hero-title">
          <h1 className="text-light" style={{ textAlign: "left", margin: "0" }}>
            Spares & Services
          </h1>

          <p style={{ textAlign: "left", fontSize: "30px" }}>
            Your trusted partner for maintenance
          </p>
        </div>
      </div>
      <div className="carousel-item hero-image"><img src={heroImage} className="d-block w-100" alt="slide2" style={{height: "600px", objectFit: "cover",filter: "brightness(50%)",}}/>

        <div className="hero-title">
          <h1 className="text-light" style={{ textAlign: "left", margin: "0" }}>
            Quality Industrial Parts
          </h1>

          <p style={{ textAlign: "left", fontSize: "30px" }}>
            Reliable solutions for every machine
          </p>
        </div>
      </div>
      <div className="carousel-item hero-image">
        <img src={heroImage} className="d-block w-100" alt="slide3" style={{height: "600px",objectFit: "cover",filter: "brightness(50%)",}}/>

        <div className="hero-title">
          <h1 className="text-light" style={{ textAlign: "left", margin: "0" }}>
            Expert Maintenance
          </h1>

          <p style={{ textAlign: "left", fontSize: "30px" }}>
            Fast service with trusted professionals
          </p>
        </div>
      </div>

    </div>

    {/* Prev Button */}
    <button className="carousel-control-prev" type="button" data-bs-target="#heroCarousel" data-bs-slide="prev">
      <span className="carousel-control-prev-icon"></span>
    </button>

    {/* Next Button */}
    <button className="carousel-control-next" type="button" data-bs-target="#heroCarousel" data-bs-slide="next">
      <span className="carousel-control-next-icon"></span>
    </button>

  </div>
</div>
  )
}

export default HeroSlider
