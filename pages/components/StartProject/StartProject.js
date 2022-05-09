import React from "react";
// import "./StartProject.module.css";
import Marquee from '../Marquee/Marquee';

function StartProject(props) {
  return (
    <section className="start-project" id="start-project">
      <Marquee></Marquee>
      <button type="button" className="start-project__btn" onClick={props.changeFormState}>Начать проект</button>
      <p className="start-project__number">+7 (919) 847 39 46</p>
    </section>
  );
}

export default StartProject;
