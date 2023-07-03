import React from "react";
import "./footer.css";
import { AiFillFacebook } from "react-icons/ai";
import { BsLinkedin } from "react-icons/bs";
import { BiCodeAlt } from "react-icons/bi";
const Footer = () => {
  return (
    <footer>
      <a href="#ico" className="footer__logo">
        <div className="ico__logo">
          ico <BiCodeAlt />
        </div>
      </a>

      <ul className="permalinks">
        <li>
          <a href="#home">Home</a>
        </li>
        <li>
          <a href="#about">About</a>
        </li>
        <li>
          <a href="#experience">Experience</a>
        </li>
        <li>
          <a href="#services">Services</a>
        </li>
        <li>
          <a href="#portfolio">Portfolio</a>
        </li>
        <li>
          <a href="#education">Education</a>
        </li>
        <li>
          <a href="#contact">Contact</a>
        </li>
      </ul>

      <div className="footer__socials">
        <a
          href="https://www.facebook.com/GoClippers.2019"
          target="_blank"
          rel="noreferrer"
        >
          <AiFillFacebook />
        </a>
        <a
          href="https://www.linkedin.com/in/hristo-karchev-229839199/"
          target="_blank"
          rel="noreferrer"
        >
          <BsLinkedin />
        </a>
      </div>

      <div className="footer__copyright">
        <small>&copy; Hristo Karchev. All rights reserveed.</small>
      </div>
    </footer>
  );
};

export default Footer;
