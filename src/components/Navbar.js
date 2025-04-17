// src/components/Navbar.js
import React from "react";
import { Navbar, Nav, Container } from "react-bootstrap";

const NavbarComponent = () => {
  return (
    <Navbar expand="lg" fixed="top" className="shadow-sm custom-navbar">
      <Container>
        {/* Logo image and Brand Name */}
        <Navbar.Brand href="/" className="d-flex align-items-center">
          <img
            src="/Images/Farm logo-1.png"
            width="100"
            height="100"
            className="d-inline-block align-top me-2"
            alt="Shinto's Fish Farm Logo"
            style={{ marginTop: "-18px", marginBottom: "-18px" }}
          />
          <div className="brand-text">
            <span className="fw-bold d-block">Shinto's</span> 
            <span className="fw-bold d-block">Golden Fish Farm</span>
          </div>
        </Navbar.Brand>

        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav">
          <Nav className="ms-auto">
            <Nav.Link href="#hero">Home</Nav.Link>
            <Nav.Link href="#about">About Us</Nav.Link>
            <Nav.Link href="#fishes">Fishes</Nav.Link>
            <Nav.Link href="#contact">Contact</Nav.Link>
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
};

export default NavbarComponent;
