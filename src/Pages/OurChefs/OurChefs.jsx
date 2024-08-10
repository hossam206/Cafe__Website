import React, { useEffect, useState } from "react";
// import pages
import "./OurChefs.css";
import "../../../src/index.css";

import TitleSlide from "../../Components/TitleSlider/TitleSlide";
import Footer from "../../Components/Footer/Footer";
import OurChefComp from "../../Components/OurChef/OurChefComp";
import WhiteNavbarComp from "../../Components/whiteNavbarComp/WhiteNavbarComp";
import Loaderr from "../../Components/Loader/Loaderr";
import { Col, Container, Row } from "react-bootstrap";
// import chef images
import chefimg1 from "../../Images/OurChefs/team-1.jpeg";
import chefimg2 from "../../Images/OurChefs/team-2.jpeg";
import chefimg3 from "../../Images/OurChefs/team-3.jpeg";
import chefimg4 from "../../Images/OurChefs/team-4.jpeg";
import chefimg5 from "../../Images/OurChefs/team-5.jpeg";
import chefimg6 from "../../Images/OurChefs/team-6.jpeg";


export default function OurChefs() {
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
      <TitleSlide PageTitle={"Meet our Chefs"} PageSmallTitle={"CHEFS"} />
      <div className="chefs">
        <Container>
          <Row>
            <Col xl={4} lg={4} md={6} sm={12}>
              <OurChefComp
                ChefImg={chefimg1}
                ChefName={"RASALINA DE WILLAMSON"}
                YearExp={"12"}
              />
            </Col>
            <Col xl={4} lg={4} md={6} sm={12}>
              <OurChefComp
                ChefImg={chefimg2}
                ChefName={"ALEXTINA JIMIEY"}
                YearExp={"09"}
              />
            </Col>
            <Col xl={4} lg={4} md={6} sm={12}>
              <OurChefComp
                ChefImg={chefimg3}
                ChefName={"JIMMEY AENDERSON"}
                YearExp={"05"}
              />
            </Col>
            <Col xl={4} lg={4} md={6} sm={12}>
              <OurChefComp
                ChefImg={chefimg4}
                ChefName={"RD. AENDERSON"}
                YearExp={"02"}
              />
            </Col>
            <Col xl={4} lg={4} md={6} sm={12}>
              <OurChefComp
                ChefImg={chefimg5}
                ChefName={"JIMMEY ROBERT"}
                YearExp={"03"}
              />
            </Col>
            <Col xl={4} lg={4} md={6} sm={12}>
              <OurChefComp
                ChefImg={chefimg6}
                ChefName={"HOXAL DINO"}
                YearExp={"08"}
              />
            </Col>
          </Row>
        </Container>
      </div>

      <Footer />
    </>
  );
}
