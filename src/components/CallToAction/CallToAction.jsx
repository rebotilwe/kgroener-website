import React from "react";
import "./CallToAction.css";

const CallToAction = () => {
  return (
    <section className="cta-section">
      <div className="container">
        <h2>Ready to Get Expert Legal Assistance?</h2>
        <p>
          Contact Kuvasha Groener Attorneys today and let us guide you through your legal matters with confidence and professionalism.
        </p>
        <a href="/contact" className="cta-button">
          Schedule a Consultation
        </a>
      </div>
    </section>
  );
};

export default CallToAction;
