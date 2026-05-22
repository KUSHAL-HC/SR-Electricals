// About.jsx

import React from "react";
import "./about.css";

import heroImage from "../assets/hero-transformer.webp";
import vision from "../assets/vision.webp";
import target from "../assets/target.webp";

const About = () => {
  return (
    <div className="about-page">

      {/* HERO SECTION */}
      <section className="hero-section">

        <div
          className="hero-div"
          style={{
            background: `url(${heroImage}) center/cover no-repeat`,
          }}
        >
          <div className="hero-overlay"></div>

          <div className="hero-content">

            <div className="hero-border">
            </div>

          </div>
        </div>

      </section>

      {/* STORY SECTION */}
      <section className="story-section">

        <div className="story-container">

          {/* TEXT */}
          <div className="story-text">

            <h1>Our Story</h1>

            <p className="storyp">
                Sri Raghavendra Electricals was founded with a vision built on over
                two decades of real industry experience, dedication, and technical
                expertise. After spending 20 years working hands-on in the electrical
                and transformer service industry, our founder gained deep knowledge
                of industrial maintenance, customer requirements, and reliable power
                solutions.

                <br /><br />

                What began as years of commitment and field experience has now grown
                into an independent venture focused on delivering trusted electrical
                services with professionalism and precision. Sri Raghavendra
                Electricals specializes in transformer maintenance, oil filtration,
                repairs, spare replacement, and industrial support services tailored
                to meet customer needs efficiently.

                <br /><br />

                Our company stands on the values of quality workmanship, transparency,
                reliability, and long-term customer relationships. With practical
                expertise and a passion for excellence, we aim to provide dependable
                electrical solutions that industries can trust for years to come.
              </p>
          </div>

          {/* IMAGE */}
          <div className="story-image">

            <img src={heroImage} alt="story" />

          </div>

        </div>

      </section>

      {/* VISION & MISSION */}
      <section className="vision-section">

        <div className="vision-heading">

          <h1 style={{color:"white"}}>Vision & Mission</h1>

          <div className="title-line"></div>

          <p>
            Through our relentless pursuit of excellence, we aim to empower
            customers with efficient and reliable energy solutions for a
            brighter future.
          </p>

        </div>

        {/* CARDS */}
        <div className="vision-cards">

          {/* VISION */}
          <div className="vision-card">

            <img src={vision} alt="vision" />

            <h2 style={{color:"white"}}>Vision</h2>

            <p>
              To provide constant reliable power efficiently
              and economically.
            </p>

          </div>

          {/* TARGET */}
          <div className="vision-card">

            <img src={target} alt="target" />

            <h2 style={{color:"white"}}>Target</h2>

            <p>
              To deliver trusted transformer services with
              innovation and industrial excellence.
            </p>

          </div>

        </div>

      </section>

    </div>
  );
};

export default About;