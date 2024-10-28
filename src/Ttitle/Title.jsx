import React from "react";
import "./Title.css";
import World from "../assets/images/wzzw.jpg";

const Title = () => {
  return (
    <div className="features">
      <div className="containers">
        <div className="featureitem">
          <h1 className="mytitle">Discover Your Next Adventure</h1>
          <div className="titiles">
            <h4>Adventure Awaits</h4>
            <p>Travel opens doors to new experiences and adventures.</p>
            <br />
            <h4>Cultural immersion</h4>
            <p>
              Cultural Immersion: Discover diverse cultures, traditions, and
              cuisines
            </p>
            <br />
            <h4>natures beauty</h4>
            <p>
              Nature's Beauty: Explore stunning landscapes, from mountains to
              beaches.
            </p>
          </div>
        </div>
        <div className="imgs">
          <img src={World} alt="World" />
        </div>
      </div>
    </div>
  );
};

export default Title;
