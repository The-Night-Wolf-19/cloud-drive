import React from "react";
import "./RightPane.css";
import AccountCircleIcon from "@material-ui/icons/AccountCircle";
import { Chart } from "react-google-charts";
const chartOptions = {
  pieHole: 0.6,
  slices: [
    {
      color: "#2BB673",
    },
    {
      color: "#d91e48",
    },
    {
      color: "#007fad",
    },
    {
      color: "#e9a227",
    },
    {
      color: "grey",
    },
  ],
  legend: {
    position: "right",
    alignment: "center",
    textStyle: {
      color: "#d0d6db",
      fontSize: 12,
    },
  },
  tooltip: {
    showColorCode: true,
  },
  chartArea: {
    left: 10,
    top: 10,
    width: "100%",
    height: "60%",
  },
  fontName: "Roboto",
  backgroundColor: "none",
  // title: "Storage",
};

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
        <h2 className="storage_detail_heading">Storage</h2>
        <Chart
          width={"100%"}
          height={"300px"}
          chartType="PieChart"
          loader={<div>Loading Chart</div>}
          data={[
            ["File Type", "Storage Used"],
            ["Images", 40],
            ["Videos", 10],
            ["Documents", 20],
            ["Others", 10],
            ["Unused", 20],
          ]}
          options={chartOptions}
          rootProps={{ "data-testid": "1" }}
        />
        <p className="storage_detail_desc">16 Gb of 20 Gb used</p>
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
