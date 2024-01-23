import React from "react";
import Card from "react-bootstrap/Card";
import { ImPointRight } from "react-icons/im";

function AboutCard() {
  return (
    <Card className="quote-card-view">
      <Card.Body>
        <blockquote className="blockquote mb-0">
          <p style={{ textAlign: "left" }}>
            Hi Everyone, I am <b className="purple"> BABU MIYA MOHAMMAD </b>
            from <b className="purple"> Hyderabad, India.</b>
            <br /> I am currently working as a <b className="purple">UI Team Lead</b> in a product-based company located in Hyderabad.<br />
            <br />
            Responsibilities in Current Role as UI Team Lead :
            <br />
            <b className="purple">Managing Offshore Team:</b><br />
            &nbsp;&nbsp;&nbsp;- Oversight and management of the offshore development team.<br />

            <b className="purple">Task Distribution:</b><br />
            &nbsp;&nbsp;- Creation and distribution of development and defect - related tasks among the team based on development stories / releases.<br />

            <b className="purple">Development Activities:</b><br />
            &nbsp;&nbsp;&nbsp;- Involvement in defect fixing and development activities.<br />

            <b className="purple">Mentoring Junior Developers:</b><br />
            &nbsp;&nbsp;&nbsp;- Providing guidance and mentoring to junior developers within the team.<br />

            <b className="purple">Story Discussions:</b><br />
            &nbsp;&nbsp;&nbsp;- Active participation in development story discussions.<br />

            <b className="purple">Issue Resolution:</b><br />
            &nbsp;&nbsp;&nbsp;- Resolution of development blocker issues by coordinating with different modules/components of the project.
            <br />
            <br />
            Some Product Ideas in My Bucket Currently:<br />
            <i>
              <b className="purple">Tech Blogs, Health Jarvis, Improve Me and Digital Resume.</b>
            </i>
            <br />
            <br />
            Apart from coding, some other activities I love to do :
          </p>
          <ul>
            <li className="about-activity">
              <ImPointRight /> <b className="purple">Drafting and Implementing Ideas</b>
            </li>
            <li className="about-activity">
              <ImPointRight /> <b className="purple">Writing Tech Blogs & DSA related topics</b>
            </li>
            <li className="about-activity">
              <ImPointRight /> <b className="purple">Creating Youtube Tech Videos</b>
            </li>
          </ul>

          <div>
            <p className="blockquote-text">
              "Stay Hungry Stay Foolish"{" "}
            </p>
            <footer className="blockquote-footer">Steve Jobs</footer>

            <p className="blockquote-text">
              "The best way to learn something is to build something"{" "}
            </p>
            <footer className="blockquote-footer">My self</footer>
          </div>
        </blockquote>
      </Card.Body>
    </Card>
  );
}

export default AboutCard;
