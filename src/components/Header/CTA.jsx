import React from "react";
import CV from "../../assets/hkCv.pdf";

const CTA = () => {
  return (
    <div className="cta">
      <a href={CV} download>
        Download CV
      </a>
      <a href="#contacts">Lets's Talk</a>
    </div>
  );
};

export default CTA;
