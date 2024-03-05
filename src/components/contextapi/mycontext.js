
import React, { createContext, useContext, useState } from "react";

const MyContext = createContext();

const MyProvider = ({ children }) => {
  const [value, setValue] = useState("Default Value");

  return (
    <MyContext.Provider value={{ value, setValue }}>{children}</MyContext.Provider>
  );
};

export { MyProvider, MyContext };
