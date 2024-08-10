import React from "react";
import { Col, Container, Row } from "react-bootstrap";
// import images
import OurHistoryLeftImg from "../../Images/HomePage/OurHisyory/about-bg-3-1.jpeg";
// import pages
import "./OurHistory.css";
import "../../../src/index.css";
function OurHistory() {
  return (
    <>
      <div className="OurHistory">
        <Container fluid>
          <Row>
            <Col xl={6} lg={6} md={12} sm={12}>
              <div className="OurHistoryLeft">
                <img
                  src={OurHistoryLeftImg}
                  alt="OurHistoryLeftImg"
                  loading="lazy"
                ></img>
              </div>
            </Col>
            <Col xl={6} lg={6} md={12} sm={12}>
              <div className="OurHistoryRight">
                <div className="OurHistoryRightContent">
                  <span className="SubTitle">OurHistory</span>
                  <h2 className="mainTitle">CREATE A NEW STORY WITH US</h2>
                  <p style={{ fontSize: "18px" }}>
                    Mauris rhoncus orci in imperdiet placerat. Vestibulum
                    euismod nisl suscipit ligula volutpat, a feugiat urna
                    maximus. <br />
                    <br />
                    Cras massa nibhtincidunt. Donec et nibh maximus, congue est
                    eu, mattis nunc. Praesent ut quam quis quam venenatis
                    fringilla. Morbi vestibulum id tellus mmodo mattis. Aliquam
                    erat volutpat.
                  </p>
                </div>
              </div>
            </Col>
          </Row>
        </Container>
      </div>
    </>
  );
}
export default OurHistory;
