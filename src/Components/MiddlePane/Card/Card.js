import React from "react";
import "./Card.css";
import folderIcon from "./folder-icon.png";
import pdfIcon from "../../../Asset/pdf.png";
import docIcon from "../../../Asset/doc.png";
import imageIcon from "../../../Asset/image.png";
import unknownIcon from "../../../Asset/unknown.png";
import videoIcon from "../../../Asset/video.png";
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
        <img className="card_image" src={docIcon} alt=" "></img>
        <div className="card_folder_desc">DailyReport.docx</div>
      </div>
      <div className="midPane_card">
        <img className="card_image" src={imageIcon} alt=" "></img>
        <div className="card_folder_desc">Logo.jpg</div>
      </div>
      <div className="midPane_card">
        <img className="card_image" src={unknownIcon} alt=" "></img>
        <div className="card_folder_desc">BinarySearch.cpp</div>
      </div>
      <div className="midPane_card">
        <img className="card_image" src={pdfIcon} alt=" "></img>
        <div className="card_folder_desc">Presentation.pdf</div>
      </div>
      <div className="midPane_card">
        <img className="card_image" src={videoIcon} alt=" "></img>
        <div className="card_folder_desc">Snyder-Cut.mp4</div>
      </div>
    </div>
  );
};

export default Card;
