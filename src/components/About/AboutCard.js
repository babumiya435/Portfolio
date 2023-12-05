import React from "react";
import Card from "react-bootstrap/Card";
import { ImPointRight } from "react-icons/im";

function AboutCard() {
  return (
    <Card className="quote-card-view">
      <Card.Body>
        <blockquote className="blockquote mb-0">
          <p style={{ textAlign: "justify" }}>
            Hi Everyone, I am <span className="purple"> BABU MIYA MOHAMMAD </span>
            from <span className="purple"> Hyderabad, India.</span>
            <br /> I am a working as UI Team Lead in a product based company located in Hyderabad.
            <br />
            <br />
            Apart from coding, some other activities that I love to do !
          </p>
          <ul>
            <li className="about-activity">
              <ImPointRight /> Drafting and Implementing Ideas
            </li>
            <li className="about-activity">
              <ImPointRight /> Writing Tech Blogs & DSA related topics
            </li>
            <li className="about-activity">
              <ImPointRight /> Creating Youtube Tech Videos
            </li>
          </ul>

          <p style={{ color: "rgb(155 126 172)" }}>
            "Stay Hungry Stay Foolish"{" "}
          </p>
          <footer className="blockquote-footer">Steve Jobs</footer>

          <p style={{ color: "rgb(155 126 172)" }}>
            "The best way to learn something is to build something"{" "}
          </p>
          <footer className="blockquote-footer">My self</footer>
        </blockquote>
      </Card.Body>
    </Card>
  );
}

export default AboutCard;
