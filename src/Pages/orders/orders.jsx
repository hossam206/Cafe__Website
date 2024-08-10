import React, { useEffect, useState } from "react";
// import pages
import "./oreder.css";
// import component
import WhiteNavbarComp from "../../Components/whiteNavbarComp/WhiteNavbarComp";
import Loaderr from "../../Components/Loader/Loaderr";
import TitleSlide from "../../Components/TitleSlider/TitleSlide";
import Footer from "../../Components/Footer/Footer";
import { Container } from "react-bootstrap";
import { useSelector } from "react-redux";
import img1 from "../../Images/AbouPage/BestCofee/best-coffe-1.jpeg";
export default function Orders() {
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
  useEffect(() => {
    setLoader();
  }, []);
  return (
    <>
      {loader && <Loaderr />}
      <WhiteNavbarComp />
      <TitleSlide PageTitle={"Your Orders"} PageSmallTitle={"Orders"} />
      <div className="Orders">
        <Container>
          <div className="ordersContent">
            <h3>Your orders</h3>
            {/* <div className="orderfromcart">
              <ul>
                {cartitem.map((product) => {
                  return (
                    <li>
                      <ul>
                        <li className="orderImg">
                          <img
                            src={product.image_url}
                            alt="orderimg"
                            loading="lazy"
                          ></img>
                        </li>
                              <li>{product.name}</li>
                              <li>{product.price }</li>
                        <li>{product.quantity}</li>
                      </ul>
                    </li>
                  );
                })}
              </ul>
            </div> */}
          </div>
        </Container>
      </div>

      <Footer />
    </>
  );
}
