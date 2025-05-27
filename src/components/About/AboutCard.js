import React from "react";
import Card from "react-bootstrap/Card";
import { ImPointRight } from "react-icons/im";

function AboutCard() {
  return (
   <Card className="quote-card-view">
  <Card.Body>
    <blockquote className="blockquote mb-0">
      <p style={{ textAlign: "justify" }}>
        Merhaba, ben <span className="purple">Mustafa Balkaya</span>.
        <br />
        C# diliyle yazılım geliştiriyorum ve <span className="purple">ASP.NET Core</span> ile
        <span className="purple"> Backend</span> geliştirme konusunda deneyimliyim.
        <br />
        Frontend tarafında ise uzun süredir{" "}
        <span className="purple">HTML, CSS, JavaScript</span> ve{" "}
        <span className="purple">Bootstrap</span> ile çalışıyorum.
        <br />
        Son zamanlarda <span className="purple">React</span> kullanarak full stack projeler geliştiriyor,
        <span className="purple"> Node.js</span> ve <span className="purple">MongoDB</span> ile projelerimi destekliyorum.
        <br />
        Teknolojiyi yakından takip ederim ve her projede en iyi çözümleri sunmaya odaklanırım.
      </p>
      <ul>
        <li className="about-activity">
          <ImPointRight /> Yeni teknolojiler öğrenmek
        </li>
        <li className="about-activity">
          <ImPointRight /> Kod yazmak ve projeler geliştirmek
        </li>
        <li className="about-activity">
          <ImPointRight /> Takım çalışması içinde yer almak
        </li>
      </ul>

      <p style={{ color: "rgb(155 126 172)" }}>
        "Her projeye değer katacak işler üretmeyi hedefliyorum!"
      </p>
      <footer className="blockquote-footer">Mustafa Balkaya</footer>
    </blockquote>
  </Card.Body>
</Card>

  );
}

export default AboutCard;
