import React from "react";
import './Footer.scss';
import logo from '../../assets/closet.png';

const Footer = () => {
  return (
    <div className="footer">
      <div className="hero">
        <img src={logo} alt="Logo" />
        <h2>Follow Us On</h2>
        <div className="social-links">
          <a href="">
            <i className="fab fa-facebook-f"></i>
          </a>
          <a href="">
            <i className="fab fa-instagram"></i>
          </a>
          <a href="">
            <i className="fab fa-twitter"></i>
          </a>
          <a href="">
            <i className="fab fa-github"></i>
          </a>
          <a href="">
            <i className="fab fa-linkedin-in"></i>
          </a>
        </div>
      </div>
    </div>
  );
};

export default Footer;
