import React from "react";
import { createContext } from "react";
export const NameContext = createContext();

export default function NameContextProvider({ children }) {
  return (
    <NameContext.Provider value="AKM REDUCER">{children}</NameContext.Provider>
  );
}
