import React from "react";
import Hero from "../../components/Hero/Hero";
import Testimonials from "../../components/Testimonials/Testimonials";
import CallToAction from "../../components/CallToAction/CallToAction";
import Expertise from "../../components/Expertise/Expertise";

const Home = () => {
  return (
    <div>
      <Hero />
      <Testimonials />
      <Expertise />
      <CallToAction />
      {/* You can add other sections here if needed */}
    </div>
  );
};

export default Home;
