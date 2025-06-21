import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import { useSelector } from 'react-redux';

const CONTENTS = {
  English: [
    "We are a small but elite development team consisting of a bilingual Japanese-English team leader with a deep understanding of business and an engineer who started his career in Sweden at the age of 15 and has over 5 years of practical experience.",
    "We utilize the high technical skills honed in a meritocratic overseas environment to provide high-quality code that is scalable and easy to read, and satisfies our clients.",
    "In addition to our 'technical skills', we also have three strengths: strict adherence to deadlines, polite and prompt responses, and smooth communication in Japanese, and we will realize our clients' 'want' in the shortest possible time.",
    "We put our customers' requests first, strive to communicate in a way that satisfies them 150%, and lead projects to success flexibly and quickly, both domestically and overseas."
  ],
  Japanese: [
    "私たちは、日英バイリンガルでビジネスへの理解が深いチームリーダーと、スウェーデンで15歳からキャリアを積み、5年以上の実務経験を持つエンジニアで構成された、少数精鋭の開発チームです。",
    "海外の実力主義の環境で磨き上げた高い技術力を活かし、拡張性や可読性に優れた、クライアント様にご満足いただける高品質なコードを提供しています。",
    "さらに、私たちは「技術力」だけでなく、納期厳守・丁寧かつ迅速なレスポンス・日本語での円滑なコミュニケーションの3つを強みとしており、クライアント様の「こうして欲しい」を最短距離で形にします。",
    "お客様のご要望を第一に考え、150%ご満足いただけるようなコミュニケーションを心がけ、国内外問わず、柔軟かつスピーディーにプロジェクトを成功へと導きます。"
  ]
};

const TITLES = {
  English: (
    <div>
      What is<span className="purple"> ZenTech Collective </span> ?
    </div>
  ),
  Japanese: <div><span className="purple">ZenTech Collective</span> とは？</div>
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
        </Row>
      </Container>
    </Container>
  );
}

export default Home2;