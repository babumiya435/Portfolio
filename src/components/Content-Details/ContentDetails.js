import React from "react";
import Card from "react-bootstrap/Card";

function ContentDetails() {
  return (
    <div>
    <Card className="project-card-view">
      <Card.Body>
        <Card.Title>Content 1</Card.Title>
        <Card.Text style={{ textAlign: "justify" }}>
          Content 1 Data
        </Card.Text>
      </Card.Body>
    </Card>
    </div>
  );
}
export default ContentDetails;
