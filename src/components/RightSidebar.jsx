import React from "react";
import "./RightSidebar.css";
import { useSelector } from "react-redux";
import CartItem from "./common/CartItem";
import { FaCartPlus } from "react-icons/fa";

const RightSidebar = () => {
  const cartList = useSelector((state) => state.carts);

  return (
    <div className="header-rightbar me-2"> 
      <div className="bg-white">
        <div className="bestSlip text-center">
          <h5 className="">BetSlip</h5>
        </div>
        <div className="scorll">
          {cartList.length === 0 ? (
            <div className="cart-empty">
              <div className="add-cart-icon">
                <FaCartPlus className="cart-icon" />
              </div>
              <h6 className="empty">Your betslip is empty </h6>
              <div className="odd-text">
                <p className="disabled px-3">
                  Click on odds to add a bet to the betslip
                </p>
              </div>
            </div>
          ) : (
            <div className="right-scroll">
              {cartList.map((cart, index) => (
                <CartItem key={index} cart={cart} />
              ))}
            </div>
          )}
        </div>
      </div>
    </div>
  );
};

export default RightSidebar;
