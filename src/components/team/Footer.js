import React from "react";
import { Container, Row, Col } from "react-bootstrap";

const TEXT = {
  dev: 'Designed and Developed by Samir and Sho',
  copyright: 'Copyright',
  brand: 'Zentech Collective'
};

function Footer() {
  const year = new Date().getFullYear();

  return (
    <Container fluid className="footer">
      <Row>
        <Col md="4" className="footer-copywright">
          <h3>{TEXT.dev}</h3>
        </Col>
        <Col md="4" className="footer-copywright">
          <h3>{TEXT.copyright} © {year}</h3>
        </Col>
        <Col md="4" className="footer-body">
          <h3>{TEXT.brand}</h3>
        </Col>
      </Row>
    </Container>
  );
}

export default Footer;