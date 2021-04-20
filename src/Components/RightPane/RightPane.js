import React from "react";
import "./RightPane.css";
import AccountCircleIcon from "@material-ui/icons/AccountCircle";
// import bg from "./bg.jpg";
const RightPane = () => {
  return (
    <div className="rightPane">
      <div className="rightPane_user">
        <div className="user_icons">
          <i class="fa fa-bell-o bell_icon" aria-hidden="true"></i>
          &nbsp;&nbsp;
          <i class="fa fa-cog settings_icon" aria-hidden="true"></i>
        </div>
        <div className="user_info">
          <span className="username">Shubham&nbsp;</span>
          <AccountCircleIcon className="user_circle" />
        </div>
      </div>
      <hr />
      <div className="storage_detail">
        <div>
          <span className="storage_used">Total Storage:</span>
          <span>50 Gb</span>
        </div>
        <div className="storage_used">
          <span>Storage Used:</span>

          <span>20 Gb</span>
        </div>
      </div>
      <div className="storage_upgrade">
        <p className="storage_heading">Get more space</p>
        <p className="storage_heading">for Files</p>
        <p className="storage_detail">More than 200 Gb for your files</p>
        <button className="storage_button">Upgrade Storage</button>
      </div>
    </div>
  );
};

export default RightPane;
