import React from "react";
import { Container, Row, Col, Button } from "react-bootstrap";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faEnvelope,
  faPhone,
  faMapMarkerAlt,
} from "@fortawesome/free-solid-svg-icons"; // Solid icons package
import { faLinkedin, faGithub } from "@fortawesome/free-brands-svg-icons"; // Regular (non-solid) icons package
import "./Contact.css";

const Contact = () => {
  return (
    <Container id="contact" className="contact-container ">
      <h2 className="contact-title">Get in Touch with Me 😊</h2>
      <Row className="justify-content-center">
        <Col lg={8}>
          <div className="contact-info">
            <div className="contact-item">
              <FontAwesomeIcon icon={faEnvelope} className="icon" />
              <span className="info">sonalikumawat700@gmail.com</span>
            </div>
            <div className="contact-item">
              <FontAwesomeIcon icon={faPhone} className="icon" />
              <span className="info">+91 7733057422</span>
            </div>
            <div className="contact-item">
              <FontAwesomeIcon icon={faMapMarkerAlt} className="icon" />
              <span className="info">Rajasthan, India</span>
            </div>
            <div className="social-links">
              <Button
                variant="outline-primary"
                className="social-button"
                href="https://www.linkedin.com/in/sonali-kumawat/"
                target="_blank"
              >
                <FontAwesomeIcon icon={faLinkedin} className="social-icon" />
              </Button>
              <Button
                variant="outline-dark"
                className="social-button"
                href="https://github.com/Sonali-0705"
                target="_blank"
              >
                <FontAwesomeIcon icon={faGithub} className="social-icon" />
              </Button>
            </div>
          </div>
          <Button
            variant="primary"
            className="submit-button"
            href="mailto:sonalikumawat700@gmail.com"
          >
            Send Email
          </Button>
        </Col>
      </Row>
    </Container>
  );
};

export default Contact;
