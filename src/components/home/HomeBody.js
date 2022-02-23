import React from "react";

import "../../assets/css/HomeBody.css";
import { useStateProviderValue } from "../../helpers/StateProvider";
import HomeCard from "./HomeCard";

function HomeBody() {
  const [{ currentUserRecentPlayed, currentUserSavedTracks }] =
    useStateProviderValue();

  return (
    <div className="home-body-container">
      <h1>Recently Played</h1>
      <div className="home-body-items-container">
        {currentUserRecentPlayed?.items.map((item) => (
          <HomeCard item={item} key={item.track.name} />
        ))}
      </div>
      <h1>Saved Tracks</h1>
      <div className="home-body-items-container">
        {currentUserSavedTracks?.items.map((item) => (
          <HomeCard item={item} key={item.track.name + "," + Math.random()} />
        ))}
      </div>

      <h1>Recent Releases</h1>
      <div className="home-body-items-container">
        {/* {currentUserReleases?.albums.items.map((item) => (
          <HomeCard item={item} key={item.name} />
        ))} */}
      </div>
    </div>
  );
}

export default HomeBody;
