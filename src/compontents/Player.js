import React from "react";
import "./Player.css";

import Sidebar from "./Sidebar";
import Body from "./Body";
import Footer from "./Footer";

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
