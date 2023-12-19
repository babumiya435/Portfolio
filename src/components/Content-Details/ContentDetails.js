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
                alt={"card-img" + dataFromParent.title}
                style={{ maxHeight: "200px" }}
              />
            </div>
            <Container className="paragraph-section container-fluid">
              <Container className="paragraph-section container-fluid">
                <Accordion items={dataFromParent.topicContent} />
              </Container>
            </Container>
            <Container className="paragraph-section other-topics container-fluid">
              <div className="other-links-section">
                <h2>Other Topic Links</h2>
                <ul className="list-section">
                  {dataFromParent.topicContent[0].otherContentLinks ? dataFromParent.topicContent[0].otherContentLinks.map((item, index) => (
                    <li key={index} id={"id" + index}>
                      <Link
                        style={{ marginLeft: "10px" }}>
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
