import React from "react";
import { Navbar, Nav, Container } from "react-bootstrap";
import { Link } from "react-scroll"; // Import Link from react-scroll

const NavbarComponent = () => {
  return (
    <Navbar expand="lg" fixed="top" className="shadow-sm custom-navbar">
      <Container>
        {/* Logo image and Brand Name */}
        <Link
          to="hero"
          smooth={true}
          duration={500}
          className="navbar-brand d-flex align-items-center"
          style={{
            cursor: "pointer",
            textDecoration: "none",
            color: "inherit",
          }}
        >
          <img
            src={`${process.env.PUBLIC_URL}/Images/Farm logo-1.png`}
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
        </Link>

        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav">
          <Nav className="ms-auto">
            {/* Use react-scroll Link component for smooth scrolling */}
            <Nav.Link
              as={Link}
              to="hero"
              smooth={true}
              duration={500}
              offset={-90}
            >
              Home
            </Nav.Link>
            <Nav.Link
              as={Link}
              to="about"
              smooth={true}
              duration={500}
              offset={-90}
            >
              About Us
            </Nav.Link>
            <Nav.Link
              as={Link}
              to="fishes"
              smooth={true}
              duration={500}
              offset={-90}
            >
              Fishes
            </Nav.Link>
            <Nav.Link
              as={Link}
              to="contact"
              smooth={true}
              duration={500}
              offset={-90}
            >
              Contact
            </Nav.Link>
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
};

export default NavbarComponent;
