import React, { useState } from "react";
import "./Testimonials.css";

const testimonialsData = [
  {
    quote:
      "I have never come across a more compassionate and focused firm. Kuvasha really makes the effort when providing a service – she doesn’t take on a matter just for the income but shows passion in her work and turnaround time.",
    name: "Karen Kannigadu",
  },
  {
    quote:
      "I was surprised with the speedy response I received from Kuvasha Groener Attorneys. The professional advice and services rendered were impeccable. Thank you for making my issue an easy and simple one to resolve.",
    name: "Elton Moodley",
  },
  {
    quote:
      "I recently had the privilege of working with Kuvasha Groener Attorneys, and I cannot recommend her highly enough. Her professionalism and dedication were remarkable. She went above and beyond what I expected.",
    name: "Sharlini Lingiah",
  },
  {
    quote:
      "Thank you Kuvasha for the professional and efficient service provided with the property transfer process. Your speedy and friendly service is sterling, and we wish you every success.",
    name: "Sabashnee Nadasen",
  },
  {
    quote:
      "Thanks for your excellent service Kuvasha. You dealt with the transfer of our property with so much compassion and kept us updated every step of the way. Sincerely appreciated.",
    name: "Lynette van Vuuren",
  },
  {
    quote:
      "I received very professional and prompt service from Kuvasha who is extremely friendly and knowledgeable. Dedicated to assisting her clients and finding solutions for any legal needs.",
    name: "Pheladi Mantloana",
  },
  {
    quote:
      "Professional and efficient services provided by the attorney in respect of a contractual dispute.",
    name: "Karunesh Pillay",
  },
  {
    quote: "Extremely professional and knowledgeable.",
    name: "Nomsa Skosana",
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
          <p className="client-name">— {testimonialsData[current].name}</p>
        </div>

        <button className="arrow right" onClick={nextSlide}>
          &#10095;
        </button>
      </div>
    </section>
  );
};

export default Testimonials;
