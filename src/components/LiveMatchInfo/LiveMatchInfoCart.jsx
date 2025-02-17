import React, { useEffect } from "react";
import { FaTrophy } from "react-icons/fa";
import { matchOddfilter } from "../../Redux/Action/matchOddInfoAction";
import { useDispatch, useSelector } from "react-redux";
import LiveMatchtypeCart from "./LiveMatchtypeCart";
import "./LiveMatchInfoCart.css";

const LiveMatchInfoCard = ({ matchInfo }) => {
  const dispatch = useDispatch();
  const matchOddInfo = useSelector((state) => state.matchOddInfo);

  useEffect(() => {
    if (matchInfo) {
      const matchAodds = matchInfo.attributes.teamaodds;
      const matchBodds = matchInfo.attributes.teambodds;
      dispatch(matchOddfilter(matchAodds, matchBodds));
    }
  }, [dispatch, matchInfo]);

  if (!matchOddInfo.amatchodds || !matchOddInfo.bmatchodds) {
    return <div>Loading...</div>;
  }

  const matchodds = {
    aMatchOdds: matchOddInfo.amatchodds,
    bMatchOdds: matchOddInfo.bmatchodds,
    aTieOdds: matchOddInfo.atieodds,
    bTieOdds: matchOddInfo.btieodds,
    aBookMaker: matchOddInfo.abookmaker,
    bBookMaker: matchOddInfo.bbookmaker,
  };

  return (
    <div>
      <div className="match-info-head mt-2">
        <div className="btn-info-head">
          <div className="btn-info align-middle">
            <button
              type="button"
              className="btn rounded-pill align-middle me-2"
            >
              <FaTrophy className="text-white icon-val" />
              <span className="btn-name text-white">Live</span>
            </button>
            <button type="button" className="btn rounded-pill align-middle">
              <FaTrophy className="text-white icon-val" />
              <span className="btn-name text-white">Session</span>
            </button>
          </div>
        </div>
        <div className="">
          <LiveMatchtypeCart matchInfo={matchInfo} matchodds={matchodds} />
        </div>
      </div>
    </div>
  );
};

export default LiveMatchInfoCard;
