import React from "react";
import "./experience.css";
import ExperienceDetailsArticle from "./ExperienceDetails/ExperienceDetailsArticle";
import {
  frontendObjOne,
  frontendObjTwo,
  frontendObjThree,
  frontendObjFour,
  frontendObjFive,
  backendObjOne,
  backendObjTwo,
  backendObjThree,
  backendObjFour,
  backendObjFive,
} from "./ExperienceDetails/dataOfTechnologies";

const Experience = () => {
  return (
    <section id="experience">
      <h5>What Skills I have </h5>
      <h2>My Experience</h2>
      <div className="container experience__container">
        <div className="experience__frontend">
          <h3>Frontend Development</h3>
          <div className="experience__content">
            <ExperienceDetailsArticle {...frontendObjOne} />
            <ExperienceDetailsArticle {...frontendObjTwo} />
            <ExperienceDetailsArticle {...frontendObjThree} />
            <ExperienceDetailsArticle {...frontendObjFour} />
            <ExperienceDetailsArticle {...frontendObjFive} />
          </div>
        </div>

        <div className="experience__backend">
          <h3>Backend Development</h3>
          <div className="experience__content">
            <ExperienceDetailsArticle {...backendObjOne} />
            <ExperienceDetailsArticle {...backendObjTwo} />
            <ExperienceDetailsArticle {...backendObjThree} />
            <ExperienceDetailsArticle {...backendObjFour} />
            <ExperienceDetailsArticle {...backendObjFive} />
          </div>
        </div>
      </div>
    </section>
  );
};

export default Experience;
