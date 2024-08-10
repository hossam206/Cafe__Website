import React from "react";
// import pages
import "./Slider.css";
import "../../../src/index.css";
// import icons
import { FaFacebookF } from "react-icons/fa";
import { FaInstagramSquare } from "react-icons/fa";
import { FaSnapchatGhost } from "react-icons/fa";
import { Col, Container, Row } from "react-bootstrap";
function Slider() {
  return (
    <>
      <div className="slider">
        <Container fluid>
          <Row>
            <Col xs={12} sm={6} md={6} lg={6} xl={6}>
              <div className="SliderContent">
                <h1 className="title" style={{ marginTop: "80px" }}>
                  rosted coffee
                  <br /> for you
                </h1>
                <p style={{ fontSize: "18px" }}>
                  The coffee is brewed by first roasting the green coffee beans
                  over hot
                  <br /> coals in a brazier. given an opportunity to sample
                </p>
                <div className="sliderButton">
                  <button>TESTY COFEE</button>
                  <button className="primaryButton">READ MORE</button>
                </div>

                <div className="sliderSocial">
                  <a href="#">
                    <FaFacebookF />
                    <span>Facebook</span>
                  </a>
                  <a href="#">
                    <FaInstagramSquare />

                    <span>Instagram</span>
                  </a>
                  <a href="#">
                    <FaSnapchatGhost />
                    <span>Snapchat</span>
                  </a>
                </div>
              </div>
            </Col>
          </Row>
        </Container>
      </div>
    </>
  );
}
export default Slider;
