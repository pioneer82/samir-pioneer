import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import { useSelector } from 'react-redux';

const CONTENTS = {
  English: [
    "We are a small, elite development team consisting of a bilingual team leader with deep insight into business in both Japanese and English, and a highly skilled engineer who has been building his career in Sweden since the age of 15 and has over five years of practical experience.",
    "Our strengths lie not only in the technical skills honed under a strict merit- based environment overseas, but also in our three pillars: strict adherence to deadlines, polite and prompt communication, and smooth interactions in Japanese.",
    "This allows us to bring our clients’ ideas to life in the shortest time possible.",
    "With the flexibility and speed to handle projects both domestically and internationally, we are uniquely positioned to lead your project to success from the development side."
  ],
  Japanese: [
    '私たちは、ビジネス戦略と技術的専門知識を組み合わせて、日本のクライアントに高品質のプロジェクトを提供する2人組のチームです。',
    '私たちのチームは、日本市場のリーダーを務める Sho と、確かなエンジニアリング スキルを持つ Samir によって共同設立されました。',
    '常にクリーンかつ拡張可能なコードを作成してください。',
    '私たちのチームは、ブログ、ポートフォリオ、eコマース、ビジネスウェブサイト、ランディングページ、トレーニング、プロジェクトデザイナーなどを行うのに十分な能力と資格を持っています。',
    '当社チームはお客様のご要望を尊重し、お客様のニーズを100%満たすために最善を尽くします。'
  ]
};

const TITLES = {
  English: (
    <div>
      LET ME<span className="purple"> INTRODUCE </span> TO OUR TEAM
    </div>
  ),
  Japanese: <span className="purple">私たちのチームをご紹介します</span>
};

function Home2() {
  const language = useSelector(state => state.language.language);
  const contents = CONTENTS[language] || CONTENTS.English;
  const title = TITLES[language] || TITLES.English;

  return (
    <Container fluid className="home-about-section" id="about">
      <Container>
        <Row>
          <Col md={12} className="home-about-description" style={{ textAlign: 'center' }}>
            <h1 style={{ fontSize: "2.6em" }}>
              {title}
            </h1>
            <p className="home-about-body">
              {contents.map((item, key) => (
                <React.Fragment key={key}>
                  {item}
                  <br /><br />
                </React.Fragment>
              ))}
            </p>
          </Col>
          {/* 
          <Col md={4} className="myAvtar">
            <Tilt>
              <img src={myImg} className="img-fluid" alt="avatar" />
            </Tilt>
          </Col> 
          */}
        </Row>
      </Container>
    </Container>
  );
}

export default Home2;