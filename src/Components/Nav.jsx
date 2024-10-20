import React, { useEffect, useState } from "react";
import "./Nav.css";
import logo from "../assets/images/logo.jpg"; // Ensure this path is correct
import { Link } from "react-router-dom";

const Nav = () => {
  const [active, setActive] = useState(false);
  const isActive = () => {
    window.scrollY > 0 ? setActive(true) : setActive(false);
  };
  useEffect(() => {
    window.addEventListener("scroll", isActive);
    return () => {
      window.removeEventListener("scroll", isActive);
    };
  }, []);

  return (
    <div className="navbar">
      <div className="container">
        <h1>Travel</h1>
        <img src={logo} alt="Logo" />
        <div className="minibar">
          {/* <Link></Link> */}
          <span>
            <input type="text" placeholder="search your destiny" /> search
          </span>
          <span>Terms & Policy</span>
          <span>Book Now</span>
        </div>
        <button>Join</button>
      </div>
      {active && (
        <>
          <hr />
          <div className="menu">
            <span>Explore</span>
            <span>Tour/package</span>
            <span>Travel Blog</span>
            <span>Event</span>
            <span>Gallery</span>
            <span>About us </span>
            <span>contact us</span>
          </div>
        </>
      )}
    </div>
  );
};

export default Nav;
