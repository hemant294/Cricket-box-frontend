import React from "react";
import "./YourBetLive.css";

const YourBetLive = () => {
  return (
    <div>
      <div className="yourbet-main">
        <div className="yourbetLive-head d-flex row">
          <span className="col-9 disabled">
            Knights vs Cape Cobras, Match Odds
          </span>
          <span className="col-3 text-center win-span text-success">Win</span>
        </div>
        <div className="yourbetLive-body">
          <div className="d-flex row">
            <span className="col-9 yourbetLive-title fw-bold">Knights</span>
            <span className="col-3 text-center disabled">Win - 1.77</span>
          </div>
          <span className="OSFillParent betAmount">Bet Amount:Rs. 100.00</span>
          <span className="OSFillParent betPotential-Amount">
            Bet Winning Amount:Rs. 177.00
          </span>
          <div className="">
            <span className="text-success fw-normal">
              Congratulations! You won your bet!
            </span>
          </div>
        </div>
      </div>
    </div>
  );
};

export default YourBetLive;
