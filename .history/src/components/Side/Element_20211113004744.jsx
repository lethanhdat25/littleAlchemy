import { useState } from "react";
import { useDrag } from "react-dnd";
import classes from "./Element.module.css";
const Element=(props)=>{
    const [isDone,setIsDone]=useState();
    const [{isDragging},drag]=useDrag(()=>({ 
        item:{
            type: "drag",
            img:props.src,
        },
        end:(item,monitor)=>{
            if(monitor.getDropResult()){
                setIsDone(true);
            }
        },
        collect:monitor=>({isDragging:monitor.isDragging()})
    }))
    console.log(isDone);
    return(
        <div className={props.className} style={props?.style}>
            <img ref={drag} src={props.src} alt={props.alt}/>
            <div className={classes.elementName}>air</div>
        </div>      
    )
}
export default Element;