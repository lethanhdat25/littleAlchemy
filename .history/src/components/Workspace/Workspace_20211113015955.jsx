import { useState } from "react";
import { useDrop } from "react-dnd";
import constType from "../constants/";
import Element from '../Side/Element';
import classes from "./Workspace.module.css";
const Workspace=()=>{
    const [combineElement,setCombineElement]=useState([]);
    // console.log(elementRef.current.getClassName());
    const [,drop]=useDrop(()=>({
        accept:constType.ITEM_TYPE,
        drop:(item,monitor) => {
            const position=monitor.getClientOffset();
            renderElement(position,item.src);
            return{name:"workspace"}
        },
        collect:monitor=>{return{isOver:monitor.isOver()}}
    }))   
    const renderElement=(coordinate,src)=>{
        setCombineElement(state=>state.concat(<Element src={src} style={{position: "absolute",left: coordinate.x,top: coordinate.y,}}/>));
    }
    return <div ref={drop} id="workspace" className={classes.workspace}>{combineElement}</div>;
    
};
export default Workspace;