import { useState } from "react";
import { useDrag } from "react-dnd";
import classes from "./Element.module.css";
const Element=({x=0,y=0})=>{
    const [isDone,setIsDone]=useState();
    const [{isDragging},drag]=useDrag(()=>({ 
        type: "drag",
        end:(item,monitor)=>{
            if(monitor.getDropResult()){
                setIsDone(true);
            }
        },
        collect:monitor=>({isDragging:monitor.isDragging()})
    }))
    const style=isDone&&{position: "absolute",left: x,top: y,};
    return(
        <div className={classes.element} data-elementtype="libraryBox" data-elementid="4" style={style}>
            <img ref={drag} src="/images/elements/air.png" alt="air"/>
            <div className={classes.elementName}>air</div>
        </div>      
    )
}
export default Element;