import React from "react";
import "./education.css";
import educationOne from "../../assets/soft.jpg";
import educationTwo from "../../assets/iu.jpg";
import educationThree from "../../assets/ppmg.png";

// import Swiper core and required modules
import { Pagination } from "swiper";

import { Swiper, SwiperSlide } from "swiper/react";

// Import Swiper styles
import "swiper/css";
import "swiper/css/pagination";

const Testimonials = () => {
  return (
    <section id="education">
      <h2>Education</h2>

      <Swiper
        className="container educations__container"
        modules={[Pagination]}
        spaceBetween={40}
        slidesPerView={1}
        pagination={{ clickable: true }}
      >
        <SwiperSlide className="education">
          <div className="school__avatar">
            <img src={educationOne} alt="avatar" />
          </div>
          <h5 className="school__name">Software University (2020-2021)</h5>
          <small className="school__information">
            Graduated the professional modules for JS Web Developer. 
          </small>
        </SwiperSlide>
        <SwiperSlide className="education">
          <div className="school__avatar">
            <img src={educationTwo} alt="avatar" />
          </div>
          <h5 className="school__name">
            University of Economics Varna (2019-2023)
          </h5>
          <small className="school__information">
            Bachelor in Informatics and Computer Sciences. Graduated from a
            Department of Informatics.
          </small>
        </SwiperSlide>
        <SwiperSlide className="education">
          <div className="school__avatar">
            <img src={educationThree} alt="avatar" />
          </div>
          <h5 className="school__name">
            PPMG "Nikola Obreshkov" Kazanlak (2014-2019)
          </h5>
          <small className="school__information">
            Studied informatics and computer science.
          </small>
        </SwiperSlide>
      </Swiper>
    </section>
  );
};

export default Testimonials;
