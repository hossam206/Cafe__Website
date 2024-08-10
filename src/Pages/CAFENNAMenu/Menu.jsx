import React, { useEffect, useState } from "react";
// import pages
import "./Menu.css";
import "../../../src/index.css";
// import components
import TitleSlide from "../../Components/TitleSlider/TitleSlide";
import { Col, Container, Row } from "react-bootstrap";
import MenuComp from "../../Components/MenuComp/MenuComp";
import Footer from "../../Components/Footer/Footer";
import WhiteNavbarComp from "../../Components/whiteNavbarComp/WhiteNavbarComp.jsx";
import Loaderr from "../../Components/Loader/Loaderr.jsx";
export default function Menu() {
  // add active class on menu filter
  function addActiveClassClick() {
    let AllLinks = document.querySelectorAll(".MenuFilter button");
    AllLinks.forEach((Link) => {
      Link.addEventListener("click", () => {
        AllLinks.forEach((activeLink) => {
          activeLink.classList.remove("avtiveFilterButton");
          Link.classList.add("avtiveFilterButton");
        });
      });
    });
  }
  // display product from api and load loader
  const [Allproducts, setproducts] = useState([]);
  const [loader, showloader] = useState(true);
  const [limit, setlimit] = useState(6);
  function getProsucts() {
    fetch("https://api.sampleapis.com/coffee/hot")
      .then((response) => {
        if (!response.ok) {
          showloader(true);
        } else {
          showloader(false);
        }
        return response.json();
      })
      .then((data) => setproducts(data));
  }
  function LoadMore() {
    setlimit(limit + 5);
  }

  useEffect(() => {
    getProsucts();
    addActiveClassClick();
  }, []);

  return (
    <>
      {loader && <Loaderr />}
      <WhiteNavbarComp />
      <TitleSlide PageTitle={"cafena menu ☕"} PageSmallTitle={"MENU"} />
      {/* start PopularMenu */}
      <div className="Menu">
        <Container>
          <div className="MenuHeading">
            <h5 className="SubTitle">MENU</h5>
            <h3 className="DarkTitle">OUR POPULAR MENU</h3>
          </div>
          <div className="MenuContent">
            <div className="MenuFilter">
              <button className="avtiveFilterButton">All</button>
              <button>Latte</button>
              <button>coffee</button>
              <button>Cappuccino</button>
              <button>Espresso</button>
              <button>Black tea</button>
              <button>Grean Tea</button>
            </div>
          </div>
        </Container>
        <Container fluid>
          <div className="MenuContentItems" style={{ padding: "10px 0px" }}>
            <Row>
              {Allproducts.slice(1, limit).map((item) => {
                return (
                  <Col xl={6} lg={6} md={6} sm={12} key={item.id}>
                    <MenuComp
                      Image={item.image}
                      Title={item.title}
                      Price={`12`}
                    />
                  </Col>
                );
              })}
            </Row>
          </div>
        </Container>
        <button
          onClick={() => {
            LoadMore();
          }}
        >
          Load More
        </button>
      </div>
      <Footer />
    </>
  );
}
