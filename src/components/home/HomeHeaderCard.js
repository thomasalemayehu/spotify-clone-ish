import React from "react";
import "../../assets/css/HomeHeaderCard.css";

import PlayCircleFilledRoundedIcon from "@mui/icons-material/PlayCircleFilledRounded";

function HomeHeaderCard({ image, title }) {
  return (
    <div className="home-header-card-container">
      <img className="home-header-card-image" src={image} />
      <div className="home-header-card-title">{title}</div>
      <PlayCircleFilledRoundedIcon className="home-header-card-icon" />
    </div>
  );
}

export default HomeHeaderCard;
