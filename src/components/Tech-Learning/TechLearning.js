import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import ProjectCard from "../Projects/ProjectCards";
import Particle from "../Particle";
import blog from "../../Assets/Projects/blog.png";

function TechLearning() {

  return (
    <div>
      <Container fluid className="tech-learning-section">
        <Particle />
        <Row style={{ justifyContent: "center", paddingBottom: "10px" }}>
          <Col md={4} className="tech-learning-card">
            <ProjectCard
              imgPath={blog}
              isBlog={false}
              title="Content 1"
              description="My Technical Content page build with React Js"
              demoLink="/content-details"
            />
          </Col>
        </Row>

        <Row style={{ justifyContent: "center", paddingBottom: "10px" }}>
          <Col md={4} className="tech-learning-card">
            <ProjectCard
              imgPath={blog}
              isBlog={false}
              title="Content 2"
              description="My Technical Content page build with React Js"
              demoLink="https://blogs.babumiya.tech/"
            />
          </Col>
        </Row>

        <Row style={{ justifyContent: "center", paddingBottom: "10px" }}>
          <Col md={4} className="tech-learning-card">
            <ProjectCard
              imgPath={blog}
              isBlog={false}
              title="Content 3"
              description="My Technical Content page build with React Js"
              demoLink="https://blogs.babumiya.tech/"
            />
          </Col>
        </Row>
      </Container>
    </div>
  );
}

export default TechLearning;
