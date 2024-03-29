import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import myImg from "../../Assets/my-pics/moba0222.jpg";
import Tilt from "react-parallax-tilt";
import {
  AiFillGithub,
  AiFillInstagram,
} from "react-icons/ai";
import { FaLinkedinIn } from "react-icons/fa";
import { FaSquareThreads } from "react-icons/fa6";
import { FaXTwitter } from "react-icons/fa6";

function Home2() {
  return (
    <Container fluid className="home-about-section" id="about">
      <Container>
        <Row>
          <Col md={8} className="home-about-description">
            <h1 style={{ fontSize: "2.6em" }}>
              LET ME <span className="purple"> INTRODUCE </span> MYSELF
            </h1>
            <p className="home-about-body">
              I fell in love with programming in my college days and now I am a UI Team Lead……😊
              <br />
              <br />I am fluent in classics like
              <i>
                <b className="purple"> Javascript and Typescript. </b>
              </i>
              <br />
              <br />
              My field of Interest's are building new &nbsp;
              <i>
                <b className="purple">Web Applications and Products </b> in domains like{" "}
                <b className="purple">
                  Banking | E-commerce | Insurance | Telecom | Automation | Creating Process Improvements in Projects.
                </b>
              </i>
              <br />
              <br />
              I constantly apply my knowledge and passion for developing products
              with latest technologies: <b className="purple">Node.js,</b>
              <i>
                <b className="purple">
                  {" "}
                  Modern Javascript Library and Frameworks
                </b>
              </i>
              &nbsp;like&nbsp;
              <i>
                <b className="purple">Angular, React.js and Next.js.</b> and learning new <b className="purple">Technical Skills.</b>
              </i>
              <br />
              <br />
              Some Product Ideas in My Bucket Currently:<br />
              <i>
                <b className="purple">Tech Blogs, Health Jarvis, Improve Me and Digital Resume.</b>
              </i>
            </p>
          </Col>
          <Col md={4} className="myAvtar">
            <Tilt className="anime">
              <img src={myImg} height={300} width={300} className="img-fluid my-pic-mt" alt="avatar" />
            </Tilt>
          </Col>
        </Row>
        <Row>
          <Col md={12} className="home-about-social">
            <h1>FIND ME ON</h1>
            <p>
              Feel free to <span className="purple">connect </span>with me
            </p>
            <ul className="home-about-social-links">
              <li className="social-icons">
                <a
                  href="https://www.linkedin.com/in/babu-miya-mohammad/"
                  target="_blank"
                  rel="noreferrer"
                  className="icon-colour  home-social-icons"
                >
                  <FaLinkedinIn />
                </a>
              </li>
              <li className="social-icons">
                <a
                  href="https://github.com/babumiya435"
                  target="_blank"
                  rel="noreferrer"
                  className="icon-colour  home-social-icons"
                >
                  <AiFillGithub />
                </a>
              </li>
              <li className="social-icons">
                <a
                  href="https://www.instagram.com/iam_sameer_md_"
                  target="_blank"
                  rel="noreferrer"
                  className="icon-colour home-social-icons"
                >
                  <AiFillInstagram />
                </a>
              </li>
              <li className="social-icons">
                <a
                  href="https://twitter.com/babumiyatcs"
                  target="_blank"
                  rel="noreferrer"
                  className="icon-colour  home-social-icons"
                >
                  <FaXTwitter />
                </a>
              </li>
              <li className="social-icons">
                <a
                  href="https://www.threads.net/@iam_sameer_md_"
                  target="_blank"
                  rel="noreferrer"
                  className="icon-colour  home-social-icons"
                >
                  <FaSquareThreads />
                </a>
              </li>
            </ul>
          </Col>
        </Row>
      </Container>
    </Container>
  );
}
export default Home2;
