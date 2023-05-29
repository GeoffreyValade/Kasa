import React, { useState } from "react";
import "./Carousel.css";

const Slider = ({ slides }) => {
  const [current, setCurrent] = useState(0);
  const length = slides.length;

  function nextSlide() {
    setCurrent(current === length - 1 ? 0 : current + 1);
  };

  function prevSlide() {
    setCurrent(current === 0 ? length - 1 : current - 1);
  };


  return (
    <div className="slider">
      {slides.length > 1 &&
        <div><p className="leftArrow fa-solid fa-chevron-left" onClick={prevSlide} />
          <p className="rightArrow fa-solid fa-chevron-right" onClick={nextSlide} />
          <span className="slideCount">{current + 1}/{slides.length}</span>
        </div>
      }
      {slides.map((slide, index) => {
        return (
          <div key={index} className="divImage">
            {index === current && <img className="slideImage" src={slide} alt="" />}
          </div>
        );
      })}
    </div>
  );


};

export default Slider;
