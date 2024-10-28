import React, { useState } from "react";
import "./Navmflight.css";
import flight from "../assets/mages/flight.jpg";
import Navmfflight from "./Navmfflight";

const Navmflight = () => {
  const [value, setValue] = useState();
  const searchhandle = (event) => {
    setValue(event.target.value);
  };
  const onSearch = (searchTerm) => {
    console.log("search", searchTerm);
  };

  const [date, setdate] = useState(new Date().toLocaleDateString());
  const handledate = (event) => {
    setdate(new Date(event.target.value).toLocalDateString());
  };

  return (
    <>
      <div className="header">
        <div className="header-item">
          <h1 className="header-h1">Fly with us</h1>
        </div>
        <div className="button-class">
          <button className="btn-class">Economy Class</button>
          <button className="btn-class">Business Class</button>
          <button className="btn-class">High Class</button>
        </div>
        <div className="header-container">
          <div className="header-search">
            <input
              type="text"
              value={value}
              onChange={searchhandle}
              placeholder="where are you going ?"
              className="headersearch-input"
            />

            <div className="header-date">
              <i class="fa-sharp fa-light fa-calendar"></i>
              <span className="headersearch-text">{date}</span>;
              <input
                onChange={(e) => {
                  handledate(e);
                }}
                type="date"
                style={{ marginLeft: "10px" }}
              />
            </div>

            <button onClick={() => onSearch(value)} className="header-button">
              Search
            </button>
          </div>
        </div>
      </div>
      <div className="hero">
        <Navmfflight />
      </div>

      {/* this is the hero section of airline */}

      <div className="flight-feature">
        <div className="flight-summary">
          <div className="flight-text">
            <h5>Flight Booking System</h5>
            <br />
            <p>
              A flight booking system is an online platform that enables users
              to search for flights, compare fares, and make reservations. It
              typically includes features like filtering by dates, destinations,
              and airlines, with payment options to confirm bookings. The system
              interacts with airline databases to provide real-time availability
              and prices, making it easier for users to plan and book their
              trips efficiently.
            </p>
          </div>
          <div className="flight-image">
            <img src={flight} alt="flight" />
          </div>
        </div>
      </div>
    </>
  );
};

export default Navmflight;
