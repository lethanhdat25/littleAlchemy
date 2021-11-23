import React from "react";
const AlchemyContext=React.createContext({
    element:[],
    addElement:(element) =>{}
});
export default AlchemyContext;