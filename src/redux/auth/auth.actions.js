import AuthActionTypes from "./auth.types";

export const setAuth = auth => {
  if (!window.localStorage.getItem("gmice_refresh_token")) {
    window.localStorage.setItem("gmice_refresh_token", auth.refresh_token);
  }

  return {
    type: AuthActionTypes.SET_AUTH,
    payload: {
      accessToken: auth.access_token,
      user: auth.user,
      isAuthenticated: true
    }
  };
};

export const removeAuth = () => {
  window.localStorage.removeItem("gmice_refresh_token");
  return {
    type: AuthActionTypes.REMOVE_AUTH
  };
};
