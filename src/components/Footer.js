import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import {
  AiFillGithub,
  AiOutlineTwitter,
  AiFillInstagram,
} from "react-icons/ai";
import { FaLinkedinIn } from "react-icons/fa";
import { FaSquareThreads } from "react-icons/fa6";
import myImg from "../Assets/svg/made-with-react.svg";
import { FaXTwitter } from "react-icons/fa6";

function Footer() {
  let date = new Date();
  let year = date.getFullYear();
  return (
    <Container fluid className="footer">
      <Row>
        <Col md="4" className="footer-copywright">
          <h3>No Copyright issues</h3>
          <h3 className="footer-copywright">
          Feel free to copy. If you need any help, ping me !
        </h3>
        <h3>Created @{year}</h3>
        </Col>
        <Col md="4" className="footer-copywright">
          <h3>BABU MIYA MOHAMMAD</h3>
          <h3>INDIA</h3>
          <img src={myImg} className="made-with-react-svg" alt="avatar" />
        </Col>
        <Col md="4" className="footer-body">
          <ul className="footer-icons">
            <li className="social-icons">
              <a
                href="https://www.linkedin.com/in/babu-miya-mohammad/"
                style={{ color: "white" }}
                target="_blank" 
                rel="noopener noreferrer"
              >
                <FaLinkedinIn />
              </a>
            </li>
            <li className="social-icons">
              <a
                href="https://github.com/babumiya435"
                style={{ color: "white" }}
                target="_blank" 
                rel="noopener noreferrer"
              >
                <AiFillGithub />
              </a>
            </li>
            <li className="social-icons">
              <a
                href="https://www.instagram.com/iam_sameer_md_"
                style={{ color: "white" }}
                target="_blank" 
                rel="noopener noreferrer"
              >
                <AiFillInstagram />
              </a>
            </li>
            <li className="social-icons">
              <a
                href="https://twitter.com/babumiyatcs"
                style={{ color: "white" }}
                target="_blank" 
                rel="noopener noreferrer"
              >
                <FaXTwitter />
              </a>
            </li>
            <li className="social-icons">
              <a
                href="https://www.threads.net/@iam_sameer_md_"
                style={{ color: "white" }}
                target="_blank" 
                rel="noopener noreferrer"
              >
                <FaSquareThreads />
              </a>
            </li>
          </ul>
        </Col>
      </Row>
    </Container>
  );
}

export default Footer;
