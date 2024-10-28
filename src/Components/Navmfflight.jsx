// FlightSearch.js
import React, { useState } from "react";
import axios from "axios";
import "./Navmfflight.css";

const Navmfflight = () => {
  const [flights, setFlights] = useState([]);

  const [classType, setClassType] = useState("economy");
  const [minPrice, setMinPrice] = useState("");
  const [maxPrice, setMaxPrice] = useState("");
  const [sortOption, setSortOption] = useState("");

  const handleSearch = async () => {
    try {
      const response = await axios.get("https://api.example.com/flights", {
        params: {
          destination,
          departureDate,
          classType,
          minPrice,
          maxPrice,
        },
      });

      let flightResults = response.data;

      // Sort flights by chosen option
      if (sortOption === "price") {
        flightResults.sort((a, b) => a.price - b.price);
      } else if (sortOption === "duration") {
        flightResults.sort((a, b) => a.duration - b.duration);
      }

      setFlights(flightResults);
    } catch (error) {
      console.error("Error fetching flights:", error);
    }
  };

  return (
    <div className="api-flight">
      <input
        type="number"
        placeholder="Min Price"
        value={minPrice}
        onChange={(e) => setMinPrice(e.target.value)}
      />
      <input
        type="number"
        placeholder="Max Price"
        value={maxPrice}
        onChange={(e) => setMaxPrice(e.target.value)}
      />

      <select onChange={(e) => setSortOption(e.target.value)}>
        <option value="">Sort by</option>
        <option value="price">Price</option>
        <option value="duration">Duration</option>
      </select>

      <button onClick={handleSearch}>Search Flights</button>

      <div>
        {flights.map((flight) => (
          <div key={flight.id}>
            <h3>{flight.airline}</h3>
            <p>Departure: {flight.departure}</p>
            <p>Arrival: {flight.arrival}</p>
            <p>Duration: {flight.duration} hrs</p>
            <p>Price: ${flight.price}</p>
            <p>Baggage Allowance: {flight.baggage}</p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Navmfflight;
