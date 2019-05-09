import React from "react";
import "./_Footer.scss";

class Footer extends React.Component {
  render() {
    return (
      <footer className="main-footer">
        <div className="footer-logo footer-section">
          <h2 className="logo">
            <a href="#"> MovieTracker </a>
          </h2>
        </div>
        <div className="footer-links footer-section">
          <h4>Get started</h4>
          <ul>
            <li>
              <a href="#">Home</a>
            </li>
            <li>
              <a href="#">Sign up</a>
            </li>
            <li>
              <a href="#">Downloads</a>
            </li>
          </ul>
        </div>
        <div className="footer-about footer-section">
          <h4>About us</h4>
          <ul>
            <li>
              <a href="#">Company Information</a>
            </li>
            <li>
              <a href="#">Contact us</a>
            </li>
            <li>
              <a href="#">Reviews</a>
            </li>
          </ul>
        </div>
        <div className="footer-support footer-section">
          <h4>Support</h4>
          <ul>
            <li>
              <a href="#">FAQ</a>
            </li>
            <li>
              <a href="#">Help desk</a>
            </li>
            <li>
              <a href="#">Forums</a>
            </li>
          </ul>
        </div>
        <div className="footer-social footer-section">
          <div className="social-networks">
            <a href="#" className="twitter">
              <i class="fab fa-2x fa-twitter-square" />
            </a>
            <a href="#" className="facebook">
              <i class="fab fa-2x fa-facebook-square" />
            </a>
            <a href="#" className="google">
              <i class="fab fa-2x fa-google-plus-square" />
            </a>
          </div>
        </div>
      </footer>
    );
  }
}

export default Footer;
