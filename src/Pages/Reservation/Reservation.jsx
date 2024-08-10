import React, { useEffect, useState } from "react";
// imoort pages
import "./Reservation.css";
import "../../../src/index.css";
// import componenets

import TitleSlide from "../../Components/TitleSlider/TitleSlide";
import { Col, Container, Row } from "react-bootstrap";
import Footer from "../../Components/Footer/Footer";
import WhiteNavbarComp from "../../Components/whiteNavbarComp/WhiteNavbarComp";
import Loaderr from "../../Components/Loader/Loaderr";
export default function Reservation() {
    const [loader, showloader] = useState(true);

    function setLoader() {
      let LoaderTime = setTimeout(() => {
        showloader(false);
      }, 1000);
      return () => clearTimeout(LoaderTime);
    }
    useEffect(() => {
      setLoader();
    }, []);
  return (
    <>
      {loader && <Loaderr />}
      <WhiteNavbarComp />
      <TitleSlide PageTitle={"Reservation"} PageSmallTitle={"MENU"} />

      {/* start Reservation form */}

      <div className="ReservationForm">
        <Container>
          <div className="ReservationFormContent">
            <div className="ReservationFormHeading">
              <h3 className="DarkTitle">RESERVATION TABLE </h3>
              <form>
                <Row>
                  <Col xl={6} lg={6} md={6} sm={12}>
                    <input type="text" placeholder="Enter Your Name"></input>
                  </Col>
                  <Col xl={6} lg={6} md={6} sm={12}>
                    <select name="states" id="subject">
                      <option data-display="Service Category">Seates*</option>
                      <option value="1">For 2 Persons</option>
                      <option value="2">For 5 Persons</option>
                      <option value="3">For 6 Persons</option>
                    </select>
                  </Col>
                  <Col xl={6} lg={6} md={6} sm={12}>
                    <input type="email" placeholder="Enter Your Email"></input>
                  </Col>
                  <Col xl={6} lg={6} md={6} sm={12}>
                    <input type="time"></input>
                  </Col>
                  <Col xl={6} lg={6} md={6} sm={12}>
                    <input
                      type="number"
                      placeholder="Enter Your Number"
                    ></input>
                  </Col>
                  <Col xl={6} lg={6} md={6} sm={12}>
                    <input type="Date" placeholder="Enter Your Name"></input>
                  </Col>
                </Row>
                <button type="submit">Submit you request</button>
              </form>
            </div>
          </div>
        </Container>
      </div>
      <Footer />
    </>
  );
}
