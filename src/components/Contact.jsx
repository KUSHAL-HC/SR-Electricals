import React from 'react';
import './Contact.css';

const Contact = () => {
  return (
    <div className="precision-container">
      <header className="hero text-white px-5 py-5">
        <div className="content-wrapper">
          <span className="badge">CONNECT WITH US</span>
          <h1 className="my-3 display-5">Get in Touch</h1>
          <p className="opacity-75">
            Whether you're looking for expert editorial guidance or have a specific project in mind, 
            our team is ready to help you craft your narrative with architectural precision.
          </p>
        </div>
      </header>

      <main className="contact-section bg-light px-5 py-5">
        <div className="content-grid row g-4">
          
          <section className="form-card col-lg-8 bg-white p-4 rounded shadow-sm">
            <h2>Send a Message</h2>

            <form>
              <div className="form-row row g-3">
                
                <div className="form-group col-md-6">
                  <label className="form-label text-muted small fw-bold">FULL NAME</label>
                  <input type="text" className="form-control" placeholder="John Doe" />
                </div>

                <div className="form-group col-md-6">
                  <label className="form-label text-muted small fw-bold">EMAIL ADDRESS</label>
                  <input type="email" className="form-control" placeholder="john@example.com" />
                </div>
              </div>

              <div className="form-group mt-3">
                <label className="form-label text-muted small fw-bold">SUBJECT</label>
                <input type="text" className="form-control" placeholder="How can we help?" />
              </div>

              <div className="form-group mt-3">
                <label className="form-label text-muted small fw-bold">MESSAGE</label>
                <textarea className="form-control" rows="6" placeholder="Tell us more about your inquiry..."></textarea>
              </div>

              <button type="submit" className="btn btn-primary mt-3 px-4 py-2">
                Send Message <span>➤</span>
              </button>
            </form>
          </section>

          <aside className="sidebar col-lg-4">
            
            <div className="info-block mb-4">
              <h3>Our Studio</h3>

              <div className="studio-details d-flex gap-3 align-items-start">
                <div className="icon-box-blue">📍</div>
                <div>
                  <strong>Manhattan HQ</strong><br />
                  245 Lexington Avenue, Suite 400<br />
                  New York, NY 10016
                </div>
              </div>

              <div className="map-placeholder mt-3 position-relative rounded"></div>
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