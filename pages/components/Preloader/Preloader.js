import React from "react";
import logo from "../../images/logo.svg";
import Image from 'next/image';


function Preloader() {
  return (
    <section className="preloader">
      <div className="preloader__content">
        <Image className="preloader__logo" src={logo} alt="Логотип" width="220px" height="63px"></Image>
        <div className="preloader__indicator"></div>
      </div>
    </section>
  );
}

export default Preloader;