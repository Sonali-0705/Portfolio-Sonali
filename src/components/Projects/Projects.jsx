import React, { useState } from "react";
import { Container, Row, Col, Card, Button, Modal } from "react-bootstrap";
import projects from "./ProjectDetails";
import "./Projects.css";

const Projects = () => {
  const [showDetails, setShowDetails] = useState(false);
  const [showDemo, setShowDemo] = useState(false);
  const [currentProjectIndex, setCurrentProjectIndex] = useState(null); // Add state for tracking current project index

  const handleShowDetails = (index) => {
    setShowDetails(true);
    setCurrentProjectIndex(index); // Set current project index when showing details
  };

  const handleCloseDetails = () => {
    setShowDetails(false);
    setCurrentProjectIndex(null); // Reset current project index when closing details
  };

  const handleShowDemo = (index) => {
    setShowDemo(true);
    setCurrentProjectIndex(index); // Set current project index when showing demo
  };

  const handleCloseDemo = () => {
    setShowDemo(false);
    setCurrentProjectIndex(null); // Reset current project index when closing demo
  };

  return (
    <Container id="projects" className="projects-container">
      <h1 className="projects-title">My Projects</h1>
      <Row>
        {projects.map((project, index) => (
          <Col key={index} md={4} className="project-card-container">
            <Card className="project-card">
              <Card.Img variant="top" src={project.image} alt={project.title} />
              <Card.Body>
                <Card.Title style={{ color: "white", textAlign: "center" }}>
                  {project.title}
                </Card.Title>
                {/* <Card.Text>{project.description}</Card.Text> */}
                <div className="project-buttons">
                  <Button
                    className="p-btn"
                    variant="primary"
                    onClick={() => handleShowDetails(index)}
                  >
                    {" "}
                    {/* Pass index to handleShowDetails */}
                    Details
                  </Button>
                  <Button
                    className="p-btn"
                    variant="secondary"
                    href={project.githubLink}
                    target="_blank"
                  >
                    GitHub
                  </Button>
                  <Button
                    className="p-btn"
                    variant="info"
                    onClick={() => handleShowDemo(index)}
                  >
                    {" "}
                    {/* Pass index to handleShowDemo */}
                    Demo
                  </Button>
                </div>
              </Card.Body>
            </Card>
          </Col>
        ))}
      </Row>
      <Button
        className="p-btn w-100"
        variant="secondary"
        href="https://github.com/Sonali-0705?tab=repositories"
        target="__blank"
        // style={{
        //   width: "100%",
        //   background: "transparent",
        // }}
      >
        View More Projects...
      </Button>
      {/* Modal for project details */}
      <Modal show={showDetails} onHide={handleCloseDetails}>
        {currentProjectIndex !== null && (
          <>
            <Modal.Header closeButton>
              <Modal.Title>{projects[currentProjectIndex].title}</Modal.Title>
            </Modal.Header>
            <Modal.Body>
              <p>{projects[currentProjectIndex].details}</p>
              <p>
                Technologies:{" "}
                {projects[currentProjectIndex].technologies.join(", ")}
              </p>
              <p>Key Contribution Points:</p>
              <ul>
                {projects[currentProjectIndex].contributionPoints.map(
                  (point, index) => (
                    <li key={index}>{point}</li>
                  )
                )}
              </ul>
              <p>
                GitHub Repository:{" "}
                <a
                  href={projects[currentProjectIndex].githubLink}
                  target="__blank"
                >
                  Link
                </a>
              </p>
            </Modal.Body>
            <Modal.Footer>
              <Button variant="secondary" onClick={handleCloseDetails}>
                Close
              </Button>
            </Modal.Footer>
          </>
        )}
      </Modal>

      {/* Modal for demo video */}
      <Modal show={showDemo} onHide={handleCloseDemo}>
        {currentProjectIndex !== null && (
          <>
            <Modal.Header closeButton>
              <Modal.Title>
                {projects[currentProjectIndex].title} Demo
              </Modal.Title>
            </Modal.Header>
            <Modal.Body>
              <video width="100%" controls>
                <source
                  src={projects[currentProjectIndex].demoVideo}
                  type="video/mp4"
                />
              </video>
            </Modal.Body>
            <Modal.Footer>
              <Button variant="secondary" onClick={handleCloseDemo}>
                Close
              </Button>
            </Modal.Footer>
          </>
        )}
      </Modal>
    </Container>
  );
};

export default Projects;
