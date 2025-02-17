const initialState = {
  fullname: null,
  username: null,
  email: null,
  isLogin: false
};

const currentUserReducer = (state = initialState, action) => {
  switch (action.type) {
    case "SET_CURRENT_USER":
      return { ...state, ...action.payload };

    case "REMOVE_CURRENT_USER":
      localStorage.removeItem("user_info");
      return initialState;

    default:
      const user = localStorage.getItem("user_info");
      const token = localStorage.getItem("auth_token");
      if (user && token) {
        let userInfo = JSON.parse(user);
        return { ...state, ...userInfo, isLogin: true };
      }

      return state;
      break;
  }
};

export default currentUserReducer;
