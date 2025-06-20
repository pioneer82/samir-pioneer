import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import ProjectCard from "./ProjectCards";
import Particle from "../Particle";
import ecommerce from "../../../Assets/Projects/ecommerce.png";
import emotion from "../../../Assets/Projects/emotion.png";
import blog from "../../../Assets/Projects/blog.png";
import chatify from "../../../Assets/Projects/chatify.png";
import reservation from "../../../Assets/Projects/reservation.png";
import business from "../../../Assets/Projects/business.png";
import { useSelector } from 'react-redux';

const PROJECTS = [
  {
    imgPath: chatify,
    isBlog: false,
    title: { English: "Chatify", Japanese: "チャティファイ" },
    description: {
      English: <>Personal Chat Room or Workspace to share resources and hangout with friends build with react.js, Material-UI, and Firebase. Have features which allows user for realtime messaging, image sharing as well as supports reactions on messages.<br /></>,
      Japanese: <>react.js、Material-UI、Firebaseを使用して構築された、リソースを共有したり、友人と交流したりするための個人チャットルームまたはワークスペースです。リアルタイムメッセージング、画像共有、メッセージへのリアクション機能などを備えています。<br /></>
    },
    ghLink: "https://github.com/pioneer82/Chatify",
    demoLink: "https://chatify-49.web.app/"
  },
  {
    imgPath: business,
    isBlog: false,
    title: { English: "Business", Japanese: "仕事" },
    description: {
      English: <>The site is actually a vacation rental website built using Lodgify, a popular platform for short-term lodging (like Airbnbs, B&Bs, villas, etc.).It's based on the “Tideway” template, one of Lodgify’s ready-made designs suited for rental properties.<br /><br /></>,
      Japanese: <>このサイトは、短期宿泊（Airbnb、B&B、ヴィラなど）向けの人気プラットフォームであるLodgifyを使用して構築されたバケーションレンタルウェブサイトです。Lodgifyのレンタル物件に適した既製デザインの1つである「Tideway」テンプレートをベースにしています。<br /><br /></>
    },
    ghLink: "",
    demoLink: "https://tideway-bnb.lodgify.com/"
  },
  {
    imgPath: blog,
    isBlog: false,
    title: { English: "Blog", Japanese: "ブログ" },
    description: {
      English: "Dribbble is more than a portfolio site—it's a multifaceted creative ecosystem featuring flagship art posts, robust social engagement, talent hiring tools, and professional growth options. It’s one of the top platforms for designers to present their work, connect, and build their career.",
      Japanese: "Dribbbleは単なるポートフォリオサイトではありません。フラッグシップアートの投稿、強力なソーシャルエンゲージメント、人材採用ツール、そしてプロフェッショナルとしての成長を支援するオプションを備えた、多面的なクリエイティブエコシステムです。デザイナーが作品を発表し、交流し、キャリアを築くための最高のプラットフォームの一つです。"
    },
    ghLink: "",
    demoLink: "https://dribbble.com/"
  },
  {
    imgPath: ecommerce,
    isBlog: false,
    title: { English: "E-commerce", Japanese: "電子商取引" },
    description: {
      English: "Contains just under 300 items (295 at last count), combining individual UI elements (like shopping carts, product galleries, modals) and complete website showcases that have been awarded or featured. Acts as a design inspiration hub, offering interactive previews (videos, screenshots), filters by category/technology, and beautifully crafted examples ideal for UI/UX designers.",
      Japanese: "300点弱（最終集計時点では295点）のアイテムを収録。ショッピングカート、商品ギャラリー、モーダルといった個々のUI要素と、受賞歴や特集記事で紹介されたウェブサイトのショーケースを組み合わせた構成となっています。インタラクティブなプレビュー（動画、スクリーンショット）、カテゴリー／テクノロジーによるフィルター、そしてUI/UXデザイナーに最適な美しく仕上げられたサンプルなど、デザインのインスピレーションハブとして機能します。"
    },
    ghLink: "",
    demoLink: "https://www.hubspot.de/products/cms/e-commerce-website"
  },
  {
    imgPath: reservation,
    isBlog: false,
    title: { English: "Reservation", Japanese: "予約" },
    description: {
      English: <>Hostelworld is a trusted go-to platform for booking low-cost, shared accommodation worldwide. It's optimized for finding very affordable stays with a social vibe, especially useful for solo and young travelers. The inclusion of real reviews, chat features, and deposit-based booking makes it both practical and community-focused.<br /><br /></>,
      Japanese: <>Hostelworldは、世界中の低価格なシェアハウスを予約できる、信頼できるプラットフォームです。ソーシャルな雰囲気の中で、非常に手頃な価格の宿泊施設を見つけるのに最適化されており、特に一人旅や若い旅行者に便利です。リアルなレビュー、チャット機能、デポジット制の予約システムなど、実用性とコミュニティ重視の要素を兼ね備えています。<br /><br /><br /></>
    },
    ghLink: "",
    demoLink: "https://www.hostelworld.com/"
  },
  {
    imgPath: emotion,
    isBlog: false,
    title: { English: "Face Recognition and Emotion Detection", Japanese: "顔認識と感情検出" },
    description: {
      English: <>Extensive inventory of hostels, tailored to social, budget travelers, especially solo backpackers. Generally safe and reliable, with a secure payment gateway and transparent policies.<br /><br /><br /></>,
      Japanese: <>ソーシャルな旅、低予算の旅行者、特に一人旅のバックパッカーに最適なホステルを豊富に取り揃えています。安全な決済システムと透明性のあるポリシーを備え、概ね安全で信頼性が高く、安心してご利用いただけます。<br /><br /><br /><br /><br /></>
    },
    ghLink: "https://github.com/soumyajit4419/Face_And_Emotion_Detection",
    demoLink: "" // Add demo link if available
  }
];

function Projects() {
  const language = useSelector(state => state.language.language);

  return (
    <Container fluid className="project-section">
      <Particle />
      <Container>
        <h1 className="project-heading">
          {language === 'English'
            ? <>Our Recent <strong className="purple">Project </strong></>
            : <strong className="purple">最近のプロジェクト</strong>
          }
        </h1>
        <p style={{ color: "white" }}>
          {language === 'English'
            ? 'Here are a few projects we have worked on recently.'
            : '私たちが最近取り組んだプロジェクトをいくつかご紹介します。'
          }
        </p>
        <Row style={{ justifyContent: "center", paddingBottom: "10px" }}>
          {PROJECTS.map((project, idx) => (
            <Col md={4} className="project-card" key={idx}>
              <ProjectCard
                imgPath={project.imgPath}
                isBlog={project.isBlog}
                title={project.title[language] || project.title.English}
                description={project.description[language] || project.description.English}
                ghLink={project.ghLink}
                demoLink={project.demoLink}
              />
            </Col>
          ))}
        </Row>
      </Container>
    </Container>
  );
}

export default Projects;