import React from "react";
import "./Footer.css";
import logo from "../../images/logo.svg";

function Footer() {
  return (
    <footer className="footer">
      <img className="footer__logo" alt="Логотип" src={logo}></img>
      <div className="footer__links">
        <a className="footer__link" href="#">Telegram</a>
        <a className="footer__link" href="#">VKontakte</a>
        <a className="footer__link" href="#">Instagram</a>
      </div>
      <a className="footer__up" href="#header">Наверх</a>
    </footer>
  );
}

export default Footer;
