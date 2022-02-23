// Import Libraries
import React from "react";
import SpotifyWebApi from "spotify-web-api-js";
// Import Components
// Import Helpers
// Import Styles
import "../assets/css/Footer.css";
import ShuffleRoundedIcon from "@mui/icons-material/ShuffleRounded";
import SkipNextRoundedIcon from "@mui/icons-material/SkipNextRounded";
import SkipPreviousRoundedIcon from "@mui/icons-material/SkipPreviousRounded";
import RepeatRoundedIcon from "@mui/icons-material/RepeatRounded";
import FavoriteBorderRoundedIcon from "@mui/icons-material/FavoriteBorderRounded";
import PlayCircleFilledRoundedIcon from "@mui/icons-material/PlayCircleFilledRounded";
import DevicesRoundedIcon from "@mui/icons-material/DevicesRounded";
import SpeakerRoundedIcon from "@mui/icons-material/SpeakerRounded";
import { Slider } from "@mui/material";
import { PlaylistPlayRounded, VolumeDownRounded } from "@mui/icons-material";

import { useStateProviderValue } from "../helpers/StateProvider";

function Footer() {
  const [{ currentUserPlaying, accessToken }] = useStateProviderValue();
  async function pausePlayback() {
    // const spotifyApp = new SpotifyWebApi();
    // spotifyApp.setAccessToken(accessToken);
    // // spotifyApp.pause();
    // // spotifyApp.skipToNext();
    // spotifyApp.setShuffle(true).then(()=>{console.log("Done")})
    const response = await fetch("https://api.spotify.com/v1/me/player/next", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
        Authorization: "Bearer " + accessToken,
      },
      state: "track",
    });

    console.log(response);
  }

  // var progressTime = currentUserPlaying?.progress_ms;
  // var durationTime = currentUserPlaying?.item.duration_ms;

  return (
    <div className="footer-container">
      <div className="footer-left-container">
        <img
          src={currentUserPlaying?.item.album.images[0].url}
          alt=""
          className="footer-album-logo"
        />
        <div className="music-info-container">
          <h4>{currentUserPlaying?.item.name}</h4>
          <p>
            {currentUserPlaying?.item.artists.map((artist) => (
              <span key={artist.name + "," + Math.random()}>
                {artist.name},{" "}
              </span>
            ))}
          </p>
        </div>
        <FavoriteBorderRoundedIcon className="footer-favorite-icon footer-icon" />
        <DevicesRoundedIcon className="footer-favorite-icon footer-icon" />
      </div>

      <div className="footer-center-container">
        <ShuffleRoundedIcon className="footer-icon footer-green" />
        <SkipPreviousRoundedIcon className="footer-icon" />
        <PlayCircleFilledRoundedIcon
          className="footer-icon footer-icon-large"
          onClick={pausePlayback}
        />
        <SkipNextRoundedIcon className="footer-icon" />
        <RepeatRoundedIcon className="footer-icon" />
      </div>

      <div className="footer-right-container">
        <PlaylistPlayRounded className="footer-icon" />
        <SpeakerRoundedIcon className="footer-icon" />

        <VolumeDownRounded className="footer-icon" />

        <Slider />
      </div>
    </div>
  );
}

export default Footer;
