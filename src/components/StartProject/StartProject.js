import React from "react";
import "./StartProject.css";
import Marquee from '../Marquee/Marquee';

function StartProject(props) {
  return (
    <section className="start-project" id="start-project">
      <Marquee></Marquee>
      <button type="button" className="start-project__btn" onClick={props.changeFormState}>Начать проект</button>
      <p className="start-project__number">+7 (900) 000 00 00</p>
    </section>
  );
}

export default StartProject;
