import React from "react";
import "./Song.css";

function Song({ track }) {
  return (
    <div>{track}</div>
    // <div className="song-container">
    //   <div>#1</div>
    //   <div className="song-title-container">
    //     <img
    //       src={track.album.images[0]?.url}
    //       alt={track.album.name}
    //       className="song-title-icon"
    //     />
    //     <div className="song-info-container">
    //       <h4 className="song-title">{track.name}</h4>
    //       <p className="song-artist">
    //         {track.artists.map((artist) => artist.name).join(", ")}
    //       </p>
    //     </div>
    //   </div>
    //   <div>{track.album.name}</div>
    // {
    /* <div>Date Added</div> */
    // }
    // <div>3:00</div>
    // </div>
  );
}

export default Song;
