import React from "react";
import "./testimonials.css";
import AVATAR from "../../assets/ico.jpg";

// import Swiper core and required modules
import { Pagination } from "swiper";

import { Swiper, SwiperSlide } from "swiper/react";

// Import Swiper styles
import "swiper/css";
import "swiper/css/pagination";

const Testimonials = () => {
  return (
    <section id="testimonials">
      <h5>Reviews from clients</h5>
      <h2>Testimonials</h2>

      <Swiper
        className="container testimonials__container"
        modules={[ Pagination]}
        spaceBetween={40}
        slidesPerView={1}
        pagination={{ clickable: true }}
      >
        <SwiperSlide className="testimonial">
          <div className="client__avatar">
            <img src={AVATAR} alt="avatar" />
          </div>
          <h5 className="client__name">Ernest Achiever</h5>
          <small className="client__review">
            Lorem ipsum, dolor sit amet consectetur adipisicing elit. Culpa
            molestiae dolorum ad alias, omnis error, sed quisquam neque, vero ut
            similique quam modi delectus rem architecto quia.
          </small>
        </SwiperSlide>
        <SwiperSlide className="testimonial">
          <div className="client__avatar">
            <img src={AVATAR} alt="avatar" />
          </div>
          <h5 className="client__name">Ernest Achiever2</h5>
          <small className="client__review">
            Lorem ipsum, dolor sit amet consectetur adipisicing elit. Culpa
            molestiae dolorum ad alias, omnis error, sed quisquam neque, vero ut
            similique quam modi delectus rem architecto quia.
          </small>
        </SwiperSlide>
        <SwiperSlide className="testimonial">
          <div className="client__avatar">
            <img src={AVATAR} alt="avatar" />
          </div>
          <h5 className="client__name">Ernest Achiever3</h5>
          <small className="client__review">
            Lorem ipsum, dolor sit amet consectetur adipisicing elit. Culpa
            molestiae dolorum ad alias, omnis error, sed quisquam neque, vero ut
            similique quam modi delectus rem architecto quia.
          </small>
        </SwiperSlide>
        <SwiperSlide className="testimonial">
          <div className="client__avatar">
            <img src={AVATAR} alt="avatar" />
          </div>
          <h5 className="client__name">Ernest Achiever4</h5>
          <small className="client__review">
            Lorem ipsum, dolor sit amet consectetur adipisicing elit. Culpa
            molestiae dolorum ad alias, omnis error, sed quisquam neque, vero ut
            similique quam modi delectus rem architecto quia.
          </small>
        </SwiperSlide>
      </Swiper>
    </section>
  );
};

export default Testimonials;
