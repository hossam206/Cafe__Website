import React, { useEffect, useState } from "react";
// import component

import TitleSlide from "../../Components/TitleSlider/TitleSlide";
import Footer from "../../Components/Footer/Footer";
import { Col, Container, Row } from "react-bootstrap";
// import pages
import "./Contact.css";
// importimages
import img1 from "../../Images/AbouPage/about-shape-2-1.png";
import img2 from "../../Images/AbouPage/about-shape-2-1 (1).png";
import emailimg from "../../Images/GetInTouch/ci-1.png";
import Locationimg from "../../Images/GetInTouch/ci-2.png";
import Openingimg from "../../Images/GetInTouch/ci-3.png";
import WhiteNavbarComp from "../../Components/whiteNavbarComp/WhiteNavbarComp";
import Loaderr from "../../Components/Loader/Loaderr";
export default function Contact() {
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
      <TitleSlide PageTitle={"Get in touch"} PageSmallTitle={"CONTACT"} />
      <div className="Contact">
        {/* <div className="ContactBackgroundImg">
          <span style={{right:'0'}}>
            <img src={img1} alt="img1"></img>
          </span>
          <span style={{left:'0'}}>
            <img src={img2} alt="img2"></img>
          </span>
        </div> */}
        <Container>
          <div className="ContactContent">
            <div className="ContactContentHead">
              <Row>
                <Col xl={4} lg={4} md={6} sm={12}>
                  <div className="ContactEmail ContentHead">
                    <div className="ContactImg">
                      <img src={emailimg} alt="emailimg"></img>
                    </div>
                    <div className="Contactmaildetails">
                      <h4>Contact us</h4>
                      <a href="mailto:Mohamedsupol836@gmail.com">
                        Mohamedsupol836@gmail.com
                      </a>
                      <a href="tel:088-01869018907">088 - 01869018907</a>
                    </div>
                  </div>
                </Col>
                <Col xl={4} lg={4} md={6} sm={12}>
                  <div className="ContactLocation ContentHead">
                    <div className="ContactImg">
                      <img src={Locationimg} alt="emailimg"></img>
                    </div>
                    <div className="ContactLocationdetails">
                      <h4>Our Location</h4>
                      <p>Hera Road 2344-78 Australia 897- South Side Melbon</p>
                    </div>
                  </div>
                </Col>
                <Col xl={4} lg={4} md={6} sm={12}>
                  <div className="ContactOpeneing ContentHead">
                    <div className="ContactImg">
                      <img src={Openingimg} alt="emailimg"></img>
                    </div>
                    <div className="ContactOpeneingdetails">
                      <h4>Opening HOurs</h4>
                      <p>Mon - Sat (8:00 - 6:00) Sunday - Closed</p>
                    </div>
                  </div>
                </Col>
              </Row>
            </div>

            <div className="ContactBody">
              <Row>
                <Col lg={6} md={6} sm={12}>
                  <input type="text" placeholder="Your name :" />
                </Col>
                <Col lg={6} md={6} sm={12}>
                  <input type="email" placeholder="Your Mail :" />
                </Col>
                <Col lg={12} md={12} sm={12}>
                  <input type="text" placeholder="Enter Your Subject :" />
                </Col>
                <Col lg={12} md={12} sm={12}>
                  <textarea placeholder="Your Massage :"></textarea>
                </Col>
              </Row>
              <button> send message </button>
            </div>
          </div>
        </Container>
      </div>
      <Footer />
    </>
  );
}
