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
              imgPath={blog}
              isBlog={false}
              title="My-Tech-Blogs ( In-progress )"
              description="My personal blog page build with Next.js and Tailwind Css which takes the content from makdown files and renders it using Next.js. Supports dark mode and easy to write blogs using markdown."
              ghLink="https://github.com/babumiya435/Blogs"
              demoLink="https://blogs.babumiya.tech/"
            />
          </Col>
          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={blog}
              isBlog={false}
              title="Post-Man ( In-progress )"
              description="UI build with Next.js and Tailwind Css which is used to post the contnet across social media by one click."
              ghLink="https://github.com/babumiya435/post-man"
              demoLink="https://post-man.babumiya.tech/"
            />
          </Col>
        </Row>
      </Container>
    </Container>
  );
}

export default Projects;
