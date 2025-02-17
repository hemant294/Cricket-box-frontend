import { isLogin } from "../../utils/Utils";

const initialState = [];

const cartReducer = (state = initialState, action) => {
  switch (action.type) {
    case "GET_ALL_CARTS":
      break;

    case "GET_CART":
      return [...state, ...action.payload];

    case "CREATE_CART":
      if (!isLogin()) {
        localStorage.setItem(
          "carts",
          JSON.stringify([...state, action.payload])
        );
      }
      return [...state, action.payload];

    case "UPDATE_CART":
      const cartList = state.map((cart) => {
        if (cart.id == action.payload.id) {
          return action.payload;
        }
        return cart;
      });
      return cartList;

    case "DELETE_CART":
      const newState = state.filter(
        (cartItem) => cartItem.id !== action.payload
      );
      if (!isLogin()) {
        localStorage.setItem("carts", JSON.stringify(newState));
      }
      return newState;

    default:
      if (!isLogin()) {
        let cartList = localStorage.getItem("carts");
        if (cartList) {
          state = JSON.parse(cartList);
        }
      }
      return state;
      break;
  }
};

export default cartReducer;
