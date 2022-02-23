// Import Libraries
import React from "react";

// Import Helpers
import { useStateProviderValue } from "../helpers/StateProvider";
// Import Styles
import "../assets/css/DiscoverBanner.css";

function DiscoverBanner() {
  const [{ discoverWeekly }, dispatch] = useStateProviderValue();

  return (
    <div className="body-info-container">
      <img
        src={discoverWeekly?.images[0]?.url}
        alt={discoverWeekly?.description}
      />
      <div className="body-info">
        <strong>PLAYLIST</strong>
        <h2>Discover Weekly</h2>

        <p>{discoverWeekly?.description}</p>
      </div>
    </div>
  );
}

export default DiscoverBanner;
