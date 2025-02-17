import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { Link } from "react-router-dom";
import { FaXmark } from "react-icons/fa6";
import { potentialPayout } from "../../utils/Utils";
import { deleteCart, updateCart } from "../../Redux/Action/cartAction";
import { createBet } from "../../Redux/Action/betAction";
import { newBet } from "../../Fields/fields";
import Amount from "./Amount";
import "./CartItem.css";

const CartItem = ({ cart }) => {
  const currentUser = useSelector((state) => state.currentUser);
  const dispatch = useDispatch();

  const handleRemove = () => {
    dispatch(deleteCart(cart.id));
  };

  const handleOnChange = (amount) => {
    cart.amount = amount;
    dispatch(updateCart(cart));
  };

  const handlePlaceBet = () => {
    if (cart.amount > 0) {
      let bet = newBet();
      bet.id = cart.id;
      bet.matchId = cart.matchId;
      bet.oddValue = cart.oddValue;
      bet.oddType = cart.oddType;
      bet.teamName = cart.teamName;
      bet.amount = cart.amount;
      bet.matchTitle = cart.matchTitle;
      bet.potentialPayout = potentialPayout(cart.oddValue, cart.amount);
      bet.status = "pending";
      dispatch(createBet(bet));
      dispatch(deleteCart(cart.id));
    }
  };

  const amountData = [100, 200, 500, 700, 1000, 2000, 3000, 4000, 5000, 10000];

  return (
    <div className="p-2">
      <div className="cart-head rounded-3">
        <div className="first-compo">
          <div className="cart-first d-flex justify-content-between text-center">
            <p className="disabled mb-0">{cart.teamName}</p>
            <div className="cancel-cart">
              <FaXmark className="pointer label-size" onClick={handleRemove} />
            </div>
          </div>
          <div className="cart-second d-flex justify-content-between">
            <div className="">
              <span className="disabled">{cart.oddType}</span>
              <div className="cart-teamName">
                <span className="disabled">{cart.teamName}</span>
              </div>
            </div>
            <div className="cart-oddValue">
              <span className="disabled">{cart.oddValue}</span>
            </div>
          </div>
          <div className="cart-third">
            <span className="disabled">
              Total Bet Win Amount:{" "}
              <Amount amount={cart.amount * cart.oddValue} />
            </span>
          </div>
        </div>
        <h1 className="border-forth"></h1>
        <div className="p-2">
          <div className="px-0 mb-4">
            <div className="container">
              <div className="row row-cols-5">
                {amountData.map((item) => {
                  return (
                    <div key={item} className="amount-fatched">
                      <span
                        className="col"
                        onClick={() => handleOnChange(item)}
                      >
                        {item}
                      </span>
                    </div>
                  );
                })}
              </div>
            </div>
          </div>
          <div className="second-compo">
            <div className="cart-fifth mt-2 px-2">
              <input
                className="w-100"
                type="number"
                defaultValue={cart.amount}
                onChange={(e) => handleOnChange(e.target.value)}
              />
            </div>
          </div>
          {currentUser.isLogin ? (
            <div className="px-2 mt-4">
              <button
                className="w-100 text-white rounded-1 btn bg-danger"
                onClick={handlePlaceBet}
              >
                Place Bet
              </button>
            </div>
          ) : (
            <div className="px-2 mt-4">
              <Link to="/login" className="text-decoration-none text-dark">
                <button className="w-100 text-white rounded-1 btn bg-danger">
                  Login
                </button>
              </Link>
            </div>
          )}
        </div>
      </div>
    </div>
  );
};

export default CartItem;
