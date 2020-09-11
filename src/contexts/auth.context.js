import React from "react";

import { authService } from "../services/auth.service";

export const AuthContext = React.createContext();
const AuthProvider = ({ children }) => {
  return (
    <AuthContext.Provider value={authService}>{children}</AuthContext.Provider>
  );
};

export default AuthProvider;
