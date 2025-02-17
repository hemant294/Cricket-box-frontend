import React from "react";
import LiveMatchInfoCard from "./LiveMatchInfoCart";
import "./ShowMatchInfo.css";

const ShowMatchInfo = ({ matchInfo }) => {
  // console.log(matchInfo);
  return (
    <div>
      <div className="col-12 match-info-head mb-1">
        <div className="leage-head">
          <div>
            <p className="leage-name text-disabled">
              Ram Slam T20 Challenge, Knights vs Cape Cobras
            </p>
          </div>
        </div>
        <div className="d-flex justify-content-around logo-head">
          <div className="text-center">
            <div>
              <img
                src={matchInfo.attributes.teama["logo-url"]}
                className="logo"
                alt=""
              />
            </div>
            <h6 className="pt-3 logo-title text-disabled">
              {matchInfo.attributes.teama.name}
            </h6>
          </div>
          <div>
            <h5 className="vs text-disabled">VS</h5>
          </div>
          <div className="text-center">
            <div>
              <img
                src={matchInfo.attributes.teamb["logo-url"]}
                className="logo"
                alt=""
              />
            </div>
            <h6 className="pt-3 logo-title text-disabled">
              {matchInfo.attributes.teamb.name}
            </h6>
          </div>
        </div>
        <div className="border"></div>
        <div className="leage-details-head">
          <div className="row">
            <div className="col-8">
              <span className="OSFillParent text-disabled">
                {matchInfo.attributes.teama.name}
              </span>
              <span className="OSFillParent text-disabled teamb-details">
                {matchInfo.attributes.teamb.name}
              </span>
            </div>
            <div className="col-4">
              <span className="OSFillParent text-disabled">
                <div className="float-end">184/8 (20 ov)</div>
              </span>
              <span className="OSFillParent text-disabled ">
                <div className="teamb-details float-end">146/10 (17.2 ov)</div>
              </span>
            </div>
          </div>
        </div>
      </div>
      <LiveMatchInfoCard matchInfo={matchInfo}/>
    </div>
  );
};

export default ShowMatchInfo;
