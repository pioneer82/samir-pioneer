import React from "react";
import Card from "react-bootstrap/Card";
import { ImPointRight } from "react-icons/im";
import { useSelector } from 'react-redux';

const CONTENT = {
  English: {
    details: [
      'We are Zentech Collective - a small but flexible development team based in Japan.',
      'Samir is a skilled engineer who has been building his career since the age of 15 and is in charge of the technical side, delivering high-quality code.',
      'Sho is in charge of communicating with Japanese customers and managing project progress, providing smooth and reliable support.',
      'By combining world-class development capabilities with the detailed response capabilities unique to Japan, we will support our customers businesses as a reliable partner.',
      "'Top-class development capabilities from overseas, speedy support in Japanese' That is our founding philosophy."
    ]
  },
  Japanese: {
    details: [
      "私たちは Zentech Collective ― 日本を拠点に活動する、少数精鋭の柔軟な開発チームです。",
      "Samir は15歳からキャリアを積んだ実力派エンジニアとして技術面を担当し、品質の高いコードをお届けします。",
      "Sho は日本のお客様とのやり取りやプロジェクトの進行管理を担当し、スムーズで安心感のあるサポートを実現します。",
      "世界基準の開発力と、日本ならではのきめ細やかな対応力を両立することで、信頼できるパートナーとしてお客様のビジネスを支えていきます。",
      "「海外トップクラスの開発力を、日本語対応でスピーディに」 それが私たちの設立理念です。"
    ]
  }
};

function AboutCard() {
  const language = useSelector(state => state.language.language);
  const { details } = CONTENT[language] || CONTENT.English;

  return (
    <Card className="quote-card-view">
      <Card.Body>
        <blockquote className="blockquote mb-0">
          <ul style={{ textAlign: "justify" }}>
            <br />
            {details.map((item, key) => (
              <React.Fragment key={key}>
                <li className="about-activity">
                  <ImPointRight /> {item}
                </li>
                <br />
              </React.Fragment>
            ))}
          </ul>
        </blockquote>
      </Card.Body>
    </Card>
  );
}

export default AboutCard;