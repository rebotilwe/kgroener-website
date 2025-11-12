import React, { useState } from "react";
import "./Testimonials.css";

const testimonialsData = [
  {
    quote: "Excellent legal services with professional guidance!",
    name: "John Doe",
    role: "Business Owner",
  },
  {
    quote: "Kuvasha Groener Attorneys helped me with my property transfer seamlessly.",
    name: "Jane Smith",
    role: "Property Client",
  },
  {
    quote: "Professional and reliable! Highly recommended.",
    name: "Michael Johnson",
    role: "Entrepreneur",
  },
  {
    quote: "They handled my contract agreements perfectly.",
    name: "Sarah Lee",
    role: "Corporate Client",
  },
];

const Testimonials = () => {
  const [current, setCurrent] = useState(0);
  const length = testimonialsData.length;

  const nextSlide = () => {
    setCurrent(current === length - 1 ? 0 : current + 1);
  };

  const prevSlide = () => {
    setCurrent(current === 0 ? length - 1 : current - 1);
  };

  return (
    <section className="testimonials-section">
      <h2>What Our Clients Say</h2>
      <div className="testimonials-wrapper">
        <button className="arrow left" onClick={prevSlide}>
          &#10094;
        </button>

        <div className="testimonial-card">
          <p className="quote">"{testimonialsData[current].quote}"</p>
          <p className="client-name">{testimonialsData[current].name}</p>
          <p className="client-role">{testimonialsData[current].role}</p>
        </div>

        <button className="arrow right" onClick={nextSlide}>
          &#10095;
        </button>
      </div>
    </section>
  );
};

export default Testimonials;
