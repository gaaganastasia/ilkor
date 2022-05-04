import React from "react";
import "./StartProject.css";
// import Marquee from 'react-double-marquee';
import Marquee from '../Marquee/Marquee';

function StartProject() {
  return (
    <section className="start-project" id="start-project">
      <Marquee></Marquee>
      <button type="button" className="start-project__btn">Начать проект</button>
      <p className="start-project__number">+7 (900) 000 00 00</p>
    </section>
  );
}

export default StartProject;
