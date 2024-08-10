import React, { useEffect, useState } from "react";
// import pages
import "./About.css";
import "../../../src/index.css";
// import images
import AboutCafenaImg1 from "../../Images/AbouPage/about-img-2-1.png";
import AboutCafenashape1 from "../../Images/AbouPage/about-shape-2-1.png";
import AboutCafenashape2 from "../../Images/AbouPage/about-shape-2-1 (1).png";
// --------------imoprt images for best service div
import shape1 from "../../Images/AbouPage/whyUs/wcu-1.png";
import shape2 from "../../Images/AbouPage/whyUs/wcu-2.png";
import shape3 from "../../Images/AbouPage/whyUs/wcu-1 (1).png";
import BestCofeeImg from "../../Images/AbouPage/BestCofee/best-coffe-1.jpeg";
// ------------import Images Our Chef
import Chef1img from "../../Images/OurChefs/team-1.jpeg";
import Chef2img from "../../Images/OurChefs/team-2.jpeg";
import Chef3img from "../../Images/OurChefs/team-6.jpeg";
// import icons
import { FaCheck } from "react-icons/fa6";
import { PiArrowRightThin } from "react-icons/pi";

// import components
import Footer from "../../Components/Footer/Footer";
import TitleSlide from "../../Components/TitleSlider/TitleSlide";
import { Col, Container, Row } from "react-bootstrap";
import OurChefComp from "../../Components/OurChef/OurChefComp";
import WhiteNavbarComp from "../../Components/whiteNavbarComp/WhiteNavbarComp";
import Loaderr from "../../Components/Loader/Loaderr";

