import React from "react";

import "../../assets/css/HomeCard.css";

import PlayCircleFilledRoundedIcon from "@mui/icons-material/PlayCircleFilledRounded";

function HomeCard({ item }) {
  return (
    <div className="home-card-item">
      <img
        src={item.track.album.images[0].url}
        alt={item.track.name}
        className="home-card-item-image"
      />

      <PlayCircleFilledRoundedIcon className="home-card-item-icon" />

      <h4>{item.track.name}</h4>
      {item.track.artists.map((artist) => (
        <span key={item.track.name + "," + Math.random()}>{artist.name}, </span>
      ))}
    </div>
  );
}

export default HomeCard;
