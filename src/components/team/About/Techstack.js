import React from "react";
import { Col, Row } from "react-bootstrap";
import {
  SiCplusplus,
  SiCsharp,
  SiJavascript,
  SiPython,
  SiHtml5,
  SiTailwindcss,
  SiBootstrap,
  SiGnubash,
  SiPowershell,
  SiMysql,
  SiMongodb,
  SiReact,
  SiNodedotjs,
  SiExpress,
  SiNextdotjs,
  SiVuedotjs,
  SiAngular,
  SiAndroid,
  SiWordpress


} from "react-icons/si";

function Techstack() {
  return (
    <Row style={{ justifyContent: "center", paddingBottom: "50px" }}>
      <Col xs={4} md={2} className="tech-icons">
        <SiCplusplus className="skill-icon" />
      </Col>
      <Col xs={4} md={2} className="tech-icons">
        <SiCsharp className="skill-icon" />
      </Col>
      <Col xs={4} md={2} className="tech-icons">
        <SiJavascript className="skill-icon" />
      </Col>
      <Col xs={4} md={2} className="tech-icons">
        <SiPython className="skill-icon" />
      </Col>
      <Col xs={4} md={2} className="tech-icons">
        <SiHtml5 className="skill-icon" />
      </Col>
      <Col xs={4} md={2} className="tech-icons">
        <SiTailwindcss className="skill-icon" />
      </Col>
      <Col xs={4} md={2} className="tech-icons">
        <SiBootstrap className="skill-icon" />
      </Col>
      <Col xs={4} md={2} className="tech-icons">
        <SiGnubash className="skill-icon" />
      </Col>
      <Col xs={4} md={2} className="tech-icons">
        <SiPowershell className="skill-icon" />
      </Col>
      <Col xs={4} md={2} className="tech-icons">
        <SiMysql className="skill-icon" />
      </Col>
      <Col xs={4} md={2} className="tech-icons">
        <SiMongodb className="skill-icon" />
      </Col>
      <Col xs={4} md={2} className="tech-icons">
        <SiReact className="skill-icon" />
      </Col>
      <Col xs={4} md={2} className="tech-icons">
        <SiNodedotjs className="skill-icon" />
      </Col>
      <Col xs={4} md={2} className="tech-icons">
        <SiExpress className="skill-icon" />
      </Col>
      <Col xs={4} md={2} className="tech-icons">
        <SiNextdotjs className="skill-icon" />
      </Col>
      <Col xs={4} md={2} className="tech-icons">
        <SiVuedotjs className="skill-icon" />
      </Col>
      <Col xs={4} md={2} className="tech-icons">
        <SiAngular className="skill-icon" />
      </Col>
      <Col xs={4} md={2} className="tech-icons">
        <SiAndroid className="skill-icon" />
      </Col>
      <Col xs={4} md={2} className="tech-icons">
        <SiWordpress className="skill-icon" />
      </Col>
    </Row>
  );
}

export default Techstack;