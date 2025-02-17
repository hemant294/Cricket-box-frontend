import React from "react";
import "./LiveMatchCard.css";
import { useDispatch } from "react-redux";
import { newCart } from "../../Fields/fields";
import { createCart } from "../../Redux/Action/cartAction";
import { useNavigate } from "react-router-dom";
import BetShow from "./BetShow";
import { liveMatchInfo } from "../../Redux/Action/matchAction";

const LiveMatchCard = ({ match }) => {
  const dispatch = useDispatch();
  const navigate = useNavigate();

  const handleOdds = (
    oddsValue,
    oddsType,
    teamId,
    teamName,
    matchId,
    matchTitle
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
    cart.liveOddsType = "MatchOdds";
    dispatch(createCart(cart));
  };

  const handleMatchInfo = (id) => {
    dispatch(liveMatchInfo(id));
    navigate(`/Match/${id}`);
  };

  return (
    <>
      <div className="col-12 match-head rounded-3 mb-1">
        <div
          className="leage-header d-flex g-0"
          onClick={() => handleMatchInfo(match.id)}
        >
          <div className="col-8 leage-title">
            <p className="leage-name disabled">{match.attributes.title}</p>
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
                  src={match.attributes.teama?.["logo-url"]}
                  alt={match.attributes.teama?.name}
                />
              </div>
              <div className="d-flex team">
                <span className="team-name">
                  {match.attributes.teama?.name}
                </span>
                <span className="team-score">
                  {match.attributes.teama?.scoresFull}
                </span>
              </div>
            </div>
            <div className="d-flex points col-6 col-md-4">
              <div className="left-point">
                <span
                  className="point"
                  onClick={() =>
                    handleOdds(
                      match.attributes.teamaodds[0]?.back,
                      "Back",
                      match.attributes.teama?.tId,
                      match.attributes.teama?.name,
                      match.id,
                      match.title
                    )
                  }
                >
                  {match.attributes.teamaodds[0]?.back}
                </span>
              </div>
              <div className="right-point border-start">
                <span
                  className="point"
                  onClick={() =>
                    handleOdds(
                      match.attributes.teamaodds[0]?.lay,
                      "Lay",
                      match.attributes.teama?.tId,
                      match.attributes.teama?.name,
                      match.id,
                      match.title
                    )
                  }
                >
                  {match.attributes.teamaodds[0]?.lay}
                </span>
              </div>
            </div>
          </div>
        </div>
        <div className="points-detail pt-1 container">
          <div className="d-flex row g-0">
            <div className="match-detials d-flex col-sm-6 col-md-8">
              <div className="team-logo">
                <img
                  src={match.attributes.teamb?.["logo-url"]}
                  alt={match.attributes.teamb?.name}
                />
              </div>
              <div className="d-flex team">
                <span className="team-name">
                  {match.attributes.teamb?.name}
                </span>
                <span className="team-score">
                  {match.attributes.teamb?.scoresFull}
                </span>
              </div>
            </div>
            <div className="d-flex points col-6 col-md-4">
              <div className="left-point">
                <span
                  className="point"
                  onClick={() =>
                    handleOdds(
                      match.attributes.teambodds[0]?.back,
                      "Back",
                      match.attributes.teamb?.tId,
                      match.attributes.teamb?.name,
                      match.id,
                      match.title
                    )
                  }
                >
                  {match.attributes.teambodds[0]?.back}
                </span>
              </div>
              <div className="border-start right-point">
                <span
                  className="point"
                  onClick={() =>
                    handleOdds(
                      match.attributes.teambodds[0]?.lay,
                      "Lay",
                      match.attributes.teamb?.tId,
                      match.attributes.teamb?.name,
                      match.id,
                      match.title
                    )
                  }
                >
                  {match.attributes.teambodds[0]?.lay}
                </span>
              </div>
            </div>
          </div>
          <BetShow matchId={match.id} />
        </div>
      </div>
    </>
  );
};

export default LiveMatchCard;
