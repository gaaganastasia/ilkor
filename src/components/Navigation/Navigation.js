import React from "react";
import "./Navigation.css";

function Navigation(props) {
  return (
    <div className={`nav ${props.isOpen ? `nav_opened` : ``}`}>
      <div className="nav__overlay"></div>
      <div className="nav__container">
        <button
          className="nav__close-btn"
          type="reset"
          onClick={props.changeState}
        ></button>
        <ul className="nav__list">
          <li className="nav__element">
            <a
              href="#about-us"
              className="nav__link"
              onClick={props.changeState}
            >
              О нас
            </a>
          </li>
          <li className="nav__element">
            <a
              href="#projects"
              className="nav__link"
              onClick={props.changeState}
            >
              Проекты
            </a>
          </li>
          <li className="nav__element">
            <a
              href="#services"
              className="nav__link"
              onClick={props.changeState}
            >
              Услуги
            </a>
          </li>
          <li className="nav__element">
            <a
              href="#start-project"
              className="nav__link"
              onClick={props.changeState}
            >
              Контакты
            </a>
          </li>
        </ul>
      </div>
    </div>
  );
}

export default Navigation;
