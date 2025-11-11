import React from "react";
import { FaFileContract, FaHome, FaUserShield, FaPenFancy } from "react-icons/fa";
import "./Services.css";

const Services = () => {
  return (
    <section className="services-section">
      <div className="container">
        <h2>Our Services</h2>
        <div className="services-grid">
          <div className="service-card">
            <FaFileContract className="service-icon" />
            <h3>Contracts</h3>
            <p>
              We excel in drafting, reviewing, and negotiating contracts to ensure your business agreements are clear, enforceable,
              and protect your interests. This includes shareholder agreements, employment contracts, NDAs, and loan agreements.
            </p>
          </div>
          <div className="service-card">
            <FaHome className="service-icon" />
            <h3>Property</h3>
            <p>
              Our conveyancing services provide clients with a seamless and efficient property transaction experience —
              from initial agreements to the final transfer of ownership.
            </p>
          </div>
          <div className="service-card">
            <FaUserShield className="service-icon" />
            <h3>Wills & Trusts</h3>
            <p>
              We help individuals create legally binding wills and trusts to protect assets and loved ones,
              ensuring peace of mind and a secure legacy.
            </p>
          </div>
          <div className="service-card">
            <FaPenFancy className="service-icon" />
            <h3>Notarial Services</h3>
            <p>
              Our Notary Public provides professional notarial services, including certification of documents,
              drafting of notarial contracts, and registration at the deeds office.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Services;
