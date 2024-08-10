import React, { useEffect, useState } from "react";
// import component
import { Col, Container, Row } from "react-bootstrap";
// import pages
import "./CaffenaCart.css";
// import componenets
import Loaderr from "../../Components/Loader/Loaderr";
import { Link } from "react-router-dom";
import TitleSlide from "../../Components/TitleSlider/TitleSlide";
import Footer from "../../Components/Footer/Footer";
// import icons

import WhiteNavbarComp from "../../Components/whiteNavbarComp/WhiteNavbarComp";
import { useDispatch, useSelector } from "react-redux";
import { clearCart } from "../../rtk/slices/CartSlice";

// import images
import caffenaemptyimg from "../../Images/CaffenaCart/download.png";
import CartComponent from "../../Components/CartCompont/CartComponent";
export default function CaffenaCart(props) {
  const CartProducts = useSelector((state) => state.cart);
  const dispatch = useDispatch();

  // show loader
  const [loader, showloader] = useState(true);
  function setLoader() {
    let LoaderTime = setTimeout(() => {
      showloader(false);
    }, 1000);
    return () => clearTimeout(LoaderTime);
  }

  // calculate total sum
  const TotalSum = CartProducts.reduce((acc, Product) => {
    acc += +Product.price * +Product.quantity;
    return acc;
  }, 0);

  // get sumtotal
  const [sumtotal, setsumtotal] = useState(0);

  const updatesumtotal = (newState) => {
    setsumtotal(newState);
  };

  useEffect(() => {
    setLoader();
  }, []);

  return (
    <>
      {loader && <Loaderr />}
      <WhiteNavbarComp />
      <TitleSlide PageTitle={"Cafena Cart"} PageSmallTitle={"Cart"} />
      <div className="CaffenaCart">
        <Container>
          <div className="CAffenaCartContent">
            <Row>
              <Col xl={12} lg={12} sm={12}>
                {CartProducts.length !== 0 ? (
                  <div className="ProductTable">
                    <table className="table">
                      <thead>
                        <tr>
                          <th className="product-thumbnail">Product Image</th>
                          <th className="cart-product-name">Product Name</th>
                          <th className="product-price">Price</th>
                          <th className="product-quantity">Quantity</th>
                          <th className="product-subtotal">subTotal</th>
                        </tr>
                      </thead>
                      <tbody>
                        {CartProducts.map((product) => {
                          return (
                            <CartComponent
                              key={product.id}
                              id={product.id}
                              name={product.name}
                              img={product.image_url}
                              price={product.price}
                              initialQuantity={product.quantity}
                              product={product}
                              updatesumtotal={updatesumtotal}
                            />
                          );
                        })}
                      </tbody>
                    </table>
                  </div>
                ) : (
                  <div className="EMPTYCARTimG">
                    <img
                      src={caffenaemptyimg}
                      alt="EMPTYCARTimG"
                      loading="lazy"
                    ></img>
                    <h4>
                      your Cart Is Currently Empty !!
                      <br /> click Below To Start Shopping
                    </h4>
                    <Link to="/CafenaProduct">Start Shopping</Link>
                  </div>
                )}
              </Col>
            </Row>
          </div>

          {CartProducts.length !== 0 && (
            <div className="ApplyCopon">
              <input type="name" placeholder="Coupon Code" />
              <a href="#">Apply Coupon</a>
              <a
                href="#"
                onClick={() => {
                  dispatch(clearCart());
                }}
              >
                clear cart
              </a>
              <Link to="/CafenaProduct">Add product</Link>
            </div>
          )}
          <Row style={{ justifyContent: "flex-end" }}>
            <Col lg={5} md={5} sm={12}>
              <div className="CartTotal">
                <h4>Cart Total</h4>
                <div className="subTotlal Total">
                  <span>Sub Total</span>
                  <p>${sumtotal} </p>
                </div>
                <div className="Ads Total">
                  <span>ADS</span>
                  {CartProducts.length != 0 ? <p>$ {18}</p> : <p>$ {0}</p>}
                </div>
                <div className="subTotlal Total">
                  <span> Total</span>
                  {CartProducts.length != 0 ? (
                    <p> ${(sumtotal + 18).toFixed(2)} </p>
                  ) : (
                    <p>$ {0}</p>
                  )}
                </div>
                <Link to="/CaffenaCheckOut">
                  <button>Process To CheckOut</button>
                </Link>
              </div>
            </Col>
          </Row>
        </Container>
      </div>
      <Footer />
    </>
  );
}
