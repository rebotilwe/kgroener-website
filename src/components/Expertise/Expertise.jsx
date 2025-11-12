import React from "react";
import { FaBalanceScale, FaFileContract, FaUsers } from "react-icons/fa";
import "./Expertise.css";

const Expertise = () => {
  return (
    <section className="expertise-section">
      <div className="container">
        <h2>Why Choose Us</h2>
        <div className="expertise-grid">
          <div className="expertise-card">
            <FaBalanceScale className="expertise-icon" />
            <h3>Experienced Attorneys</h3>
            <p>
              Our team has extensive experience in property, corporate, contractual, and notarial law.
            </p>
          </div>
          <div className="expertise-card">
            <FaFileContract className="expertise-icon" />
            <h3>Trusted Legal Advice</h3>
            <p>
              We provide clear, actionable legal guidance tailored to your needs, protecting your interests.
            </p>
          </div>
          <div className="expertise-card">
            <FaUsers className="expertise-icon" />
            <h3>Client-Focused Service</h3>
            <p>
              Your satisfaction is our priority. We combine legal expertise with personalized support.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Expertise;
