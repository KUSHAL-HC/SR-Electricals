import React from "react";
import "./about.css";
import heroImage from "../assets/hero-transformer.png";
import vision from "../assets/vision.png";
import target from "../assets/target.png";

const About = () => {
  return (
    <div className="m-0 text-white fw-bold" style={{ fontFamily: "Arial, Helvetica, sans-serif" }}>
      <div style={{position: "fixed",top:100,left:0,width: "100%",height:"100%",background: `url(${heroImage}) center/cover no-repeat`,zIndex:0,}}/>
        <section className="hero-section">
            <div className="hero-div position-relative bg-center bg-cover text-white" style={{background: `url(${heroImage}) center/cover no-repeat`,height: "590px",}}>
                <div className="position-absolute top-50 border-start border-5 border-warning" style={{ left: "15%" }}>
                  <p className="fs-3 ps-2 text-white w-100 h-25">Discover Universal Power</p>
                  <p className="w-100 h-25 fs-3 ps-2 text-white">Transformer Pvt.Ltd</p>
                </div>
            </div>
        </section>
        <section className="d-flex pt-5 justify-content-center position-relative bg-white" style={{ paddingTop: "100px", zIndex: 10 }}>
        <div className="d-flex justify-content-between" style={{ width: "70%" }}>
          <div style={{ width: "400px", color: "black" }}>
            <h1 className="text-dark">Our Story</h1>
            <p className="storyp">
              Universal Power Transformer Pvt. Ltd. is a proud Indian
              manufacturer of advanced power equipment. As industry veterans,
              we have a holistic approach to growth — we prioritize understanding
              the root causes of issues, invest hours in developing competence,
              set achievable targets, and foster a robust in-house culture of
              innovation. With over 30 years of experience in manufacturing
              transformers and a team of engineers with a combined expertise of
              150+ years, we provide impeccable energy solutions. Our commitment
              to innovation and sustainable growth ensures
            </p>
          </div>
          <div>
            <img src={heroImage} alt="story" style={{ width: "400px", height: "400px" }}/>
          </div>
        </div>
      </section>

      <section className="position-relative d-flex flex-column justify-content-center align-items-center" style={{ marginTop: "100px" }}>
        <div className="d-flex flex-column align-items-center" style={{ width: "80%" }}>
          <h1 className="fs-1 text-light">Vision & Mission</h1>
          <p className="text-center w-75 mx-auto">
            Through our relentless pursuit of excellence, we aim to empower
            customers with efficient and reliable energy solutions for a brighter
            future. This further extends to our vision and mission statements.
          </p>
        </div>

        <div className="d-flex" style={{ columnGap: "10%",paddingBottom:"50px"}}>
            <div className="d-flex flex-column"  style={{backgroundColor: "rgba(0,0,0,0.469)", width:"400px",padding: "20px",alignItems: "flex-start",textAlign: "left"}}>
                  <img src={vision} alt="mission" style={{ width: "69px", height: "50px" }}/>
                  <h1 className="text-light">Vision</h1>
                  <p>To provide constant reliable power efficiently and economically</p>
            </div>
            <div className="d-flex flex-column"  style={{backgroundColor: "rgba(0,0,0,0.469)", width: "400px",padding: "20px",alignItems: "flex-start",textAlign: "left"}}>
                  <img src={target} alt="mission" style={{ width: "69px", height: "50px" }}/>
                  <h1 className="text-light">Target</h1>
                  <p>To provide constant reliable power efficiently and economically</p>
            </div>
        </div>
      </section>
    </div>
  );
};

export default About;