import React, { useEffect } from 'react';
import { Container, Row, Col } from "react-bootstrap";
import ProjectCard from "../Projects/ProjectCards";
import data from "../../Assets/Data/RawData.json"

const TechLearning = () => {

  useEffect(() => {

    // Clean-up function
    return () => {
      console.log('Functional component will unmount!');
    };
  }, []);

  return (
    <div>
      <Container fluid className="tech-learning-section">

        {data.map((item, index) => (
          <Row key={index} style={{ justifyContent: "center", paddingBottom: "10px" }}>
          <Col md={4} className="tech-learning-card">
            <ProjectCard
              imgPath={item.topicImg}
              isBlog={false}
              title={item.topicName}
              description={item.topicDescription}
              demoLink={"/content-details/1" + item.topicNumber}
            />
          </Col>
        </Row>
        ))}
        
        {/* <Row style={{ justifyContent: "center", paddingBottom: "10px" }}>
          <Col md={4} className="tech-learning-card">
            <ProjectCard
              imgPath={blog}
              isBlog={false}
              title="Content 1"
              description="My Technical Content page build with React Js"
              demoLink="/content-details/1"
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
              demoLink="/content-details/2"
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
              demoLink="/content-details/3"
            />
          </Col>
        </Row> */}
      </Container>
    </div>
  );
}

export default TechLearning;
