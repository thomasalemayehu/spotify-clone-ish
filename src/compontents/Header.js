import React from "react";
import "./Header.css";
import SearchRoundedIcon from "@mui/icons-material/SearchRounded";
import { Avatar } from "@mui/material";
// Global State Provider
import { useStateProviderValue } from "./StateProvider";

function Header() {
  const [{ currentUser }, dispatch] = useStateProviderValue();
  return (
    <div className="header-container">
      <div className="header-left-container">
        <SearchRoundedIcon />
        <input placeholder="Search for Artists, Songs, Podcasts" type="text" />
      </div>
      <div className="header-right-container">
        <Avatar
          src={currentUser?.images[0]?.url}
          alt={currentUser?.display_name}
        />
        <h4>{currentUser?.display_name}</h4>
      </div>
    </div>
  );
}

export default Header;
