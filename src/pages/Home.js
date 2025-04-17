// src/pages/Home.js
import React from "react";
import NavbarComponent from "../components/Navbar";
import Hero from "../components/Hero";
import Fishes from "../components/Fishes";
import AboutUs from "../components/AboutUs";
import Contact from "../components/Contact";
import Footer from "../components/Footer";
import FarmProcess from "../components/FarmProcess";

function Home() {
  return (
    <>
      <NavbarComponent />
      <div className="hero-section" id="hero">
        <Hero />
      </div>

      <div id="about">
        <AboutUs />
        <FarmProcess />
      </div>

      <div id="fishes">
        <Fishes />
      </div>

      <div id="contact">
        <Contact />
      </div>
      <Footer />
    </>
  );
}

export default Home;
