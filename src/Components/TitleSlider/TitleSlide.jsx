import React from "react";
import "./TitleSlider.css";
import "../../../src/index.css";
import { Link } from "react-router-dom";
export default function TitleSlide(props) {
  return (
    <>
      <div className="TileSlider">
        <div className="TileSlideroverlay"> </div>
        <div className="TileSliderComp">
          <h2 className="mainTitle">{props.PageTitle}</h2>
          <Link to="/">
            HOME /<span>{props.PageSmallTitle}</span>
          </Link>
        </div>
      </div>
    </>
  );
}
