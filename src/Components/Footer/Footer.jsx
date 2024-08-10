import React from "react";
// import pages
import "./Footer.css";
import "../Navbar/Navbar.css";
// import icons
import { BiUpArrowAlt } from "react-icons/bi";
import { FaMobileAlt } from "react-icons/fa";
import { CiLocationOn } from "react-icons/ci";
import { Col, Container, Row } from "react-bootstrap";
import { IoIosSend } from "react-icons/io";
import { FaFacebookF } from "react-icons/fa";
import { FaInstagramSquare } from "react-icons/fa";
import { FaGooglePlusG } from "react-icons/fa6";
import { FaSnapchatGhost } from "react-icons/fa";
import { FaYoutube } from "react-icons/fa";

// import images
import footerImg from "../../Images/HomePage/Navbar/logo.png";
import { Link } from "react-router-dom";
export default function Footer() {
  // function go to top
  document.querySelectorAll(".FooterLinks li a").forEach((footerLink) => {
    footerLink.addEventListener("click", () => {
      window.scrollTo({
        top: 0,
        behavior: "smooth",
      });
    });
  });
  function GoToTop() {
    window.scrollTo({
      top: 0,
      behavior: "smooth",
    });
  }
  return (
    <>
      <div className="Footer">
        <div className="GoToTop">
          <BiUpArrowAlt
            onClick={() => {
              GoToTop();
            }}
          />
          <span>go to top</span>
        </div>
        <Container>
          <div className="FooterContent">
            <div className="ContactDetails">
              <div className="Phone">
                <FaMobileAlt />
                <span>PHONE : </span>
                <p>+88019 339 702 520</p>
              </div>
              <div className="Address">
                <CiLocationOn />
                <span>ADDRESS : </span>
                <p>30 North West New</p>
              </div>
              <form>
                <input
                  type="email"
                  name="email"
                  id="email"
                  placeholder="Enter your email"
                ></input>
                <a href="#">
                  Subscribe &nbsp;&nbsp;
                  <IoIosSend />
                </a>
              </form>
            </div>
            <div className="footerLogo">
              <div className="footerLogoImg">
                <img src={footerImg} alt="footerImg"loading="lazy"></img>
              </div>
              <div className="FooterInfo">
                <p>
                  Donec et nibh maximus, congue est eu, mattis nunc. Praesent ut
                  quam quis quam <br />
                  venenatis fringilla. Morbi vestibulum
                </p>
                <div className="ConatctSocial">
                  <ul>
                    <li>
                      <FaFacebookF />
                    </li>
                    <li>
                      <FaInstagramSquare />
                    </li>
                    <li>
                      <FaGooglePlusG />
                    </li>
                    <li>
                      <FaSnapchatGhost />
                    </li>
                    <li>
                      <FaYoutube />
                    </li>
                  </ul>
                </div>
              </div>
            </div>
            <div className="FooterLinks">
              <div className="FooterLinksContent">
                <ul>
                  <li
                    onClick={() => {
                      GoToTop();
                    }}
                  >
                    <Link to="/">Home</Link>
                  </li>
                  <li>
                    <Link to="/About">about</Link>
                  </li>
                  <li>
                    <Link to="/Menu">menu</Link>
                  </li>
                  <li>
                    <Link to="/Reservation">reservation</Link>
                  </li>
                  <li>
                    <Link to="/CafenaProduct">shop</Link>
                  </li>
                  <li>
                    <Link to="/RecentBlog">blog</Link>
                  </li>
                  <li>
                    <Link to="/Contact">Contact</Link>
                  </li>
                </ul>
              </div>
              <div
                className="FooterLinksGoUp"
                style={{
                  color: "#fff",
                  textTransform: "uppercase",
                  cursor: "pointer",
                }}
                onClick={() => {
                  GoToTop();
                }}
              >
                <span>GO TOP</span>
                <BiUpArrowAlt style={{ fontSize: "22px" }} />
              </div>
            </div>
          </div>
        </Container>
      </div>
    </>
  );
}
