import React from "react";
import "./Footer.css";

const Footer = () => {
  return (
    <footer className="footer">
      <div className="footer-container">
        {/* Left side - firm info */}
        <div className="footer-about">
          <h3>Kuvasha Groener Attorneys</h3>
          <p>
            Providing trusted and professional legal services with integrity and care.
          </p>
        </div>

        {/* Middle - contact info */}
        <div className="footer-contact">
          <h4>Contact Us</h4>
          <p>📍 47 Saayman Road, Honeydew 2040, Johannesburg, South Africa</p>
          <p>📞 066 223 2041</p>
          <p>📧 info@kgroenerattorneys.co.za</p>
        </div>

        {/* Right side - quick links */}
        <div className="footer-links">
          <h4>Quick Links</h4>
          <ul>
            <li><a href="/">Home</a></li>
            <li><a href="/about">About</a></li>
            <li><a href="/services">Services</a></li>
            <li><a href="/team">Team</a></li>
            <li><a href="/contact">Contact</a></li>
          </ul>
        </div>
      </div>

      {/* Bottom line */}
      <div className="footer-bottom">
        <p>© {new Date().getFullYear()} Kuvasha Groener Attorneys. All Rights Reserved.</p>
      </div>
    </footer>
  );
};

export default Footer;
