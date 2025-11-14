import { createContext, useContext, useState } from "react";

const AuthContext = createContext(undefined);

export function AuthProvider({ children }) {
  const [signedUp, setSignedUp] = useState(() => !!localStorage.getItem("signupData"));

  const signup = (data) => {
    localStorage.setItem("signupData", JSON.stringify(data));
    setSignedUp(true);
  };

  const logout = () => {
    localStorage.removeItem("signupData");
    setSignedUp(false);
  };

  return (
    <AuthContext.Provider value={{ signedUp, signup, logout }}>
      {children}
    </AuthContext.Provider>
  );
}

export const useAuth = () => {
  const ctx = useContext(AuthContext);
  if (ctx === undefined) {
    throw new Error("useAuth must be used within AuthProvider");
  }
  return ctx;
};
