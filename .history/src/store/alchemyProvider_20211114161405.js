import { useState } from "react";
import AlchemyContext from "./alchemy-context";

const AlchemyProvider=(props)=>{
    const [alchemyState,setAlchemy]= useState([]);
    const initialValue={
        element:alchemyState,
        addElement:setAlchemy
    }
    return(
        <AlchemyContext.Provider value={initialValue}>
            {props.children}
        </AlchemyContext.Provider>
    )
}
export default AlchemyProvider;