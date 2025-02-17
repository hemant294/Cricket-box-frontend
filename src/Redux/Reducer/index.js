import { combineReducers } from "redux";
import currentUserRoleReducer from "./currentUserRoleReducer.js";
import currentUserReducer from "./currentUserReducer.js";
import sideBarMenuReducer from "./sideBarMenuReducer.js";
import matchReducer from "./matchReducer.js";
import cartReducer from "./cartReducer.js";
import betReducer from "./betReducer.js";
import modelMessagesReducer from "./modelMessagesReducer.js";
import competitionsReducer from "./competitionsReducer.js";
import matchOddInfoReducer from "./matchOddInfoReducer.js";

const rootReducer = combineReducers({
  currentUserRole: currentUserRoleReducer,
  currentUser: currentUserReducer,
  sidebarMenu: sideBarMenuReducer,
  matches: matchReducer,
  carts: cartReducer,
  bets: betReducer,
  modelMessage: modelMessagesReducer,
  competitions: competitionsReducer,
  matchOddInfo: matchOddInfoReducer
});

export default rootReducer;
