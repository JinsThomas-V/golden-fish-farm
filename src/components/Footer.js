import React from 'react';
import { Container, Row, Col } from 'react-bootstrap';
import { FaFacebook, FaInstagram, FaWhatsapp } from 'react-icons/fa';

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
              <li><a href="#hero" style={{ color: '#bbb', textDecoration: 'none' }}>Home</a></li>
              <li><a href="#about" style={{ color: '#bbb', textDecoration: 'none' }}>About Us</a></li>
              <li><a href="#fishes" style={{ color: '#bbb', textDecoration: 'none' }}>Fishes</a></li>
              <li><a href="#contact" style={{ color: '#bbb', textDecoration: 'none' }}>Contact</a></li>
            </ul>
          </Col>

          <Col md={4}>
            <h5 style={{ fontWeight: 'bold' }}>Connect with Us</h5>
            <div className="d-flex justify-content-center justify-content-md-start gap-3 mt-2">
              <a href="https://facebook.com" target="_blank" rel="noopener noreferrer" style={{ color: '#fff', fontSize: '1.5rem' }}><FaFacebook /></a>
              <a href="https://instagram.com" target="_blank" rel="noopener noreferrer" style={{ color: '#fff', fontSize: '1.5rem' }}><FaInstagram /></a>
              <a href="#whatsapp" style={{ color: '#fff', fontSize: '1.5rem' }}><FaWhatsapp /></a>
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
