import axios from "axios";

export const fetchCompetitonsMatch = () => async (dispatch) => {
    axios.get('http://192.168.1.46:3000/api/v1/competitions')
    .then(res => {
        dispatch({
            type: "FETCH_COMPETITIONS",
            payload: res.data
        })
    })
    .catch(err => console.log(err))
}
