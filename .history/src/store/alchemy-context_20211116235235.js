import React from "react";
const AlchemyContext = React.createContext({
  element: [],
  srcImage: "",
  dropSpace: false,
  addElement: () => {},
});
export default AlchemyContext;
