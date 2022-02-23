// Import Libraries
import React from "react";
// Import Components
// Import Helpers
import { useStateProviderValue } from "../helpers/StateProvider";
// Import Styles
import "../assets/css/Header.css";
import SearchRoundedIcon from "@mui/icons-material/SearchRounded";
import { Avatar } from "@mui/material";

function Header() {
  const [{ currentUser }, dispatch] = useStateProviderValue();
  return (
    <div className="header-container">
      <div className="header-left-container">
        {/* <SearchRoundedIcon /> */}
        {/* <input placeholder="Search for Artists, Songs, Podcasts" type="text" /> */}
      </div>
      <div className="header-right-container">
        {/* <Avatar
          src={currentUser?.images[0]?.url}
          alt={currentUser?.display_name}
        /> */}
        {/* <h4>{currentUser?.display_name}</h4> */}
      </div>
    </div>
  );
}

export default Header;
