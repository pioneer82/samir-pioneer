import React from "react";
import Card from "react-bootstrap/Card";
import Button from "react-bootstrap/Button";
import { CgWebsite } from "react-icons/cg";
import { BsGithub } from "react-icons/bs";

function ProjectCards({ title, imgPath, description, ghLink, demoLink, isBlog }) {

  return (
    <Card className="project-card-view">
      <Card.Body>
        <Card.Title>{title}</Card.Title>
        <Card.Img variant="top" src={imgPath} alt="card-img" />
        <Card.Text style={{ textAlign: "justify" }}>
          {description}
        </Card.Text>
        {ghLink && (
          <Button variant="primary" href={ghLink} target="_blank">
            <BsGithub /> &nbsp;GitHub
          </Button>
        )}
        {"\n"}
        {"\n"}
        {!isBlog && demoLink && (
          <Button
            variant="primary"
            href={demoLink}
            target="_blank"
            style={{ marginLeft: "10px" }}
          >
            <CgWebsite /> &nbsp;
            Demo
          </Button>
        )}
      </Card.Body>
    </Card>
  );
}

export default ProjectCards;