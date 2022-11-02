import React from "react";
import { SiLinkedin } from "react-icons/si";
import { ImGithub } from "react-icons/im";

const HeaderSocials = () => {
  return (
    <div className="header__socials">
      <a href="http://linkedin.com" target="_blank">
        <SiLinkedin />
      </a>
      <a href="http://github.com" target="_blank">
        <ImGithub />
      </a>
      {/* <a href="http://" target="_blank" rel="noopener noreferrer"></a> */}
    </div>
  );
};

export default HeaderSocials;
