import React from 'react';
import { Container, Row, Col } from 'react-bootstrap';
import { FaFacebook, FaInstagram, FaWhatsapp } from 'react-icons/fa';
import { Link } from 'react-scroll';

const Footer = () => {
  return (
    <footer style={{ backgroundColor: '#1b1b1b', color: '#fff', padding: '40px 0' }}>
      <Container>
        <Row className="text-center text-md-start">
          <Col md={4} className="mb-4 mb-md-0">
            <h5 style={{ fontWeight: 'bold' }}>Shinto's Golden Fish Farm</h5>
            <p>
              Dedicated to providing fresh, sustainable, and premium fish directly from our eco-friendly farm to your home.
            </p>
          </Col>

          <Col md={4} className="mb-4 mb-md-0">
  <h5 style={{ fontWeight: 'bold' }}>Quick Links</h5>
  <ul className="list-unstyled">
    <li>
      <Link to="hero" smooth={true} duration={500} offset={-90} style={{ color: '#bbb', textDecoration: 'none', cursor: 'pointer' }}>
        Home
      </Link>
    </li>
    <li>
      <Link to="about" smooth={true} duration={500} offset={-90} style={{ color: '#bbb', textDecoration: 'none', cursor: 'pointer' }}>
        About Us
      </Link>
    </li>
    <li>
      <Link to="fishes" smooth={true} duration={500} offset={-90} style={{ color: '#bbb', textDecoration: 'none', cursor: 'pointer' }}>
        Fishes
      </Link>
    </li>
    <li>
      <Link to="contact" smooth={true} duration={500} offset={-90} style={{ color: '#bbb', textDecoration: 'none', cursor: 'pointer' }}>
        Contact
      </Link>
    </li>
  </ul>
</Col>
          <Col md={4}>
            <h5 style={{ fontWeight: 'bold' }}>Connect with Us</h5>
            <div className="d-flex justify-content-center justify-content-md-start gap-3 mt-2">
              <a href="https://facebook.com" target="_blank" rel="noopener noreferrer" style={{ color: '#fff', fontSize: '1.5rem' }}><FaFacebook /></a>
              <a href="https://instagram.com" target="_blank" rel="noopener noreferrer" style={{ color: '#fff', fontSize: '1.5rem' }}><FaInstagram /></a>
              <Link to="contact" smooth={true} duration={500} style={{ color: '#fff', fontSize: '1.5rem', cursor: 'pointer' }}><FaWhatsapp /></Link>

            </div>
          </Col>
        </Row>
        <hr style={{ borderColor: '#444' }} />
        <p className="text-center mb-0" style={{ color: '#aaa' }}>
          &copy; {new Date().getFullYear()} Shinto's Golden Fish Farm. All rights reserved.
        </p>
      </Container>
    </footer>
  );
};

export default Footer;
