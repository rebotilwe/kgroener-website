import React from "react";
import "./Contact.css";

const Contact = () => {
  return (
    <section className="contact-section">
      <div className="container">
        <h2>Contact Us</h2>
        <p>If you have any questions or need legal assistance, feel free to get in touch with us.</p>

        <div className="contact-grid">
          {/* Contact Form */}
          <div className="contact-form">
            <form action="#" method="POST">
              <label htmlFor="name">Full Name</label>
              <input type="text" id="name" name="name" placeholder="Your Name" required />

              <label htmlFor="email">Email</label>
              <input type="email" id="email" name="email" placeholder="Your Email" required />

              <label htmlFor="message">Message</label>
              <textarea id="message" name="message" placeholder="Your Message" rows="5" required></textarea>

              <button type="submit">Send Message</button>
            </form>
          </div>

          {/* Contact Details */}
          <div className="contact-info">
            <h3>Our Contact Information</h3>
            <p>📍 47 Beach Road, Strand, Western Cape, South Africa</p>
            <p>📞 +27 21 823 9471</p>
            <p>📧 info@kgroenerattorneys.co.za</p>
            <h4>Office Hours</h4>
            <p>Monday – Friday: 08:00 – 17:00</p>
          </div>
        </div>

        {/* Map Below */}
        <div className="contact-map">
          <iframe
            title="K. Groener Attorneys Location"
            src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3300.123456789!2d18.835!3d-34.118!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x1!2sK%20Groener%20Attorneys!5e0!3m2!1sen!2sza!4v1699999999999"
            width="100%"
            height="300"
            style={{ border: 0 }}
            allowFullScreen=""
            loading="lazy"
          ></iframe>
        </div>
      </div>
    </section>
  );
};

export default Contact;
