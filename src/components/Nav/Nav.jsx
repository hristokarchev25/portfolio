import React from "react";
import "./nav.css";
import { ImHome3 } from "react-icons/im";
import { FaUserAlt } from "react-icons/fa";
import { ImBook } from "react-icons/im";
import { RiServiceFill } from "react-icons/ri";
import { RiMessage2Fill } from "react-icons/ri";

const Nav = () => {
  return (
    <nav>
      <a href="#home" className="active">
        <ImHome3 />
      </a>
      <a href="#about">
        <FaUserAlt />
      </a>
      <a href="#experience">
        <ImBook />
      </a>
      <a href="#services">
        <RiServiceFill />
      </a>
      <a href="#contact">
        <RiMessage2Fill />
      </a>
    </nav>
  );
};

export default Nav;
