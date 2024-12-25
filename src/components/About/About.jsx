import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import "./About.css";

const About = () => {
  return (
    <Container className="about-container">
      <Row className="about-row">
        <Col md={6} className="about-text-col">
          <h1 className="a-title">About Me</h1>
          <div className="about-text">
            <p>
              Hello! I'm Sonali Kumawat, a web developer and tech enthusiast
              based in Jaipur, Rajasthan. I’m passionate about creating
              responsive and user-friendly web applications that deliver
              meaningful experiences. My journey in web development has been
              shaped by a love for problem-solving and a drive to learn and grow
              with every project I undertake. I’m excited to contribute to
              innovative projects, collaborate with like-minded professionals,
              and continuously explore new technologies. Turning ideas into
              impactful solutions is what inspires me every day, and I’m ready
              to make my mark in the world of tech.
            </p>
            <button
              className="btn-resume"
              onClick={() =>
                window.open("/images/Sonali Kumawat - Resume.pdf", "_blank")
              }
            >
              Resume
            </button>
          </div>
        </Col>
        <Col md={5} className="about-image-col">
          <img
            src="/images/about.gif"
            alt="About Me"
            className="about-image img-fluid"
          />
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
              <img src="/images/tailwind.png" alt="Tailwind CSS" />
              <img src="/images/nodejs.png" alt="NodeJS" />
              <img src="/images/expressjs.png" alt="ExpressJS" />
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
