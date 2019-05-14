import React from "react";
import "./_Footer.scss";

const Footer = () => {
  return (
    <footer className="main-footer">
      <div className="footer-logo footer-section">
        <h2 className="logo">
          <p> MovieTracker </p>
        </h2>
      </div>
      <div className="footer-links footer-section">
        <h4>Get started</h4>
        <ul>
          <li>
            <p>Home</p>
          </li>
          <li>
            <p>Sign up</p>
          </li>
          <li>
            <p>Downloads</p>
          </li>
        </ul>
      </div>
      <div className="footer-about footer-section">
        <h4>About us</h4>
        <ul>
          <li>
            <p>Company Information</p>
          </li>
          <li>
            <p>Contact us</p>
          </li>
          <li>
            <p>Reviews</p>
          </li>
        </ul>
      </div>
      <div className="footer-support footer-section">
        <h4>Support</h4>
        <ul>
          <li>
            <p>FAQ</p>
          </li>
          <li>
            <p>Help desk</p>
          </li>
          <li>
            <p>Forums</p>
          </li>
        </ul>
      </div>
      <div className="footer-social footer-section">
        <div className="social-networks">
          <div className="twitter">
            <i className="fab fa-2x fa-twitter-square" />
          </div>
          <div className="facebook">
            <i className="fab fa-2x fa-facebook-square" />
          </div>
          <div className="google">
            <i className="fab fa-2x fa-google-plus-square" />
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
