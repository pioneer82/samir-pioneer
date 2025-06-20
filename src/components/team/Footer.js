import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import { useSelector } from 'react-redux';

const TEXT = {
  dev: {
    English: 'Designed and Developed by Samir and Tom',
    Japanese: 'サミールとトムによる設計と開発'
  },
  copyright: {
    English: 'Copyright',
    Japanese: '著作権'
  },
  brand: 'Zentech Collective'
};

function Footer() {
  const year = new Date().getFullYear();
  const language = useSelector(state => state.language.language);

  return (
    <Container fluid className="footer">
      <Row>
        <Col md="4" className="footer-copywright">
          <h3>{TEXT.dev[language] || TEXT.dev.English}</h3>
        </Col>
        <Col md="4" className="footer-copywright">
          <h3>{TEXT.copyright[language] || TEXT.copyright.English} © {year}</h3>
        </Col>
        <Col md="4" className="footer-body">
          <h3>{TEXT.brand}</h3>
        </Col>
      </Row>
    </Container>
  );
}

export default Footer;