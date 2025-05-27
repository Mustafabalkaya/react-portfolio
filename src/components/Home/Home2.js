import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import myImg from "../../Assets/avatar.svg";
import Tilt from "react-parallax-tilt";
import {
  AiFillGithub,
  AiOutlineTwitter,
  AiFillInstagram,
} from "react-icons/ai";
import { FaLinkedinIn } from "react-icons/fa";

function Home2() {
  return (
    <Container fluid className="home-about-section" id="about">
      <Container>
        <Row>
          <Col md={8} className="home-about-description">
  <h1 style={{ fontSize: "2.6em" }}>
    SİZLERE <span className="purple"> KENDİMİ </span> TANITAYIM
  </h1>
  <p className="home-about-body">
    Merhaba, ben Mustafa Balkaya. Yazılım geliştirme alanında <i><b className="purple">C#</b></i> diliyle çalışmalar yapıyorum.
    <br />
    <br />
    <i>
      <b className="purple">ASP.NET Core</b> ve <b className="purple">MVC</b>
    </i>{" "}
    kullanarak Backend geliştirme konusunda geniş bir deneyime sahibim.
    <br />
    <br />
    Aynı zamanda, yıllardır{" "}
    <i>
      <b className="purple">HTML, CSS, JavaScript ve Bootstrap</b>
    </i>{" "}
    gibi teknolojilerle Frontend tasarımı üzerine de çalışıyorum.
    <br />
    <br />
    Şu anda{" "}
    <i>
      <b className="purple">React</b>
    </i>{" "}
    ile full stack projeler geliştirmeye odaklanmış durumdayım. Modern web uygulamaları için sunduğu esneklik ve performans açısından React, benim için vazgeçilmez bir teknoloji.
    <br />
    <br />
    Ayrıca{" "}
    <b className="purple">Node.js</b> kullanarak da projeler geliştiriyorum ve böylece hem{" "}
    <i>
      <b className="purple">Frontend</b>
    </i>{" "}
    hem de{" "}
    <i>
      <b className="purple">Backend</b>
    </i>{" "}
    alanında kapsamlı çözümler sunabiliyorum.
    <br />
    <br />
    Tercih ettiğim veritabanı{" "}
    <i>
      <b className="purple">MongoDB</b>
    </i>{" "}
    olup, esnek veri modellemesi ve ölçeklenebilirliği ile projelerimde etkin veri yönetimi sağlamaktadır.
    <br />
    <br />
    Yeniliklere açık yapım sayesinde teknolojik gelişmeleri yakından takip ederim. Her projeye{" "}
    <i>
      <b className="purple">benzersiz çözümler</b>
    </i>{" "}
    getirmeye ve müşteri ihtiyaçlarına en iyi şekilde cevap vermeye odaklanıyorum.
    <br />
    <br />
    <b className="purple">Takım çalışmasına önem veririm</b> ve işbirliklerine her zaman açığım. 
    <br />
    <br />
    <i>Teşekkür ederim!</i>
  </p>
</Col>
          <Col md={4} className="myAvtar">
            <Tilt>
              <img src={myImg} className="img-fluid" alt="avatar" />
            </Tilt>
          </Col>
        </Row>
        <Row>
          <Col md={12} className="home-about-social">
            <h1>BENİ BURADA BULABİLİRSİNİZ</h1>
            <p>
              Benimle Dilediğiniz Zaman <span className="purple">İletişime </span>Geçebilirsiniz
            </p>
            <ul className="home-about-social-links">
              <li className="social-icons">
                <a
                  href="https://github.com/Mustafabalkaya"
                  target="_blank"
                  rel="noreferrer"
                  className="icon-colour  home-social-icons"
                >
                  <AiFillGithub />
                </a>
              </li>
              <li className="social-icons">
                <a
                  href="https://x.com/mustafaabalkaya"
                  target="_blank"
                  rel="noreferrer"
                  className="icon-colour  home-social-icons"
                >
                  <AiOutlineTwitter />
                </a>
              </li>
              <li className="social-icons">
                <a
                  href="https://www.linkedin.com/in/mustafabalkaya/"
                  target="_blank"
                  rel="noreferrer"
                  className="icon-colour  home-social-icons"
                >
                  <FaLinkedinIn />
                </a>
              </li>
              <li className="social-icons">
                <a
                  href="https://www.instagram.com/mustafaabalkaya"
                  target="_blank"
                  rel="noreferrer"
                  className="icon-colour home-social-icons"
                >
                  <AiFillInstagram />
                </a>
              </li>
            </ul>
          </Col>
        </Row>
      </Container>
    </Container>
  );
}
export default Home2;
