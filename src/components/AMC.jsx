import React from 'react'
import { Link } from 'react-router-dom'
import heroimage from "../assets/hero-transformer.png"

const AMC = () => {

let downloadBroucher = ()=>{
    let link = document.createElement("a");
    link.href = "/broucher.pdf";
    link.download = "Company-broucher.pdf";
    document.body.appendChild(link);
    link.click(); 
    document.body.removeChild(link);
}


  return (
    <div>
       <section>
        <div className="AMC-hero-div position-relative text-white" style={{background: `url(${heroimage}) center / cover no-repeat`,height:"590px"}}>
             <div className="position-absolute  top-50 border-start border-5 border-warning"  style={{left:"15%",fontSize:"40px"}}>
                <p className="ps-2 text-white text-white m-0 fw-bold" style={{textAlign:"start"}}>Annual</p>
                <p className="ps-2  text-white text-white m-0 fw-bold">Maintenance Contracts</p>
            </div>
        </div>
    </section>


    <section className="d-flex flex-column align-items-center" style={{margin:"100px 0px 100px 0px"}}>
        <h1 className='text-dark'>Find an AMC Plan That Works For You</h1>
        <p>At UPT, we offer two plans under our Annual Maintenance Contract - Comprehensive and Non-comprehensive.</p>
        <button type="button" className="btn btn-success" onClick={downloadBroucher}>Download Brochure</button>
    </section>

    <section  className="d-flex flex-column justify-content-center align-items-center" style={{alignItems:"stretch",textAlign:"center",gap:"80px"}}>
        <div className="d-flex justify-content-center align-items-center" style={{width:"80%",gap:"10%"}}>
          <div className="text-white d-flex flex-column h-100" style={{width:"450px",minHeight:"530px",backgroundColor:"rgb(218,43,46)",border:"1px solid transparent",borderRadius:"10px",padding:"40px",boxShadow:"4px 7px 20px rgba(0,0,0,0.4)",rowGap:"40px"}} >
              <h1>Comprehensive AMC Plan</h1>
              <ul className="d-flex flex-column gap-3" style={{padding:"0"}}>
                      <li type="none" className="d-flex gap-2 text-start p-0">
                          <svg width="24" height="24" viewBox="0 0 24 24"><circle cx="12" cy="12" r="12" fill="#e6e6e6" /><path d="M9.2 13.6L6.8 11.2C6.5 10.9 6 10.9 5.7 11.2C5.4 11.5 5.4 12 5.7 12.3L8.7 15.3C9 15.6 9.5 15.6 9.8 15.3L18.3 6.8C18.6 6.5 18.6 6 18.3 5.7C18 5.4 17.5 5.4 17.2 5.7L9.2 13.6Z"fill="#E53935"/></svg>
                          <p>Free repair/replacement of faulty materials</p>
                      </li>
                      <li type="none" className="d-flex gap-2 text-start p-0">
                          <svg width="24" height="24" viewBox="0 0 24 24"><circle cx="12" cy="12" r="12" fill="#e6e6e6" /><path d="M9.2 13.6L6.8 11.2C6.5 10.9 6 10.9 5.7 11.2C5.4 11.5 5.4 12 5.7 12.3L8.7 15.3C9 15.6 9.5 15.6 9.8 15.3L18.3 6.8C18.6 6.5 18.6 6 18.3 5.7C18 5.4 17.5 5.4 17.2 5.7L9.2 13.6Z"fill="#E53935"/></svg>
                          <p>No-restriction warranty</p>
                      </li>
                      <li type="none" className="d-flex gap-2 text-start p-0">
                          <svg width="24" height="24" viewBox="0 0 24 24"><circle cx="12" cy="12" r="12" fill="#e6e6e6" /><path d="M9.2 13.6L6.8 11.2C6.5 10.9 6 10.9 5.7 11.2C5.4 11.5 5.4 12 5.7 12.3L8.7 15.3C9 15.6 9.5 15.6 9.8 15.3L18.3 6.8C18.6 6.5 18.6 6 18.3 5.7C18 5.4 17.5 5.4 17.2 5.7L9.2 13.6Z"fill="#E53935"/></svg>
                          <p>No-restriction warranty</p>
                      </li>
                      <li type="none" className="d-flex gap-2 text-start p-0">
                          <svg width="24" height="24" viewBox="0 0 24 24"><circle cx="12" cy="12" r="12" fill="#e6e6e6" /><path d="M9.2 13.6L6.8 11.2C6.5 10.9 6 10.9 5.7 11.2C5.4 11.5 5.4 12 5.7 12.3L8.7 15.3C9 15.6 9.5 15.6 9.8 15.3L18.3 6.8C18.6 6.5 18.6 6 18.3 5.7C18 5.4 17.5 5.4 17.2 5.7L9.2 13.6Z"fill="#E53935"/></svg>
                          <p>No-restriction warranty</p>
                      </li>
              </ul>
          </div>

          <div className="text-dark d-flex flex-column bg-white h-100" style={{width:"450px",minHeight:"530px",border:"1px solid transparent",borderRadius:"10px",padding:"40px",boxShadow:"4px 7px 20px rgba(0,0,0,0.4)",rowGap:"40px"}} >
              <div>
                  <h1 className='text-dark'>Non-Comprehensive AMC Plan</h1>
              </div>
              <ul className="d-flex flex-column gap-3" style={{padding:"0"}}>
                      <li type="none" className="d-flex gap-2 text-start p-0">
                          <svg width="24" height="24" viewBox="0 0 24 24"><circle cx="12" cy="12" r="12" fill="#e6e6e6" /><path d="M9.2 13.6L6.8 11.2C6.5 10.9 6 10.9 5.7 11.2C5.4 11.5 5.4 12 5.7 12.3L8.7 15.3C9 15.6 9.5 15.6 9.8 15.3L18.3 6.8C18.6 6.5 18.6 6 18.3 5.7C18 5.4 17.5 5.4 17.2 5.7L9.2 13.6Z"fill="#E53935"/></svg>
                          <p>No labour charges on repair/replacement of faulty materials</p>
                      </li>
                      <li type="none" className="d-flex gap-2 text-start p-0">
                          <svg width="24" height="24" viewBox="0 0 24 24"><circle cx="12" cy="12" r="12" fill="#e6e6e6" /><path d="M9.2 13.6L6.8 11.2C6.5 10.9 6 10.9 5.7 11.2C5.4 11.5 5.4 12 5.7 12.3L8.7 15.3C9 15.6 9.5 15.6 9.8 15.3L18.3 6.8C18.6 6.5 18.6 6 18.3 5.7C18 5.4 17.5 5.4 17.2 5.7L9.2 13.6Z"fill="#E53935"/></svg>
                          <p>Quarterly preventive maintenance</p>
                      </li>
              </ul>
          </div>
    </div>
    <div style={{marginBottom:"100px"}}>
        <h1 className="text-dark">To find a plan that suits your requirements, get in touch.</h1>
        <Link type="button" className="btn btn-danger" style={{ textDecoration: "none" }} to="/Contact">Contact Us</Link>
    </div>
    </section>    
    </div>
  )
}

export default AMC
    