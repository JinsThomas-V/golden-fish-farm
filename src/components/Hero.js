import React from "react";
import { Carousel } from "react-bootstrap";

const Hero = () => {
  const baseURL = process.env.PUBLIC_URL;
  return (
    <Carousel fade>
      <Carousel.Item>
        <div
          className="hero-slide"
          style={{ backgroundImage: `url('${baseURL}/Images/hero1.png')` }}
        >
          <Carousel.Caption>
            <h1 style={{ color: "#ffd700", textShadow: "2px 2px 4px #000" }}>
              Welcome to Shinto's Golden Fish Farm
            </h1>
            <p style={{ color: "#fff", textShadow: "1px 1px 3px #000" }}>
              Fresh, golden, and healthy fish straight from nature.
            </p>
          </Carousel.Caption>
        </div>
      </Carousel.Item>

      <Carousel.Item>
        <div
          className="hero-slide"
          style={{ backgroundImage: `url('${baseURL}/Images/hero2.png')` }}
        >
          <Carousel.Caption>
            <h1 style={{ color: "#ffd700", textShadow: "2px 2px 4px #000" }}>
              Premium Fish, Raised with Care
            </h1>
            <p style={{ color: "#fff", textShadow: "1px 1px 3px #000" }}>
              We raise them healthy so you enjoy them happily.
            </p>
          </Carousel.Caption>
        </div>
      </Carousel.Item>

      <Carousel.Item>
        <div
          className="hero-slide"
          style={{ backgroundImage: `url('${baseURL}/Images/hero3.png')` }}
        >
          <Carousel.Caption>
            <h1 style={{ color: "#ffd700", textShadow: "2px 2px 4px #000" }}>
              Eco-Friendly Fish Farming
            </h1>
            <p style={{ color: "#fff", textShadow: "1px 1px 3px #000" }}>
              Clean tanks. Clear water. Happy fish.
            </p>
          </Carousel.Caption>
        </div>
      </Carousel.Item>
    </Carousel>
  );
};

export default Hero;
