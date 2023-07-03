import React from "react";
import { SiLinkedin } from "react-icons/si";
import { ImGithub } from "react-icons/im";

const HeaderSocials = () => {
  return (
    <div className="header__socials">
      <a
        href="https://www.linkedin.com/in/hristo-karchev-229839199/"
        target="_blank"
        rel="noreferrer"
      >
        <SiLinkedin />
      </a>
      <a
        href="https://github.com/hristokarchev25"
        target="_blank"
        rel="noreferrer"
      >
        <ImGithub />
      </a>
    </div>
  );
};

export default HeaderSocials;
