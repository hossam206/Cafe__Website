import React, { useEffect, useState } from "react";
import { deleteFromCart } from "../../rtk/slices/CartSlice";
import { useDispatch, useSelector } from "react-redux";
import { IoCloseSharp } from "react-icons/io5";
import { AiOutlinePlus, AiOutlineMinus } from "react-icons/ai";
import "../../Pages/CaffenaCart/CaffenaCart.css";

export default function CartComponent({
  name,
  img,
  price,
  initialQuantity,
  product,
  updatesumtotal,
}) {
  const CartProducts = useSelector((state) => state.cart);
  const dispatch = useDispatch();

  const [Quantity, setQuantity] = useState(initialQuantity);
  const increaseQuantity = () => {
    setQuantity(Quantity + 1);
  };
  const decreaseQuantity = (e) => {
    if (Quantity <= 0) {
      e.preventdefault();
    }
    setQuantity(Quantity - 1);
  };

  // get sumtotal
  const Totalsum = CartProducts.reduce((acc, Product) => {
    acc += +Product.price * +Product.quantity;
    return acc;
  }, 0);
  const [total, settotal] = useState(0);
  const calculateTotalSum = () => {
    const spanElements = document.querySelectorAll(".totalamount");
    let totalSum = 0;

    spanElements.forEach((span) => {
      const num = Number(span.innerHTML.slice(1));
      totalSum += num;
    });

    settotal(totalSum);
    updatesumtotal(totalSum);
  };
 
  // Call the function and print the result to the console
  useEffect(() => {
    calculateTotalSum();
  }, [Quantity]);

  return (
    <>
      <tr>
        <td>
          <div className="product_Image">
            <img src={img} alt="prodiMG" loading="lazy"></img>
          </div>
        </td>
        <td>
          <a href="#" className="product_name">
            {name}
          </a>
        </td>
        <td className="product-price">
          <span className="amount">{price}</span>
        </td>
        <td className="product-quantity">
          <div className="count">
            <span
              className="decrese"
              onClick={(e) => {
                decreaseQuantity(e);
              }}
            >
              <AiOutlineMinus />
            </span>
            <small className="quantity">{Quantity}</small>
            <span className="increase" onClick={() => increaseQuantity()}>
              <AiOutlinePlus />
            </span>
          </div>
        </td>
        <td className="product-subtotal">
          <span className="totalamount">${Quantity * price}</span>
        </td>
        <td className="product_cancel">
          <span className="amount">
            <IoCloseSharp
              onClick={() => {
                dispatch(deleteFromCart(product));
              }}
            />
          </span>
        </td>
      </tr>
    </>
  );
}
