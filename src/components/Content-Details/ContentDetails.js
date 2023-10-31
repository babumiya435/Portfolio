import React from "react";
import { Container } from "react-bootstrap";
import Card from "react-bootstrap/Card";
import { useParams } from 'react-router-dom';

function ContentDetails() {
  const { id } = useParams();

  return (
    <Container fluid className="content-details-section">
      <Card className="quote-card-view">
        <Card.Body>
          <blockquote className="blockquote mb-0">
            {/* <p style={{ textAlign: "justify" }}>
              Hi Everyone, I am <span className="purple"> BABU MIYA MOHAMMAD </span>
              from <span className="purple"> Hyderabad, India.</span>
              <br /> I am a Senior Software Developer in a product based company located in Hyderabad.
              <br />
              <br />
              Apart from coding, some other activities that I love to do !
            </p> */}
            <div>
              <h2>User Profile</h2>
              <p>User ID: {id}</p>
            </div>
          </blockquote>
        </Card.Body>
      </Card>
    </Container>
  );
}
export default ContentDetails;
