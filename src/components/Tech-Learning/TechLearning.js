import React, { useEffect } from 'react';
import { Container, Row, Col } from "react-bootstrap";
import ProjectCard from "../Projects/ProjectCards";
import Particle from "../Particle";
import blog from "../../Assets/Projects/blog.png";
import data from "../../Assets/Data/RawData.json"

const TechLearning = () => {

  useEffect(() => {
    // Example: logging a message to the console when the component mounts
    console.log('Functional component has mounted!');

    // Clean-up function
    return () => {
      console.log('Functional component will unmount!');
    };
  }, []);

  function handleClick () {
    console.log(data);
  };

  return (
    <div>
      <div>
          <h1>Hello, React!</h1>
          <button onClick={handleClick}>Click me</button>
        </div>
      <Container fluid className="tech-learning-section">
        {/* <Particle /> */}

        {data.map((item, index) => (
          <Row key={index} style={{ justifyContent: "center", paddingBottom: "10px" }}>
          <Col md={4} className="tech-learning-card">
            <ProjectCard
              imgPath={blog}
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
