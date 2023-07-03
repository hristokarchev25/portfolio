import React from "react";
import "./portfolio.css";
import Lotus from "../../assets/1.png";
import AdminPanel from "../../assets/2.png";
import Quiz from "../../assets/3.png";
import Blog from "../../assets/4.png";

const Portfolio = () => {
  return (
    <section id="portfolio">
      <h5>My Recent Work</h5>
      <h2>Portfolio</h2>

      <div className="container portfolio__container">
        <article className="portfolio__item">
          <div className="portfolio__item-image">
            <img src={Lotus} alt="project" />
          </div>
          <h3>Infinity Lotus</h3>
          <div className="portfolio__item-cta">
            <a
              href="https://github.com/hristokarchev25/Project-AA2"
              className="btn"
              target="_blank"
              rel="noreferrer"
            >
              GitHub
            </a>
            <a
              href="https://lotus-infinity.netlify.app/"
              className="btn btn-primary"
              target="_blank"
              rel="noreferrer"
            >
              Live Demo
            </a>
          </div>
        </article>
        <article className="portfolio__item">
          <div className="portfolio__item-image">
            <img src={AdminPanel} alt="project" />
          </div>
          <h3>The Learning App - Admin Panel</h3>
          <div className="portfolio__item-cta">
            <a
              href="https://github.com/hristokarchev25/Learning"
              className="btn"
              target="_blank"
              rel="noreferrer"
            >
              GitHub
            </a>
            <a
              href="https://the-learning-app.netlify.app/"
              className="btn btn-primary"
              target="_blank"
              rel="noreferrer"
            >
              Live Demo
            </a>
          </div>
        </article>
        <article className="portfolio__item">
          <div className="portfolio__item-image">
            <img src={Quiz} alt="project" />
          </div>
          <h3>The Karchev Quiz - Front-End Quiz</h3>
          <div className="portfolio__item-cta">
            <a
              href="https://github.com/hristokarchev25/quiz"
              className="btn"
              target="_blank"
              rel="noreferrer"
            >
              GitHub
            </a>
            <a
              href="https://karchev-quiz.netlify.app/"
              className="btn btn-primary"
              target="_blank"
              rel="noreferrer"
            >
              Live Demo
            </a>
          </div>
        </article>
        <article className="portfolio__item">
          <div className="portfolio__item-image">
            <img src={Blog} alt="project" />
          </div>
          <h3>Wordpress Blog</h3>
          <div className="portfolio__item-cta">
            <a
              href="https://github.com/hristokarchev25/Blog"
              className="btn"
              target="_blank"
              rel="noreferrer"
            >
              GitHub
            </a>
            <a
              href="https://dev-karchev.pantheonsite.io/"
              className="btn btn-primary"
              target="_blank"
              rel="noreferrer"
            >
              Live Demo
            </a>
          </div>
        </article>
      </div>
    </section>
  );
};

export default Portfolio;
