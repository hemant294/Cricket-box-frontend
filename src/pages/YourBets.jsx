import React from "react";
import YourBetSidebar from "../components/YourBet/YourBetSidebar";
import YourBetLive from "../components/YourBet/YourBetLive";

const YourBets = () => {
  return (
    <div className="container-fluid">
      <div className="row">
        <div className="col-3 p-2 sidebar">
          <YourBetSidebar />
        </div>
        <div className="col-6 p-2 middle">
          <YourBetLive />
        </div>
      </div>
    </div>
  );
};

export default YourBets;
