import React, { useEffect, useState } from "react";
import "./Hero.css";
import video from "../assets/images/video.mp4";

const Hero = () => {
  const [visible, setvisibe] = useState(true);
  const [lastscroll, setlastscroll] = useState(0);
  const handscroll = () => {
    const scrolly = window.scrollY;
    if (scrolly > lastscroll) {
      setvisibe(false);
    } else {
      setvisibe(true);
    }
  };
  useEffect(() => {
    window.addEventListener("scroll", handscroll);
    return () => {
      window.removeEventListener("scroll", handscroll);
    };
  }, [setlastscroll]);

  return (
    <>
      <div className="herocontainer">
        <video className="hero-video" autoPlay loop muted>
          <source src={video} type="video/mp4" />
        </video>
        <div className="hero-text">
          {visible && <h1 className="overlay">Create Memories</h1>}
        </div>
        <div className="secondtext">
          {visible && <h1 className="overlay-second">The last life Time</h1>}
        </div>
      </div>
    </>
  );
};

export default Hero;
