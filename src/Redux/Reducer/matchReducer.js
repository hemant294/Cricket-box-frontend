const initialState = [];

const fields = {
  id: null,
  mId: null,
  title: null,
  status: null,
  statusStr: null,
  statusNote: null,
  oddsAvailable: null,
  startTime: null,
  endTime: null,
  result: null,
  winMargine: null,
  winningTeamId: null,
  latestInningNumber: null,
  compitionId: null,
  teamA: {
    id: null,
    tId: null,
    name: null,
    shortName: null,
    logoUrl: null,
    scoresFull: null,
    scores: null,
    overs: null,
    matchId: null,
    mId: null,
  },
  teamB: {
    id: null,
    tId: null,
    name: null,
    shortName: null,
    logoUrl: null,
    scoresFull: null,
    scores: null,
    overs: null,
    matchId: null,
    mId: null,
  },
  teamAOdds: {
    id: null,
    liveOddsType: null,
    back: null,
    lay: null,
    backVolume: null,
    layVolume: null,
    matchId: null,
    mId: null,
  },
  teamBOdds: {
    id: null,
    liveOddsType: null,
    back: null,
    lay: null,
    backVolume: null,
    layVolume: null,
    matchId: null,
    mId: null,
  },
};

const matchReducer = (state = initialState, action) => {
  switch (action.type) {
    case "FETCH_MATECHES":
      return action.payload;

    case "LIVE_MATCH_INFO":
      const filterById = state.data.filter((item) => item.id === action.payload)
      return {...state, filterById} 

    default:
      return state;
  }
};

export default matchReducer;
