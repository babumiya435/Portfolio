import React from "react";
import Card from "react-bootstrap/Card";
import Button from "react-bootstrap/Button";
import { useNavigate } from 'react-router-dom';

function ProjectCards(props) {
  const navigate = useNavigate();
  const isVisible = true;
  console.log(props.data)
  const navigateToChild = () => {
    // Pass data via state when navigating
    if (props.isProject) {
      navigate(props.ghLink);
    } else {
      isVisible && navigate(props.demoLink, { state: { dataFromParent: props.data } });
    }
  };

  return (
    <Card className="project-card-view" onClick={navigateToChild}>
      {props.isProject && <Card.Img
        variant="top"
        src={process.env.PUBLIC_URL + `/assets/images/${props.imgPath}`}
        alt={"card-img-my-tech-blogs.png"}
        style={{ height: "200px" }}
      />}
      {!props.isProject && <Card.Img
        variant="top"
        src={process.env.PUBLIC_URL + `/assets/svg/${props.imgPath}`}
        alt={"card-img" + props.title}
        style={{ maxHeight: "200px" }}
      />}
      <Card.Body>
        <Card.Title>{props.title}</Card.Title>
        <Card.Text>
          {props.description}
        </Card.Text>
        {
          <Button variant="primary">
            {props.isProject ? "Open" : "Learn"}
          </Button>
        }
        {"\n"}
        {"\n"}
      </Card.Body>
    </Card>
  );
}
export default ProjectCards;
