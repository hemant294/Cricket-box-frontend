const initialState = {
 matchOdd : {
  amatchodds: {},
  atieodds: {},
  abookmaker: {},
  bmatchodds: {},
  btieodds: {},
  bbookmaker: {},
}
}
    

const matchOddInfoReducer = (state = initialState, action) => {
  switch (action.type) {
    case "FILTER_MATCH_ODDD":
      const matchAOdd = action.payload.matchAOdd;
      const matchBOdd = action.payload.matchBOdd;

      const matchodds = matchAOdd.filter((oddType) => {
        return oddType["live-odds-type"] === "matchodds";
      });
      const tieodds = matchAOdd.filter((oddType) => {
        return oddType["live-odds-type"] === "tiedmatch";
      });
      const bookmaker = matchAOdd.filter((oddType) => {
        return oddType["live-odds-type"] === "bookmaker";
      });
      const bmatchodds = matchBOdd.filter((oddType) => {
        return oddType["live-odds-type"] === "matchodds";
      });
      const btieodds = matchBOdd.filter((oddType) => {
        return oddType["live-odds-type"] === "tiedmatch";
      });
      const bbookmaker = matchBOdd.filter((oddType) => {
        return oddType["live-odds-type"] === "bookmaker";
      });
      return {
        ...state.matchOdd,
        amatchodds: matchodds,
        atieodds: tieodds,
        abookmaker: bookmaker,
        bmatchodds: bmatchodds,
        btieodds: btieodds,
        bbookmaker: bbookmaker,
      };

    default:
      return state;
  }
};

export default matchOddInfoReducer;
