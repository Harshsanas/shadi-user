import React, { createContext,useState } from "react";

export const AuthContext = createContext();

export function AuthContextProvider({ children }) {
  const [isAuth, setIsAuth] = useState(false);

  const handleLoginAuth = (user, pass) => {
    if (user === "foo" && pass === "bar") {
      setIsAuth(true);
      alert("login to shaadi.com successfully");
    } else {
      alert("Please enter correct details");
    }
  };

  const value = { isAuth, setIsAuth, handleLoginAuth};

  return <AuthContext.Provider value={value}>{children}</AuthContext.Provider>;
}
