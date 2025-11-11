import React from "react";
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Footer from "./components/Footer/Footer";


import Header from "./components/Header/Header";
import Home from "./pages/Home/Home";
import About from "./components/About/About";
import Services from "./components/Services/Services";
// Add Team and Contact components later
import Team from "./components/Team/Team";
import Contact from "./components/Contact/Contact";

function App() {
  return (
    <BrowserRouter>
      <Header />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<About />} />
        <Route path="/services" element={<Services />} />
        <Route path="/team" element={<Team />} />
        <Route path="/contact" element={<Contact />} />
      </Routes>
      <Footer/>
    </BrowserRouter>
  );
}

export default App;
