import React from "react";
import "./MiddlePane.css";
import TextField from "@material-ui/core/TextField";
import { makeStyles } from "@material-ui/core/styles";
import Card from "./Card/Card";

const useStyles = makeStyles((theme) => ({
  root: {
    "& .MuiTextField-root": {
      margin: theme.spacing(1),
      width: "25ch",
    },
  },
}));
const MiddlePane = () => {
  const classes = useStyles();
  return (
    <div className="middlePane">
      <div className="middlePane_searchBar">
        <form className={classes.root} noValidate autoComplete="off">
          <TextField
            id="outlined-search"
            className="searchBar_text"
            label="Search"
            type="search"
            variant="outlined"
          />
        </form>
      </div>
      <div className="middlePane_cards">
        <Card />
      </div>
      <div className="middlePane_recent">
        <div className="recent_heading">
          <h2>Recent Files</h2>
          <h4>View All</h4>
        </div>
        <div className="recent_content">
          <div className="file_content">
            <div>
              <i class="fa fa-file-image-o" aria-hidden="true"></i>
              <span>&nbsp;Logo.jpg</span>
            </div>
            <span>1.2Mb</span>
          </div>
          <div className="file_content">
            <div>
              <i class="fa fa-file-code-o" aria-hidden="true"></i>
              <span>&nbsp;LandingPage.js</span>
            </div>
            <span>16KB</span>
          </div>
          <div className="file_content">
            <div>
              <i class="fa fa-film" aria-hidden="true"></i>
              <span>&nbsp;Snyder-Cut.mp4</span>
            </div>
            <span>975Mb</span>
          </div>
          <div className="file_content">
            <div>
              <i class="fa fa-file-word-o" aria-hidden="true"></i>
              <span>&nbsp;DailyReport.docx</span>
            </div>
            <span>28KB</span>
          </div>
          <div className="file_content">
            <div>
              <i class="fa fa-file-pdf-o" aria-hidden="true"></i>
              <span>&nbsp;Presentation.pdf</span>
            </div>
            <span>12.8Mb</span>
          </div>
          <div className="file_content">
            <div>
              <i class="fa fa-file-image-o" aria-hidden="true"></i>
              <span>&nbsp;Screenshot20042021093522.png</span>
            </div>
            <span>800KB</span>
          </div>
          <div className="file_content">
            <div>
              <i class="fa fa-file-code-o" aria-hidden="true"></i>
              <span>&nbsp;BinarySearch.cpp</span>
            </div>
            <span>3104KB</span>
          </div>
        </div>
      </div>
    </div>
  );
};

export default MiddlePane;
