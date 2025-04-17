import React from 'react';
import { Container, Row, Col} from 'react-bootstrap';

const AboutUs = () => {
  return (
    <div style={{ backgroundColor: '#fff8dc', padding: '60px 0' }}>
      <Container>
        <Row className="align-items-center">
          <Col md={6} className="mb-4 mb-md-0">
            <div className="ratio ratio-16x9">
              <iframe
                src="https://www.youtube.com/embed/dibd0gNGFO4?si=q2h6P9oXgLBmF9ys"
                title="About Our Fish Farm"
                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                allowFullScreen
                style={{ borderRadius: '10px', width: '100%', height: '100%' }}
              ></iframe>
            </div>
          </Col>
          
          <Col md={6}>
            <h2 style={{ fontWeight: 'bold', marginBottom: '20px' }}>
              About Shinto's Golden Fish Farm
            </h2>
            <p>
              At Shinto's Golden Fish Farm, we are passionate about sustainable aquaculture. Our farm is
              dedicated to breeding and nurturing high-quality freshwater fish with utmost care. We prioritize
              the health of our fish and the cleanliness of our tanks, ensuring a healthy and eco-friendly
              environment.
            </p>
            <p>
              Our experienced team follows responsible farming practices that protect natural resources while
              providing premium fish to our customers. Whether you're a home cook, restaurant owner, or
              retailer, we aim to serve the freshest fish from our waters to your table.
            </p>
          </Col>
        </Row>
      </Container>
    </div>
  );
};

export default AboutUs;