export default function About() {
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
      <div className="About">
        {loader && <Loaderr />}
        <WhiteNavbarComp />
        <TitleSlide PageTitle={"about cafena"} PageSmallTitle={"About"} />
        {/* start div about cafena */}
        <div className="AboutCafena">
          <div className="AboutCafenaShape">
            <span style={{ Left: "0" }}>
              <img
                src={AboutCafenashape1}
                alt="AboutCafenashape1"
                loading="lazy"
              ></img>
            </span>
            <span style={{ right: "0" }}>
              <img
                src={AboutCafenashape2}
                alt="AboutCafenashape1"
                loading="lazy"
              ></img>
            </span>
          </div>

          <div className="AboutCafenaContent">
            <Container>
              <Row>
                <Col xl={7} lg={7} md={12} sm={12}>
                  <div className="AboutCafenaImg">
                    <img
                      src={AboutCafenaImg1}
                      alt="AboutCafenaImg1"
                      className="Resizeimg"
                      loading="lazy"
                    ></img>
                  </div>
                </Col>
                <Col xl={5} lg={5} md={12} sm={12}>
                  <div className="Aboutinfo">
                    <h5 className="SubTitle">ABOUT CAFENA</h5>
                    <h3 className="DarkTitle">
                      ONE OF THE BEST COFFEE HOUSE IN YOUR HOME TOWN
                    </h3>
                    <p style={{ fontSize: "18px" }}>
                      Mauris rhoncus orci in imperdiet placerat. Vestibulum
                      euismod nisl suscipit ligula volutpat, a feugiat urna
                      maximus. Cras massa nibhtincidunt.
                    </p>
                    <ul className="AboutList">
                      <li>
                        <span className="AboutListIcon">
                          <FaCheck />
                        </span>
                        What is Lorem Ipsum Lorem Ipsum is simply.
                      </li>
                      <li>
                        <span className="AboutListIcon">
                          <FaCheck />
                        </span>
                        Dummy text of the printing text.
                      </li>
                      <li>
                        <span className="AboutListIcon">
                          <FaCheck />
                        </span>{" "}
                        Typesetting industry Lorem Ipsum has been
                      </li>
                      <li>
                        <span className="AboutListIcon">
                          <FaCheck />
                        </span>
                        Lorem ipsum dolor sit amet consectetur
                      </li>
                    </ul>
                  </div>
                </Col>
              </Row>
            </Container>
          </div>
        </div>

        {/* start We Are Provide div */}
        <div className="BestService">
          <Container>
            <div className="BestServiceHeading">
              <h5 className="SubTitle">WHY CHOOSE US</h5>
              <h3 className="DarkTitle">
                WE ARE PROVIDE BEST SERVICE <br />
                IN YOUR CITY
              </h3>
            </div>
            <div className="BestServiceContent">
              <Row>
                <Col xl={4} lg={6} md={6} sm={12}>
                  <div className="BestServiceItem">
                    <div className="icon">
                      <img src={shape1} alt="shape1" loading="lazy"></img>
                    </div>
                    <div className="ItemContent">
                      <h3 className="smallTitle">testy coffee recipe</h3>
                      <p style={{ color: "#878585" }}>
                        Accumsa nfringilla. Morbi vestibulum id tellus mmodo
                        mattis. Aliquam erat volutpat. Aenean accumsany.
                      </p>
                      <a href="#">
                        <span>
                          <PiArrowRightThin />
                        </span>
                      </a>
                    </div>
                  </div>
                </Col>
                <Col xl={4} lg={6} md={6} sm={12}>
                  <div className="BestServiceItem">
                    <div className="icon">
                      <img src={shape2} alt="shape1" loading="lazy"></img>
                    </div>
                    <div className="ItemContent">
                      <h3 className="smallTitle">Great Location</h3>
                      <p style={{ color: "#878585" }}>
                        Accumsa nfringilla. Morbi vestibulum id tellus mmodo
                        mattis. Aliquam erat volutpat. Aenean accumsany.
                      </p>
                      <a href="#">
                        <span>
                          <PiArrowRightThin />
                        </span>
                      </a>
                    </div>
                  </div>
                </Col>
                <Col xl={4} lg={6} md={6} sm={12}>
                  <div className="BestServiceItem">
                    <div className="icon">
                      <img src={shape3} alt="shape1" loading="lazy"></img>
                    </div>
                    <div className="ItemContent">
                      <h3 className="smallTitle">Professional Chef</h3>
                      <p style={{ color: "#878585" }}>
                        Accumsa nfringilla. Morbi vestibulum id tellus mmodo
                        mattis. Aliquam erat volutpat. Aenean accumsany.
                      </p>
                      <a href="#">
                        <span>
                          <PiArrowRightThin />
                        </span>
                      </a>
                    </div>
                  </div>
                </Col>
              </Row>
            </div>
          </Container>
        </div>

        {/* start The Best Cofee Div */}
        <div
          className="TRYBsetCofee"
          style={{ padding: "30px 0px", position: "relative" }}
        >
          <div className="TRYBestCofeeImg">
            <img
              src={BestCofeeImg}
              alt="BestCofeeImg"
              className="Resizeimg"
              loading="lazy"
            ></img>
          </div>
          <Container>
            <div className="TRYBestCofeeContent">
              <h3 className="DarkTitle">
                TRY THE BEST COFFEE IN THE HOUSING CITY
              </h3>
              <p>
                Mauris rhoncus orci in imperdiet placerat. Vestibulum euismod
                nisl suscipit ligula volutpat, a feugiat urna maximus. Cras
                massa nibhtincidunt.
                <br />
                <br /> Donec et nibh maximus, congue est eu, mattis nunc.
                Praesent ut quam quis quam venenatis fringilla. Morbi vestibulum
                id tellus mmodo mattis. Aliquam erat volutpat. Aenean
              </p>
            </div>
          </Container>
        </div>

        {/* start div meet our chefs */}
        <div className="AboutOurChefs">
          <Container>
            <div className="AboutOurChefsContent">
              <h5 className="SubTitle">our cheff</h5>
              <h3 className="DarkTitle">MEET OUR PROFESSIONAL</h3>
            </div>
            <div className="OurChefsItems">
              <Row>
                <Col xl={4} lg={4} sm={12}>
                  <OurChefComp
                    ChefImg={Chef1img}
                    ChefName={"RASALINA DE WILLAMSON"}
                    YearExp={"12"}
                  />
                </Col>
                <Col xl={4} lg={4} sm={12}>
                  <OurChefComp
                    ChefImg={Chef2img}
                    ChefName={"ALEXTINA JIMIEY"}
                    YearExp={"09"}
                  />
                </Col>
                <Col xl={4} lg={4} sm={12}>
                  <OurChefComp
                    ChefImg={Chef3img}
                    ChefName={"JIMMEY AENDERSON"}
                    YearExp={"03"}
                  />
                </Col>
              </Row>
            </div>
          </Container>
        </div>

        <Footer />
      </div>
    </>
  );
}
