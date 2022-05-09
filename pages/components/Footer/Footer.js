import React from "react";
// import "./Footer.module.css";
import logo from "../../images/logo.svg";
import Image from 'next/image';
import { animateScroll as scroll } from "react-scroll";


function Footer() {
  function scrollToTop() {
    scroll.scrollToTop();
  }

  return (
    <footer className="footer">
      <Image className="footer__logo" alt="Логотип" src={logo}></Image>
      <div className="footer__links">
        <a className="footer__link" href="https://t.me/kir354">Telegram</a>
        <a className="footer__link" href="vk.com/id647668431">VKontakte</a>
        <a className="footer__link" href="#">Instagram</a>
      </div>
      <p className="footer__up" onClick={scrollToTop}>Наверх</p>
    </footer>
  );
}

export default Footer;