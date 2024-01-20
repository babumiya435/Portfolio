import React from "react";
import { Container } from "react-bootstrap";
import Card from "react-bootstrap/Card";
import { useParams } from 'react-router-dom';
import { Link } from 'react-router-dom';
import { useLocation } from 'react-router-dom';
import Accordion from "../helper-components/Accordion";


function ContentDetails() {
  const location = useLocation();
  const dataFromParent = location.state?.dataFromParent || null;
  const { id } = useParams();
  console.log(dataFromParent);

  return (
    <>
      {
        dataFromParent && (
          <Container className="content-details-section container-fluid">
            <div className="mb-5 other-links-section">
              <h2>{dataFromParent.topicName}</h2>
              <p>Topic Id : {id}</p>
              <Card.Img
                variant="top"
                src={process.env.PUBLIC_URL + `/assets/svg/${dataFromParent.topicImg}`}
                alt={"card-img" + dataFromParent.topicName}
                style={{ maxHeight: "200px" }}
              />
            </div>
            <Container className="paragraph-section">
              <Container className="paragraph-section">
                <Accordion items={dataFromParent.topicContent} />
              </Container>
            </Container>
            <Container className="paragraph-section other-topics">
              <div className="other-links-section">
                <h3 className="text-decorate">Other Topic Links</h3>
                <ul className="list-section">
                  {dataFromParent.relatedTopics ? dataFromParent.relatedTopics.map((item, index) => (
                    <li key={index} id={"id" + index}>
                      <Link
                        className="list-links">
                        {item.topicName}
                      </Link>
                    </li>
                  )) : <p>No Links available</p>
                  }
                </ul>
              </div>
            </Container>
          </Container>
        )
      }
    </>
  );
}
export default ContentDetails;
