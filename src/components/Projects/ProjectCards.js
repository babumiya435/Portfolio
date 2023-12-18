import React from "react";
import Card from "react-bootstrap/Card";
import Button from "react-bootstrap/Button";
import { BsGithub } from "react-icons/bs";
import { useNavigate } from 'react-router-dom';

function ProjectCards(props) {
  const navigate = useNavigate();
  console.log(props.data)
  const navigateToChild = () => {
    // Pass data via state when navigating
    navigate(props.demoLink, { state: { dataFromParent: props.data } });
  };

  return (
    <Card className="project-card-view">
      {!props.isBlog && <Card.Img
        variant="top"
        src={process.env.PUBLIC_URL + `/assets/images/my-tech-blogs.png`}
        alt={"card-img-my-tech-blogs.png"}
        style={{ height: "200px" }}
      />}
      {props.isBlog && <Card.Img
        variant="top"
        src={process.env.PUBLIC_URL + `/assets/svg/${props.imgPath}`}
        alt={"card-img" + props.title}
        style={{ maxHeight: "200px" }}
      />}
      <Card.Body>
        <Card.Title>{props.title}</Card.Title>
        <Card.Text style={{ textAlign: "justify" }}>
          {props.description}
        </Card.Text>
        {
          props.isBlog && <Button variant="primary" href={props.ghLink} target="_blank" onClick={navigateToChild}>
            Learn
          </Button>
        }
        {"\n"}
        {"\n"}
      </Card.Body>
    </Card>
  );
}
export default ProjectCards;
