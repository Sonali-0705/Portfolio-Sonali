import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import "./About.css";

const About = () => {
  return (
    <Container className="about-container">
      <Row className="about-row">
        <Col md={5} className="about-image-col">
          <img
            src="/images/about.gif"
            alt="About Me"
            className="about-image img-fluid"
          />
        </Col>
        <Col md={7} className="about-text-col">
          <h1 className="a-title">About Me</h1>
          <div className="about-text">
            <p>
              Hello! I'm Sonali Kumawat, an IT enthusiast based in Jaipur,
              Rajasthan, with a Bachelor's degree in Information Technology. I
              have a deep passion for web development and technology, and I am
              dedicated to continuously learning and expanding my skills. My
              journey into web development has been fueled by a desire to create
              intuitive and responsive user experiences. I enjoy solving
              problems and collaborating with others to bring innovative ideas
              to life. Through various projects, I have implemented creative
              solutions and developed a keen understanding of industry best
              practices. My goal is to make a meaningful impact in the IT
              industry by contributing to projects that challenge and inspire
              me. I'm always excited to connect with like-minded professionals
              and explore new opportunities to learn and grow.
            </p>
            <button
              className="btn-resume"
              onClick={() => window.open("/images/resume.pdf", "_blank")}
            >
              Resume
            </button>
          </div>
        </Col>
      </Row>
      <Row className="skills-section">
        <Col>
          <h1 className="s-title">My Technical Skills:</h1>
          <div className="skills-container">
            <div className="skill-icons">
              <img src="/images/html.png" alt="HTML" />
              <img src="/images/css.png" alt="CSS" />
              <img src="/images/js.png" alt="JavaScript" />
              <img src="/images/reactjs.png" alt="ReactJS" />
              <img src="/images/bootstrap.png" alt="Bootstrap" />
              <img src="/images/github.png" alt="GitHub" />
              <img src="/images/vscode.png" alt="VS Code" />
            </div>
          </div>
        </Col>
      </Row>
    </Container>
  );
};

export default About;
