import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import ProjectCard from "./ProjectCards";
import Particle from "../Particle";
import blog from "../../Assets/Projects/blog.png";

function Projects() {
  return (
    <Container fluid className="project-section">
      <Particle />
      <Container>
        <h1 className="project-heading">
          My Recent <strong className="purple">Works </strong>
        </h1>
        <p style={{ color: "white" }}>
          Here are a few projects I've worked on recently.
        </p>
        <Row style={{ justifyContent: "center", paddingBottom: "10px" }}>
          <Col md={4} className="project-card">
            <ProjectCard
              imgPath="my-tech-blogs.png"
              isBlog={true}
              isProject={true}
              title="My-Tech-Blogs ( In-progress )"
              description="My Technical Content page build with React Js"
              ghLink="/tech-learning"
            />
          </Col>
        </Row>
      </Container>
    </Container>
  );
}

export default Projects;
