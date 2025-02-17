import React from "react";
import "./MatchBets.css";

const MatchBets = ({ bets }) => {
  return (
    <div className="">
      {bets.map((betItem) => (
        <div key={betItem.id} className="container p-3 bet-data">
          <div className="row row-cols-1 row-cols-sm-2 row-cols-md-4 px-2">
            <div className="col-4">{betItem.teamName}</div>
            <div className="col-3">{betItem.oddType}</div>
            <div className="col-3">{betItem.oddValue}</div>
            <div className="col-2">{betItem.amount}</div>
          </div>
        </div>
      ))}
    </div>
  );
};

export default MatchBets;
