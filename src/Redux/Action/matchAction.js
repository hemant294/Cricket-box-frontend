import axios from "axios";

export const fetchMatches = () => async (dispatch) => {
  try {
    await axios.get("http://192.168.1.46:3000/api/v1/matches").then((res) => {
      dispatch({
        type: "FETCH_MATECHES",
        payload: res.data,
      });
    });
  } catch (err) {
    console.log(err);
  }
};

export const liveMatchInfo = (id) => ({
  type: "LIVE_MATCH_INFO",
  payload: id
})