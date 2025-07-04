import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import Particle from "../Particle";
import Techstack from "./Techstack";
import Aboutcard from "./AboutCard";
import laptopImg from "../../../Assets/about.png";
import Toolstack from "./Toolstack";
import { useSelector } from 'react-redux';

const TITLES = {
  about: {
    English: <>Know Who <strong className="purple">We are</strong></>
  },
  skills: {
    English: <>Our <strong className="purple">Skills </strong></>
  },
  tools: {
    English: <><strong className="purple">Tools </strong> We use</>
  }
};

function About() {
  const language = useSelector(state => state.language.language);

  return (
    <Container fluid className="about-section">
      <Particle />
      <Container>
        <Row style={{ justifyContent: "center", padding: "10px" }}>
          <Col
            md={7}
            style={{
              justifyContent: "center",
              paddingTop: "30px",
              paddingBottom: "50px",
            }}
          >
            <h1 style={{ fontSize: "2.1em", paddingBottom: "20px" }}>
              {TITLES.about.English}
            </h1>
            <Aboutcard />
          </Col>
          <Col
            md={5}
            style={{ paddingTop: "200px", paddingBottom: "50px" }}
            className="about-img"
          >
            <img src={laptopImg} alt="about" className="img-fluid" />
          </Col>
        </Row>
        <h1 className="project-heading">
          {TITLES.skills[language] || TITLES.skills.English}
        </h1>
        <Techstack />
        <h1 className="project-heading">
          {TITLES.tools[language] || TITLES.tools.English}
        </h1>
        <Toolstack />
        {/* <Github /> */}
      </Container>
    </Container>
  );
}

export default About;