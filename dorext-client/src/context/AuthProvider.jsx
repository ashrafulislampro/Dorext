import React from "react";
import { createContext } from "react";
import useFirebase from "../hooks/useFirebase";

export const AllContext = createContext();

const AuthProvider = ({ children }) => {
  const allContext = useFirebase();
  return (
    <div>
      <AllContext.Provider value={allContext}> {children}</AllContext.Provider>
    </div>
  );
};

export default AuthProvider;
