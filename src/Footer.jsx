import React from 'react';
import { NavLink } from 'react-router-dom';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faFacebook, faTwitter, faInstagram, faLinkedin, faYoutube } from '@fortawesome/free-brands-svg-icons';
import './footer.css'
const Footer = () => {
  return (
    <footer className="bg-light py-3 ">
      <div className="container d-flex justify-content-between align-items-center">
        <div>
          <NavLink to="/" className="text-dark text-decoration-none fs-4 fw-bold">Brand</NavLink>
        </div>
        <div className="d-flex align-items-center ">
          <ul className="list-unstyled d-flex gap-3 mb-0  ">
            <li><a href="#" className="text-dark text-decoration-none"><FontAwesomeIcon icon={faFacebook} /></a></li>
            <li><a href="#" className="text-dark text-decoration-none"><FontAwesomeIcon icon={faTwitter} /></a></li>
            <li><a href="#" className="text-dark text-decoration-none"><FontAwesomeIcon icon={faInstagram} /></a></li>
            <li><a href="#" className="text-dark text-decoration-none"><FontAwesomeIcon icon={faLinkedin} /></a></li>
            <li><a href="#" className="text-dark text-decoration-none"><FontAwesomeIcon icon={faYoutube} /></a></li>
          </ul>
       
        </div>
     
      </div>
      <div className="container text-center mt-3">
              <button className="btn btn-primary mt-3 mt-md-0 ms-md-3">Purchase Now</button>
        <ul className="list-inline mb-0">
          <li className="list-inline-item"><NavLink to="/" className="text-dark text-decoration-none">Home</NavLink></li>
          <li className="list-inline-item"><NavLink to="/about" className="text-dark text-decoration-none">About</NavLink></li>
          <li className="list-inline-item"><NavLink to="/contact" className="text-dark text-decoration-none">Contact</NavLink></li>
        </ul>
        <p className="mt-2">@2023 Your Company. All rights reserved.</p>
      </div>
    </footer>
  );
};

export default Footer;
