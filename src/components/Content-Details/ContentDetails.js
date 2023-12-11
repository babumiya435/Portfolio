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
    <Container className="content-details-section container-fluid">
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
      <Container className="paragraph-section container-fluid">
        <h2>{dataFromParent.topicContent[0].contentName}</h2>
        <div>
          <p>{dataFromParent.topicContent[0].content}</p>
        </div>
      </Container>
      <Container className="paragraph-section container-fluid">
        <CodeViewer className="mb-5" />
      </Container>
      <Container className="paragraph-section container-fluid">
        <div>
          <h2>List of Links</h2>
          <ul>
            {dataFromParent.topicContent[0].otherContentLinks ? dataFromParent.topicContent[0].otherContentLinks.map((item,index) => (
                <li key={index}>{item}</li>
            )) : <p>No Links available</p>
            }
          </ul>
        </div>
      </Container>
    </Container>
  );
}
export default ContentDetails;
