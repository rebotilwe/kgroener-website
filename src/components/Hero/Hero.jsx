import React from "react";
import "./Hero.css";
import heroImage from "../../assets/images/header.png";

const Hero = () => {
  return (
    <section id="hero" className="hero-section" style={{ 
      background: `url(${heroImage}) center/cover no-repeat`
    }}>
      <div className="hero-content">
        <h1>Welcome to Kuvasha Groener Attorneys</h1>
        <p>Professional legal services with a personal touch.</p>
      </div>
    </section>
  );
};

export default Hero;
