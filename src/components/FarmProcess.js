import React from "react";
import { Container, Row, Col, Carousel } from "react-bootstrap";

const FarmProcess = () => {
  const baseURL = process.env.PUBLIC_URL;
  return (
    <div style={{ backgroundColor: "#fff8dc", padding: "60px 0" }}>
      <Container>
        <Row className="align-items-center">
          {/* Text section on the left */}
          <Col md={6}>
            <h2 style={{ fontWeight: "bold", marginBottom: "20px" }}>
              From Our Farm to Your Business
            </h2>
            <p>
              With <strong>15 years of experience</strong>, Shinto’s Golden Fish
              Farm is committed to excellence in aquaculture. Our farming
              methods focus on quality, sustainability, and care at every stage.
            </p>
            <p>
              Shinto’s Golden Fish Farm is also a trusted supplier to{" "}
              <strong>Marine Expo teams throughout India</strong>, contributing
              to aquaculture exhibitions and industry events nationwide.
            </p>
            <p>
              We serve <strong>only wholesale buyers</strong>, maintaining
              consistency and quality for bulk supply across India.{" "}
              <strong>
                Retail customers are accommodated through farm-direct pickups
                only
              </strong>
              , ensuring traceability and freshness.
            </p>
            <p>
              We raise our fish in naturally sourced ponds, ensuring they grow
              in an environment close to their natural habitat. Clean water,
              balanced feed, and minimal stress help promote healthy growth
              under the close supervision of our experienced team.
            </p>
            <p>
              We follow eco-conscious and hygienic farming protocols to deliver
              the best quality to our customers. From hatchery to harvest, our
              process reflects patience, dedication, and respect for nature.
            </p>
          </Col>

          {/* Video carousel on the right */}
          {/* <Col md={6} className="mt-4 mt-md-0">
            <Carousel fade interval={4000}>
              <Carousel.Item>
                <video
                  className="d-block w-100"
                  autoPlay
                  loop
                  muted
                  playsInline
                  style={{ borderRadius: "10px" }}
                >
                  <source src="/Videos/video1.mp4" type="video/mp4" />
                  Your browser does not support the video tag.
                </video>
              </Carousel.Item>
              <Carousel.Item>
                <video
                  className="d-block w-100"
                  autoPlay
                  loop
                  muted
                  playsInline
                  style={{ borderRadius: "10px" }}
                >
                  <source src="/Videos/video2.mp4" type="video/mp4" />
                  Your browser does not support the video tag.
                </video>
              </Carousel.Item>
              <Carousel.Item>
                <video
                  className="d-block w-100"
                  autoPlay
                  loop
                  muted
                  playsInline
                  style={{ borderRadius: "10px" }}
                >
                  <source src="/Videos/video3.mp4" type="video/mp4" />
                  Your browser does not support the video tag.
                </video>
              </Carousel.Item>
              <Carousel.Item>
                <video
                  className="d-block w-100"
                  autoPlay
                  loop
                  muted
                  playsInline
                  style={{ borderRadius: "10px" }}
                >
                  <source src="/Videos/video4.mp4" type="video/mp4" />
                  Your browser does not support the video tag.
                </video>
              </Carousel.Item>
              <Carousel.Item>
                <video
                  className="d-block w-100"
                  autoPlay
                  loop
                  muted
                  playsInline
                  style={{ borderRadius: "10px" }}
                >
                  <source src="/Videos/video5.mp4" type="video/mp4" />
                  Your browser does not support the video tag.
                </video>
              </Carousel.Item>
              <Carousel.Item>
                <video
                  className="d-block w-100"
                  autoPlay
                  loop
                  muted
                  playsInline
                  style={{ borderRadius: "10px" }}
                >
                  <source src="/Videos/video6.mp4" type="video/mp4" />
                  Your browser does not support the video tag.
                </video>
              </Carousel.Item>
            </Carousel>
          </Col> */}
          <Col md={6} className="mt-4 mt-md-0">
            <Carousel fade interval={4000}>
              {[1, 2, 3, 4, 5, 6].map((num) => (
                <Carousel.Item key={num}>
                  <video
                    className="d-block w-100"
                    autoPlay
                    loop
                    muted
                    playsInline
                    style={{ borderRadius: "10px" }}
                  >
                    <source src={`${baseURL}/Videos/video${num}.mp4`} type="video/mp4" />
                    Your browser does not support the video tag.
                  </video>
                </Carousel.Item>
              ))}
            </Carousel>
          </Col>
        </Row>
      </Container>
    </div>
  );
};

export default FarmProcess;
