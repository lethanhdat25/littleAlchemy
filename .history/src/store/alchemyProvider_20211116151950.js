import { useState } from "react";
import AlchemyContext from "./alchemy-context";

const AlchemyProvider=(props)=>{
    const [alchemyState,setAlchemy]= useState([]);
    const initialValue={
        element:alchemyState,
        addElement:(item,position)=>setAlchemy((state)=>state.concat({...item,position})),
        removeElement:(firstItem,secondItem)=>setAlchemy((state)=>{
            const firstFilter= state.findIndex(element=>element.name===firstItem.name&&elment.position.x===firstItem.position.x&&elment.position.y===firstItem.position.y);
            console.log(firstFilter);
            const secondFilter= firstFilter.filter(element=>element.name!==secondItem);
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