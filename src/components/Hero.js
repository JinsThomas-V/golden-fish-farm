import React from "react";
import { Carousel } from "react-bootstrap";

const Hero = () => {
  return (
    <Carousel fade>
      <Carousel.Item>
        <div
          className="hero-slide"
          style={{ backgroundImage: `url('/Images/hero1.png')` }}
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
          style={{ backgroundImage: `url('/Images/hero2.png')` }}
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
          style={{ backgroundImage: `url('/Images/hero3.png')` }}
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
// import React from 'react';
// import { Container, Row, Col } from 'react-bootstrap';

// const Hero = () => {
//   return (
//     <div style={{ padding: '60px 0', backgroundColor: '#e6f2ff' }}>
//       <Container>
//         <h1 className="text-center mb-4" style={{ fontWeight: 'bold' }}>
//           Welcome to Shinto's Golden Fish Farm
//         </h1>
//         <p className="text-center mb-5">
//           Fresh, golden, and healthy fish — raised with love in eco-friendly waters.
//         </p>
//         <Row>
//           <Col md={4}>
//             <img src="/Images/Hero-1.jpg" alt="Golden Fish 1" className="img-fluid rounded shadow" />
//           </Col>
//           <Col md={4}>
//             <img src="/Images/Hero-2.jpg" alt="Golden Fish 2" className="img-fluid rounded shadow" />
//           </Col>
//           <Col md={4}>
//             <img src="/Images/Hero-3.jpg" alt="Golden Fish 3" className="img-fluid rounded shadow" />
//           </Col>
//         </Row>
//       </Container>
//     </div>
//   );
// };

// export default Hero;
