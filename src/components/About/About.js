import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import Particle from "../Particle";
import Github from "./Github";
import Techstack from "./Techstack";
import Aboutcard from "./AboutCard";
import laptopImg from "../../Assets/about.png";
import Toolstack from "./Toolstack";
import Tilt from "react-parallax-tilt";

function About() {
  return (
    <Container fluid className="about-section">
      <Particle />
      <Container>
        <Row style={{ justifyContent: "center", padding: "10px" }}>
          <Col
            md={7}
            style={{
              justifyContent: "center",
              paddingTop: "30px",
              paddingBottom: "50px",
            }}
          >
            <h1 style={{ fontSize: "2.1em", paddingBottom: "20px" }}>
              Know Who <strong className="purple">I'M</strong>
            </h1>
            <Aboutcard />
          </Col>
          <Col
            md={5}
            style={{ paddingTop: "120px", paddingBottom: "50px" }}
            className="about-img"
          >
            <img src={laptopImg} alt="about" className="img-fluid" />
          </Col>
        </Row>
        <h1 className="project-heading">
          Professional <strong className="purple">Skillset </strong>
        </h1>

        <Techstack />

        <h1 className="project-heading">
          <strong className="purple">Tools</strong> I use
        </h1>
        <Toolstack />

        <Github />

        <Row style={{ justifyContent: "center", padding: "10px" }}>
          <h1 className="project-heading">
          My <strong className="purple">GitHub</strong> Data
        </h1>
        <Col md={4} className="gitHubData">
            <Tilt>
              <img src="https://github-readme-stats.anuraghazra1.vercel.app/api?username=babumiya435&show_icons=true" height={500} width={500} className="img-fluid my-pic-mt" />
            </Tilt>
          </Col>
          <Col md={4} className="gitHubData">
            <Tilt >
              <img src="https://github-readme-streak-stats.herokuapp.com/?user=babumiya435&" height={500} width={500} className="img-fluid my-pic-mt" alt="babumiya" />
            </Tilt>
          </Col>
        </Row>
      </Container>
    </Container>
  );
}

export default About;
