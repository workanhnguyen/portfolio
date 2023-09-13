import React, { createContext, useContext, useReducer, useState } from "react";

const StateContext = createContext();

export const ContextProvider = ({ children }) => {
  const [categoryIndex, setCategoryIndex] = useState(1);

  return (
    <StateContext.Provider
      value={{
        categoryIndex,
        setCategoryIndex,
      }}
    >
      {children}
    </StateContext.Provider>
  );
};

export const useStateContext = () => useContext(StateContext);
