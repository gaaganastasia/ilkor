import React from "react";
import "./Info.css";
import logo from "../../images/logo.svg";

function Info(props) {
  
  return (
    <div className={`info info_${props.mod}`}>
      <img src={logo} alt="Логотип" className="info__logo"></img>
      <div className="info__links">
        <a href="#about-us" className="info__links_link">О нас</a>
        <a href="#services" className="info__links_link">Услуги</a>
        <a href="#contacts" className="info__links_link">Контакты</a>
      </div>
      <button className={`info__call-btn info__call-btn_${props.mod}`}>
        <div className="info__call-btn_icon"></div>
        <p className="info__call-btn_number">+7 (900) 000-00-00</p>
      </button>
      <div className={`info__menu info__menu_${props.mod}`} 
      type="button"
      onClick={props.changeNavState}></div>
    </div>
  );
}

export default Info;
