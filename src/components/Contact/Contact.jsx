import React, { useState } from "react";
import "./Contact.css";

const Contact = () => {
  const [status, setStatus] = useState(""); // track submission status

  const handleSubmit = async (e) => {
    e.preventDefault();
    const form = e.target;

    const data = new FormData(form);

    try {
      const response = await fetch(form.action, {
        method: form.method,
        body: data,
        headers: {
          Accept: "application/json",
        },
      });

      if (response.ok) {
        setStatus("SUCCESS");
        form.reset();
      } else {
        setStatus("ERROR");
      }
    } catch (error) {
      setStatus("ERROR");
    }
  };

  return (
    <section className="contact-section">
      <div className="container">
        <h2>Contact Us</h2>
        <p>If you have any questions or need legal assistance, feel free to get in touch with us.</p>

        <div className="contact-grid">
          <div className="contact-form">
            <form
              action="https://formspree.io/f/xnnlqznv"
              method="POST"
              onSubmit={handleSubmit}
            >
              <label htmlFor="name">Full Name</label>
              <input type="text" id="name" name="name" placeholder="Your Name" required />

              <label htmlFor="email">Email</label>
              <input type="email" id="email" name="email" placeholder="Your Email" required />

              <label htmlFor="message">Message</label>
              <textarea id="message" name="message" placeholder="Your Message" rows="5" required />

              <button type="submit">Send Message</button>

              {status === "SUCCESS" && <p className="success-msg">Thanks! Your message has been sent.</p>}
              {status === "ERROR" && <p className="error-msg">Oops! There was an error. Please try again.</p>}
            </form>
          </div>

          <div className="contact-info">
            <h3>Our Contact Information</h3>
            <p>📍 Falcon Glen, 47 Saayman Road, Honeydew 2040, Johannesburg, South Africa</p>
            <p>📞 +27 66 223 2041</p>
            <p>📧 info@kgroenerattorneys.co.za</p>
            <h4>Office Hours</h4>
            <p>Monday – Friday: 08:00 – 17:00</p>
          </div>

        </div>

        <div className="contact-map">
          <iframe
            title="Kuvasha Groener Attorneys Location"
            src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3306.123456789!2d28.0115123!3d-26.0036548!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x1e950ca93abcdef%3A0x1234abcd5678ef90!2s47%20Saayman%20Rd%2C%20Honeydew%2C%20Johannesburg%2C%202040%2C%20South%20Africa!5e0!3m2!1sen!2sza!4v1699999999999"
            width="100%"
            height="400"
            style={{ border: 0 }}
            allowFullScreen=""
            loading="lazy"
          />
        </div>
      </div>
    </section>
  );
};

export default Contact;
