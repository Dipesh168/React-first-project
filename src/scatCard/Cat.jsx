import React, { useEffect, useState } from "react";
import "./Cat.css";

const Cat = ({ item }) => {
  const [see, setsee] = useState(true);
  const [scroll, setscroll] = useState(0);
  return (
    <>
      <div className={`cat img-${item.id}`}>
        <img classNme="data-img" src={item.image} />
        <div className="title">{item.title}</div>
        <div className="price">{item.price}</div>

        <button className="cat-btn">
          <div className="book">{item.book}</div>
        </button>
      </div>
    </>
  );
};

export default Cat;
