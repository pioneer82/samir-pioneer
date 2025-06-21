import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import Card from "react-bootstrap/Card";
import Button from "react-bootstrap/Button";
import { useSelector } from 'react-redux';
import { Link } from "react-router-dom";

const memberContents = [
  {
    name: { English: "Sho Maruono", Japanese: "丸小野 笙" },
    email: "axyameofficial092@gmail.com",
    telegram: "@Tom_jpdev",
    resumeLink: "/resume/tom",
    website: "#",
    engContent: [
      "I'm a bilingual multi-creator who has been involved in launching advertising services, matching apps, crowdfunding-related businesses, and more.",
      "I've been involved in everything from planning to development and marketing, and my motto is to ensure speed and reliability while producing results.",
      "I try to keep this in mind as I carry out my daily work: <Responding immediately to even the smallest questions, and being flexible in adjusting to accommodate night-time hours.>",
      "If you need any support or advice, please feel free to contact me at any time.",
    ],
    japContent: [
      "私はこれまで、広告サービス、マッチングアプリ、クラウドファンディング関連事業などの立ち上げに携わってきた、バイリンガル兼マルチクリエイターです。",
      "これまで、企画から開発、マーケティングまでを一貫して経験しており、スピードと信頼性を担保しつつ結果を出すことをモットーにしております。",
      "「小さな質問でも即レス、夜間対応も柔軟に調節」― これを心がけ日々の業務を行なっております。",
      "サポートや相談が必要でしたら、気軽にいつでもお声がけください。"
    ]
  },
  {
    name: { English: "Samir Barker", Japanese: "Samir Barker" },
    email: "pioneer200082@gmail.com",
    telegram: "@pioneer_82",
    resumeLink: "/resume/samir",
    website: "https://pioneer-samir.vercel.app/",
    engContent: [
      "I have over 5 years of development experience as a full-stack engineer.",
      "I have been involved in the development of a variety of projects, including business websites, blogs, and e-commerce sites.",
      "I am always prepared and committed to learning new technologies in order to fully meet my customers' needs.",
      "I will do my best to support any project, so please feel free to contact me at any time if you need any help.",
    ],
    japContent: [
      "私はフルスタックエンジニアとして5年以上の開発経験があります。",
      "これまでに、ビジネスサイト、ブログ、ECサイトなど、さまざまなプロジェクトの開発に携わってきました。",
      "お客様のご要望に100%お応えするために、常に準備を怠らず、新しい技術の習得にも力を入れています。",
      "どんなプロジェクトでも全力でサポートさせていただきますので、少しでもお困りのことがありましたら、いつでもお気軽にご相談ください。",
    ]
  }
];

function MemberCard({ member, language }) {
  const content = language === "English" ? member.engContent : member.japContent;
  return (
    <Col md={5} xs={4} className="project-card">
      <Card className="project-card-view">
        <Card.Body>
          <Card.Title className="member-name purple">
            {language === "English" ? member.name.English : member.name.Japanese}
          </Card.Title>
          <Card.Text style={{ textAlign: "justify", margin: '2vw 2vw' }}>
            {content.map((item, idx) => (
              <React.Fragment key={idx}>
                {item}
                <br /><br />
              </React.Fragment>
            ))}
            <h5 className="purple">
              Gmail : &nbsp; &nbsp;
              <a href={`mailto:${member.email}`}>{member.email}</a>
            </h5>
            <h5 className="purple">
              Telegram : &nbsp; &nbsp;
              <a href={`https://t.me/${member.telegram.replace('@', '')}`}>{member.telegram}</a>
            </h5>
          </Card.Text>
          <Button variant="primary" as={Link} to={member.resumeLink}>
            {language === "English" ? "Resume" : "再開する"}
          </Button>
          {"\n"}
          {"\n"}
          <Button
            variant="primary"
            style={{ marginLeft: '1vw' }}
            href={member.website}
            target="_blank"
            rel="noopener noreferrer"
          >
            {language === "English" ? "Visit WebSite" : "ウェブサイトを訪問"}
          </Button>
        </Card.Body>
      </Card>
    </Col>
  );
}

function Members() {
  const language = useSelector(state => state.language.language);

  return (
    <Container fluid className="project-section">
      <Row style={{ justifyContent: "center", paddingBottom: "10px" }}>
        {memberContents.map((member, idx) => (
          <MemberCard
            key={idx}
            member={member}
            language={language}
          />
        ))}
      </Row>
    </Container>
  );
}

export default Members;