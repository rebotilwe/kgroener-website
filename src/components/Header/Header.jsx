import React, { useState } from "react";
import { Link } from "react-router-dom";
import "./Header.css";

import logo from '../../assets/images/logo.png'

const Header = () => {
  const [menuOpen, setMenuOpen] = useState(false);

  const toggleMenu = () => setMenuOpen(!menuOpen);
  const handleLinkClick = () => setMenuOpen(false);

  return (
    <header className="header">
      <div className="container">
        {/* Logo Section */}
        <div className="logo-section">
          <img src={logo} alt="Kuvasha Groener Attorneys Logo" className="logo-img" />
          <h1 className="logo-text">Kuvasha Groener Attorneys</h1>
        </div>

        {/* Hamburger Menu */}
        <div
          className={`hamburger ${menuOpen ? "active" : ""}`}
          onClick={toggleMenu}
        >
          <span></span>
          <span></span>
          <span></span>
        </div>

        {/* Navigation */}
        <nav className={menuOpen ? "open" : ""}>
          <ul className="nav-links">
            <li>
              <a href="/#hero" onClick={handleLinkClick}>Home</a>
            </li>
            <li>
              <Link to="/about" onClick={handleLinkClick}>About</Link>
            </li>
            <li>
              <Link to="/services" onClick={handleLinkClick}>Services</Link>
            </li>
            <li>
              <Link to="/team" onClick={handleLinkClick}>Team</Link>
            </li>
            <li>
              <Link to="/contact" onClick={handleLinkClick}>Contact</Link>
            </li>
          </ul>
        </nav>
      </div>
    </header>
  );
};

export default Header;
