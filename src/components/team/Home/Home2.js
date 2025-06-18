import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import myImg from "../../../Assets/avatar.svg";
import Tilt from "react-parallax-tilt";
import {
  AiFillGithub,
  AiOutlineTwitter,
  AiFillInstagram,
} from "react-icons/ai";
import { FaLinkedinIn } from "react-icons/fa";

function Home2() {
  return (
    <Container fluid className="home-about-section" id="about">
      <Container>
        <Row>
          <Col md={12} className="home-about-description" style={{ textAlign: 'center' }}>
            <h1 style={{ fontSize: "2.6em" }}>
              LET ME <span className="purple"> INTRODUCE </span> TO OUR TEAM
            </h1>
            <p className="home-about-body">
              We are a two-person team combining business strategy and technical expertise to deliver high-quality projects for Japanese clients.
              <br />
              <br />
              Our team is co-founded by Sho, who operates as  Japanese market lead, and Samir, who brings solid engineering skills to the table.
              <br />
              <br />
              Always create clean and expandable code.
              <br />
            </p>
          </Col>
          {/* <Col md={4} className="myAvtar">
            <Tilt>
              <img src={myImg} className="img-fluid" alt="avatar" />
            </Tilt>
          </Col> */}
        </Row>
      </Container>
    </Container>
  );
}
export default Home2;
