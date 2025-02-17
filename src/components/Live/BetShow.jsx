import React, { useState } from "react";
import { FaAngleDown, FaAngleUp } from "react-icons/fa";
import MatchBets from "./MatchBets";
import "./BetShow.css";
import { useSelector } from "react-redux";

const BetShow = ({ matchId }) => {
  const [isActive, setIsActive] = useState(false);
  const filterbets = useSelector((state) => state.bets);
  const bets = filterbets.filter((bet) => bet.matchId === matchId);
  const handleDropdown = () => {
    setIsActive(!isActive);
  };

  return (
    <div>
      {bets.length > 0 && (
        <div className="border-top">
          <div className="px-2 py-1 mb-0 align-middel">
            <div
              className="first-compo d-flex justify-content-between disabled pb-2 mb-0"
              onClick={handleDropdown}
            >
              <h6 className="mb-0 mt-1 ">Your Bets</h6>
              <div className="arrow-icon">
                {isActive ? <FaAngleUp /> : <FaAngleDown />}
              </div>
            </div>
          </div>
          {isActive && (
            <div>
              <div className="second-compo">
                <div className="container px-1 py-2">
                  <div className="bet-head row row-cols-1 row-cols-sm-2 row-cols-md-4 px-4">
                    <div className="col">Team Name</div>
                    <div className="col">Bet Type</div>
                    <div className="col">Odds</div>
                    <div className="col">Amount</div>
                  </div>
                </div>
              </div>
              <div className="third-compo">
                <MatchBets bets={bets} />
              </div>
            </div>
          )}
        </div>
      )}
    </div>
  );
};

export default BetShow;
