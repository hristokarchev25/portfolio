import React from "react";
import "./about.css";
import ico from "../../assets/ico.jpg";
import { BsFillAwardFill } from "react-icons/bs";
import { ImUsers } from "react-icons/im";
import { ImFolderOpen } from "react-icons/im";

const About = () => {
  return (
    <section id="about">
      <h5>Get To Know</h5>
      <h2>About Me</h2>

      <div className="container about__container">
        <div className="about__me">
          <div className="about__me-image">
            <img src={ico} alt="hristo about-img" />
          </div>
        </div>

        <div className="about__content">
          <div className="about__cards">
            <article className="about__card">
              <BsFillAwardFill className="about__icon" />
              <h5>Experience</h5>
              <small>3+ Months Working</small>
            </article>
            <article className="about__card">
              <ImUsers className="about__icon" />
              <h5>Clients</h5>
              <small>365 Data Science</small>
            </article>
            <article className="about__card">
              <ImFolderOpen className="about__icon" />
              <h5>Projects</h5>
              <small>Completed Sprints on 365 Data Science</small>
            </article>
          </div>

          <p>
            Competitive and dedicated developer. Fast learner, hard worker and
            team player who is ready to take the challenge. Will not stop until
            the given problem is solved.
          </p>

          <a href="#contact" className="btn btn-primary">
            Lets's Talk
          </a>
        </div>
      </div>
    </section>
  );
};

export default About;
