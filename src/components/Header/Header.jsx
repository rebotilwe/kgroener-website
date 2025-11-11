import React from "react";
import { Link } from "react-router-dom";
import "./Header.css";

const Header = () => {
  return (
    <header className="header">
      <div className="container">
        <h1>Kuvasha Groener Attorneys</h1>
        <nav>
          <ul className="nav-links">
            {/* Scroll to Hero section on Home */}
            <li><a href="/#hero">Home</a></li>

            {/* Navigate to separate pages */}
            <li><Link to="/about">About</Link></li>
            <li><Link to="/services">Services</Link></li>
            <li><Link to="/team">Team</Link></li>
            <li><Link to="/contact">Contact</Link></li>
          </ul>
        </nav>
      </div>
    </header>
  );
};

export default Header;
