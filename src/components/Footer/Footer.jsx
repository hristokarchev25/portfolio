import React from "react";
import "./footer.css";
import { AiFillFacebook } from "react-icons/ai";
import { AiFillInstagram } from "react-icons/ai";
import { BsLinkedin } from "react-icons/bs";
const Footer = () => {
  return (
    <footer>
      <a href="#ico" className="footer__logo">
        ICo
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
          <a href="#testimonials">Testimonials</a>
        </li>
        <li>
          <a href="#contact">Contact</a>
        </li>
      </ul>

      <div className="footer__socials">
        <a href="http://facebook.com" target="_blank" rel="noreferrer">
          <AiFillFacebook />
        </a>
        <a href="http://instagram.com" target="_blank" rel="noreferrer">
          <AiFillInstagram />
        </a>
        <a href="http://linkedin" target="_blank" rel="noreferrer">
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
