import { SUCCESS_MESSAGE, BET_SUCCESS_MESSAGE } from "../../utils/Messages"
import { showMessage } from "../../utils/Utils"

export const getAllBets = () => ({
   type: "GET_ALL_BETS"
})

export const createBet = (bet) => async (dispatch) =>  {
   showMessage(dispatch, SUCCESS_MESSAGE, BET_SUCCESS_MESSAGE)
   dispatch({
      type: "CREATE_BET",
      payload: bet
   })
}
