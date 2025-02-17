import React from "react";
import bettignLogo from "../../assets/Logo/CricketBox.betting.svg";
import { useSelector } from "react-redux";
import "./InfoSidebar.css";

const InfoSidebar = ({ matchId }) => {
  const filterbets = useSelector((state) => state.bets);
  const bets = filterbets.filter((bet) => bet.matchId === matchId);

  return (
    <div className="header-leftbar ms-1 row">
      <div className="bg-white col-12 px-0">
        <div className="YourBet text-center">
          <h5 className="">Your Bets</h5>
        </div>
        <div className="scorll">
          {bets.length === 0 ? (
            <div className="no-bet">
              <div className="add-bet-icon">
                <img src={bettignLogo} className="cart-icon" />
              </div>
              <div className="odd-text">
                <p className="disabled px-5">No bets Placed for this match</p>
              </div>
            </div>
          ) : (
            <div>
              <div className="left-scroll p-2">
                <div className="betshow-head">
                  {bets.map((bets) => {
                    return (
                      <div
                        className="bet-show-data cart-background"
                        key={bets.id}
                      >
                        <div className="row">
                          <span className="col-8">{bets.teamName}</span>
                          <span className="col-4 win">Win</span>
                        </div>
                        <span className="OSFillParent disabled">
                          Amount: Rs. {bets.amount}
                        </span>
                        <span className="OSFillParent disabled">
                          Winning Amount: Rs. {bets.potentialPayout}
                        </span>
                        <span className="OSFillParent disabled">
                          Status: <span className="text-warning">panding</span>
                        </span>
                      </div>
                    );
                  })}
                </div>
              </div>
            </div>
          )}
        </div>
      </div>
    </div>
  );
};

export default InfoSidebar;
