import React from "react";
import "./Body.css";
import Header from "./Header";
import HomeSongs from "./HomeSongs";

import DiscoverBanner from "./DiscoverBanner";

function Body() {
  return (
    <div className="body-container">
      <Header />

      <DiscoverBanner />

      <HomeSongs />
    </div>
  );
}

export default Body;
