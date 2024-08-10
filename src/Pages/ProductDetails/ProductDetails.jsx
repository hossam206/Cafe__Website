import React, { useEffect, useState } from "react";
// import pages
import "./ProductDetails.css";
// import images
import review1Img from "../../Images/Reviewrs/c-author-1.png";
import review2Img from "../../Images/Reviewrs/c-author-2.png";
// import componenet

import TitleSlide from "../../Components/TitleSlider/TitleSlide";
import Footer from "../../Components/Footer/Footer";
import ReviewComp from "../../Components/ReviewComp/ReviewComp";
import { Col, Container, Row } from "react-bootstrap";
// import icons
import { FaFacebookF } from "react-icons/fa";
import { FaInstagramSquare } from "react-icons/fa";
import { FaGooglePlusG } from "react-icons/fa6";
import { FaSnapchatGhost } from "react-icons/fa";
import { FaYoutube } from "react-icons/fa";
import { RiShareForwardFill } from "react-icons/ri";
import PopularProductComp from "../../Components/PopularProductComp/PopularProductComp";
import WhiteNavbarComp from "../../Components/whiteNavbarComp/WhiteNavbarComp";
import { useParams } from "react-router-dom";
import { useDispatch } from "react-redux";
import { addToCart } from "../../rtk/slices/CartSlice";
import Loaderr from "../../Components/Loader/Loaderr";

