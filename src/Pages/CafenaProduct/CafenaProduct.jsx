import React, { useEffect, useState } from "react";
// import Component

import TitleSlide from "../../Components/TitleSlider/TitleSlide";
import { Col, Container, Row } from "react-bootstrap";
import NewArticleComp from "../../Components/NewArticleComp/NewArticleComp";
// import pages
import "./CafenaProduct.css";
import Footer from "../../Components/Footer/Footer";

// ------------------import add panner img
import AddBannerImg from "../../Images/RecentBlog/ad-bg-1.jpg";
// import components
import PopularProductComp from "../../Components/PopularProductComp/PopularProductComp";
import WhiteNavbarComp from "../../Components/whiteNavbarComp/WhiteNavbarComp";
import Loaderr from "../../Components/Loader/Loaderr";

export default function CafenaProduct() {
  const [Allproducts, setproducts] = useState([]);
  const [loader, showloader] = useState(true);
  function getProducts() {
 
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

  useEffect(() => {
    getProducts();
  }, []);
  return (
    <>
      {loader && <Loaderr />}
      <WhiteNavbarComp />
      <TitleSlide PageTitle={"Cafena Product"} PageSmallTitle={"PRODUCT"} />

      <div className="CafennaProduct">
        <Container>
          <div className="CafennaProductContent">
            <div className="ShowingItems">
              <p>Showing 1–12 of 54 results</p>
              <select name="select" id="select">
                <option value="1">Sort By New</option>
                <option value="2">Sort By Price</option>
                <option value="3">Sort By Rating</option>
                <option value="4">Sort By Commons</option>
              </select>
            </div>
            <div className="CaffenaProductItems">
              <Row>
                <Col xl={8} lg={8}>
                  <Row>
                    {Allproducts.map((product) => {
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
                </Col>
                <Col xl={4} lg={4}>
                  <div className="rightsection">
                    <div className="searhHere blogBorder">
                      <h5
                        style={{
                          fontWeight: "600",
                          color: "#000",
                          fontFamily: "Bebas Neue",
                          letterSpacing: "1px",
                        }}
                      >
                        SEARCH HERE
                      </h5>
                      <input
                        type="text"
                        placeholder="Search Product"
                        className="RegularInput"
                        onKeyUp={(e) => searchItem(e.target.value)}
                      ></input>
                    </div>
                    <div className="categoriesNumber blogBorder">
                      <h5 style={{ fontWeight: "600", color: "#000" }}>
                        CATEGORIES
                      </h5>
                      <ul>
                        <li className="cat-item">
                          <a href="#0">Burger</a> <span>04</span>
                        </li>
                        <li className="cat-item">
                          <a href="#0">2x Pizza</a> <span>06</span>
                        </li>
                        <li className="cat-item">
                          <a href="#0">Cold Drinks</a> <span>08</span>
                        </li>
                        <li className="cat-item">
                          <a href="#0">Chicken</a> <span>10</span>
                        </li>
                        <li className="cat-item">
                          <a href="#0">Stuck Dish</a> <span>12</span>
                        </li>
                      </ul>
                    </div>
                    <div className="Categories blogBorder">
                      <h5 style={{ fontWeight: "600", color: "#000" }}>
                        CATEGORIES
                      </h5>
                      {Allproducts.slice(1, 5).map((categoryProduct) => {
                        return (
                          <NewArticleComp
                            key={categoryProduct.id}
                            Img={categoryProduct.image_url}
                            Title={categoryProduct.name}
                            Region={categoryProduct.region}
                          />
                        );
                      })}
                    </div>
                    <div className="PopularTag blogBorder">
                      <h5 style={{ fontWeight: "600", color: "#000" }}>
                        Popular Tag
                      </h5>
                      <ul>
                        <li>Design</li>
                        <li>Web design</li>
                        <li>brand</li>
                        <li>ui/ux</li>
                        <li>nnc</li>
                        <li>design</li>
                        <li>construction</li>
                        <li>theme</li>
                        <li>app</li>
                      </ul>
                    </div>
                    <div className="AddBanner blogBorder">
                      <img
                        src={AddBannerImg}
                        alt="AddBannerImg"
                        style={{ width: "100%" }}
                        loading="lazy"
                      ></img>
                    </div>
                  </div>
                </Col>
              </Row>
            </div>
          </div>
        </Container>
      </div>
      <Footer />
    </>
  );
}
