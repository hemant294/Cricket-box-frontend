const initialState = [];

const competitionsReducer = (state = initialState, action) => {
  switch (action.type) {
    case "FETCH_COMPETITIONS":
      return state, action.payload;

    default:
      return state;
  }
};

export default competitionsReducer;
