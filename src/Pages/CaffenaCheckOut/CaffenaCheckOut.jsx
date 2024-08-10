import React, { useEffect, useState } from "react";
// import pages
import "./CaffenaCheckOut.css";

import TitleSlide from "../../Components/TitleSlider/TitleSlide";
import Footer from "../../Components/Footer/Footer";
import { Col, Container, Row } from "react-bootstrap";
import WhiteNavbarComp from "../../Components/whiteNavbarComp/WhiteNavbarComp";
import Loaderr from "../../Components/Loader/Loaderr";
import { useSelector } from "react-redux";
import { Link } from "react-router-dom";
export default function CaffenaCheckOut() {
  const [loader, showloader] = useState(true);

  function setLoader() {
    let LoaderTime = setTimeout(() => {
      showloader(false);
    }, 1000);
    return () => clearTimeout(LoaderTime);
  }
  const cartitem = useSelector((state) => state.cart);

  const totalsum = cartitem.reduce((acc, product) => {
    acc += +product.price * +product.quantity;
    return acc;
  }, 0);
  // collect data from fields

  useEffect(() => {
    setLoader();
  }, []);
  return (
    <>
      {loader && <Loaderr />}
      <WhiteNavbarComp />
      <TitleSlide PageTitle={"Cafena Checkout"} PageSmallTitle={"Checkout"} />
      <Container>
        <div className="CheckOut">
          <div className="checkoutContent">
            <Row>
              <Col xl={9} lg={9} sm={12}>
                <div className="PymentMethood">
                  <h4>Payment Mathod</h4>
                  <div className="Card">
                    <input
                      type="radio"
                      id="Number 1"
                      name="color"
                      defaultChecked
                    />
                    <label htmlFor="Number 1">Payment Card</label>
                  </div>
                  <div className="Paypal">
                    <input type="radio" id="Number 2" name="color" />
                    <label htmlFor="Number 2">Paypal</label>
                  </div>
                  <div className="cash">
                    <input type="radio" id="Number 3" name="color" />
                    <label htmlFor="Number 3">Cash on Deliver</label>
                  </div>
                </div>
                <div className="customerDetails">
                  <Row>
                    <Col xl={6} lg={6} sm={12}>
                      <div className="from-group  ">
                        <label htmlFor="fname">First Name*</label>
                        <input
                          type="text"
                          name="fname"
                          id="fname"
                          placeholder="First Name"
                        />
                      </div>
                    </Col>
                    <Col xl={6} lg={6} sm={12}>
                      <div className="from-group">
                        <label htmlFor="Lname">Last Name*</label>
                        <input
                          type="text"
                          name="Lname"
                          id="field5"
                          placeholder="Last Name"
                        />
                      </div>
                    </Col>
                    <Col xl={12} lg={12} sm={12}>
                      <div className="from-group">
                        <label htmlFor="Lname">Company Name*</label>
                        <input
                          type="text"
                          name="Cname"
                          id="Cname"
                          placeholder="Company Name"
                        />
                      </div>
                    </Col>
                    <Col xl={12} lg={12} sm={12}>
                      <div className="from-group">
                        <label htmlFor="Lname">Country*</label>
                        <input
                          type="text"
                          name="Country"
                          id="Country"
                          placeholder="Country"
                        />
                      </div>
                    </Col>
                    <Col xl={12} lg={12} sm={12}>
                      <div className="from-group">
                        <label htmlFor="Lname">Town / City *</label>
                        <input
                          type="text"
                          name="Town"
                          id="Town"
                          placeholder="Town"
                        />
                      </div>
                    </Col>
                    <Col xl={12} lg={12} sm={12}>
                      <div className="from-group">
                        <label htmlFor="Lname">
                          Postcode / ZIP (optional)*
                        </label>
                        <input
                          type="text"
                          name="Postcode"
                          id="Postcode"
                          placeholder="Postcode"
                        />
                      </div>
                    </Col>
                    <Col xl={6} lg={6} sm={12}>
                      <div className="from-group">
                        <label htmlFor="Lname">Phone*</label>
                        <input
                          type="text"
                          name="Phone"
                          id="Phone"
                          placeholder="Enter Your Name"
                        />
                      </div>
                    </Col>
                    <Col xl={6} lg={6} sm={12}>
                      <div className="from-group">
                        <label htmlFor="Lname">Last Name*</label>
                        <input
                          type="text"
                          name="Email"
                          id="Email"
                          placeholder="Enter Your mail"
                        />
                      </div>
                    </Col>
                    <Col xl={12} lg={12} sm={12}>
                      <div className="from-group">
                        <label htmlFor="Lname">Message*</label>
                        <textarea
                          type="text"
                          name="Email"
                          id="Email"
                          placeholder="leave Your massage for deliver man"
                        />
                      </div>
                    </Col>
                    <Col xl={7} lg={7} sm={12}>
                      <div className="submitOrder">
                        <div className="CartTotal  ">
                          <h4>Cart Total</h4>
                          <div className="subTotlal Total">
                            <span>Sub Total</span>
                            <p> $ {totalsum}</p>
                          </div>
                          <div className="Ads Total">
                            <span>ADS</span>
                            {cartitem.length != 0 ? (
                              <p>$ {18}</p>
                            ) : (
                              <p>$ {0}</p>
                            )}
                          </div>
                          <div className="subTotlal Total">
                            <span> Total</span>
                            {cartitem.length != 0 ? (
                              <p> ${(totalsum + 18).toFixed(2)} </p>
                            ) : (
                              <p>$ {0}</p>
                            )}
                          </div>
                          <Link to="/Orders">
                            <button  >
                              Send Your Order
                            </button>
                          </Link>
                        </div>
                      </div>
                    </Col>
                  </Row>
                </div>
              </Col>
            </Row>
          </div>
        </div>
      </Container>
      <Footer />
    </>
  );
}
