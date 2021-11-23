import React from "react";
const AlchemyContext=React.createContext({
    element:[],
    srcImage:"",
    addElement:() =>{}
});
export default AlchemyContext;