export default function ProductDetails() {
  const [ProductDetails, showProductDetails] = useState(true);
  const [AdditionalInfo, showAdditionalInfo] = useState(false);
  const [ReviewCount, showReviewCount] = useState(false);
  // Add active class and remove from another button

  function Addactive() {
    let AllButtons = document.querySelectorAll(".MoreDetailButton button");
    AllButtons.forEach((clcikedbutton) => {
      clcikedbutton.addEventListener("click", () => {
        AllButtons.forEach((anotherbuttons) => {
          anotherbuttons.classList.remove("choosedButton");
          clcikedbutton.classList.add("choosedButton");
        });
      });
    });
  }
  const dispatch = useDispatch();
  let { ProductId } = useParams();
  const [Allproducts, setproducts] = useState([]);
  const [loader, showloader] = useState(false);

  function getProducts() {
    fetch(`https://fake-coffee-api.vercel.app/api/${ProductId}`)
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

  //  handleproductQuantityChange
  function handleProdcutQuantity(id, newQuantity) {
    const updatedItems = Allproducts.map((product) => {
      const newitem = { ...product, quantity: newQuantity };
      let arr = [];
      arr.push(newitem);
      setproducts(arr);
    });
  }

  useEffect(() => {
    Addactive();
    getProducts();
  }, [ProductId]);
  return (
    <>
      {loader && <Loaderr />}
      <WhiteNavbarComp />
      <TitleSlide PageTitle={"Product Details"} PageSmallTitle={"PRODUCT"} />
      <Container>
        {Allproducts.map((product) => {
          return (
            <div className="ProductDetails" key={product.id}>
              <div className="ProductDetailsContent">
                <Row>
                  <Col xl={5} lg={5} md={12} sm={12}>
                    <div className="ProductDetailsContentImg">
                      <img
                        src={product.image_url}
                        alt="productdetailsimg"
                        loading="lazy"
                      ></img>
                    </div>
                  </Col>
                  <Col xl={7} lg={7} md={12} sm={12}>
                    <div className="ProductContentHeading">
                      <div className="Title">
                        <h3 className="DarkTitle">{product.name}</h3>
                      </div>
                      <div className="Rating">
                        <p>04 - Customar Review</p>
                      </div>
                    </div>
                    <div className="ProductDescription">
                      <p>{product.description}</p>
                      <div className="ProductPricee">
                        <p
                          style={{
                            margin: "0",
                            color: "#000",
                            fontWeight: "600",
                          }}
                        >
                          In Stock
                        </p>
                        <span style={{ fontWeight: "600", fontSize: "17px" }}>
                          ${product.price}
                        </span>
                      </div>
                      <div className="AddToCart">
                        <div className="QUANTITY">
                          <span>QUANTITY</span>
                          <input
                            type="number"
                            placeholder="1"
                            onChange={(e) => {
                              handleProdcutQuantity(
                                product.id,
                                parseInt(e.target.value)
                              );
                            }}
                            min="0"
                          />
                        </div>
                        <a
                          href="#"
                          className="Add"
                          onClick={() => {
                            dispatch(addToCart(product));
                          }}
                        >
                          ADD TO CART
                        </a>
                      </div>

                      <div className="shareProduct">
                        <RiShareForwardFill />
                        <span>&nbsp;Share</span>
                        <div className="productDetailsLinks">
                          <ul>
                            <li>
                              <FaFacebookF />
                            </li>
                            <li>
                              <FaInstagramSquare />
                            </li>
                            <li>
                              <FaGooglePlusG />
                            </li>
                            <li>
                              <FaSnapchatGhost />
                            </li>
                            <li>
                              <FaYoutube />
                            </li>
                          </ul>
                        </div>
                      </div>
                    </div>
                  </Col>
                </Row>
              </div>
            </div>
          );
        })}
        ;
        <Row>
          <Col xl={12} lg={12}>
            <div className="MoreDetails">
              <div className="MoreDetailButton">
                <button
                  className="choosedButton"
                  onClick={() => {
                    showAdditionalInfo(false);
                    showReviewCount(false);
                    showProductDetails(true);
                  }}
                >
                  Product Details
                </button>
                <button
                  onClick={(e) => {
                    showAdditionalInfo(true);
                    showReviewCount(false);
                    showProductDetails(false);
                    e.preventDefault();
                  }}
                >
                  ADDITIONAL INFORMATION
                </button>
                <button
                  onClick={() => {
                    showAdditionalInfo(false);
                    showReviewCount(true);
                    showProductDetails(false);
                  }}
                >
                  (04) REVIEWS
                </button>
              </div>
              {ProductDetails && (
                <div className="details">
                  <p>
                    Rrem ipsum dolor sit amet, consectetur adipisicing elit, sed
                    do eiusmod tempor incididunt ut labore et dolore magna
                    aliqua. Ut enim ad minim veniam, quis nostrud exercitation
                    ullamco laboris nisi ut aliquip ex ea commodo consequat.
                    Duis aute irure dolor in reprehenderit in voluptate velit
                    esse cillum dolore eu fugiat nulla pariatur. Excepteur sint
                    occaecat cupidatat non proident, sunt in culpa qui officia
                    deserunt mollit anim id est laborum. Sed ut perspiciatis
                    unde omnis iste natus error sit voluptatem accusantium
                    doloremque laudantium, totam rem aperiam, eaque ipsa quae ab
                    illo inventore veritatis et quasi architecto beatae vitae
                    dicta sunt explicabo. Nemo enim ipsam voluptatem quia
                    voluptas sit aspernatur aut odit aut fugit, sed quia
                    consequuntur magni dolores eos qui ratione voluptatem sequi
                    nesciunt. Neque porro quisquam est,
                  </p>
                </div>
              )}
              {AdditionalInfo && (
                <div className="AdditionalInformation">
                  <ul className="adi-info">
                    <li>Weight</li>
                    <li>1.4 oz</li>
                    <li>Dimensions</li>
                    <li>62 × 56 × 12 in</li>
                    <li>Size</li>
                    <li>XL, XXL, LG, SM, MD</li>
                    <li>Fabric</li>
                    <li>Cotton, Silk &amp; Synthetic</li>
                    <li>Warranty</li>
                    <li>3 Months</li>
                  </ul>
                </div>
              )}
              {ReviewCount && (
                <div className="Reviews">
                  <ReviewComp
                    reviewerImg={review1Img}
                    ReviwerName={"Aayat West- "}
                    ReviewDatw={"June 9, 2021"}
                  />
                  <ReviewComp
                    reviewerImg={review2Img}
                    ReviwerName={"Roger West -  "}
                    ReviewDatw={"June 5, 2021"}
                  />
                </div>
              )}
            </div>
            <div className="AddReview">
              <div className="ADDREVIEWWHEADING">
                <h5>ADD A REVIEW</h5>
                <span>welcome With You</span>
              </div>
              <div className="AddReviewBody">
                <Row>
                  <Col lg={12} md={12}>
                    <div className="YouReview">
                      <label htmlFor="message">YOUR REVIEW</label>
                      <textarea name="message" id="message"></textarea>
                    </div>
                  </Col>
                  <Col lg={6} md={6}>
                    <div className="YourName">
                      <label htmlFor="message">name</label>
                      <input type="text" name="name" id="name"></input>
                    </div>
                  </Col>
                  <Col lg={6} md={6}>
                    <div className="YourEmail">
                      <label htmlFor="message">Email</label>
                      <input type="e-mail" name="E-mail" id="E-mail"></input>
                    </div>
                  </Col>
                  <button> submit</button>
                </Row>
              </div>
            </div>
          </Col>
        </Row>
        <div className="CaffenaProductItems">
          <h5>Reletad Product</h5>
          <Row>
            {Allproducts.map((product) => {
              return (
                <Col xl={3} lg={3} md={6} sm={12} key={product.id}>
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
      </Container>
      <Footer />
    </>
  );
}
