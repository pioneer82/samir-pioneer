import React from "react";
import Card from "react-bootstrap/Card";
import { ImPointRight } from "react-icons/im";
import { useSelector } from 'react-redux';

function AboutCard() {
  const language = useSelector(state => state.language.language);
  const english = [
    'We are a small but highly flexible team based in Japan.',
    'Samir is an experienced engineer who handles all technical aspects and implements high-quality code.',
    'Sho focuses on client communication and local operations to ensure smooth delivery for Japanese clients.',
    'Together, we aim to build trust with clients and expand our services in the Japanese market.'
  ]

  const japanese = [
    '私たちは日本を拠点とする小規模ながらも非常に柔軟性のあるチームです。',
    'Samir は、あらゆる技術的側面を担当し、高品質のコードを実装する経験豊富なエンジニアです。',
    'Sho は、日本のクライアントへのスムーズなサービス提供を確実にするために、クライアントとのコミュニケーションと現地での業務に重点を置いています。',
    '私たちは共に、お客様との信頼関係を構築し、日本市場でのサービス拡大を目指します。'

  ]

  return (
    <Card className="quote-card-view">
      <Card.Body>
        <blockquote className="blockquote mb-0">
          <p style={{ textAlign: "justify" }}>
            <ul>
              <li className="about-activity">
                {
                  language === 'English' ? <><ImPointRight />  Hi Everyone, We are <span className="purple">Zentech Collective </span> developers.</> : <><ImPointRight />  みなさんこんにちは。私たちは <span className="purple">Zentech Collective </span> の開発者です。</>
                }
              </li>
              <br />
              {
                language === "English" ? english.map((item, key) =>
                  <>
                    <li className="about-activity" key={key}>
                      <ImPointRight /> {item}
                    </li>
                    <br /></>
                ) : japanese.map((item, key) =>
                  <>
                    <li className="about-activity" key={key}>
                      <ImPointRight /> {item}
                    </li>
                    <br /></>
                )
              }
            </ul>
          </p>
        </blockquote>
      </Card.Body>
    </Card>
  );
}

export default AboutCard;
