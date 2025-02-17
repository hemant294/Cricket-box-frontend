var CryptoJS = require("crypto-js");

const initialState = {
  isSuperAdmin: false,
  isAdmin: false,
  isNormalUser: false
};

const SetRole = (state, action) => {
  if (action.payload === "SuperAdmin") {
    return { ...state, isSuperAdmin: true };
  } else if (action.payload === "Admin") {
    return { ...state, isAdmin: true };
  } else {
    return { ...state, isNormalUser: true };
  }
};

const currentUserRoleReducer = (state = initialState, action) => {
  switch (action.type) {
    case "SET_ROLE":
      return SetRole(state, action);

    case "REMOVE_ROLE":
      localStorage.removeItem("user_role");
      return initialState;

    default:
      const role = localStorage.getItem("user_role");
      if (role) {
        let bytes = CryptoJS.AES.decrypt(role, "ewewewewaewasdsds");
        let userRole = bytes.toString(CryptoJS.enc.Utf8);
        return SetRole(state, { payload: userRole });
      } else {
        return state;
      }
  }
};

export default currentUserRoleReducer;
