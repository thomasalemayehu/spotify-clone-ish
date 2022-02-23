// Import Libraries
import React from "react";
// Import Components
import Song from "./Song";
// Import Helpers
import { useStateProviderValue } from "../helpers/StateProvider";
// Import Styles
import "../assets/css/HomeSongs.css";
import PlayCircleFilledWhiteRoundedIcon from "@mui/icons-material/PlayCircleFilledWhiteRounded";
import FavoriteBorderRoundedIcon from "@mui/icons-material/FavoriteBorderRounded";
import MoreHorizRoundedIcon from "@mui/icons-material/MoreHorizRounded";
import TimelapseRoundedIcon from "@mui/icons-material/TimelapseRounded";

import Song from "./Song";

function HomeSongs() {
  const [{ discoverWeekly }, dispatch] = useStateProviderValue();

  // console.log("Here", discoverWeeklyLoaded);
  return (
    <div className="home-songs-main-container">
      <div className="home-songs-header-container">
        <PlayCircleFilledWhiteRoundedIcon className="home-songs-header-icon" />
        <FavoriteBorderRoundedIcon className="home-songs-header-icon" />
        <MoreHorizRoundedIcon className="home-songs-header-icon" />
      </div>

      <div className="home-songs-container">
        <div className="home-songs-title">
          <div>#</div>
          <div>Title</div>
          <div>Album</div>
          {/* <div>Date Added</div> */}
          <TimelapseRoundedIcon />
        </div>
        <hr />
        <div className="home-songs">
          {discoverWeekly?.items?.map((playlist) => (
            <Song
              title={playlist.name}
              image={playlist.images[0].url}
              key={playlist.name + "," + Math.random()}
            />
          ))}
        </div>
      </div>
    </div>
  );
}

export default HomeSongs;
