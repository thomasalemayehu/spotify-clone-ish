// Import Libraries
import React from "react";
// Import Components
// Import Helpers
// Import Styles
import "../assets/css/Footer.css";
import logo from "../assets/usher.jpg";
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

function Footer() {
  return (
    <div className="footer-container">
      <div className="footer-left-container">
        <img src={logo} alt="" className="footer-album-logo" />
        <div className="music-info-container">
          <h4>Yeah!</h4>
          <p>Usher</p>
        </div>
        <FavoriteBorderRoundedIcon className="footer-favorite-icon footer-icon" />
        <DevicesRoundedIcon className="footer-favorite-icon footer-icon" />
      </div>

      <div className="footer-center-container">
        <ShuffleRoundedIcon className="footer-icon footer-green" />
        <SkipPreviousRoundedIcon className="footer-icon" />
        <PlayCircleFilledRoundedIcon className="footer-icon footer-icon-large" />
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
