import React, { useEffect, useState } from 'react';
import { Container, Row, Col } from "react-bootstrap";
import ProjectCard from "../Projects/ProjectCards";
import data from "../../Assets/Data/RawData.json";
import axios from 'axios';
import Particle from "../Particle";

const TechLearning = () => {

  const [jsonData, setJsonData] = useState(null);

  useEffect(() => {
    const fetchData = async () => {
      try {
        setJsonData(data);
        // const response = await fetch('https://raw.githubusercontent.com/babumiya435/Portfolio/main/src/Assets/Data/RawData.json');
        // const data = await response.json();
        // const response = await axios.get('https://raw.githubusercontent.com/babumiya435/Portfolio/main/src/Assets/Data/RawData.json');
        // const data = response.data;
        // setJsonData(data);
      } catch (error) {
        // setJsonData(data);
        console.log("Error fetching JSON data");
      }
    }
    fetchData();
  }, []);


  if (!jsonData) {
    return <p>Loading...</p>;
  }


  return (
    <div>
      <Container fluid className="tech-learning-section">
        <Particle />
        <Container className="tech-learning-section pt-20">
          {/* <Particle /> */}
          <h1 className="project-heading">
            My Recent <strong className="purple">Tech Learnings </strong>  ( In-progress )
          </h1>
          <p style={{ color: "white" }}>
          Here are a few <strong className="purple">Tech Stacks </strong>I am currently learning and practicing.
        </p>
        </Container>
        <Container fluid className="tech-learning-section pt-20">
          {data.map((item, index) => (
            <Row key={index} className="card-style">
              <Col md={4} className="tech-learning-card">
                <ProjectCard
                  imgPath={item.topicImg}
                  isBlog={true}
                  title={item.topicName}
                  description={item.topicDescription}
                  demoLink={"/content-details/" + item.topicNumber}
                  data={item}
                />
              </Col>
            </Row>
          ))}
        </Container>
      </Container>
    </div>
  );
}

export default TechLearning;
