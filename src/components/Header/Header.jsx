import React from "react";
import "./header.css";
import CTA from "./CTA";
import icoImg from "../../assets/ico.jpg";
import HeaderSocials from "./HeaderSocials";

const Header = () => {
  return (
    <header>
      <div className="container header__container">
        <h5>Hello I am</h5>
        <h1>Hristo Karchev</h1>
        <h5 className="text-light">Junior Fullstack Developer</h5>
        <CTA />
        <HeaderSocials />

        <div className="me">
          <img src={icoImg} alt="Hristo IMG" />
        </div>

        <a href="#contact" className="scroll__down">
          Scroll Down
        </a>
      </div>
    </header>
  );
};

export default Header;
