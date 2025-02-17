const initialState = [];

const betReducer = (state = initialState, action) => {
  switch (action.type) {
    case "GET_ALL_BET":
      break;

    case "CREATE_BET":
      return [...state, action.payload];

    default:
      return state;
      break;
  }
};

export default betReducer;
