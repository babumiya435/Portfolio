import React from "react";
import { Container } from "react-bootstrap";
import Card from "react-bootstrap/Card";
import { useParams } from 'react-router-dom';
import Paragraph from "../helper-components/Paragraph";
import { Link } from 'react-router-dom';
import CodeViewer from "../helper-components/CodeViewer";

function ContentDetails() {
  const { id } = useParams();

  return (
    <Container fluid className="content-details-section">
      <Card className="quote-card-view">
        <Card.Body>
          <blockquote className="blockquote mb-0">
          <div>
              <h2>User Profile</h2>
              <p>User ID: {id}</p>
            </div>
            <Paragraph />
            <Link className="link-section" to="/another-page">Go to Another Page</Link>
            <CodeViewer/>
          </blockquote>
        </Card.Body>
      </Card>
    </Container>
  );
}
export default ContentDetails;
