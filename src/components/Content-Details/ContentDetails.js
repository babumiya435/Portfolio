import React from "react";
import { Container } from "react-bootstrap";
import Card from "react-bootstrap/Card";
import { useParams } from 'react-router-dom';
import Paragraph from "../helper-components/Paragraph";
import { Link } from 'react-router-dom';
import CodeViewer from "../helper-components/CodeViewer";
import { useLocation } from 'react-router-dom';

function ContentDetails() {
  const location = useLocation();
  const dataFromParent = location.state?.dataFromParent || {};
  const { id } = useParams();
  console.log(dataFromParent);

  return (
    <Container fluid className="content-details-section">
      <Card className="quote-card-view">
        <Card.Body>
          <blockquote className="blockquote mb-0">
            <div className="mb-5">
              <h2>{dataFromParent.topicName}</h2>
              <p>Topic Id : {id}</p>
              <Card.Img
                variant="top"
                src={process.env.PUBLIC_URL + `/assets/svg/${dataFromParent.topicImg}`}
                alt={"card-img" + dataFromParent.title}
                style={{ maxHeight: "300px" }}
              />
            </div>
            <Paragraph className="mb-5" />
            <Container fluid className="paragraph-section">
              <p>Paragraph</p>
            </Container>
            <Link className="link-section mb-5" to="/another-page">Go to Another Page</Link>
            <CodeViewer className="mb-5" />
          </blockquote>
        </Card.Body>
      </Card>
    </Container>
  );
}
export default ContentDetails;
