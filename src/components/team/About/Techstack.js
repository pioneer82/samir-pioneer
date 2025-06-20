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

const TECH_ICONS = [
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
];

function Techstack() {
  return (
    <Row style={{ justifyContent: "center", paddingBottom: "50px" }}>
      {TECH_ICONS.map((Icon, idx) => (
        <Col xs={4} md={2} className="tech-icons" key={idx}>
          <Icon className="skill-icon" />
        </Col>
      ))}
    </Row>
  );
}

export default Techstack;