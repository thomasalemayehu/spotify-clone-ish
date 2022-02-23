import React from "react";
import "./HomeSongs.css";

import PlayCircleFilledWhiteRoundedIcon from "@mui/icons-material/PlayCircleFilledWhiteRounded";
import FavoriteBorderRoundedIcon from "@mui/icons-material/FavoriteBorderRounded";
import MoreHorizRoundedIcon from "@mui/icons-material/MoreHorizRounded";
import TimelapseRoundedIcon from "@mui/icons-material/TimelapseRounded";

import { useStateProviderValue } from "./StateProvider";

import Song from "./Song";

function HomeSongs() {
  const [{ discoverWeekly, discoverWeeklyLoaded }, dispatch] =
    useStateProviderValue();

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
          {/* {discoverWeekly?.tracks.items.map((item) => {
            // <Song track={item.track} key={item.track.name} />;
            <div> Item </div>;
          })} */}
          {/* {discoverWeekly?.tracks.items?.map((item) => {
            <Song track={item.added_at} />;
          })} */}
        </div>
      </div>
    </div>
  );
}

export default HomeSongs;
