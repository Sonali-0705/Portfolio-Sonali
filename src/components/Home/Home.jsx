import React from "react";
import { Container, Row, Col, Button } from "react-bootstrap";
import "bootstrap/dist/css/bootstrap.min.css";
import { Link } from "react-scroll";
import "./Homee.css";

const Home = () => {
  return (
    <Container>
      <Row className="align-items-center home-section">
        <Col md={6} sm={12} className="intro-section ">
          <h1 className="hello">Hello👋</h1>
          <h2 className="name">I'm Sonali Kumawat</h2>
          <h3 className="position">Front End Developer</h3>
          <p className="para">
            I love to design and code simple beautiful things!
          </p>
          <div className="button-group">
            <Button
              variant="primary"
              className="resume-btn"
              onClick={() => window.open("/images/resume.pdf", "_blank")}
            >
              Resume
            </Button>
            <Link
              to="contact"
              spy={true}
              smooth={true}
              duration={500}
              className="btn btn-primary"
            >
              Contact Me
            </Link>
            {/* <Button variant="secondary" className="contact-btn">
              Contact Me
            </Button> */}
          </div>
        </Col>
        <Col
          md={6}
          sm={12}
          className="profile-section d-flex justify-content-center"
        >
          <img
            src="/images/image.png"
            alt="Profile"
            className="profile-img img-fluid"
          />
        </Col>
      </Row>
    </Container>
  );
};

export default Home;
