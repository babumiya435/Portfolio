import React from "react";
import Card from "react-bootstrap/Card";
import Button from "react-bootstrap/Button";
import { BsGithub } from "react-icons/bs";
import { useNavigate   } from 'react-router-dom';

function ProjectCards(props) {
  const navigate = useNavigate();
  console.log(props.data)
  const navigateToChild = () => {
    // Pass data via state when navigating
    navigate(props.demoLink, { state: { dataFromParent: props.data } });
  };

  return (
    <Card className="project-card-view">
      <Card.Img
        variant="top"
        src={process.env.PUBLIC_URL + `/assets/svg/${props.imgPath}`}
        alt={"card-img" + props.title}
        style={{ maxHeight: "300px" }}
      />
      <Card.Body>
        <Card.Title>{props.title}</Card.Title>
        <Card.Text style={{ textAlign: "justify" }}>
          {props.description}
        </Card.Text>
        <Button variant="primary" href={props.ghLink} target="_blank" onClick={navigateToChild}>
          {props.isBlog ? "Blog" : "Learn"}
        </Button>
        {"\n"}
        {"\n"}

        {/* If the component contains Demo link and if it's not a Blog then, it will render the below component  */}

        {/* {!props.isBlog && props.demoLink && (
          <div>
            <button onClick={navigateToChild}>Go to Child</button>
          </div>
        )} */}
      </Card.Body>
    </Card>
  );
}
export default ProjectCards;
