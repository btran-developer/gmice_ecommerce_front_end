import AuthActionTypes from "./auth.types";

const initialValue = {
  accessToken: "",
  user: {},
  isAuthenticated: false
};

const authReducer = (state = initialValue, action) => {
  switch (action.type) {
    case AuthActionTypes.SET_AUTH:
      return { ...action.payload };
    case AuthActionTypes.REMOVE_AUTH:
      return initialValue;
    default:
      return state;
  }
};

export default authReducer;
