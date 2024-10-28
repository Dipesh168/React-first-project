import React, { useEffect, useState } from "react";
import "./Nav.css";
import logo from "../assets/images/logo.jpg"; // Ensure this path is correct
import { Link } from "react-router-dom";

const Nav = () => {
  const [active, setActive] = useState(false);
  const [open, setopen] = useState(false);

  const isActive = () => {
    window.scrollY > 0 ? setActive(true) : setActive(true);
  };
  useEffect(() => {
    window.addEventListener("scroll", isActive);
    return () => {
      window.removeEventListener("scroll", isActive);
    };
  }, []);
  const currentUser = {
    id: 1,
    username: "dipesh",
    icon: "fa-solid fa-user",
  };
  const countries = [
    "UK",
    "Nepal",
    "Australia",
    "USA",
    "Canada",
    "India",
    "Germany",
    "France",
    "Japan",
  ];
  const [suggestion, setsuggestion] = useState(true);
  const [input, setinput] = useState();

  return (
    <div className="navbar">
      <div className="container">
        <h1 className="logo-name">Travel</h1>
        <img src={logo} alt="Logo" />
        {/* <Link></Link> */}
        <div className="search">
          <div className="search-input">
            <input type="text" placeholder="Enter Destination or Hotel" />
            <div id="suggestion" className="suggestion"></div>
          </div>
          <button className="search-button">search</button>
        </div>
        <div className="minibar">
          <span className="barmap">
            {" "}
            <Link to="/map" className="link">
              {" "}
              <i class="fa-solid fa-location-dot"></i>Map{" "}
            </Link>
          </span>
          <span>
            <Link to="/flight" className="nav-link">
              <i class="fa-solid fa-plane-departure"></i>Airline
            </Link>
          </span>
          <span>
            <Link to="/hotel" className="hotel-link">
              <i class="fa-solid fa-hotel"></i>Hotel
            </Link>
          </span>
        </div>

        {!currentUser && <button>Join</button>}
        {currentUser && (
          <div className="user" onClick={() => setopen(!open)}>
            <span>
              <i
                className={currentUser.icon}
                style={{ marginRight: "5px" }}
              ></i>
              {currentUser?.username}
            </span>
            <>
              {open && (
                <div className="option">
                  <span>profile</span>
                  <span>Record</span>
                  <span>Setting</span>
                  <span>log out</span>
                </div>
              )}
            </>
          </div>
        )}
      </div>
      {active && (
        <>
          <hr />
          <div className="menu">
            <Link to="./home" className="home-link">
              <span>Home</span>
            </Link>
            <Link to="./tour" className="tour-link">
              <span>Tour/package</span>
            </Link>
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
