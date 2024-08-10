import React, { useEffect, useState } from "react";
// import images
import LogoImg from "../../Images/HomePage/Navbar/logo.png";
import DarkLogo from "../../Images/HomePage/Navbar/logo-black.png";

// import pages
import "../Navbar/Navbar.css";
import "../../../src/index.css";
// import icons
import { CiSearch } from "react-icons/ci";
import { MdMenu } from "react-icons/md";
import { FaCartShopping } from "react-icons/fa6";
import { IoMdClose } from "react-icons/io";
import { FaLocationDot } from "react-icons/fa6";
import { BsFillTelephoneForwardFill } from "react-icons/bs";
import { MdEmail } from "react-icons/md";
import { FaFacebookF } from "react-icons/fa";
import { FaInstagramSquare } from "react-icons/fa";
import { FaGooglePlusG } from "react-icons/fa6";
import { FaSnapchatGhost } from "react-icons/fa";
import NavbarMobile from "../NavbarMobile/NavbarMobile";
import { Link } from "react-router-dom";
import { Container } from "react-bootstrap";
import { useDispatch, useSelector } from "react-redux";
import { clearCart, deleteFromCart } from "../../rtk/slices/CartSlice";

function Navbar() {
  // show menu  //showShopMenu
  const [Pages, ShowPages] = useState("show");
  const [Shop, ShowShop] = useState("show");

  // show aside
  const [aside, showaside] = useState("");
  // show NAVBAR CART
  const [NavbarCart, ShowNavbarCart] = useState("");
  // add transition on navbar while scrolling
  const [TransitionNavbar, AddTransitionNavbar] = useState("");
  window.onscroll = function addTransitionNavbar() {
    if (window.scrollY > 400) {
      AddTransitionNavbar("NavbarTransition");
    } else {
      AddTransitionNavbar(" ");
    }
  };

  // function go to top
  document
    .querySelectorAll(".Navbar .Navbar-content li a")
    .forEach((footerLink) => {
      footerLink.addEventListener("click", () => {
        window.scrollTo({
          top: 0,
          behavior: "smooth",
        });
      });
    });
  const CartProducts = useSelector((state) => state.cart);
  const dispatch = useDispatch();

  // get total sum
  const TotalSum = CartProducts.reduce((acc, Product) => {
    acc += +Product.price * +Product.quantity;
    return acc;
  }, 0);
  return (
    <>
      <NavbarMobile />
      <div className={`Navbar ${TransitionNavbar} `}>
        <Container fluid>
          <div className="Navbar-content">
            <div className="LeftLinks">
              <ul>
                <li>
                  <Link
                    to="/"
                    onClick={() => {
                      hello();
                    }}
                  >
                    Home
                  </Link>
                </li>
                <li>
                  <Link to="/About">About</Link>
                </li>
                <li>
                  <Link to="/Menu">menu</Link>
                </li>
                <li>
                  <Link to="/Reservation">reservation</Link>
                </li>
              </ul>
            </div>
            <div className="NavbarLogo">
              <img src={LogoImg} alt="LogoImg" loading="lazy"></img>
            </div>
            <div className="rightLinks">
              <ul>
                <li
                  onMouseEnter={() => {
                    ShowPages("showMenu");
                  }}
                  onMouseLeave={() => {
                    ShowPages("show");
                  }}
                >
                  <a href="#">pages</a>

                  <ul className={`${Pages}`}>
                    <li>
                      <Link to="/RecentBlog">Recent Blog</Link>
                    </li>
                    <li>
                      <Link to="/OurChefs">Our Chefs</Link>
                    </li>
                  </ul>
                </li>
                <li
                  onMouseEnter={() => {
                    ShowShop("showMenu");
                  }}
                  onMouseLeave={() => {
                    ShowShop("show");
                  }}
                >
                  <a href="#">shop</a>
                  <ul className={`${Shop}`}>
                    <li>
                      <Link to="/CafenaProduct">Cafena Product</Link>
                    </li>

                    <li>
                      <Link to="/CaffenaCart">Cafena Cart</Link>
                    </li>
                    <li>
                      <Link to="/CaffenaCheckOut">Cafena CheckOut</Link>
                    </li>
                  </ul>
                </li>
                <li>
                  <Link to="/Contact">contact</Link>
                </li>
              </ul>
            </div>
            <div className="NavbarLinks">
              <div className="searchIconn">
                <CiSearch />
              </div>
              <div className="menuIconn">
                <MdMenu
                  onClick={() => {
                    showaside("openaside");
                  }}
                />
              </div>
              <div
                className="CartIconn"
                data-text-preloader={CartProducts.length}
              >
                <FaCartShopping
                  onClick={() => {
                    ShowNavbarCart("openaside");
                  }}
                />
              </div>
            </div>
          </div>
        </Container>
      </div>
      {aside && (
        <div className={`aside ${aside}`}>
          <div className="asideContent">
            <div className="asideLogo">
              <img src={DarkLogo} alt="asideLogo" loading="lazy"></img>
              <IoMdClose
                onClick={() => {
                  showaside("closeside");
                }}
              />
            </div>
            <div className="asideInfo">
              <h4>About us</h4>
              <p>
                Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do
                eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut
                enim ad minim veniam, quis nostrud nisi ut aliquip ex ea commodo
                consequat.
              </p>
              <button>Contact us</button>
            </div>
            <div className="asideContact">
              <h4>Contact us</h4>
              <div className="ContactInfo">
                <ul>
                  <li>
                    <span>
                      <FaLocationDot />
                    </span>
                    <p>Bowery St., New York, NY 10013, USA</p>
                  </li>

                  <li>
                    <span>
                      <BsFillTelephoneForwardFill />
                    </span>
                    <p>+1255-568-6523</p>
                  </li>

                  <li>
                    <span>
                      <MdEmail />
                    </span>
                    <p>information@gmail.com</p>
                  </li>
                </ul>
              </div>

              <div className="ConatctSocial">
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
                </ul>
              </div>
            </div>
          </div>
        </div>
      )}
      {NavbarCart && (
        <div className={`NavbarCart ${NavbarCart}`}>
          <div className="CloseCart">
            <IoMdClose
              onClick={() => {
                ShowNavbarCart("closeside");
              }}
            />
          </div>
          <div className="CartCount">
            <h4>CART ITEMS - ( {CartProducts.length} )</h4>
            <h4>Total : {TotalSum} $</h4>
          </div>
          <div className="NavbarCartContent">
            {CartProducts.map((product) => {
              return (
                <div className="NavbarCartProduct" key={product.id}>
                  <div className="NavbarCartProductiMG">
                    <img
                      src={product.image_url}
                      alt="Logo"
                      loading="lazy"
                    ></img>
                  </div>
                  <div className="NavbarCartProductDetail">
                    <p>{product.name}</p>
                    <span>${product.price}</span>
                  </div>
                  <IoMdClose
                    onClick={() => {
                      dispatch(deleteFromCart(product));
                    }}
                  />
                </div>
              );
            })}
            {CartProducts.length != 0 && (
              <button onClick={() => dispatch(clearCart())}>clear cart</button>
            )}
          </div>
        </div>
      )}
    </>
  );
}
export default Navbar;
