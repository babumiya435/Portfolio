import React from "react";
import Card from "react-bootstrap/Card";
import { Container, Row, Col } from "react-bootstrap";

function ContentDetails() {
  return (
    <Container fluid className="tech-learning-section">
    <Card className="project-card-view">
      <Card.Body>
        <Card.Title>Content 1</Card.Title>
        <Card.Text style={{ textAlign: "justify" }}>
          Content 1 Data
        </Card.Text>
      </Card.Body>
    </Card>
    </Container>
  );
}
export default ContentDetails;
