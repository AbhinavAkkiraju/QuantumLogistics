import React from 'react';
import './Footer.css';

const Footer = () => (
  <div className="footer-section-padding">
    <div className="footer-heading">
      <h1 className="gradient__text">Make your supply chain logistics more efficient now</h1>
    </div>

    <div className="footer-btn">
      <p>Sign up</p>
    </div>

    <div className="footer-links">
      <div className="footer-links-title">
        <h1>Quantum Logistics</h1>
        <p>Triple AAA Hacks, All Rights Reserved</p>
      </div>
      <div className="footer-links-div">
        <h4>Links</h4>
        <p>Use Now</p>
        <p>Social Media</p>
        <p>Contact</p>
      </div>
      <div className="footer-links-div">
        <h4>Company</h4>
        <p>Terms & Conditions </p>
        <p>Privacy Policy</p>
        <p>Our Mission</p>
      </div>
      <div className="footer-links-div">
        <h4>Get in touch</h4>
        <p>Triple AAA Hacks</p>
        <p>123-45678</p>
        <p>quantumlogistics@gmail.com</p>
      </div>
    </div>

    <div className="footer-copyright">
      <p>@2022 Quantum Logistics. All rights reserved.</p>
    </div>
  </div>
);

export default Footer;