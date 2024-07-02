import React from 'react';
import "./footerHero.css";
// import { FaFacebook, FaInstagram, FaTwitter, FaLinkedin, FaEnvelope, FaPhone, FaMapMarkerAlt } from 'react-icons/fa';
import { Col, Container, Row, Spinner } from "react-bootstrap";
import { Link } from "react-router-dom";
const footerHero = () => {
  return (
    <footer className="footer">
      <div className='container'>
     
      <div className='upper-section'>
        <div className="footer-section">
       
          <img src="images/footer-logo.png" alt="Website Logo" className="logo" />
          <p className="footer-text">Elevate your grooming game with HB Care. Quality products, exceptional service, and endless support await. Join us today and experience the difference for yourself. </p>

          <div className="social-icons">
            <img src="/images/Group-1885.svg" alt="Facebook" className="logo-left" />
            <img src="/images/Group-1884.svg" alt="Facebook" className="logo-left" />
            <img src="/images/Group-1883.svg" alt="Facebook" className="logo-left" />
            <img src="/images/Group-1886.svg" alt="Facebook" className="logo-left" />


          </div>
        </div>

        {/* Part 2: Pages list */}
        <div className="footer-sect">

          <ul className='ul-segment'>
            <h2 className='head-h1'>QuickLinks</h2>
            <li><a href="#">Home</a></li>
            <li><a href="#">About</a></li>
            <li><a href="#">Gallery</a></li>
            
      
            <li><a href="#">Blogs</a></li>
            <li><a href="#">Contact</a></li>


          </ul>
          
        </div>
        <div className="footer-second-section">

          <ul className='ul-segment-second'>
            <h2 className='head-h1'>Terms & Updates</h2>
            <li><a href="#">Refund Policy</a></li>
            <li><a href="#">Privacy Policy</a></li>
          
            
            


          </ul>
          
        </div>



        <div className="footer-section-right">
        <h2 className='head-h1'>Get In Touch</h2>
          <p className='specific-paragraph'>
          
            <img src="/images/gmail-icon.png" alt="Envelope" className="contact-icon" /> 
            <a href="mailto:sales@hbcarecanada.com" className="contact-link">sales@hbcarecanada.com</a>
          </p>
          <p className='specific-paragraph'>
            <img src="/images/phone-icon.png" alt="Phone" className="contact-icon" /> 
            <a href="tel:+16478366940, +12892755050" className="contact-link">647-836-6940, 289-275-5050</a>
          </p>
          <p className='specific-paragraph'>
            <img src="/images/location-icon.png" alt="Map Marker" className="contact-icon" /> 
            <a href="https://www.google.com/maps/search/?api=1&query=50+Steeles+Ave+E,+Unit+218,+Milton,+ON+L9T+4W9" 
     target="_blank" 
     rel="noopener noreferrer"
     className="contact-link"
  >
    50 Steeles Ave E, Unit 218,<br/> Milton ON L9T 4W9
  </a>
          </p>
        </div>

      </div>



      <div className="blog-subfooter">
        <hr className="divider" />
        <div className="footer-content">
          <p className="p-text">Made With ❤️ By <a href="https://www.creativesquad.ca" target="blank">Creative Squad </a></p>
          <p className="p-text text-center">&copy; 2024 HB Care Canada  |  All rights reserved</p>

          <div className="social-icons-bottom">
            <img src="/images/Icon-awesome-cc-visa.svg" alt="Facebook" className="icons" />
            <img src="/images/Icon-awesome-stripe.svg" alt="Instagram" className="icons" />
            <img src="/images/Icon-awesome-paypal.svg" alt="LinkedIn" className="icons" />
            <img src="/images/Icon-awesome-cc-mastercard.svg" alt="LinkedIn" className="icons" />
            <img src="/images/Icon-awesome-amazon-pay.svg" alt="Twitter" className="icons" />

          </div>

        </div>

      </div>




    
    </div>
    </footer>
  );
};

export default footerHero