import React, { useState } from 'react';

import engineer from "../assets/engineer.png";
import '../App.css';
import HeroSlider from './HeroSlider';
import Alert from './Alert';

const Home = () => {

   const [alert, setAlert] = useState({
      type: "",
      message: ""
    });

  const [name, setName] = useState("");
  const [phone, setPhone] = useState("");
  const [email, setEmail] = useState("");

  let downloadBroucher = () => {
    const link = document.createElement("a");
    link.href = "/brochure.pdf";
    link.download = "Company-broucher.pdf";
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    if (!name.trim() || !phone.trim() || !email.trim()) {
      setAlert({
        type: "error",
        message: "❌ Please fill all fields"
      });
      return;
    }
  
    const data = { name, phone, email };
  
    try {
      const res = await fetch("http://localhost:8000/book", {
        method: "POST",
        headers: {
          "Content-Type": "application/json"
        },
        body: JSON.stringify(data)
      });
  
      if (res.ok) {
        setAlert({
          type: "success",
          message: "✅ Your form has been submitted successfully!"
        });
  
        // ✅ Correct way to clear form
        setName("");
        setPhone("");
        setEmail("");
  
      } else {
        setAlert({
          type: "error",
          message: "❌ Failed to submit form"
        });
      }
  
    } catch (err) {
      setAlert({
        type: "error",
        message: "❌ Server error. Try again."
      });
    }
  
    setTimeout(() => {
      setAlert({ type: "", message: "" });
    }, 3000);
  };

  return (
    <div className="bg-warning-subtle">

      <div className="d-flex justify-content-end bg-light">
        <div className="bg-dark text-white px-3 py-2">
          Contact us : 8431420127 || 8971023116
        </div>
        <div data-bs-toggle="modal"  data-bs-target="#contactModal"  className="bg-danger text-white px-3 py-2" style={{ cursor: "pointer" }}>
            Book A Site Visit
        </div>
      </div>

      <HeroSlider />


      <div className="container bg-danger text-white text-center p-5 shadow position-relative z-100" style={{ marginTop: "-50px" }}>
        <h2>Experts In Transformer And Switchgear Maintenance</h2>
        <p>
          UPTSS, the dedicated service arm of Universal Power Transformer Pvt. Ltd.,
          is committed to providing exceptional maintenance solutions.
        </p>
        <button className="btn btn-light" onClick={downloadBroucher}>
          Download Brochure
        </button>
      </div>

      <div className="container text-center mt-5">
        <h2 className="mb-4 text-dark">General Transformer Services</h2>

        <div className="text-start" style={{display:"flex",flexDirection:"row",width:"100%",justifyContent:"space-between"}}>
          <div >
            <p>✔ Oil filtration</p>
            <p>✔ General Repairs</p>
            <p>✔ OLTC service</p>
          </div>
          <div >
            <p>✔ Supply of spares</p>
            <p>✔ Replacement of spares</p>
            <p>✔ Oil leakage</p>
          </div>
          <div >
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
            {[1, 2, 3].map((item) => (
              <div className="col-md-4" key={item}>
                <div className="card my-card-hover" style={{ width: "18rem" }}>
                  <img src={engineer} className="card-img-top" alt="service" />
                  <div className="card-body">
                    <h5 className="card-title">Card title</h5>
                    <p className="card-text">
                      Some quick example text to build on the card title.
                    </p>
                    <button
                      onClick={() => window.open('/broucher.pdf', '_blank')}
                      className="btn btn-primary"
                    >
                      Go somewhere
                    </button>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* MODAL */}
      <div className="modal fade" id="contactModal" tabIndex="-1">
        <div className="modal-dialog">
          <div className="modal-content">

            <div className="modal-header">
              <h5 className="modal-title">Book a Site Visit</h5>
              <button type="button" className="btn-close" data-bs-dismiss="modal"></button>
            </div>

            <div className="modal-body" style={{minHeight:"460px"}}>
              <form onSubmit={handleSubmit}>

                <div className="mb-3">
                  <label className="form-label">Name</label>
                  <input
                    type="text"
                    name='name'
                    className="form-control"
                    placeholder="Enter your name"
                    value={name}
                    onChange={(e) => setName(e.target.value)}
                    required
                  />
                </div>

                <div className="mb-3">
                  <label className="form-label">Phone</label>
                  <input
                    type="tel"
                    name="phone"
                    className="form-control"
                    placeholder="Enter your phone"
                    value={phone}
                    onChange={(e) => setPhone(e.target.value)}
                    required
                  />
                </div>

                <div className="mb-3">
                  <label className="form-label">Email</label>
                  <input
                    type="email"
                    name="email"
                    className="form-control"
                    placeholder="Enter your email"
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                    required
                  />
                </div>
                <button type="submit" className="btn btn-danger w-100">
                  Submit
                </button>

                <Alert type={alert.type} message={alert.message} />
              </form>
            </div>

          </div>
        </div>
      </div>

    </div>
  );
};

export default Home;