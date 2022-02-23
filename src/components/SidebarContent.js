// Import Libraries
import React from "react";

// Import Styles
import "../assets/css/SidebarContent.css";

function SidebarContent({ name, Icon }) {
  return (
    <div className="sidebar-content">
      {Icon && <Icon className="sidebar-content-icon"></Icon>}
      {Icon ? <h5> {name} </h5> : <p>{name}</p>}
    </div>
  );
}

export default SidebarContent;
