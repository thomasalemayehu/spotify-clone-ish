// Import Libraries
import React from "react";
// Import Components
import HomeHeader from "./home/HomeHeader";
import HomeBody from "./home/HomeBody";
// Import Helpers

// Import Styles
import "../assets/css/Body.css";
import Header from "./Header";

function Body() {
  return (
    <div className="body-container">
      <Header></Header>
      <HomeHeader />
      <HomeBody />
    </div>
  );
}

export default Body;
