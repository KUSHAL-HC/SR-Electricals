import React,{useState} from 'react';
import './Contact.css';
import location from '../assets/location.png';
import Alert from "./Alert";

const Contact = () => {


  const [alert, setAlert] = useState({
    type: "",
    message: ""
  });


  const [formData, setFormData] = useState({
    fullName: "",
    phone: "",
    email: "",
    subject: "",
    message: ""
  });

  const handleChange = (e) => {
          setFormData({
            ...formData,
            [e.target.name]: e.target.value
          });
        };
          const handleSubmit = async (e) => {
            e.preventDefault();

            try {
              const res = await fetch("http://localhost:8000/api/Contacting", {
                method: "POST",
                headers: {
                  "Content-Type": "application/json"
                },
                body: JSON.stringify(formData)
              });

              if(res.ok)
              {
                setAlert({
                  show:true,
                  type:"success",
                  message:" Your form has been submitted successfully!"
                });

                setFormData({
                  fullName: "",
                  email: "",
                  subject: "",
                  message: ""
                });
              } else{
                setAlert({
                  type:"error",
                  message:"Failed to submit form"
                })
              }
              const data = await res.json();
              console.log(data);
            }catch (error) {
              setAlert({
                show: true,
                type: "error",
                message: "Failed to submit form. Try again."
              });
            }
            setTimeout(() => {
              setAlert({ type: "", message: "" });
            }, 3000);
          };

  const openLocation = ()=>{
    const lat = "13.17210"
    const log = "77.56393"
    window.open(`https://www.google.com/maps?q=${lat},${log}`, "_blank");
  }

  return (
    <div className="precision-container">
      <header className="hero text-white px-5 py-5">
        <div className="content-wrapper container">
          <span className="badge">CONNECT WITH US</span>
          <h1 className="my-3 display-5">Get in Touch</h1>
          <p className="opacity-75 m-0">
            Whether you're looking for expert editorial guidance or have a specific project in mind, 
            our team is ready to help you craft your narrative with architectural precision.
          </p>
        </div>
      </header>

      <main className="contact-section bg-gray px-5 py-5" style={{marginTop:"40px"}}>
        <div className="content-grid row g-4" style={{maxWidth:""}}>
          
          <section className="form-card col-lg-8 bg-white p-4 rounded shadow-lg" style={{minHeight:"630px"}}>
            <h2 className='text-dark'>Send a Message</h2>

            {/* {alert.show && (
                    <div className={`custom-alert ${alert.type}`}>
                    {alert.message}
                    </div>)} */}
              
            <form onSubmit={handleSubmit}>
              <div className="form-row row g-3">
                
                <div className="form-group col-md-6">
                  <label className="form-label text-muted small fw-bold">FULL NAME</label>
                  <input type="text" name="fullName" className="form-control" placeholder="John Doe"  value={formData.fullName} onChange={handleChange} required/>
                </div>

                <div className="form-group col-md-6">
                  <label className="form-label text-muted small fw-bold">EMAIL ADDRESS</label>
                  <input type="email" name="email" className="form-control" placeholder="john@example.com" value={formData.email}  onChange={handleChange} required/>
                </div>
              </div>

              <div className="form-group mt-3">
                <label className="form-label text-muted small fw-bold">SUBJECT</label>
                <input name="subject" type="text" className="form-control" placeholder="How can we help?" value={formData.subject} onChange={handleChange} required/>
              </div>

              <div className="form-group mt-3">
                <label className="form-label text-muted small fw-bold">MESSAGE</label>
                <textarea name="message" className="form-control" rows="6" placeholder="Tell us more about your inquiry..." value={formData.message} onChange={handleChange} required></textarea>
              </div>

              <button type="submit" className="btn btn-primary mt-3 px-4 py-2">
                Send Message <span>➤</span>
              </button>
            </form>
            <Alert type={alert.type} message={alert.message}/>
          </section>

          <aside className="sidebar col-lg-4" style={{flexDirection:"column",alignItems:"center"}}>
            
            <div className="info-block mb-4">
              <h3>Our Studio Location</h3>

              <div className="studio-details d-flex gap-3 align-items-start" style={{flexDirection:"row",justifyContent:"center"}}>
                <div className="icon-box-blue">📍</div>
                <div>
                  <strong>Manhattan HQ</strong>
                  <br />245 Lexington Avenue, Suite 400<br />
                  New York, NY 10016
                </div>
              </div>

              <div className="map-placeholder mt-3 position-relative rounded" onClick={openLocation} style={{overflow:'hidden',objectFit:"contain",objectPosition:"center",cursor:"pointer"}}>
                     <img src={location} alt="Map Location" className="img-fluid rounded"/>
              </div>
            </div>

            <div className="info-block mb-4">
              <h3>Direct Access</h3>
              <p className="mb-1">📞 +1 (212) 555-0198</p>
              <p>✉️ hello@precisioneditorial.com</p>
            </div>

            <div className="availability-card d-flex gap-3 p-3 rounded">
              <span className="info-icon">ℹ️</span>
              <div>
                <strong>AVAILABILITY</strong>
                <p className="mb-0 small">
                  Our editorial team is currently accepting new commissions for Q4 2024. Response time is typically within 24 business hours.
                </p>
              </div>
            </div>
          </aside>

        </div>
      </main>

      <section className="consultation px-5 py-5">
        <div className="consult-content d-flex justify-content-between align-items-center">
          
          <h2>Prefer a direct consultation?</h2>

          <div className="consult-text">
            <p>
              Book a 15-minute introductory call with our lead curator to discuss your vision and see how our architectural approach can elevate your publication.
            </p>
            <a href="#schedule" className="arrow-link text-decoration-none">
              Schedule an intro call <span>→</span>
            </a>
          </div>

        </div>
      </section>

      <footer className="footer px-5 py-4">
        <div className="footer-bottom d-flex justify-content-between align-items-center border-top pt-3">
          
          <p className="mb-0 small">© 2024 THE PRECISION EDITORIAL. ALL RIGHTS RESERVED.</p>

          <div className="footer-links d-flex">
            <a href="#privacy" className="ms-3 text-decoration-none small">PRIVACY POLICY</a>
            <a href="#terms" className="ms-3 text-decoration-none small">TERMS OF SERVICE</a>
            <a href="#cookie" className="ms-3 text-decoration-none small">COOKIE SETTINGS</a>
            <a href="#access" className="ms-3 text-decoration-none small">ACCESSIBILITY</a>
          </div>

        </div>
      </footer>

    </div>
  );
};

export default Contact;