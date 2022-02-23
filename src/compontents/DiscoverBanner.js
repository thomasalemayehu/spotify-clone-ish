import React from "react";
import "./DiscoverBanner.css";

import { useStateProviderValue } from "./StateProvider";

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
