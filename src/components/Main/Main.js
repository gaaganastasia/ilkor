import React from "react";
import "./Main.css";

function Main(props) {
  return (
    <section className="main">
      {/* <video src={require('../../images/timeline.mp4')}
          muted
          autoPlay={"autoplay"}
          preLoad="auto"
          loop>
      </video> */}
      <h1 className="main__title">Продающий сайт для вашего бизнеса</h1>
      <button className="main__btn" type="button" onClick={props.changeFormState}>Начать проект</button>
    </section>
  );
}

export default Main;
