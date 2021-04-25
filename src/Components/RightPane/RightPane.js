import React, { useState } from "react";
import "./RightPane.css";
import AccountCircleIcon from "@material-ui/icons/AccountCircle";
import { Chart } from "react-google-charts";
import ExitToAppIcon from "@material-ui/icons/ExitToApp";
import Modal from "@material-ui/core/Modal";
import { makeStyles } from "@material-ui/core/styles";
import KeyboardArrowLeftIcon from "@material-ui/icons/KeyboardArrowLeft";
import KeyboardArrowRightIcon from "@material-ui/icons/KeyboardArrowRight";
import TextField from "@material-ui/core/TextField";
const chartOptions = {
  pieHole: 0.6,
  slices: [
    {
      // color: "#2BB673",
      color: "#05e395",
      // color: "black",
      // color: "#0f0",
      // offset: 0.05,
    },
    {
      color: "grey",
      // color: "black",
      // color: "#05e395",
      offset: 0.1,
    },
  ],
  legend: {
    position: "none",
  },
  tooltip: {
    showColorCode: true,
  },
  // pieSliceBorderColor: "#343951",
  pieSliceBorderColor: "white",
  chartArea: {
    left: 10,
    top: 20,
    bottom: 10,
    width: "100%",
    height: "90%",
  },
  fontName: "Roboto",
  backgroundColor: "none",
  // title: "Storage",
};
const useUpgradeStyles = makeStyles((theme) => ({
  paper: {
    position: "relative",
    top: "30%",
    left: "30%",
    width: 400,
    backgroundColor: "#05e395",
    border: "2px solid #000",
    boxShadow: "0 0 15px #0f0",
    padding: theme.spacing(2, 4, 3),
    color: "white",
    textAlign: "center",
  },
}));
const useUpgradeCounterStyles = makeStyles((theme) => ({
  root: {
    "& .MuiTextField-root": {
      margin: theme.spacing(1),
      width: "25ch",
      backgroundColor: "none",
    },
  },
}));
const RightPane = (props) => {
  const [openUpgrade, setOpenUpgrade] = useState(false);
  const [upgradeCounter, setUpgradeCounter] = useState(0);

  const classesUpgrade = useUpgradeStyles();
  const classesUpgradeCounter = useUpgradeCounterStyles();
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
          <ExitToAppIcon className="user_logout" onClick={props.logout} />
        </div>
      </div>
      <hr />
      <div className="storage_detail">
        <h2 className="storage_detail_heading">Storage</h2>
        <Chart
          width={"100%"}
          height={"250px"}
          chartType="PieChart"
          loader={<div>Loading Chart</div>}
          data={[
            ["Storage Status", "Size"],
            ["Used", 80],
            ["Unused", 20],
          ]}
          options={chartOptions}
          rootProps={{ "data-testid": "1" }}
        />
        <p className="storage_total">20 Gb</p>
        <p className="storage_detail_desc">16 Gb of 20 Gb used</p>
      </div>
      <div className="storage_upgrade">
        <p className="storage_heading">Get more space</p>
        <p className="storage_heading">for Files</p>
        <p className="storage_detail">More than 200 Gb for your files</p>
        <button className="storage_button" onClick={() => setOpenUpgrade(true)}>
          Upgrade Storage
        </button>
      </div>
      <div className="Detail-Modal">
        <Modal
          open={openUpgrade}
          onClose={() => {
            setUpgradeCounter(0);
            setOpenUpgrade(!openUpgrade);
          }}
          aria-labelledby="simple-modal-title"
          aria-describedby="simple-modal-description"
        >
          <div className={classesUpgrade.paper}>
            <h2 id="simple-modal-title">Upgrade Storage</h2>
            <p style={{ fontSize: "14px" }}>
              Kindly Select your preferred Storage:
            </p>
            <div className="upgrade_counter">
              {upgradeCounter ? (
                <KeyboardArrowLeftIcon
                  // fontSize="small"
                  className="upgrade_arrow"
                  onClick={() => setUpgradeCounter(upgradeCounter - 1)}
                />
              ) : (
                <KeyboardArrowLeftIcon
                  // fontSize="small"
                  className="upgrade_arrow"
                  disabled
                  style={{ backgroundColor: "grey" }}
                />
              )}
              <form
                className={classesUpgradeCounter.root}
                noValidate
                autoComplete="off"
              >
                <div>
                  <TextField
                    required
                    id="standard-required"
                    className="input_upgrade_counter"
                    value={upgradeCounter}
                    onChange={(event) => {
                      if (parseInt(event.target.value) <= 500) {
                        setUpgradeCounter(parseInt(event.target.value));
                      }
                      if (event.target.value === "") {
                        setUpgradeCounter(0);
                      }
                    }}
                  />
                </div>
              </form>
              {upgradeCounter < 500 ? (
                <KeyboardArrowRightIcon
                  // fontSize="small"
                  className="upgrade_arrow"
                  onClick={() => setUpgradeCounter(upgradeCounter + 1)}
                />
              ) : (
                <KeyboardArrowRightIcon
                  // fontSize="small"
                  className="upgrade_arrow"
                  disabled
                  style={{ backgroundColor: "grey" }}
                />
              )}
            </div>
            <div className="upgrade_cost">
              <span>{upgradeCounter} GB: &nbsp;&nbsp;</span>
              <i class="fa fa-inr" aria-hidden="true"></i>
              &nbsp;{upgradeCounter * 2}
            </div>
            <button className="upgrade_payment_button">Make Payment</button>
          </div>
        </Modal>
      </div>
    </div>
  );
};

export default RightPane;
