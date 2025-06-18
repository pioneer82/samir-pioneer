import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import {
  AiFillGithub,
  AiOutlineTwitter,
  AiFillInstagram,
} from "react-icons/ai";
import { FaLinkedinIn } from "react-icons/fa";

import { useSelector } from 'react-redux';

function Footer() {
  let date = new Date();
  let year = date.getFullYear();
  const language = useSelector(state => state.language.language);
  const engDev = 'Designed and Developed by Samir and Tom';
  const japDev = 'サミールとトムによる設計と開発'
  return (
    <Container fluid className="footer">
      <Row>
        <Col md="4" className="footer-copywright">
          <h3>
            {
              language === 'English' ? engDev : japDev
            }
          </h3>
        </Col>
        <Col md="4" className="footer-copywright">
          <h3>{language === 'English' ? 'Copyright' : '著作権'} © {year}</h3>
        </Col>
        <Col md="4" className="footer-body">
          <h3>Zentech Collective</h3>
        </Col>
      </Row>
    </Container>
  );
}

export default Footer;
