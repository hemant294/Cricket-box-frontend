import React from "react";
import ShowMatchInfo from "./ShowMatchInfo";
import { liveMatchInfo } from "../../Redux/Action/matchAction";
import { useSelector } from "react-redux";
import InfoSidebar from "./InfoSidebar";
import InfoRightSidebar from "./InfoRightSidebar";

const MatchInformation = () => {
  const matchInfo = useSelector((state) => state.matches.filterById[0]);
  console.log("matchInfo", matchInfo);

  return (
    <div className="container-fluid">
      <div className="row">
        <div className="col-3 p-2 sidebar">
          <InfoSidebar matchId={matchInfo.id} />
        </div>
        <div className="col-6 p-2 middle">
          <ShowMatchInfo matchInfo={matchInfo} />
        </div>
        <div className="col-3 p-2 ">
          <InfoRightSidebar />
        </div>
      </div>
    </div>
  );
};

export default MatchInformation;
