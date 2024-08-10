import React, { useEffect, useState } from "react";
// import Components
import Navbar from "../../Components/Navbar/Navbar";
import Slider from "../../Components/Slider/Slider";
import BestCofeeComp from "../../Components/BestCofeeComp/BestCofeeComp";
import NewArticleComp from "../../Components/NewArticleComp/NewArticleComp";
import OurHistory from "../../Components/OurHistory/OurHistory";
import MenuComp from "../../Components/MenuComp/MenuComp";
import { Col, Container, Row } from "react-bootstrap";
// import images
import Machineimg from "../../Images/HomePage/CofeeMachine/product-big.png";
import BookTableImg from "../../Images/HomePage/BookTable/table.jpg";
//----------------- import images for New Article div
import NewArticleImg1 from "../../Images/HomePage/NewArticle/blog-1.jpeg";
import NewArticleImg2 from "../../Images/HomePage/NewArticle/blog-2.jpeg";
import NewArticleImg3 from "../../Images/HomePage/NewArticle/blog-3.jpeg";
//import pages
import "./Home.css";
import "../../../src/index.css";

 
// import icons
import { FaPlus } from "react-icons/fa";
import { FaStar } from "react-icons/fa";
import { FaStarHalfAlt } from "react-icons/fa";
import { IoMdClose } from "react-icons/io";
import PopularProductComp from "../../Components/PopularProductComp/PopularProductComp";
import { IoIosPerson } from "react-icons/io";
import Footer from "../../Components/Footer/Footer";
import Loaderr from "../../Components/Loader/Loaderr";

