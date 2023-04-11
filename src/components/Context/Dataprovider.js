import React from "react";
import Context from "./Createcontext";

function Dataprovider({ children }) {
  const newdata = [
    {
      id: 1,
      name: "sajjad",
    },
    {
      id: 2,
      name: "sajjad",
    },
  ];

  return (
    <>
      <Context.Provider value={{ newdata }}>{children}</Context.Provider>
    </>
  );
}

export default Dataprovider;
