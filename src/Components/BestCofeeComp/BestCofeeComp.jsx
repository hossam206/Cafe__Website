import React from "react";
// import pages
import "../../../src/index.css";
import "./BestCofeeComp.css";
import { Col, Container, Row } from "react-bootstrap";
// import images
import img1 from "../../Images/HomePage/BestCofee/f-1.jpeg";
import img2 from "../../Images/HomePage/BestCofee/f-shape-1.png";
function BestCofeeComp() {
  return (
    <>
      <div className="BestCofeeSec">
        <Container fluid>
          <Row>
            <Col xl={4} lg={6} md={6} sm={12}>
              <div className="BestCofeeContent">
                <div className="shape">
                  <img src={img2} alt="img" loading="lazy"></img>
                </div>
                <div className="Content">
                  <span>01</span>
                  <h3>Best Coffee flavour</h3>
                  <p>
                    Curabitur semper erat a lacusey sedn consequat, sit ametey.
                  </p>
                </div>
              </div>
            </Col>
            <Col xl={4} lg={6} md={6} sm={12}>
              <div className="BestCofeeContent second">
                <div className="shape">
                  <img src={img2} alt="img" loading="lazy"></img>
                </div>
                <div className="Content">
                  <span>02</span>
                  <h3>Place to Get Lost</h3>
                  <p>
                    Curabitur semper erat a lacusey sedn consequat, sit ametey.
                  </p>
                </div>
              </div>
            </Col>
            <Col xl={4} lg={6} md={6} sm={12}>
              <div className="BestCofeeContent third">
                <div className="shape">
                  <img src={img2} alt="img" loading="lazy"></img>
                </div>
                <div className="Content">
                  <span>03</span>
                  <h3>Proper Roesting</h3>
                  <p>
                    Curabitur semper erat a lacusey sedn consequat, sit ametey.
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
export default BestCofeeComp;
