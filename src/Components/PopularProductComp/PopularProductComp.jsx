import React from "react";
// import pages
import "./PopularProductComp.css";
// import icons
import { BsCart4 } from "react-icons/bs";
import { CiHeart } from "react-icons/ci";
import { FaEye } from "react-icons/fa";
import { addToCart } from "../../rtk/slices/CartSlice";
import { useDispatch, useSelector } from "react-redux";
import { Link } from "react-router-dom";
function PopularProductComp(props) {
  const dispatch = useDispatch();
  const CartProducts = useSelector((state) => state.cart);
  return (
    <div>
      <div className="PopularProductComp">
        <div className="PopularProductCompContent">
          <div className="PopularProductCompIcons">
            <BsCart4 onClick={() => dispatch(addToCart(props.itemProduct))} />

            <CiHeart />
            <Link to={`/ProductDetails/${props.itemid}`}>
              <FaEye />
            </Link>
          </div>
          <div className="PopularProductCompImg">
            <img src={props.img} alt="img" loading="lazy"></img>
          </div>

          <div className="PopularProductCompDetails">
            <p>Region :{props.Itemregion}</p>
            <Link to={`/ProductDetails/${props.itemid}`}>
              {props.ItemTitle}
            </Link>
            <h4>
              PRICE - <span>${props.ItemPrice} / </span>
              <small> {props.ItemWeight} g</small>
            </h4>
          </div>
        </div>
      </div>
    </div>
  );
}
export default PopularProductComp;
