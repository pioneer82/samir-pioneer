import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import { useSelector } from 'react-redux';

const DEV_TEXT = {
  English: 'Designed and Developed by Samir and Tom',
  Japanese: 'サミールとトムによる設計と開発'
};

const COPYRIGHT_TEXT = {
  English: 'Copyright',
  Japanese: '著作権'
};

function Footer() {
  const year = new Date().getFullYear();
  const language = useSelector(state => state.language.language);

  const devText = language === 'English' ? DEV_TEXT.English : DEV_TEXT.Japanese;
  const copyrightText = language === 'English' ? COPYRIGHT_TEXT.English : COPYRIGHT_TEXT.Japanese;

  return (
    <Container fluid className="footer">
      <Row>
        <Col md="4" className="footer-copywright">
          <h3>{devText}</h3>
        </Col>
        <Col md="4" className="footer-copywright">
          <h3>{copyrightText} © {year}</h3>
        </Col>
        <Col md="4" className="footer-body">
          <h3>Zentech Collective</h3>
        </Col>
      </Row>
    </Container>
  );
}

export default Footer;