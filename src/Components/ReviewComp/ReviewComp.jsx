import React from "react";
import "./ReviewComp.css";
// import icons
import { MdOutlineStarBorder } from "react-icons/md";


export default function ReviewComp(props) {
  return (
    <>
      <div className="ReviewComp">
        <div className="ReviewCompContent">
          <div className="ReviewrImg">
            <img src={props.reviewerImg} alt="reviewImg" loading="lazy"></img>
          </div>
          <div className="ReviewerDetails">
            <h5>
              {props.ReviwerName} <span>{props.ReviewDatw}</span>
            </h5>
            <div className="ReviewrRating">
              <MdOutlineStarBorder />
              <MdOutlineStarBorder />
              <MdOutlineStarBorder />
              <MdOutlineStarBorder />
              <MdOutlineStarBorder />
            </div>
            <p>
              Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do
              eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut
              enim ad minim veniam, quis nostrud exercitation.
            </p>
          </div>
        </div>
      </div>
    </>
  );
}
