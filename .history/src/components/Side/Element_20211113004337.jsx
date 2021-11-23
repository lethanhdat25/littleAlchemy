import { useState } from "react";
import { useDrag } from "react-dnd";
import classes from "./Element.module.css";
const Element=({x,y,...props})=>{
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
    const style=isDone&&{position: "absolute",left: x,top: y,};
    return(
        <div className={props.className} style={style}>
            <img ref={drag} src={props.src} alt={props.alt}/>
            <div className={classes.elementName}>air</div>
        </div>      
    )
}
export default Element;