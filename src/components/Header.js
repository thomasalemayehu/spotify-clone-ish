// Import Libraries
import React from "react";
// Import Components
// Import Helpers
import { useStateProviderValue } from "../helpers/StateProvider";
// Import Styles
import "../assets/css/Header.css";
import SearchRoundedIcon from "@mui/icons-material/SearchRounded";
import { Avatar } from "@mui/material";

import ArrowBackIosNewRoundedIcon from "@mui/icons-material/ArrowBackIosNewRounded";
import ArrowForwardIosRoundedIcon from "@mui/icons-material/ArrowForwardIosRounded";
import ArrowDropDownRoundedIcon from "@mui/icons-material/ArrowDropDownRounded";

function Header() {
  const [{ currentUser }, dispatch] = useStateProviderValue();
  console.log(currentUser);
  return (
    <div className="header-container">
      <div className="header-left-container">
        <div className="header-navigation-container">
          <ArrowBackIosNewRoundedIcon className="header-navigation-icons" />
        </div>
        <div className="header-navigation-container">
          <ArrowForwardIosRoundedIcon className="header-navigation-icons" />
        </div>
      </div>
      <div className="header-right-container">
        <div className="header-upgrade-container">Upgrade</div>

        <div className="header-info-container">
          <Avatar
            className="header-avatar"
            src={currentUser?.images[0].url}
            alt={currentUser?.display_name}
          />
          <h5>{currentUser?.display_name}</h5>
          <ArrowDropDownRoundedIcon />
        </div>
      </div>
    </div>
  );
}

export default Header;
