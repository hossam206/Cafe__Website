import React from "react";
// import pages
import "./NewArticleComp.css";
// import icons
import { BiRightArrowAlt } from "react-icons/bi";

export default function NewArticleComp(props) {
  return (
    <>
      <div className="NewArticleComp">
        <div className="NewArticleCompContent">
          <div className="NewArticleCompImg">
            <img src={props.Img} alt="img1"></img>
          </div>
          <div className="NewArticleCompTitle">
            <p>
              <span style={{ color: "#C7A17A" }}>BY&nbsp;:&nbsp;</span>
              {props.Region}
            </p>
            <h4>{props.Title}</h4>
            <a href="#">
              READ MORE
              <BiRightArrowAlt />
            </a>
          </div>
        </div>
      </div>
    </>
  );
}
