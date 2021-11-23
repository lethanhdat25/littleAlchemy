import { useState } from "react";
import { useDrag } from "react-dnd";
import classes from "./Element.module.css";
const Element=({x,y})=>{
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
    console.log(isDone);
    const style={position: "absolute",left: x,top: y,};
    return(
        <div className={classes.element} data-elementtype="libraryBox" data-elementid="4" style={style}>
            <img ref={drag} src="/images/elements/air.png" alt="air"/>
            <div className={classes.elementName}>air</div>
        </div>      
    )
}
export default Element;