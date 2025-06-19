import React from "react";
import { Container, Row, Col } from "react-bootstrap";

import Card from "react-bootstrap/Card";
import Button from "react-bootstrap/Button";
import { useSelector } from 'react-redux';
import { Link } from "react-router-dom";

function Members() {
  const language = useSelector(state => state.language.language);

  const samirEngContent = [
    "I am a full stack developer with 5+ years of development experience.",
    "I have a wealth of experience developing various projects including Business, Blog, and E-commerce.",
    "I am always prepared and do everything to 100% meet the needs of new customers, and I am still constantly learning new technologies.",
    "If you need any help from me, please contact me at any time."
  ]

  const samirJapContent = [
    "私は 5 年以上の開発経験を持つフルスタック開発者です。",
    "私はビジネス、ブログ、Eコマースなど、さまざまなプロジェクトの開発において豊富な経験を持っています。",
    "私は常に準備を整え、新規顧客のニーズに100％応えられるよう全力を尽くしており、現在も新しい技術を継続的に学んでいます。",
    "何かお手伝いが必要でしたら、いつでもご連絡ください。",
  ]
  return (
    <Container fluid className="project-section">
      <Row style={{ justifyContent: "center", paddingBottom: "10px" }}>
        <Col md={5} xs={4} className="project-card">
          <Card className="project-card-view">
            <Card.Body>
              <Card.Title className="member-name purple">
                {
                  language === "English" ? "Sho Maruono" : "丸尾野翔"
                }
              </Card.Title>
              <Card.Text style={{ textAlign: "justify", margin: '2vw 2vw' }}>
                {
                  language === "English" ? samirEngContent.map(item =>
                    <>{item}<br /><br /></>
                  ) : samirJapContent.map(item =>
                    <>{item}<br /><br /></>
                  )
                }
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
                {
                  language === "English" ? "Resume" : "再開する"
                }
              </Button>
              {"\n"}
              {"\n"}
              <Button variant="primary" style={{ marginLeft: '1vw' }}>
                {
                  language === "English" ? "Visit WebSite" : "ウェブサイトを訪問"
                }
              </Button>
            </Card.Body>
          </Card>
        </Col>

        <Col md={5} xs={4} className="project-card">
          <Card className="project-card-view">
            <Card.Body>
              <Card.Title className="member-name purple">
                {
                  language === "English" ? "Samir Barker" : "サミール・バーカー"
                }
              </Card.Title>
              <Card.Text style={{ textAlign: "justify", margin: '2vw 2vw' }}>
                {
                  language === "English" ? samirEngContent.map(item =>
                    <>{item}<br /><br /></>
                  ) : samirJapContent.map(item =>
                    <>{item}<br /><br /></>
                  )
                }
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
                {
                  language === "English" ? "Resume" : "再開する"
                }
              </Button>
              {"\n"}
              {"\n"}
              <Button variant="primary" style={{ marginLeft: '1vw' }}>
                {
                  language === "English" ? "Visit WebSite" : "ウェブサイトを訪問"
                }
              </Button>
            </Card.Body>
          </Card>
        </Col>
      </Row>
    </Container>
  );
}

export default Members;
