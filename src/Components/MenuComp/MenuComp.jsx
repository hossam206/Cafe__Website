import React from "react";
// import pages
import "./MenuComp.css";

function MenuComp(props) {
  return (
    <div>
      <div className="MenuComp">
        <div className="MenuCompContent">
          <div className="ItemImg">
            <img src={props.Image} alt="itemimg" loading="lazy"></img>
          </div>
          <div className="itemContent">
            <a href="#">{props.Title}</a>
            <span className="ItemPrice">${props.Price}</span>
          </div>
        </div>
      </div>
    </div>
  );
}

export default MenuComp;
