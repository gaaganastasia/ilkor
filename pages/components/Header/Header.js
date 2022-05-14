import React from "react";
// import "./Header.module.css";
import Image from 'next/image';
import logo from "../../images/logo.svg";
import { Link } from "react-scroll";

function Header(props) {

  return (
    <header className="header" id="header">
      <Image layout="fixed" width="83" height="23" src={logo} alt="Логотип" className="header__logo"></Image>
      <div className="header__links">
        <Link to="about-us" className="header__link" spy={true} smooth={true} duration={500}>
          О нас
        </Link>
        <Link to="projects" className="header__link" spy={true} smooth={true} duration={500}>
          Проекты
        </Link>
        <Link to="services" className="header__link" spy={true} smooth={true} duration={500}>
          Услуги
        </Link>
        <Link to="start-project" className="header__link" spy={true} smooth={true} duration={500}>
          Контакты
        </Link>
      </div>
      <div className="header__menu" onClick={props.changeNavState}></div>
    </header>
  );
}

export default Header;
