import React, { useState } from "react";
import CustomizedMenus from "./AddBtn/CustomizedMenus";
import "./LeftPane.css";
import sarvvid from "./sarvvid.png";

const LeftPane = () => {
  const [sideDrawerToggle, setSideDrawerToggle] = useState(false);

  return (
    <div
      className="leftContainer"
      onMouseEnter={() => setSideDrawerToggle(true)}
      onMouseLeave={() => setSideDrawerToggle(false)}
    >
      {sideDrawerToggle ? (
        <div className="leftPane">
          <img className="sarvvid_logo" src={sarvvid} alt="Sarvvid AI"></img>
          <div className="leftPane_buttons">
            <div className="leftPane_buttons_button">
              <i class="fa fa-home" aria-hidden="true"></i>
              &nbsp;Home
            </div>
            <div className="leftPane_buttons_button">
              <i class="fa fa-folder-o" aria-hidden="true"></i>
              &nbsp;My Files
            </div>
            <div className="leftPane_buttons_button">
              <i class="fa fa-folder-open" aria-hidden="true"></i>
              &nbsp;Recent Files
            </div>
            <div className="leftPane_buttons_button">
              <i class="fa fa-users" aria-hidden="true"></i>
              &nbsp;Shared Files
            </div>
            <div className="leftPane_buttons_button">
              <i class="fa fa-upload" aria-hidden="true"></i>
              &nbsp;File Request
            </div>
            <div className="leftPane_buttons_button">
              <i class="fa fa-trash-o" aria-hidden="true"></i>
              &nbsp;Recycle Bin
            </div>
          </div>
          <div className="leftPane_new">
            <CustomizedMenus btnSize="long" />
          </div>
        </div>
      ) : (
        <div className="leftPane_short">
          <img
            className="sarvvid_logo_short"
            src={sarvvid}
            alt="Sarvvid AI"
          ></img>
          <div className="leftPane_buttons">
            <div className="leftPane_buttons_button_short">
              <i class="fa fa-home" aria-hidden="true"></i>
            </div>
            <div className="leftPane_buttons_button_short">
              <i class="fa fa-folder-o" aria-hidden="true"></i>
            </div>
            <div className="leftPane_buttons_button_short">
              <i class="fa fa-folder-open" aria-hidden="true"></i>
            </div>
            <div className="leftPane_buttons_button_short">
              <i class="fa fa-users" aria-hidden="true"></i>
            </div>
            <div className="leftPane_buttons_button_short">
              <i class="fa fa-upload" aria-hidden="true"></i>
            </div>
            <div className="leftPane_buttons_button_short">
              <i class="fa fa-trash-o" aria-hidden="true"></i>
            </div>
          </div>
          <div className="leftPane_new">
            <CustomizedMenus btnSize="short" />
          </div>
        </div>
      )}
    </div>
  );
};

export default LeftPane;
