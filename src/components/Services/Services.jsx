import React from "react";
import "./services.css";
import { BsCheckLg } from "react-icons/bs";

const Services = () => {
  return (
    <section id="services">
      <h5>What I Offer</h5>
      <h2>Services</h2>

      <div className="container services__container">
        <article className="service">
          <div className="service__head">
            <h3>Languages</h3>
          </div>

          <ul className="service__list">
            <li>
              <BsCheckLg className="service__list-icon" />
              <p>Bulgarian - Native</p>
            </li>
            <li>
              <BsCheckLg className="service__list-icon" />
              <p>English - Proficient</p>
            </li>
          </ul>
        </article>
        <article className="service">
          <div className="service__head">
            <h3>Soft Skills</h3>
          </div>

          <ul className="service__list">
            <li>
              <BsCheckLg className="service__list-icon" />
              <p>Communication</p>
            </li>
            <li>
              <BsCheckLg className="service__list-icon" />
              <p>Self-Learning</p>
            </li>
            <li>
              <BsCheckLg className="service__list-icon" />
              <p>Creativity</p>
            </li>
            <li>
              <BsCheckLg className="service__list-icon" />
              <p>Patience</p>
            </li>
            <li>
              <BsCheckLg className="service__list-icon" />
              <p>Time Management</p>
            </li>
            <li>
              <BsCheckLg className="service__list-icon" />
              <p>Confidence</p>
            </li>
            <li>
              <BsCheckLg className="service__list-icon" />
              <p>Accountability</p>
            </li>
            <li>
              <BsCheckLg className="service__list-icon" />
              <p>Team Player</p>
            </li>
          </ul>
        </article>
        <article className="service">
          <div className="service__head">
            <h3>Tech Skills</h3>
          </div>

          <ul className="service__list">
            <li>
              <BsCheckLg className="service__list-icon" />
              <p>JavaScript</p>
            </li>
            <li>
              <BsCheckLg className="service__list-icon" />
              <p>HTML</p>
            </li>
            <li>
              <BsCheckLg className="service__list-icon" />
              <p>CSS / Sass</p>
            </li>
            <li>
              <BsCheckLg className="service__list-icon" />
              <p>React / Vue</p>
            </li>
            <li>
              <BsCheckLg className="service__list-icon" />
              <p>Node.js</p>
            </li>
            <li>
              <BsCheckLg className="service__list-icon" />
              <p>MongoDB/Mongoose</p>
            </li>
            <li>
              <BsCheckLg className="service__list-icon" />
              <p>Firebase</p>
            </li>
            <li>
              <BsCheckLg className="service__list-icon" />
              <p>Express.js</p>
            </li>
          </ul>
        </article>
      </div>
    </section>
  );
};

export default Services;
