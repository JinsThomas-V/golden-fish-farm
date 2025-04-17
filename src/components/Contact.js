import React from "react";
import { Container, Row, Col, Card, Button } from "react-bootstrap";
import { FaMapMarkerAlt, FaWhatsapp } from "react-icons/fa";

const Contact = () => {
  return (
    <div style={{ backgroundColor: "#f8f9fa", padding: "60px 0" }}>
      <Container>
        <h2 className="text-center mb-5" style={{ fontWeight: "bold" }}>
          Contact Us
        </h2>
        <Row className="g-4">
          {/* <Col md={6}>
            <Card className="h-100 shadow-sm">
              <Card.Body>
                <Card.Title><FaMapMarkerAlt className="me-2" />Our Address</Card.Title>
                <Card.Text>
                  Shinto's Golden Fish Farm<br />
                  West Chalakudy, P O Chalakudy,<br />
                  Thrissur District, Kerala,<br />
                  India - 680307
                </Card.Text>

                <Card.Title className="mt-4"><FaWhatsapp className="me-2" />WhatsApp Inquiry</Card.Title>
                <Button
                  variant="success"
                  href="https://wa.me/919745118737"
                  target="_blank"
                >
                  Chat with Us on WhatsApp
                </Button>
              </Card.Body>
            </Card>
          </Col> */}
          <Col md={6}>
            <Card className="h-100 shadow-sm" id="whatsapp">
              <Card.Body>
                <Card.Title>
                  <FaMapMarkerAlt className="me-2" />
                  Our Address
                </Card.Title>
                <Card.Text>
                  Shinto's Golden Fish Farm
                  <br />
                  West Chalakudy, P O Chalakudy,
                  <br />
                  Thrissur District, Kerala,
                  <br />
                  India - 680307
                </Card.Text>

                <Card.Title className="mt-4">
                  <FaWhatsapp className="me-2" />
                  WhatsApp Inquiry
                </Card.Title>

                {/* Form inputs */}
                <form
                  onSubmit={(e) => {
                    e.preventDefault();
                    const firstName = e.target.firstName.value;
                    const lastName = e.target.lastName.value;
                    const location = e.target.location.value;
                    const message = e.target.message.value;

                    const fullName = `${firstName} ${lastName}`;
                    const whatsappMessage = `Hello, I'm ${fullName} from ${location}. I would like to inquire: ${message}`;
                    const encodedMessage = encodeURIComponent(whatsappMessage);
                    const phone = "919745118737";
                    const url = `https://wa.me/${phone}?text=${encodedMessage}`;

                    window.open(url, "_blank");
                  }}
                >
                  <div className="row mb-3">
                    <div className="col-md-6 mb-3 mb-md-0">
                      <input
                        type="text"
                        name="firstName"
                        className="form-control"
                        placeholder="First Name"
                        required
                      />
                    </div>
                    <div className="col-md-6">
                      <input
                        type="text"
                        name="lastName"
                        className="form-control"
                        placeholder="Last Name"
                        required
                      />
                    </div>
                  </div>
                  <div className="mb-3">
                    <input
                      type="text"
                      name="location"
                      className="form-control"
                      placeholder="Your Location"
                      required
                    />
                  </div>
                  <div className="mb-3">
                    <textarea
                      name="message"
                      className="form-control"
                      placeholder="Your Enquiry"
                      rows="3"
                      required
                    ></textarea>
                  </div>
                  <Button type="submit" variant="success" className="w-100">
                    Chat with Us on WhatsApp
                  </Button>
                </form>
              </Card.Body>
            </Card>
          </Col>

          <Col md={6}>
            <Card className="h-100 shadow-sm">
              <Card.Body>
                <Card.Title>Google Map</Card.Title>
                <div style={{ width: "100%", height: "400px" }}>
                  <iframe
                    title="Fish Farm Location"
                    src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3925.5764161250804!2d76.31339480000001!3d10.295672799999998!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3b0802f6562ffa53%3A0x699b79d1c09d3eb4!2sGOLDEN%20FISH%20FARM%20shinto!5e0!3m2!1sen!2sin!4v1744207442097!5m2!1sen!2sin"
                    width="100%"
                    height="100%"
                    style={{ border: 0 }}
                    allowFullScreen=""
                    loading="lazy"
                    referrerPolicy="no-referrer-when-downgrade"
                  ></iframe>
                </div>
              </Card.Body>
            </Card>
          </Col>
        </Row>
      </Container>
    </div>
  );
};

export default Contact;
