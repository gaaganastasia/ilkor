import React from "react";
import "./AboutUs.css";

function AboutUs() {
  return (
    <section className="about-us" id="about-us">
    <h2 className="about-us__title">о нас</h2>
    <div className="about-us__content">
      <p className="about-us__subtitle">Мы, компания <span className="about-us__company">«iLKoR»</span>, занимаемся привлечением клиентов в Ваш бизнес: находим точки роста бизнеса в интернете.
На рынке с 2020 года. За это время получили опыт сотрудничества с различными бизнесами.</p>
      <div className="about-us__numbers">
        <div className="about-us__number-container">
          <p className="about-us__number">15</p>
          <p className="about-us__caption">Проектов реализованно</p>
        </div>
        <div className="about-us__number-container">
          <p className="about-us__number">10</p>
          <p className="about-us__caption">Человек в команде</p>
        </div>
        <div className="about-us__number-container">
          <p className="about-us__number">1</p>
          <p className="about-us__caption">год на рынке digital</p>
        </div>
      </div>
    </div>
  </section>
  );
}

export default AboutUs;
