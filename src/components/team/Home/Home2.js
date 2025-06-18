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
import { useSelector } from 'react-redux';

function Home2() {
  const language = useSelector(state => state.language.language);
  const englishContents = [
    'We are a two-person team combining business strategy and technical expertise to deliver high-quality projects for Japanese clients.',
    'Our team is co-founded by Sho, who operates as  Japanese market lead, and Samir, who brings solid engineering skills to the table.',
    'Always create clean and expandable code.',
    'Our team is fully capable and qualified to handle Blogs, Portfolios, E-Commerce, Business websites, Landing Pages, Training, Project Designers, and more.',
    'Our team respects our customers wishes and will do our best to 100% meet their needs.'
  ]

  const japaneseContents = [
    '私たちは、ビジネス戦略と技術的専門知識を組み合わせて、日本のクライアントに高品質のプロジェクトを提供する2人組のチームです。',
    '私たちのチームは、日本市場のリーダーを務める Sho と、確かなエンジニアリング スキルを持つ Samir によって共同設立されました。',
    '常にクリーンかつ拡張可能なコードを作成してください。',
    '私たちのチームは、ブログ、ポートフォリオ、eコマース、ビジネスウェブサイト、ランディングページ、トレーニング、プロジェクトデザイナーなどを行うのに十分な能力と資格を持っています。',
    '当社チームはお客様のご要望を尊重し、お客様のニーズを100%満たすために最善を尽くします。'

  ]
  return (
    <Container fluid className="home-about-section" id="about">
      <Container>
        <Row>
          <Col md={12} className="home-about-description" style={{ textAlign: 'center' }}>
            <h1 style={{ fontSize: "2.6em" }}>
              {
                language === 'English' ? <div>LET ME<span className="purple"> INTRODUCE </span> TO OUR TEAM</div> :
                  <span className="purple">私たちのチームをご紹介します</span>
              }
            </h1>
            <p className="home-about-body">
              {
                language === 'English' ? englishContents.map((item, key) => {
                  return <>{item}<br /><br /></>
                }) : japaneseContents.map((item, key) => {
                  return <>{item}<br /><br /></>
                })
              }
            </p>
          </Col>
          {/* <Col md={4} className="myAvtar">
            <Tilt>
              <img src={myImg} className="img-fluid" alt="avatar" />
            </Tilt>
          </Col> */}
        </Row>
      </Container>
    </Container >
  );
}
export default Home2;
