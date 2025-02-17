import React from "react";
import LiveMatchCard from "./LiveMatchCard";

const Matches = ({ matches }) => {
  return (
    <>
      {matches?.map((match) => (
        <LiveMatchCard key={match.id} match={match} />
      ))}
    </>
  );
};

export default Matches;
