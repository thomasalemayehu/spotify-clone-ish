// Import Libraries
import React from "react";
// Import Components
import Sidebar from "./Sidebar";
import Body from "./Body";
import Footer from "./Footer";
// Import Helpers
// Import Styles
import "../assets/css/Player.css";

function Player() {
  return (
    <div className="player-container">
      <div className="player-body-container">
        {/* Sidebar */}
        <Sidebar />
        {/* Body */}
        <Body />
      </div>

      {/* <div className="player-footer-container"></div> */}
      <Footer />
    </div>
  );
}

export default Player;
