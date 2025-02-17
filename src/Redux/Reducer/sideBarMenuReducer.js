const initialState = {
  activeMenuId: null,
};

const sideBarMenuReducer = (state = initialState, action) => {
  switch (action.type) {
    case "SET_ACTIVE":
      return { activeMenuId: action.payload };

    default:
      return state;
  }
};

export default sideBarMenuReducer;
