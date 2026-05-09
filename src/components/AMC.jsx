import React from 'react'
import { Link } from 'react-router-dom'
import "./style/amc.css"
import heroimage from "../assets/hero-transformer.png"

const AMC = () => {
  return (
    <div>

      {/* HERO SECTION */}
      <section>

        <div
          className="AMC-hero-div"
          style={{
            background: `url(${heroimage}) center / cover no-repeat`,
          }}
        >

          <div className="amc-overlay"></div>

          <div className="amc-hero-content">

            <div className="amc-hero-border">

              <p className="amc-subtitle">
                Annual
              </p>

              <h1 className="amc-title">
                Maintenance Contracts
              </h1>

            </div>

          </div>

        </div>

      </section>

      {/* INTRO SECTION */}
      <section className="amc-intro-section">

        <h1 className="amc-heading">
          Find an AMC Plan That Works For You
        </h1>

        <p className="amc-para">
          At Sri Raghavendra Electricals, we offer two plans under our
          Annual Maintenance Contract - Comprehensive and Non-comprehensive.
        </p>

      </section>

      {/* CARDS SECTION */}
      <section className="amc-cards-section">

        {/* CARD 1 */}
        <div className="amc-card red-card">

          <h1>Comprehensive AMC Plan</h1>

          <ul>

            <li>
              <span>✔</span>
              <p>Free repair/replacement of faulty materials</p>
            </li>

            <li>
              <span>✔</span>
              <p>No-restriction warranty support</p>
            </li>

            <li>
              <span>✔</span>
              <p>Routine preventive maintenance</p>
            </li>

            <li>
              <span>✔</span>
              <p>Quick service response and support</p>
            </li>

          </ul>

        </div>

        {/* CARD 2 */}
        <div className="amc-card white-card">

          <h1>Non-Comprehensive AMC Plan</h1>

          <ul>

            <li>
              <span>✔</span>
              <p>No labour charges on repair/replacement</p>
            </li>

            <li>
              <span>✔</span>
              <p>Quarterly preventive maintenance</p>
            </li>

            <li>
              <span>✔</span>
              <p>Affordable maintenance solutions</p>
            </li>

            <li>
              <span>✔</span>
              <p>Professional transformer servicing</p>
            </li>

          </ul>

        </div>

      </section>

      {/* CONTACT SECTION */}
      <section className="contact-amc-section">

        <h1>
          To find a plan that suits your requirements,
          get in touch.
        </h1>

        <Link
          className="btn btn-danger px-4 py-2"
          style={{ textDecoration: "none" }}
          to="/Contact"
        >
          Contact Us
        </Link>

      </section>

    </div>
  )
}

export default AMC