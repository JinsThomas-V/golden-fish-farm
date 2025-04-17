import React from "react";
import { Card, Container, Row, Col, Carousel } from "react-bootstrap";

const fishData = [
  {
    name: "Arowana",
    images: [
      "/Images/arowana1.jpeg",
      "/Images/arowana2.jpeg",
      "/Images/arowana3.jpeg",
    ],
    description:
      "A majestic freshwater fish known for its shimmering golden scales and graceful swimming.",
  },
  {
    name: "Oscar",
    images: [
      "/Images/oscar1.jpeg",
      "/Images/oscar2.jpeg",
      "/Images/oscar3.jpeg",
      "/Images/oscar4.jpeg",
    ],
    description:
      "Oscar fish are a popular type of tropical cichlid that are super fun to keep as pets thanks to their playful and inquisitive natures.",
  },
  {
    name: "Discus",
    images: ["/Images/discus1.jpg", "/Images/discus2.webp"],
    description:
      "A vibrant and graceful freshwater fish, prized for its striking colors and peaceful nature in well-maintained aquariums.",
  },
  {
    name: "Koi Carp",
    images: [
      "/Images/koi carp1.jpg",
      "/Images/koi carp2.jpg",
      "/Images/koi carp3.jpeg",
    ],
    description:
      "A symbolic and ornamental pond fish, known for its vivid patterns and longevity, often associated with tranquility and good fortune.",
  },
  {
    name: "Widow Tetra",
    images: [
      "/Images/widow1.jpeg",
      "/Images/widow2.jpeg",
      "/Images/widow3.webp",
    ],
    description:
      "A small and hardy schooling fish, admired for its unique color variations and peaceful demeanor in community tanks.",
  },
  {
    name: "Gold Fish",
    images: ["/Images/gold1.jpg", "/Images/gold2.jpeg", "/Images/gold3.jpeg"],
    description:
      "A classic and adaptable aquarium favorite, recognized for its bright hues and gentle temperament, suitable for beginners and seasoned keepers alike",
  },
  {
    name: "Angel Fish",
    images: [
      "/Images/angel1.jpeg",
      "/Images/angel2.webp",
      "/Images/angel3.jpeg",
      "/Images/angel4.webp",
    ],
    description:
      "A striking and elegant freshwater species, valued for its tall fins and calm yet assertive presence in aquascapes.",
  },
  {
    name: "Guppy",
    images: ["/Images/guppy1.png", "/Images/guppy2.jpg", "/Images/guppy3.jpg"],
    description:
      "A lively and colorful fish, beloved for its easy care and prolific breeding, making it a staple in freshwater tanks.",
  },
  {
    name: "Albino Heckelii",
    images: [
      "/Images/heckeli1.webp",
      "/Images/heckeli2.jpeg",
      "/Images/heckeli3.jpeg",
    ],
    description:
      "A rare and eye-catching cichlid, admired for its pale coloration and peaceful yet territorial behavior in structured tanks.",
  },
  {
    name: "Cuban Cichlid",
    images: [
      "/Images/cuban1.webp",
      "/Images/cuban2.webp",
      "/Images/cuban3.jpeg",
    ],
    description:
      "A bold and attractive species, appreciated for its unique pattern and assertive personality in cichlid-friendly setups.",
  },
  {
    name: "Alligator Gar",
    images: [
      "/Images/alligator1.jpg",
      "/Images/alligator2.jpeg",
      "/Images/alligator3.jpeg",
      "/Images/alligator4.jpg",
    ],
    description:
      "A massive and ancient predatory fish, known for its armored body and powerful jaw, typically kept in large and specialized enclosures.",
  },
  {
    name: "Polar Blue",
    images: [
      "/Images/polar1.jpg",
      "/Images/polar2.jpeg",
      "/Images/polar3.jpeg",
    ],
    description:
      "A hybrid cichlid with a frosty blue appearance, praised for its hardy nature and interactive behavior in home aquariums.",
  },
  {
    name: "Gourami",
    images: [
      "/Images/gourami1.jpeg",
      "/Images/gourami2.jpeg",
      "/Images/gourami3.jpg",
    ],
    description:
      "A peaceful and adaptable freshwater species, known for its labyrinth breathing and vibrant color variations.",
  },
  {
    name: "White Shark",
    images: [
      "/Images/white shark1.webp",
      "/Images/white shark2.jpg",
      "/Images/white shark3.jpg",
    ],
    description:
      "A sleek and energetic bottom-dweller, often valued for its algae-eating habits and striking appearance in larger tanks.",
  },
  {
    name: "Severum",
    images: [
      "/Images/severum1.jpeg",
      "/Images/severum2.webp",
      "/Images/severum3.jpeg",
    ],
    description:
      "A robust and semi-aggressive cichlid, admired for its rounded shape and subtle coloration, adding diversity to community cichlid tanks.",
  },
  {
    name: "Rainbow Shark",
    images: [
      "/Images/rainbow1.jpeg",
      "/Images/rainbow2.jpeg",
      "/Images/rainbow3.jpeg",
    ],
    description:
      "A territorial yet captivating freshwater species, recognizable by its dark body and vivid red fins, often adding contrast to aquariums.",
  },
  {
    name: "Silver Dollar",
    images: [
      "/Images/dollar1.jpg",
      "/Images/dollar2.jpg",
      "/Images/dollar3.jpeg",
    ],
    description:
      "A fast-moving, herbivorous schooling fish, prized for its metallic sheen and peaceful nature in large community tanks.",
  },
  {
    name: "Tilapia",
    images: [
      "/Images/tilapia1.jpeg",
      "/Images/tilapia2.jpeg",
      "/Images/tilapia3.jpeg",
    ],
    description:
      "A hardy and popular farmed fish, appreciated for its mild flavor and high protein content.",
  },
];

const Fishes = () => {
  return (
    <div style={{ backgroundColor: "#f0f8ff", padding: "60px 0" }}>
      <Container>
        <h2 className="text-center mb-5" style={{ fontWeight: "bold" }}>
          Available Fishes In Our Farm
        </h2>
        <Row>
          {fishData.map((fish, index) => (
            <Col md={4} className="mb-4" key={index}>
              <Card className="shadow h-100">
                <Carousel interval={3000} fade>
                  {fish.images.map((imgSrc, imgIndex) => (
                    <Carousel.Item key={imgIndex}>
                      <img
                        className="img-fluid w-100"
                        src={`${process.env.PUBLIC_URL}${imgSrc}`}
                        alt={`${fish.name} ${imgIndex + 1}`}
                        style={{ height: "250px", objectFit: "cover" }}
                      />
                    </Carousel.Item>
                  ))}
                </Carousel>
                <Card.Body>
                  <Card.Title>{fish.name}</Card.Title>
                  <Card.Text>{fish.description}</Card.Text>
                </Card.Body>
              </Card>
            </Col>
          ))}
        </Row>
      </Container>
    </div>
  );
};

export default Fishes;
