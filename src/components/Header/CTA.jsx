import React from "react";
import CV from "../../assets/hkCv.pdf";

const CTA = () => {
  return (
    <div className="cta">
      <a href={CV} download className="btn">
        Download CV
      </a>
      <a href="#contacts" className="btn btn-primary">
        Lets's Talk
      </a>
    </div>
  );
};

export default CTA;
