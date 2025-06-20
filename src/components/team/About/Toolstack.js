import React from "react";
import { Col, Row } from "react-bootstrap";
import {
  SiVisualstudiocode,
  SiPostman,
  SiSlack,
  SiVercel,
  SiAndroidstudio,
  SiGithub
} from "react-icons/si";

const TOOL_ICONS = [
  SiVisualstudiocode,
  SiPostman,
  SiSlack,
  SiVercel,
  SiAndroidstudio,
  SiGithub
];

function Toolstack() {
  return (
    <Row style={{ justifyContent: "center", paddingBottom: "50px" }}>
      {TOOL_ICONS.map((Icon, idx) => (
        <Col xs={4} md={2} className="tech-icons" key={idx}>
          <Icon />
        </Col>
      ))}
    </Row>
  );
}

export default Toolstack;