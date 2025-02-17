import React from "react";
import { useDispatch } from "react-redux";
import { newCart } from "../../Fields/fields";
import { createCart } from "../../Redux/Action/cartAction";

const LiveMatchtypeCart = ({ matchInfo, matchodds }) => {
  const dispatch = useDispatch();

  const handleOdds = (
    oddsValue,
    oddsType,
    teamId,
    teamName,
    matchId,
    matchTitle,
    liveoddType
  ) => {
    let cart = newCart();
    const id = new Date();
    cart.id = id.valueOf();
    cart.oddValue = oddsValue;
    cart.oddType = oddsType;
    cart.teamId = teamId;
    cart.teamName = teamName;
    cart.matchId = matchId;
    cart.matchTitle = matchTitle;
    cart.liveOddsType = liveoddType;
    dispatch(createCart(cart));
  };

  return (
    <div>
      <div className="col-12 match-head rounded-3 mb-1 pt-4">
        <div className="leage-header d-flex g-0">
          <div className="col-8 leage-title">
            <p className="leage-name fs-6">Winner</p>
          </div>
          <div className="col-4 d-flex backlay">
            <div className="Back-points">
              <span className="disabled">Back</span>
            </div>
            <div className="Lay-points">
              <span className="disabled ms-3">Lay</span>
            </div>
          </div>
        </div>
        <div className="points-detail container">
          <div className="d-flex head-detials row g-0">
            <div className="match-detials d-flex col-sm-6 col-md-8">
              <div className="team-logo">
                <img
                  src={matchInfo.attributes.teama["logo-url"]}
                  alt={matchInfo.attributes.teama.name}
                />
              </div>
              <div className="d-flex team">
                <span className="team-name">
                  {matchInfo.attributes.teama.name}
                </span>
              </div>
            </div>
            <div className="d-flex points col-6 col-md-4">
              <div className="left-point">
                <span
                  className="point"
                  onClick={() =>
                    handleOdds(
                      matchodds.aMatchOdds[0]?.back,
                      "Back",
                      matchInfo.attributes.teama?.tid,
                      matchInfo.attributes.teama?.name,
                      matchInfo.id,
                      matchInfo.attributes.title,
                      matchodds.aMatchOdds[0]["live-odds-type"]
                    )
                  }
                >
                  {matchodds.aMatchOdds[0]?.back}
                </span>
              </div>
              <div className="right-point border-start">
                <span className="point"
                onClick={() =>
                  handleOdds(
                    matchodds.aMatchOdds[0]?.lay,
                    "Lay",
                    matchInfo.attributes.teama?.tid,
                    matchInfo.attributes.teama?.name,
                    matchInfo.id,
                    matchInfo.attributes.title,
                    matchodds.aMatchOdds[0]["live-odds-type"]
                  )
                }>{matchodds.aMatchOdds[0]?.lay}</span>
              </div>
            </div>
          </div>
        </div>
        <div className="points-detail pt-1 container">
          <div className="d-flex row g-0">
            <div className="match-detials d-flex col-sm-6 col-md-8">
              <div className="team-logo">
                <img
                  src={matchInfo.attributes.teamb["logo-url"]}
                  alt={matchInfo.attributes.teamb.name}
                />
              </div>
              <div className="d-flex team">
                <span className="team-name">
                  {matchInfo.attributes.teamb.name}
                </span>
              </div>
            </div>
            <div className="d-flex points col-6 col-md-4">
              <div className="left-point">
                <span className="point"
                onClick={() =>
                  handleOdds(
                    matchodds.bMatchOdds[0]?.back,
                    "Back",
                    matchInfo.attributes.teamb?.tid,
                    matchInfo.attributes.teamb?.name,
                    matchInfo.id,
                    matchInfo.attributes.title,
                    matchodds.bMatchOdds[0]["live-odds-type"]
                  )
                }>{matchodds.bMatchOdds[0]?.back}</span>
              </div>
              <div className="border-start right-point">
                <span className="point"
                onClick={() =>
                  handleOdds(
                    matchodds.bMatchOdds[0]?.lay,
                    "Lay",
                    matchInfo.attributes.teamb?.tid,
                    matchInfo.attributes.teamb?.name,
                    matchInfo.id,
                    matchInfo.attributes.title,
                    matchodds.bMatchOdds[0]["live-odds-type"]
                  )
                }>{matchodds.bMatchOdds[0]?.lay}</span>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="col-12 match-head rounded-3 mb-1 pt-4">
        <div className="leage-header d-flex g-0">
          <div className="col-8 leage-title">
            <p className="leage-name fs-6">Tie</p>
          </div>
          <div className="col-4 d-flex backlay">
            <div className="Back-points">
              <span className="disabled">Back</span>
            </div>
            <div className="Lay-points">
              <span className="disabled ms-3">Lay</span>
            </div>
          </div>
        </div>
        <div className="points-detail container">
          <div className="d-flex head-detials row g-0">
            <div className="match-detials d-flex col-sm-6 col-md-8">
              <div className="team-logo">
                <img
                  src={matchInfo.attributes.teama["logo-url"]}
                  alt={matchInfo.attributes.teama.name}
                />
              </div>
              <div className="d-flex team">
                <span className="team-name">
                  {matchInfo.attributes.teama.name}
                </span>
              </div>
            </div>
            <div className="d-flex points col-6 col-md-4">
              <div className="left-point">
                <span className="point"
                onClick={() =>
                  handleOdds(
                    matchodds.aTieOdds[0]?.back,
                    "Back",
                    matchInfo.attributes.teama?.tid,
                    matchInfo.attributes.teama?.name,
                    matchInfo.id,
                    matchInfo.attributes.title,
                    matchodds.aTieOdds[0]["live-odds-type"]
                  )
                }>{matchodds.aTieOdds[0]?.back}</span>
              </div>
              <div className="right-point border-start">
                <span className="point"
                onClick={() =>
                  handleOdds(
                    matchodds.aTieOdds[0]?.lay,
                    "Lay",
                    matchInfo.attributes.teama?.tid,
                    matchInfo.attributes.teama?.name,
                    matchInfo.id,
                    matchInfo.attributes.title,
                    matchodds.aTieOdds[0]["live-odds-type"]
                  )
                }>{matchodds.aTieOdds[0]?.lay}</span>
              </div>
            </div>
          </div>
        </div>
        <div className="points-detail pt-1 container">
          <div className="d-flex row g-0">
            <div className="match-detials d-flex col-sm-6 col-md-8">
              <div className="team-logo">
                <img
                  src={matchInfo.attributes.teamb["logo-url"]}
                  alt={matchInfo.attributes.teamb.name}
                />
              </div>
              <div className="d-flex team">
                <span className="team-name">
                  {matchInfo.attributes.teamb.name}
                </span>
              </div>
            </div>
            <div className="d-flex points col-6 col-md-4">
              <div className="left-point">
                <span className="point"
                onClick={() =>
                  handleOdds(
                    matchodds.bTieOdds[0]?.back,
                    "Back",
                    matchInfo.attributes.teamb?.tid,
                    matchInfo.attributes.teamb?.name,
                    matchInfo.id,
                    matchInfo.attributes.title,
                    matchodds.bTieOdds[0]["live-odds-type"]
                  )
                }>{matchodds.bTieOdds[0]?.back}</span>
              </div>
              <div className="border-start right-point">
                <span className="point"
                onClick={() =>
                  handleOdds(
                    matchodds.bTieOdds[0]?.lay,
                    "Lay",
                    matchInfo.attributes.teamb?.tid,
                    matchInfo.attributes.teamb?.name,
                    matchInfo.id,
                    matchInfo.attributes.title,
                    matchodds.bTieOdds[0]["live-odds-type"]
                  )
                }>{matchodds.bTieOdds[0]?.lay}</span>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="col-12 match-head rounded-3 mb-1 pt-4">
        <div className="leage-header d-flex g-0">
          <div className="col-8 leage-title">
            <p className="leage-name fs-6">Bookmaker</p>
          </div>
          <div className="col-4 d-flex backlay">
            <div className="Back-points">
              <span className="disabled">Back</span>
            </div>
            <div className="Lay-points">
              <span className="disabled ms-3">Lay</span>
            </div>
          </div>
        </div>
        <div className="points-detail container">
          <div className="d-flex head-detials row g-0">
            <div className="match-detials d-flex col-sm-6 col-md-8">
              <div className="team-logo">
                <img
                  src={matchInfo.attributes.teama["logo-url"]}
                  alt={matchInfo.attributes.teama.name}
                />
              </div>
              <div className="d-flex team">
                <span className="team-name">
                  {matchInfo.attributes.teama.name}
                </span>
              </div>
            </div>
            <div className="d-flex points col-6 col-md-4">
              <div className="left-point">
                <span className="point" 
                onClick={() =>
                  handleOdds(
                    matchodds.aBookMaker[0]?.back,
                    "Back",
                    matchInfo.attributes.teama?.tid,
                    matchInfo.attributes.teama?.name,
                    matchInfo.id,
                    matchInfo.attributes.title,
                    matchodds.aBookMaker[0]["live-odds-type"]
                  )
                }>{matchodds.aBookMaker[0]?.back}</span>
              </div>
              <div className="right-point border-start">
                <span className="point"
                onClick={() =>
                  handleOdds(
                    matchodds.aBookMaker[0]?.lay,
                    "Lay",
                    matchInfo.attributes.teama?.tid,
                    matchInfo.attributes.teama?.name,
                    matchInfo.id,
                    matchInfo.attributes.title,
                    matchodds.aBookMaker[0]["live-odds-type"]
                  )
                }>{matchodds.aBookMaker[0]?.lay}</span>
              </div>
            </div>
          </div>
        </div>
        <div className="points-detail pt-1 container">
          <div className="d-flex row g-0">
            <div className="match-detials d-flex col-sm-6 col-md-8">
              <div className="team-logo">
                <img
                  src={matchInfo.attributes.teamb["logo-url"]}
                  alt={matchInfo.attributes.teamb.name}
                />
              </div>
              <div className="d-flex team">
                <span className="team-name">
                  {matchInfo.attributes.teamb.name}
                </span>
              </div>
            </div>
            <div className="d-flex points col-6 col-md-4">
              <div className="left-point">
                <span className="point"
                 onClick={() =>
                  handleOdds(
                    matchodds.aBookMaker[0]?.back,
                    "Back",
                    matchInfo.attributes.teamb?.tid,
                    matchInfo.attributes.teamb?.name,
                    matchInfo.id,
                    matchInfo.attributes.title,
                    matchodds.aBookMaker[0]["live-odds-type"]
                  )
                }>{matchodds.bBookMaker[0]?.back}</span>
              </div>
              <div className="border-start right-point">
                <span className="point"
                 onClick={() =>
                  handleOdds(
                    matchodds.aBookMaker[0]?.lay,
                    "Lay",
                    matchInfo.attributes.teamb?.tid,
                    matchInfo.attributes.teamb?.name,
                    matchInfo.id,
                    matchInfo.attributes.title,
                    matchodds.aBookMaker[0]["live-odds-type"]
                  )
                }>{matchodds.bBookMaker[0]?.lay}</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default LiveMatchtypeCart;
