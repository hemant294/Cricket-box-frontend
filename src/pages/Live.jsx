import React, { useEffect, useState } from "react";
import Sidebar from "../components/Sidebar";
import "./Live.css";
import { useSelector, useDispatch } from "react-redux";
import { fetchMatches } from "../Redux/Action/matchAction";
import Matches from "../components/Live/Matches";
import RightSidebar from "../components/RightSidebar";

const Live = () => {
  const dispatch = useDispatch();
  const matches = useSelector((state) => state.matches);

  useEffect(() => {
    dispatch(fetchMatches());
  }, []);

  const match = matches.data

  return (
    <div className="container-fluid">
      <div className="row">
        <div className="col-3 p-2 sidebar">
          <Sidebar />
        </div>
        <div className="col-6 p-2 middle">
          <Matches matches={match} />
        </div>
        <div className="col-3 p-2 ">
          <RightSidebar />
        </div>
      </div>
    </div>
  );
};

export default Live;
