import React from "react";
import "./Card.css";
import folderIcon from "./folder-icon.png";
const Card = () => {
  return (
    <div className="midPane_cards">
      <div className="midPane_card">
        <img className="card_image" src={folderIcon} alt=" "></img>
        <div className="card_folder_desc">Folder 1</div>
      </div>
      <div className="midPane_card">
        <img className="card_image" src={folderIcon} alt=" "></img>
        <div className="card_folder_desc">Folder 2</div>
      </div>
      <div className="midPane_card">
        <img className="card_image" src={folderIcon} alt=" "></img>
        <div className="card_folder_desc">Folder 3</div>
      </div>
      <div className="midPane_card">
        <img className="card_image" src={folderIcon} alt=" "></img>
        <div className="card_folder_desc">Folder 4</div>
      </div>
      <div className="midPane_card">
        <img className="card_image" src={folderIcon} alt=" "></img>
        <div className="card_folder_desc">Folder 5</div>
      </div>
      <div className="midPane_card">
        <img className="card_image" src={folderIcon} alt=" "></img>
        <div className="card_folder_desc">Folder 6</div>
      </div>
      <div className="midPane_card">
        <img className="card_image" src={folderIcon} alt=" "></img>
        <div className="card_folder_desc">Folder 7</div>
      </div>
      <div className="midPane_card">
        <img className="card_image" src={folderIcon} alt=" "></img>
        <div className="card_folder_desc">Folder 8</div>
      </div>
      <div className="midPane_card">
        <img className="card_image" src={folderIcon} alt=" "></img>
        <div className="card_folder_desc">Folder 9</div>
      </div>
      <div className="midPane_card">
        <img className="card_image" src={folderIcon} alt=" "></img>
        <div className="card_folder_desc">Folder 10</div>
      </div>
    </div>
  );
};

export default Card;
