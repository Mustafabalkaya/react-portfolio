import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import ProjectCard from "./ProjectCards";
import Particle from "../Particle";
import youtube from "../../Assets/Projects/youtube.png";
import posApp from "../../Assets/Projects/posApp.png";
import fastfood from "../../Assets/Projects/fastfood.png";
import property from "../../Assets/Projects/property.png";
import chat from "../../Assets/Projects/chat.png";
import otp from "../../Assets/Projects/otp.png";
function Projects() {
  return (
    <Container fluid className="project-section">
      <Particle />
      <Container>
        <h1 className="project-heading">
          My Recent <strong className="purple">Works </strong>
        </h1>
        <p style={{ color: "white" }}>
          Here are a few projects I've worked on recently.
        </p>
        <Row style={{ justifyContent: "center", paddingBottom: "10px" }}>
          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={property}
              isBlog={false}
              title="Property-Pulse"
              description="Bu platform, mülkiyet yönetimi için kapsamlı bir çözüm sunuyor ve bir dizi etkileyici özellik içeriyor"
              ghLink="https://github.com/Mustafabalkaya/Property-Pulse"
            />
          </Col>

          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={otp}
              isBlog={false}
              title="OTP-Verification-in-Node.Js"
              description="Node.js ile OTP Doğrulamalı Kayıt Sistemi Oluşturma"
              ghLink="https://github.com/Mustafabalkaya/Creating-a-Registration-System-with-OTP-Verification-in-Node.js"
            />
          </Col>

          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={fastfood}
              isBlog={false}
              title="NextJs-Food-Ordering"
              description="Bir Yemek siparişi projesi,kullanıcıların Web veya mobil uygulama aracılığıyla Yiyecek siparişi verebilmelerini sağlayan Bir platformdur "
              ghLink="https://github.com/Mustafabalkaya/nextjs-food-ordering"
            />
          </Col>

          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={youtube}
              isBlog={false}
              title="Youtube-Clone"
              description="React JS ve Material UI 5 ile Modern Bir YouTube Klon Uygulaması"
              ghLink="https://github.com/Mustafabalkaya/youtube-clone"
            />
          </Col>

          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={chat}
              isBlog={false}
              title="Chat-App"
              description="Gerçek Zamanlı Sohbet Uygulaması Oluşturma ve Yayınlama | JWT, Socket.io"
              ghLink="https://github.com/Mustafabalkaya/chat-app"
            />
          </Col>

          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={posApp}
              isBlog={false}
              title="React Single Page Application (SPA) with MERN Stack"
              description="Bu proje, React ile geliştirilmiş bir Single Page Application üzerine kurulu bir projeyi temsil ediyor "
              ghLink="https://github.com/Mustafabalkaya/posapplication"
            />
          </Col>
        </Row>
   
      </Container>
    </Container>
  );
}

export default Projects;
