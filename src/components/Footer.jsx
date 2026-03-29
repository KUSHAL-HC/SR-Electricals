import React from 'react'
import conclusion from '../assets/conclusion.png'

const Footer = () => {
  return (
    <div style={{position:'relative',zIndex:"1"}}>
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
  )
}

export default Footer
