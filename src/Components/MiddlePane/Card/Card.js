import React from "react";
import "./Card.css";
import dbox from "./dbox.png";
import gdrive from "./gdrive.png";
const Card = () => {
  return (
    <div className="midPane_cards">
      <div className="midPane_card">
        <img className="card_image" src={gdrive} alt=" "></img>
      </div>
      <div className="midPane_card">
        <img className="card_image" src={dbox} alt=" "></img>
      </div>
    </div>
  );
};

export default Card;
