import React from "react";
import "./Slide.css";
import Slider from "infinite-react-carousel";
import { travelCards } from "../data";
import Cat from "../scatCard/Cat";

const Slide = () => {
  const slidesToShow = 3;
  return (
    <div className="slide">
      <div className="slide-container">
        <Slider slidesToShow={slidesToShow}>
          {travelCards.map((item) => (
            <Cat key={item.id} item={item} />
          ))}
        </Slider>
      </div>
    </div>
  );
};

export default Slide;
