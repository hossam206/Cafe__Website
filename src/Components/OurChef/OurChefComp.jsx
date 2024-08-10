import React, { useState } from "react";
// import pages
import "./OurChefComp.css";
// import icons

import { FaFacebookF } from "react-icons/fa";
import { FaSquarePinterest } from "react-icons/fa6";
import { FaGoogle } from "react-icons/fa";
import { FaYoutube } from "react-icons/fa";
import { FiPlus } from "react-icons/fi";
export default function OurChefComp(props) {
  const [links, showLinks] = useState("");
  return (
    <>
      <div className="ChefItem">
        <div className="chefHeading">
          <div className="chefImg">
            <img src={props.ChefImg} alt="img" loading="lazy"></img>
          </div>
        </div>
        <div className="chefInfo" style={{ textAlign: "left" }}>
          <h4 className="name">{props.ChefName}</h4>
          <span className="experience">{props.YearExp} year experience</span>
        </div>
        <div className="chefSocial">
          <ul>
            <li>
              <FaFacebookF />
            </li>
            <li>
              <FaSquarePinterest />
            </li>
            <li>
              <FaGoogle />
            </li>
            <li>
              <FaYoutube />
            </li>
          </ul>
        </div>
      </div>
    </>
  );
}
