const initialState = {
  message: null,
  messageType: null,
  isShow: false,
};

const modelMessagesReducer = (state = initialState, action) => {
  switch (action.type) {
    case "SHOW_MESSAGE":
      return { ...state, ...action.payload, isShow: true };

    case "HIDE_MESSAGE":
      return initialState;

    default:
      return state;
  }
};

export default modelMessagesReducer;
