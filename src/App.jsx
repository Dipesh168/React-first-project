import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Nav from "./Components/Nav";
import Hero from "./Hero/Hero";
import Trust from "./Trustby/Trust";
import Cat from "./scatCard/Cat";
import { travelCards } from "./data";
import Slide from "./Slide/Slide";
import Title from "./Ttitle/Title";
import Navmap from "./Components/Navmap";
import Navmflight from "./Components/Navmflight";
import Navmhotel from "./Components/Navmhotel";
import NavmTour from "./Components/NavmTour";

import Footer from "./Uifooter/Footer";

const App = () => {
  return (
    <Router>
      <div>
        <Nav />
        <Routes>
          <Route
            path="/"
            element={
              <>
                <Hero />
                <Slide />
                <Title />

                <Footer />
              </>
            }
          />
          <Route
            path="/home"
            element={
              <>
                <Hero />
                <Slide />
                <Title />

                <Footer />
              </>
            }
          />

          <Route path="/map" element={<Navmap />} />
          <Route path="/flight" element={<Navmflight />} />
          <Route path="/hotel" element={<Navmhotel />} />
          <Route path="/tour" element={<NavmTour />} />
        </Routes>
      </div>
    </Router>
  );
};

export default App;
