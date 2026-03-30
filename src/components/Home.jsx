import React from 'react';
import  {Link, Navigate}  from 'react-router-dom';
import engineer from  "../assets/engineer.png";
import '../App.css'
import HeroSlider from './HeroSlider';

const Home = () => {

  let downloadBroucher=()=>{
      const link = document.createElement("a");
      link.href = "/brochure.pdf";
      link.download = "Company-broucher.pdf";
      document.body.appendChild(link);
      link.click();
      document.body.removeChild(link);
  }
  return (
    <div className="bg-warning-subtle">
      <div className="d-flex justify-content-end bg-light">
        <div className="bg-dark text-white px-3 py-2">
          Contact us : 8431420127 || 8971023116
        </div>
        <div className="bg-danger text-white px-3 py-2">
          <Link to="/Contact" style={{color:"white",textUnderlineOffset:"none"}}>
              Book A Site Visit
          </Link>
        </div>
      </div>
      
      <HeroSlider/>

      <div className="container bg-danger text-white text-center p-5 shadow position-relative z-100" style={{ marginTop: "-50px",rowGap:"10px" }}>
        <h2>Experts In Transformer And Switchgear Maintenance</h2>
        <p>
          UPTSS, the dedicated service arm of Universal Power Transformer Pvt. Ltd.,
          is committed to providing exceptional maintenance solutions.
        </p>
        <button className="btn btn-light" onClick={downloadBroucher}>Download Brochure</button>
      </div>

      <div className="container text-center mt-5">
        <h2 className="mb-4 text-dark" style={{color:"black"}}>General Transformer Services</h2>

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







      <div className="modal fade"  id="contactModal"  tabIndex="-1" aria-labelledby="contactModalLabel" aria-hidden="true">
          <div className="modal-dialog">
                      <div className="modal-content">
                              <div className="modal-header">
                              <h5 className="modal-title" id="contactModalLabel">
                                  Book a Site Visit
                              </h5>
                              <button type="button" className="btn-close" data-bs-dismiss="modal"></button>
                      </div>
                      <div className="modal-body">
                      <form>
                        <div className="mb-3">
                          <label className="form-label">Name</label>
                          <input type="text" className="form-control" placeholder="Enter your name" />
                        </div>

                        <div className="mb-3">
                          <label className="form-label">Phone</label>
                          <input type="tel" className="form-control" placeholder="Enter your phone" />
                        </div>

                        <div className="mb-3">
                          <label className="form-label">Email</label>
                          <input type="email" className="form-control" placeholder="Enter your email" />
                        </div>

                        <button type="submit" className="btn btn-danger w-100">
                          Submit
                        </button>
                      </form>
                      </div>
                </div>
          </div>
      </div>
    </div>



  );
};

export default Home;