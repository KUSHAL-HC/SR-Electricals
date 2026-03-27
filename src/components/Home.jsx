import React from 'react';
import heroImage from "../assets/hero-image.png";
import engineer from  "../assets/engineer.png";
import  conclusion from "../assets/conclusion.png";
import '../App.css'

const Home = () => {
  return (
    <div className="bg-warning-subtle">
      <div className="d-flex justify-content-end bg-light">
        <div className="bg-dark text-white px-3 py-2">
          Contact us : 8431420127 || 8971023116
        </div>
        <div className="bg-danger text-white px-3 py-2">
          Book A Site Visit
        </div>
      </div>
      
      <div id="heroCarousel" className="carousel slide" data-bs-ride="carousel">

            <div className="carousel-indicators">
                  <button type="button" data-bs-target="#heroCarousel" data-bs-slide-to="0" className="active"></button>
                  <button type="button" data-bs-target="#heroCarousel" data-bs-slide-to="1"></button>
                  <button type="button" data-bs-target="#heroCarousel" data-bs-slide-to="2"></button>
            </div>

            <div className="carousel-inner">

              <div className="carousel-item active">
                  <img src={heroImage} className="d-block w-100" alt="slide1"  style={{ height: "600px", objectFit: "cover", filter: "brightness(50%)" }}/>
                  <div className="carousel-caption">
                      <h1>Spares & Services</h1>
                      <p>Your trusted partner for maintenance</p>
                  </div>
              </div>

              <div className="carousel-item">
                  <img src={heroImage} className="d-block w-100" alt="slide2" style={{ height: "600px", objectFit: "cover", filter: "brightness(50%)" }}/>
                  <div className="carousel-caption">
                      <h1>Reliable Solutions</h1>
                      <p>We deliver quality service</p>
                  </div>
              </div>

              <div className="carousel-item">
                  <img src={heroImage} className="d-block w-100" alt="slide3" style={{ height: "600px", objectFit: "cover", filter: "brightness(50%)" }}/>
                  <div className="carousel-caption">
                    <h1>Expert Engineers</h1>
                    <p>Professional & experienced team</p>
                  </div>
              </div>
              </div>

            <button className="carousel-control-prev" type="button" data-bs-target="#heroCarousel" data-bs-slide="prev">
                 <span className="carousel-control-prev-icon"></span>
            </button>

            <button className="carousel-control-next" type="button" data-bs-target="#heroCarousel" data-bs-slide="next">
              <span className="carousel-control-next-icon"></span>
            </button>
          </div>


      <div className="container bg-danger text-white text-center p-5 shadow position-relative z-100" style={{ marginTop: "-50px" }}>
        <h2>Experts In Transformer And Switchgear Maintenance</h2>
        <p>
          UPTSS, the dedicated service arm of Universal Power Transformer Pvt. Ltd.,
          is committed to providing exceptional maintenance solutions.
        </p>
        <button className="btn btn-light">Download Brochure</button>
      </div>

      <div className="container text-center mt-5">
        <h2 className="mb-4">General Transformer Services</h2>

        <div className="row text-start">
          <div className="col-md-4">
            <p>✔ Oil filtration</p>
            <p>✔ General Repairs</p>
            <p>✔ OLTC service</p>
          </div>
          <div className="col-md-4">
            <p>✔ Supply of spares</p>
            <p>✔ Replacement of spares</p>
            <p>✔ Oil leakage</p>
          </div>
          <div className="col-md-4">
            <p>✔ Dry maintenance</p>
            <p>✔ Tap repair</p>
            <p>✔ Oil testing</p>
          </div>
        </div>
      </div>

      <div className="bg-danger text-white text-center py-5 mt-5">
        <h2 className="mb-4">Specialised Services</h2>

        <div className="container">
          <div className="row g-4">

            {[1,2,3].map((item) => (
              <div className="col-md-4" key={item}>
                <div className="card my-card-hover" style={{width: "18rem"}}>
                  <img src={engineer} className="card-img-top"/>
                  <div className="card-body">
                    <h5 className="card-title">Card title</h5>
                    <p className="card-text">Some quick example text to build on the card title and make up the bulk of the card’s content.</p>
                    <a href="#" className="btn btn-primary">Go somewhere</a>
                  </div>
                </div>
              </div>
            ))}

          </div>
        </div>
      </div>

      <div className="bg-warning-subtle p-4">
        <div className="container">
          <div className="row">

            <div className="col-md-3">
              <img src={conclusion} className="img-fluid" alt="logo" />
            </div>

            <div className="col-md-3">
              <h5>Main Links</h5>
              <p>Order Tracking</p>
              <p>New Order</p>
              <p>Contact Us</p>
            </div>

            <div className="col-md-3">
              <h5>Support</h5>
              <p>About Us</p>
              <p>Privacy Policy</p>
              <p>Terms</p>
            </div>

            <div className="col-md-3">
              <h5>Subscribe</h5>
              <input type="email" className="form-control mb-2" placeholder="Enter email" />
              <p>Follow Us</p>
            </div>

          </div>
        </div>
      </div>

      <div className="bg-dark text-white text-center py-3">
        Copyright ©2024 Universal Power
      </div>

    </div>
  );
};

export default Home;