function Home() {
  // show MachineComp Details
  const [MachineComp, showMachineComp] = useState(false);
  const [Allproducts, setproducts] = useState([]);
  const [loader, showloader] = useState(true);
  function getProsucts() {
    fetch("https://fake-coffee-api.vercel.app/api")
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

  const [Allmenuproducts, setmenuproducts] = useState([]);
  function getMenuProsucts() {
    fetch("https://api.sampleapis.com/coffee/hot")
      .then((response) => {
        if (!response.ok) {
          showloader(true);
        } else {
          showloader(false);
        }
        return response.json();
      })
      .then((data) => setmenuproducts(data));
  }

  useEffect(() => {
    getMenuProsucts();
    getProsucts();
  }, []);
  return (
    <>
      {/* {loader && <Loaderr />} */}
      <Navbar NavbarColor={"#000"} />
      <Slider />
      <BestCofeeComp />
      <OurHistory />
      {/* start Popular Menu div */}
      <div className="PopularMenu">
        <Container fluid>
          <div className="PopularMenuContent">
            <span className="SubTitle">MENU</span>
            <h2 className="mainTitle">CAFENA POPULAR MENU</h2>
            <Row>
              {Allmenuproducts.slice(1, 7).map((item) => {
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
            <button style={{ marginTop: "20px" }}>show more</button>
          </div>
        </Container>
      </div>
      {/* start Cofee Machine */}
      <div className="CofeeMachine">
        <Container>
          <div className="CofeeMachineContent">
            <Row>
              <Col xl={6} lg={6} md={12} sm={12}>
                <h2 className="mainTitle">COFFEE MACHINE,BUY FOR HOME</h2>
                <p
                  style={{
                    fontSize: "18px",
                    marginTop: "20px",
                    marginBottom: "40px",
                  }}
                >
                  Donec et nibh maximus, congue est eu, mattis nunc. Praesent ut
                  quam quis quam venenatis fringilla. Morbi vestibulum id tellus
                  mmodo mattis. Aliquam erat volutpat.
                  <br /> mattis nunc. Praesent ut quam quis quam venenatis
                  fringilla. Morbi vestibulum id tellus mmodo ma
                </p>
                <button>Discover Now</button>
              </Col>
              <Col xl={6} lg={6} md={12} sm={12}>
                <div className="MachineImg">
                  <img src={Machineimg} alt="Machineimg" loading="lazy"></img>
                  <FaPlus
                    onClick={() => {
                      showMachineComp(true);
                    }}
                  />
                </div>
              </Col>
            </Row>
          </div>
        </Container>
      </div>
      {MachineComp && <div className="overlay"></div>}
      {MachineComp && (
        <div className="MachineImgDetails">
          <div className="closeIcon">
            <IoMdClose
              style={{ cursor: "pointer" }}
              onClick={() => {
                showMachineComp(false);
              }}
            />
          </div>
          <Row>
            <Col lg={4} md={4} sm={12}>
              <div className="MachineImgDetailsImg">
                <img src={Machineimg} alt="Machineimg" loading="lazy"></img>
              </div>
            </Col>
            <Col lg={8} md={8} sm={12}>
              <div className="MachineImgDetailsContent">
                <h5>VICARAGUA COFFEE BEANS</h5>
                <div className="Reviews">
                  <FaStar />
                  <FaStar />
                  <FaStar />
                  <FaStar />
                  <FaStarHalfAlt />
                </div>
                <h4 style={{ padding: "10px 0px" }}>$99.00</h4>
                <span style={{ fontSize: "18px" }}>
                  Available : <p>In stock</p>
                </span>
                <p>
                  Anlor sit amet, consectetur adipiscing elit. Fusce condimentum
                  est lacus, non pretium risus lacinia vel. Fusce eget turpis
                  orci.
                </p>
                <div className="Quantity">
                  <span>QTY</span>
                  <input type="number" placeholder="1"></input>
                  <button>Add To Cart</button>
                </div>
                <ul>
                  <li>
                    CATEGORY:&nbsp;&nbsp;
                    <span>Machines</span>
                  </li>
                  <li>
                    SKU:&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
                    <span>2584-MK63</span>
                  </li>
                  <li>
                    BRAND:&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
                    <span>BRENDA</span>
                  </li>
                </ul>
              </div>
            </Col>
          </Row>
        </div>
      )}
      {/* start Cafeena Popular Product */}
      <div className="PopularProduct">
        <Container>
          <div className="PopularProductContent">
            <span className="SubTitle">POPULAR PRODUCT</span>
            <div className="ViewAllProduct">
              <h2 className="mainTitle">CAFENA POPULAR PRODUCT</h2>
              <button>VIEW ALL PRODUCT</button>
            </div>
            <div className="PopularProductComponents">
              <Row>
                {Allproducts.slice(2, 5).map((product) => {
                  return (
                    <Col xl={4} lg={4} md={6} sm={12} key={product.id}>
                      <PopularProductComp
                        img={product.image_url}
                        Itemregion={product.region}
                        ItemTitle={product.name}
                        ItemPrice={product.price}
                        ItemWeight={product.weight}
                        itemProduct={product}
                        itemid={product.id}
                      />
                    </Col>
                  );
                })}
              </Row>
            </div>
          </div>
        </Container>
      </div>
      {/* start Book A table div */}
      <div className="BookTable">
        <Container fluid>
          <div className="BookTableContent">
            <Row>
              <Col lg={6} md={12} sm={12} xs={12}>
                <div className="BookTableImg">
                  <img
                    src={BookTableImg}
                    alt="BookTableImg"
                    loading="lazy"
                  ></img>
                </div>
              </Col>
              <Col lg={6} md={12} sm={12} xs={12}>
                <div className="BookingTable">
                  <span className="SubTitle">RESERVATION</span>
                  <h2 className="mainTitle">BOOKING A TABLE</h2>
                  <Container>
                    <div className="formsInputs" style={{ marginTop: "20px" }}>
                      <div className="BookPersonNum">
                        <input
                          type="number"
                          placeholder="5 Person"
                          className="DarkInput"
                        ></input>
                        <IoIosPerson />
                      </div>
                      <div className="BookDate">
                        <input
                          type="date"
                          placeholder="12-2-2024 "
                          className="DarkInput"
                        ></input>
                      </div>
                      <div className="BookTime">
                        <input
                          type="time"
                          placeholder="11:00 AM"
                          className="DarkInput"
                        ></input>
                      </div>
                    </div>
                  </Container>
                </div>
              </Col>
            </Row>
          </div>
        </Container>
      </div>
      {/* start Our New Article */}
      <div className="NewArticle">
        <Container>
          <div className="NewArticleContent">
            <span className="SubTitle">FROM OUR BLOG</span>
            <h2 className="mainTitle" style={{ marginBottom: "30px" }}>
              OUR NEWS & ARTICLES
            </h2>
            <Row>
              <Col xl={4} lg={4} md={6} sm={12} xs={12}>
                <NewArticleComp
                  Img={NewArticleImg1}
                  Title={"Ideal Cocktails From Our Barmen For Pefect Mood"}
                />
              </Col>
              <Col xl={4} lg={4} md={6} sm={12} xs={12}>
                <NewArticleComp
                  Img={NewArticleImg2}
                  Title={"Build A Cool Mornig With Cafena Coffee"}
                />
              </Col>
              <Col xl={4} lg={4} md={6} sm={12} xs={12}>
                <NewArticleComp
                  Img={NewArticleImg3}
                  Title={"Questions Business Must Be Able To Answers"}
                />
              </Col>
            </Row>
          </div>
        </Container>
      </div>
      <Footer />
    </>
  );
}
export default Home;
