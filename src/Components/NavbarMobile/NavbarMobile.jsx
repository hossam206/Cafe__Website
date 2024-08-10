import React, { useEffect, useState } from "react";
// import images
import LogoImg from "../../Images/HomePage/Navbar/logo.png";
import DarkLogo from "../../Images/HomePage/Navbar/logo-black.png";
// import pages
import "./NavbarMobile.css";
import "../../../src/index.css";

// Import icons
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
import { FaPlus } from "react-icons/fa";
import { FaMinus } from "react-icons/fa";
import { Link } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { clearCart, deleteFromCart } from "../../rtk/slices/CartSlice";

function NavbarMobile() {
  const [aside, showaside] = useState("");
  const [NavbarCart, ShowNavbarCart] = useState("");
  const [menu, showmenu] = useState(true);
  const [INFO, showINFO] = useState(false);
  const [Pages, ShowPages] = useState("");
  const [Shop, ShowShop] = useState("show");
  const [Minus, showMinus] = useState(false);
  const [Plus, showPluse] = useState(true);
  // add active class on span
  function addActiveClass() {
    let AllLinks = document.querySelectorAll(".asideContent .asidechoose span");
    AllLinks.forEach((Link) => {
      Link.addEventListener("click", () => {
        AllLinks.forEach((activeLink) => {
          activeLink.classList.remove("activeNavbarMobile");
          Link.classList.add("activeNavbarMobile");
        });
      });
    });
  }

  const CartProducts = useSelector((state) => state.cart);
  const dispatch = useDispatch();
  useEffect(() => {
    addActiveClass();
  });
    const TotalSum = CartProducts.reduce((acc, Product) => {
      acc += +Product.price * +Product.quantity;
      return acc;
    }, 0);
  return (
    <div>
      <div className="NavbarMobile">
        <div className="NavbaMobileContent">
          <div className="NavbarMobileLogo">
            <img src={LogoImg} alt="NavbarMobileLogo" loading="lazy"></img>
          </div>
          <div className="NavbarMobileIcons">
            <div className="search">
              <CiSearch />
            </div>
            <div className="menu">
              <MdMenu
                onClick={() => {
                  showaside("openaside");
                }}
              />
            </div>
            <div
              className="navbarmobilecart"
              style={{ position: "relative" }}
              data-text-preloader={CartProducts.length}
            >
              <FaCartShopping
                className="CartShopping"
                onClick={() => {
                  ShowNavbarCart("openaside");
                }}
              />
            </div>
          </div>
        </div>
        {/* start menu div */}
        {aside && (
          <div className={`aside ${aside}`}>
            <div className="asideContent">
              <div className="asidechoose">
                <span
                  className="activeNavbarMobile"
                  onClick={() => {
                    showINFO(false);
                    showmenu(true);
                  }}
                >
                  MENU
                </span>
                <span
                  onClick={() => {
                    showmenu(false);
                    showINFO(true);
                  }}
                >
                  INFO
                </span>
              </div>

              <div className="asideLogo">
                <img src={DarkLogo} alt="asideLogo" loading="lazy"></img>
                <IoMdClose
                  onClick={() => {
                    showaside("closeside");
                  }}
                />
              </div>
              {/* start info div */}
              {INFO && (
                <div className="InfoContent">
                  <div className="asideInfo">
                    <h4>⛱ About us</h4>
                    <p>
                      Lorem ipsum dolor sit amet, consectetur adipisicing elit,
                      sed do eiusmod tempor incididunt ut labore et dolore magna
                      aliqua. Ut enim ad minim veniam, quis nostrud nisi ut
                      aliquip ex ea commodo consequat.
                    </p>
                    {/* <button class="btn btn-primary">Primary button</button> */}
                    <button>Contact us</button>
                  </div>

                  <div className="asideContact">
                    <h4>👋 Contact us</h4>
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
              )}

              {/* start menu div */}
              {menu && (
                <div className="NavbarMobileMenu">
                  <ul>
                    <li>
                      <Link to="/">Home</Link>
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

                    <li>
                      <a href="#">
                        pages
                        {Plus && (
                          <FaPlus
                            onClick={() => {
                              ShowPages("openNavbarMenuul");
                              showPluse(false);
                              showMinus(true);
                            }}
                          />
                        )}
                        {Minus && (
                          <FaMinus
                            onClick={() => {
                              ShowPages("");
                              showMinus(false);
                              showPluse(true);
                            }}
                          />
                        )}
                      </a>

                      <ul className={`${Pages}`}>
                        <li>
                          <Link to="/RecentBlog">Recent Blog</Link>
                        </li>
                        <li>
                          <Link to="/OurChefs">Our Chefs</Link>
                        </li>
                      </ul>
                    </li>

                    <li>
                      <a href="#">
                        shop
                        {Plus && (
                          <FaPlus
                            onClick={() => {
                              ShowShop("openNavbarMenuul");
                              showPluse(false);
                              showMinus(true);
                            }}
                          />
                        )}
                        {Minus && (
                          <FaMinus
                            onClick={() => {
                              ShowShop("");
                              showMinus(false);
                              showPluse(true);
                            }}
                          />
                        )}
                      </a>
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
              )}
            </div>
          </div>
        )}

        {/* start cart div */}
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
                <button onClick={() => dispatch(clearCart())}>
                  clear cart
                </button>
              )}
            </div>
          </div>
        )}
      </div>
    </div>
  );
}
export default NavbarMobile;
