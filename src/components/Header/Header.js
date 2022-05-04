import React from "react";
import "./Header.css";
import logo from "../../images/logo.svg";

function Header(props) {
  
  return (
    <header className="header" id="header">
      <img src={logo} alt="Логотип" className="header__logo"></img>
      <div className="header__links">
        <a href="#about-us" className="header__link">О нас</a>
        <a href="#projects" className="header__link">Проекты</a>
        <a href="#services" className="header__link">Услуги</a>
        <a href="#start-project" className="header__link">Контакты</a>
      </div>
      <div className="header__menu" onClick={props.changeNavState}></div>
    </header>
  );
}

export default Header;
