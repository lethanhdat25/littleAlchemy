import { useState } from "react";
import AlchemyContext from "./alchemy-context";

const AlchemyProvider=(props)=>{
    const [alchemyState,setAlchemy]= useState([]);
    const initialValue={
        element:alchemyState,
        addElement:(item,position)=>setAlchemy((state)=>state.concat({...item,position})),
        removeElement:(firstItem,secondItem)=>setAlchemy((state)=>{
            const fisrtFilter= state.filter(element=>element.name!==firstItem);
            const secondFilter= fisrtFilter.filter(element=>element.name!==secondItem);
            console.log(secondFilter);
            return secondFilter;
           }
        ),
    }
    return(
        <AlchemyContext.Provider value={initialValue}>
            {props.children}
        </AlchemyContext.Provider>
    )
}
export default AlchemyProvider;