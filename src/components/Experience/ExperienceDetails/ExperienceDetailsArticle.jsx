import React from "react";
import "../experience.css";
import { BsFillCheckCircleFill } from "react-icons/bs";

function ExperienceDetailsArticle({ technologyName, levelOfExperience }) {
  return (
    <article className="experience__details">
      <BsFillCheckCircleFill />
      <div>
        <h4>{technologyName}</h4>
        <small className="text-light">{levelOfExperience}</small>
      </div>
    </article>
  );
}

export default ExperienceDetailsArticle;
