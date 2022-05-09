import React from "react";
// import "./Navigation.module.css";
import { Link, DirectLink, Element, Events, animateScroll as scroll, scrollSpy, scroller } from "react-scroll";

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
              <Link to="about-us" className="nav__link" spy={true} smooth={true} duration={500} onClick={props.changeState}>
                О нас
              </Link>
            </li>
            <li className="nav__element">
              <Link to="projects" className="nav__link" spy={true} smooth={true} duration={500} onClick={props.changeState}>
                Проекты
              </Link>
            </li>
            <li className="nav__element">
              <Link to="services" className="nav__link" spy={true} smooth={true} duration={500} onClick={props.changeState}>
                Услуги
              </Link>
            </li>
            <li className="nav__element">
              <Link to="start-project" className="nav__link" spy={true} smooth={true} duration={500} onClick={props.changeState}>
                Контакты
              </Link>
            </li>
          </ul>
        </div>
      </div>
      
    
  );
}

export default Navigation;
