import React from "react";
import "./About.css";
import heroImage from "../../assets/images/hero.webp"; // ✅ import the image

const About = () => {
  return (
    <section className="about-section">
      <div className="container">
        <div
          className="about-image"
          style={{ backgroundImage: `url(${heroImage})` }} // ✅ use variable
          aria-label="Law firm consultation"
          role="img"
        />
        <div className="about-text">
          <h2>About Us</h2>
          <p>
            Welcome to <strong>Kuvasha Groener Attorneys</strong>, a vibrant and forward-thinking law firm.
            We are proud to be 100% black female-owned.
          </p>
          <p>
            We specialise in various fields of law such as property law, wills and estates, contractual law,
            and notarial services.
          </p>
          <p>
            Our approach is characterised by expert legal guidance delivered with a compassionate touch.
            We prioritise cost-effective solutions, timely delivery, clear communication, and personalised professional service.
          </p>
          <p>
            Whether you are an individual seeking legal counsel or a corporation needing a comprehensive legal strategy,
            we are committed to protecting your interests while fostering a supportive environment grounded in transparency, integrity, and efficiency.
          </p>
        </div>
      </div>
    </section>
  );
};

export default About;
