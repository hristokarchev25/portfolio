import React from "react";
import "./testimonials.css";
import AVATAR from "../../assets/ico.jpg";

const Testimonials = () => {
  return (
    <section id="testimonials">
      <h5>Reviews from clients</h5>
      <h2>Testimonials</h2>

      <div className="container testimonials__container">
        <article className="testimonial">
          <div className="client__avatar">
            <img src={AVATAR} alt="avatar" />
          </div>
          <h5 className="client__name">Ernest Achiever</h5>
          <small className="client__review">
            Lorem ipsum, dolor sit amet consectetur adipisicing elit. Culpa
            molestiae dolorum ad alias, omnis error, sed quisquam neque, vero ut
            similique quam modi delectus rem architecto quia.
          </small>
        </article>
        <article className="testimonial">
          <div className="client__avatar">
            <img src={AVATAR} alt="avatar" />
          </div>
          <h5 className="client__name">Ernest Achiever</h5>
          <small className="client__review">
            Lorem ipsum, dolor sit amet consectetur adipisicing elit. Culpa
            molestiae dolorum ad alias, omnis error, sed quisquam neque, vero ut
            similique quam modi delectus rem architecto quia.
          </small>
        </article>
        <article className="testimonial">
          <div className="client__avatar">
            <img src={AVATAR} alt="avatar" />
          </div>
          <h5 className="client__name">Ernest Achiever</h5>
          <small className="client__review">
            Lorem ipsum, dolor sit amet consectetur adipisicing elit. Culpa
            molestiae dolorum ad alias, omnis error, sed quisquam neque, vero ut
            similique quam modi delectus rem architecto quia.
          </small>
        </article>
        <article className="testimonial">
          <div className="client__avatar">
            <img src={AVATAR} alt="avatar" />
          </div>
          <h5 className="client__name">Ernest Achiever</h5>
          <small className="client__review">
            Lorem ipsum, dolor sit amet consectetur adipisicing elit. Culpa
            molestiae dolorum ad alias, omnis error, sed quisquam neque, vero ut
            similique quam modi delectus rem architecto quia.
          </small>
        </article>
      </div>
    </section>
  );
};

export default Testimonials;
