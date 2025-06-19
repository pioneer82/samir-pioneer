import React from "react";
import { Container, Row, Col } from "react-bootstrap";

import Card from "react-bootstrap/Card";
import Button from "react-bootstrap/Button";
import { useSelector } from 'react-redux';
import { Link } from "react-router-dom";

function Members() {
  const language = useSelector(state => state.language.language);

  return (
    <Container fluid className="project-section">
      <Row style={{ justifyContent: "center", paddingBottom: "10px" }}>
        <Col md={5} xs={4} className="project-card">
          <Card className="project-card-view">
            <Card.Body>
              <Card.Title className="member-name purple">Sho Maruono</Card.Title>
              <Card.Text style={{ textAlign: "justify" }}>
                {'props.description'}
              </Card.Text>
              <Button variant="primary">
                Resume
              </Button>
              {"\n"}
              {"\n"}
              <Button variant="primary" style={{ marginLeft: '1vw' }}>
                Visit Website
              </Button>
            </Card.Body>
          </Card>
        </Col>
        <Col md={5} xs={4} className="project-card">
          <Card className="project-card-view">
            <Card.Body>
              <Card.Title className="member-name purple">Samir Barker</Card.Title>
              <Card.Text style={{ textAlign: "justify", margin: '2vw 2vw' }}>
                I am a full stack developer with 5+ years of development experience.
                <br />
                <br />
                I have a wealth of experience developing various projects including Business, Blog, and E-commerce.
                <br />
                <br />
                I am always prepared and do everything to 100% meet the needs of new customers, and I am still constantly learning new technologies.
                <br />
                <br />
                If you need any help from me, please contact me at any time.
                <br />
                <br />
                <h5 className="purple">
                  Gmail : &nbsp; &nbsp;
                  <a href='sdf'>pioneer200082@gmail.com</a>
                </h5>

                <h5 className="purple">
                  Telegram : &nbsp; &nbsp;
                  <a href='sdf'>@pioneer_82</a>
                </h5>
              </Card.Text>
              <Button variant="primary" as={Link} to="/resume/samir">
                Resume
              </Button>
              {"\n"}
              {"\n"}
              <Button variant="primary" style={{ marginLeft: '1vw' }}>
                Visit Website
              </Button>
            </Card.Body>
          </Card>
        </Col>
      </Row>
    </Container>
  );
}

export default Members;
