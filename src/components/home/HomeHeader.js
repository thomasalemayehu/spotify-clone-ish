import React from "react";
import "../../assets/css/HomeHeader.css";
import HomeHeaderCard from "./HomeHeaderCard";
import { useStateProviderValue } from "../../helpers/StateProvider";

function HomeHeader() {
  const [{ currentUserPlaylists }] = useStateProviderValue();

  return (
    <div className="home-header-container">
      {currentUserPlaylists?.items?.splice(0, 6).map((playlist) => (
        <HomeHeaderCard
          title={playlist.name}
          alt={playlist.name}
          image={playlist.images[0].url}
          key={playlist.name + "," + Math.random()}
        />
      ))}
    </div>
  );
}

export default HomeHeader;
