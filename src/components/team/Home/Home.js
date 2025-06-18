import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import homeLogo from "../../../Assets/home-main.svg";
import Particle from "../Particle";
import Home2 from "./Home2";
import Type from "./Type";
import { useSelector } from 'react-redux';

function Home() {
  const language = useSelector(state => state.language.language);
  const english = ['WE ARE', 'ZENTECH COLLECTIVE', 'DEVELOPERS']
  const japanese = ['私たちは', 'ZENTECH共同開発', '者です']
  return (
    <section>
      <Container fluid className="home-section" id="home">
        <Particle />
        <Container className="home-content">
          <Row>
            <Col md={12} className="home-header" style={{ textAlign: 'center' }}>
              <h1 style={{ paddingBottom: 15 }} className="heading">
                {
                  language === 'English' ? 'Hi There! ' : 'やあ！ '
                }
                <span className="wave" role="img" aria-labelledby="wave">
                  👋🏻
                </span>
              </h1>

              <h1 className="heading-name">
                {
                  language === 'English' ? english[0] : japanese[0]
                }
                <strong className="main-name">
                  {
                    language === 'English' ? english[1] : japanese[1]
                  }
                </strong>
                {
                  language === 'English' ? english[2] : japanese[2]
                }
              </h1>

              <div style={{ padding: 50, textAlign: "center" }}>
                <Type />
              </div>
            </Col>

            {/* <Col md={5} style={{ paddingBottom: 20 }}>
              <img
                src={homeLogo}
                alt="home pic"
                className="img-fluid"
                style={{ maxHeight: "450px" }}
              />
            </Col> */}
          </Row>
        </Container>
      </Container>
      <Home2 />
    </section>
  );
}

export default Home;
