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
    title: { English: "Chat app & chatbot development", Japanese: "チャットアプリ・チャットボット開発" },
    description: {
      English: <>This is a personal chat room (workspace) developed using React.js, Material-UI, and Firebase, where you can connect with friends and share resources. It is equipped with features such as real-time message sending, image sharing, and message reaction functions.<br /><br /></>,
      Japanese: <>React.js、Material-UI、Firebaseを活用して開発した、友人とつながったりリソースを共有できる個人チャットルーム(ワークスペース)です。 リアルタイムでのメッセージ送信、画像の共有、メッセージへのリアクション機能などが搭載されております。<br /><br /></>
    },
    ghLink: "https://github.com/pioneer82/Chatify",
    demoLink: "https://chatify-49.web.app/"
  },
  {
    imgPath: business,
    isBlog: false,
    title: { English: "HP/LP Production", Japanese: "HP・LP制作" },
    description: {
      English: <>This is a booking site created using Lodgify, a popular short-term accommodation platform. It is based on Lodgify's "Tideway" template, which is compatible with Airbnb, B&B, villas, etc.<br /><br /><br /></>,
      Japanese: <>Lodgifyという人気の短期宿泊プラットフォームを使って作った予約サイトです。 AirbnbやB&B、ヴィラなどに対応したLodgifyの「Tideway」というテンプレートをベースに制作しています。<br /><br /><br /></>
    },
    ghLink: "",
    demoLink: "https://tideway-bnb.lodgify.com/"
  },
  {
    imgPath: blog,
    isBlog: false,
    title: { English: "Blog/Owned Media Site Construction", Japanese: "ブログ・オウンドメディアサイト構築" },
    description: {
      English: "Dribbble is not just a portfolio site, it is a platform where a diverse creative world unfolds. With posts of masterpieces, active interaction between creators, support for recruiting talented people, and opportunities for professional growth, it is a top-class place for designers to present their work, expand their network, and build their careers.",
      Japanese: "Dribbbleはただのポートフォリオサイトではなく、多彩なクリエイティブの世界が広がるプラットフォームです。 代表作の投稿やクリエイター同士の活発な交流、優秀な人材の採用支援、プロとしての成長機会などが全て揃っており、 デザイナーが作品を発表し、人脈を広げ、キャリアを築くためのトップクラスの場となっております。"
    },
    ghLink: "",
    demoLink: "https://dribbble.com/"
  },
  {
    imgPath: ecommerce,
    isBlog: false,
    title: { English: "E-commerce website production (also compatible with Shopify)", Japanese: "ECサイト制作(Shopifyも対応)" },
    description: {
      English: <>This is an e-commerce website that offers a wide range of products, from individual UI parts such as shopping carts, product galleries, and modal windows to award-winning, highly-finished website examples. It is a treasure trove of design inspiration for UI/UX designers, and you can purchase beautiful, sophisticated samples with interactive previews with videos and screenshots, and filtering by category and technology.<br /><br /><br /><br /></>,
      Japanese: <>約300点(直近のカウントでは295点)のアイテムを取り扱っており、ショッピングカートや商品ギャラリー、モーダルウィンドウなどの個別のUIパーツから、受賞歴のある完成度の高いウェブサイトの実例まで幅広く揃えたECサイトです。UI/UXデザイナーにとってのデザインインスピレーションの宝庫であり、動画やスクリーンショットによるインタラクティブなプレビュー、カテゴリや技術別の絞り込み機能を備えた、美しく洗練されたサンプルを購入することが可能です。</>
    },
    ghLink: "",
    demoLink: "https://www.hubspot.de/products/cms/e-commerce-website"
  },
  {
    imgPath: reservation,
    isBlog: false,
    title: { English: "Reservation and Membership Management System Development", Japanese: "予約・会員管理システム開発" },
    description: {
      English: <>Hostelworld is a reliable platform where you can book low-cost shared accommodations around the world. It is especially popular with solo travelers and young people, and makes it easy to find affordable accommodation where you can enjoy socializing. In addition to the reservation function, it also has real reviews, a chat function, and a reservation system using balance, making it both practical and community-oriented.<br /><br /><br /><br /></>,
      Japanese: <>Hostelworldは、世界中の低価格帯の共同宿泊施設を予約できる信頼性の高いプラットフォームです。特に一人旅や若い世代の方に人気で、手頃な価格で交流を楽しめる宿泊先を簡単に見つけられます。予約機能に加え、実際の口コミやチャット機能、残高を使った予約システムを備えており、実用性とコミュニティ性を兼ね備えています。<br /><br /><br /></>
    },
    ghLink: "",
    demoLink: "https://www.hostelworld.com/"
  },
  {
    imgPath: emotion,
    isBlog: false,
    title: { English: "Facial Recognition/Emotion Detection", Japanese: "顔認証・感情検出" },
    description: {
      English: <>This system is equipped with the latest facial recognition technology and emotion detection functions. It accurately recognizes the user's facial expressions and emotions in real time, helping to provide a more personalized experience and improve security. In addition, by analyzing changes in emotions, it is possible to understand customer satisfaction and reactions, and use this information for service improvement and marketing. It is a next-generation technology that combines high accuracy and ease of use and is expected to be introduced in a variety of industries.</>,
      Japanese: <>最新の顔認証技術と感情検出機能を搭載したシステムです。リアルタイムでユーザーの表情や感情を正確に認識し、よりパーソナライズされた体験やセキュリティ向上に役立ちます。また、感情の変化を解析することで、顧客の満足度や反応を把握し、サービス改善やマーケティングにも活用可能となっております。高い精度と使いやすさを両立し、さまざまな業界での導入が期待される次世代テクノロジーです。</>
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