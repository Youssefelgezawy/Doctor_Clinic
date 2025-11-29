import React from 'react'
import './Footer.css'
import footerlogo from '../../assets/logo.png'
import facebook from '../../assets/facebook.png'
import twiter from '../../assets/twiter.png'
import instegram from '../../assets/instegram.png'
import linkedin from '../../assets/linkedin.png'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faPhone } from '@fortawesome/free-solid-svg-icons'

function Footer() {
  return (
    <div className="Footer">
        <div className="container">
            <div className="row">
                <div className="col-md-3 col-sm-6">
                    <div className="logo">
                        <img src={footerlogo} alt="footerlogo" />
                        <p>Lorem ipsum is dolor sit amet, csectetur adipiscing elit, dolore smod tempor incididunt ut labore et.</p>
                        <div className="footercontact">
                            <div className="icon">
                                <FontAwesomeIcon icon={faPhone} />
                            </div>
                            <div className="text">
                                <h6>Contact Us</h6>
                                <h3>01111111111</h3>
                            </div>
                        </div>
                    </div>
                </div>




                <div className="col-md-3 col-sm-6">
                    <h4>Quick Links</h4>
                    <ul>
                        <li>About Us</li>
                        <li>Services</li>
                        <li>Booking</li>
                        <li>Faqs</li>
                        <li>Blogs</li>
                        <li>Our Team</li>
                    </ul>
                    

                </div>




                <div className="col-md-3 col-sm-6">
                    <h4>Our Service</h4>
                    <ul>
                        <li>Dental Car</li>
                        <li>Cardice</li>
                        <li>Massege Therapy</li>
                        <li>Cardiology</li>
                        <li>Precise Diagnosis</li>
                        <li>Abmbullance Service</li>
                    </ul>

                </div>




                <div className="col-md-3 col-sm-6">
                    <h4>Subcribe</h4>
                    <form>
                        <input type="email" placeholder='Email Address' />
                        <button type='submit'>Subscribe Now</button>
                    </form>
                    <div className="socialmedia">
                        <ul>
                        <li><a href="https://facebook.com/" target="_blank" rel="noreferrer"><img src={facebook} alt="facebook" /></a></li>
                        <li><a href="https://twitter.com/" target="_blank" rel="noreferrer"><img src={twiter} alt="twiter" /></a></li>
                        <li><a href="https://www.instagram.com/" target="_blank" rel="noreferrer"><img src={instegram} alt="instegram" /></a></li>
                        <li><a href="https://www.linkedin.com/" target="_blank" rel="noreferrer"><img src={linkedin} alt="linkedin" /></a></li>
                    </ul>
                    </div>
                </div>
                <hr />

                <div className="footer-buttom">
                    <p>Copyright © 2025 Design & Developed by <span>Youssef Elgezawy</span></p>
                </div>

            </div>
        </div>
    </div>
  )
}

export default Footer;