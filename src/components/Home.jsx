import React, { useState } from 'react';
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
      console.log(import.meta.env.VITE_API_URL);
      const res = await fetch(`${import.meta.env.VITE_API_URL}/book`, {
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
          Contact us : 9900563782 || 8150848848
        </div>
        <div data-bs-toggle="modal"  data-bs-target="#contactModal"  className="bg-danger text-white px-3 py-2" style={{ cursor: "pointer" }}>
            Book A Site Visit
        </div>
      </div>
      <HeroSlider />


      <div className="container bg-danger text-white text-center p-5 shadow position-relative z-100" style={{ marginTop: "-50px" }}>
        <h2>Experts In Transformer And Switchgear Maintenance</h2>
        <p>
          the dedicated service arm of Sri Raghavendra Electricals,
          is committed to providing exceptional maintenance solutions.
        </p>
      </div>

  

      <div className="container py-5">
          <div className="service-heading text-center mb-5">
                
                <h2 className="service-main-title" style={{color:"black"}}>General Transformer Services</h2>
                <div className="title-line"></div>

                <p className="service-subtitle">Professional maintenance and transformer support solutions with reliable industrial expertise.</p>
                </div>
                <div className="row g-4">
                    {/* CARD 1 */}
                    <div className="col-md-4">
                        <div className="service-card">
                            <svg xmlns="http://www.w3.org/2000/svg" fill="currentColor" className="service-icon" viewBox="0 0 16 16">
                                <path d="M8 0C5 4 3 6 3 9a5 5 0 0 0 10 0c0-3-2-5-5-9z"/>
                            </svg>
                            <h5 className="service-title">Oil Filtration</h5>
                        </div>
                    </div>
                    {/* CARD 2 */}
                    <div className="col-md-4">
                        <div className="service-card">
                            <svg xmlns="http://www.w3.org/2000/svg" fill="currentColor" className="service-icon" viewBox="0 0 16 16">
                                <path d="M15.502 1.94a.5.5 0 0 1 0 .706l-1.793 1.793-2.647-2.647L12.855 0.5a.5.5 0 0 1 .707 0l1.94 1.94zM10.293 3.207 1 12.5V15h2.5l9.293-9.293-2.5-2.5z"/>
                            </svg>
                            <h5 className="service-title">General Repairs</h5>
                        </div>
                    </div>
                    {/* CARD 3 */}
                    <div className="col-md-4">
                        <div className="service-card">
                            <svg xmlns="http://www.w3.org/2000/svg" fill="currentColor" className="service-icon" viewBox="0 0 16 16">
                                <path d="M6 0a2 2 0 0 0-2 2v2H2v2h2v2H2v2h2v2a2 2 0 0 0 2 2h4a2 2 0 0 0 2-2v-2h2V8h-2V6h2V4h-2V2a2 2 0 0 0-2-2H6z"/>
                            </svg>
                            <h5 className="service-title">OLTC Service</h5>
                        </div>
                    </div>
                    {/* CARD 4 */}
                    <div className="col-md-4">
                        <div className="service-card">
                            <svg xmlns="http://www.w3.org/2000/svg" fill="currentColor" className="service-icon" viewBox="0 0 16 16">
                                <path d="M8 0l8 4v8l-8 4-8-4V4l8-4z"/>
                            </svg>
                            <h5 className="service-title">Supply of Spares</h5>
                        </div>
                    </div>
                    {/* CARD 5 */}
                    <div className="col-md-4">
                        <div className="service-card">
                            <svg xmlns="http://www.w3.org/2000/svg" fill="currentColor" className="service-icon" viewBox="0 0 16 16">
                                <path d="M1 8a7 7 0 1 1 14 0A7 7 0 0 1 1 8zm7-4a.5.5 0 0 0-.5.5V8H5a.5.5 0 0 0 0 1h3a.5.5 0 0 0 .5-.5v-4A.5.5 0 0 0 8 4z"/>
                            </svg>
                            <h5 className="service-title">Replacement of Spares</h5>
                        </div>
                    </div>
                    {/* CARD 6 */}
                    <div className="col-md-4">
                        <div className="service-card">
                            <svg xmlns="http://www.w3.org/2000/svg" fill="currentColor" className="service-icon" viewBox="0 0 16 16">
                                <path d="M8 1s4 4.686 4 7a4 4 0 1 1-8 0c0-2.314 4-7 4-7z"/>
                            </svg>
                            <h5 className="service-title">Oil Leakage</h5>
                        </div>
                    </div>
                    {/* CARD 7 */}
                    <div className="col-md-4">
                        <div className="service-card">
                            <svg xmlns="http://www.w3.org/2000/svg" fill="currentColor" className="service-icon" viewBox="0 0 16 16">
                                <path d="M4 1h8v14H4z"/>
                            </svg>
                            <h5 className="service-title">Dry Maintenance</h5>
                        </div>
                    </div>
                    {/* CARD 8 */}
                    <div className="col-md-4">
                        <div className="service-card">
                            <svg xmlns="http://www.w3.org/2000/svg" fill="currentColor" className="service-icon" viewBox="0 0 16 16">
                                <path d="M6.5 0a.5.5 0 0 1 .5.5V2h2V.5a.5.5 0 0 1 1 0V2h1a1 1 0 0 1 1 1v2h-1V3H5v2H4V3a1 1 0 0 1 1-1h1V.5a.5.5 0 0 1 .5-.5z"/>
                            </svg>
                            <h5 className="service-title">Tap Repair</h5>
                        </div>
                    </div>
                    {/* CARD 9 */}
                    <div className="col-md-4">
                        <div className="service-card">
                            <svg xmlns="http://www.w3.org/2000/svg" fill="currentColor" className="service-icon" viewBox="0 0 16 16">
                                <path d="M8 0a5 5 0 0 0-5 5c0 3 5 11 5 11s5-8 5-11a5 5 0 0 0-5-5z"/>
                            </svg>
                            <h5 className="service-title">Oil Testing</h5>
                        </div>
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