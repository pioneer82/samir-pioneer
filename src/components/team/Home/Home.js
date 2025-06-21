import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import Particle from "../Particle";
import Home2 from "./Home2";
import Type from "./Type";
import { useSelector } from 'react-redux';

const TEXT = {
  English: {
    greeting: "Hi There! ",
    parts: ['WE ARE', ' ZENTECH COLLECTIVE ', 'DEVELOPERS']
  },
  Japanese: {
    greeting: "やあ！ ",
    parts: ['私たちは', 'ZENTECH共同開発', '者です']
  }
};

function Home() {
  const language = useSelector(state => state.language.language);
  const { greeting, parts } = TEXT[language] || TEXT.English;

  return (
    <section>
      <Container fluid className="home-section" id="home">
        <Particle />
        <Container className="home-content">
          <Row>
            <Col md={12} className="home-header" style={{ textAlign: 'center' }}>
              <h1 style={{ paddingBottom: 15 }} className="heading">
                {greeting}
                <span className="wave" role="img" aria-labelledby="wave">
                  👋🏻
                </span>
              </h1>
              <h1 className="heading-name">
                {parts[0]}
                <strong className="main-name">{parts[1]}</strong>
                {parts[2]}
              </h1>
              <div style={{ padding: 50, textAlign: "center" }}>
                <Type />
              </div>
            </Col>
            {/* 
            <Col md={5} style={{ paddingBottom: 20 }}>
              <img
                src={homeLogo}
                alt="home pic"
                className="img-fluid"
                style={{ maxHeight: "450px" }}
              />
            </Col> 
            */}
          </Row>
        </Container>
      </Container>
      <Home2 />
    </section>
  );
}

export default Home;