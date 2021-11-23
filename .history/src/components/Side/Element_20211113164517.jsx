import { useState } from "react";
import { useDrag } from "react-dnd";
import { ITEM_TYPE } from "../../constants/index";
import classes from "./Element.module.css";
const Element=(props)=>{
    const [isDone,setIsDone]=useState();
    const [,drag]=useDrag(()=>({ 
        item:{src:props.src},
        type: ITEM_TYPE,
        end:(item,monitor)=>{
            if(monitor.getDropResult()){
                setIsDone(true);
            }
        },
        collect:monitor=>({isDragging:monitor.isDragging()})
    }))
    return(
        <div className={props.className} style={props?.style}>
            <img ref={props.elementRef&&drag} src={props.src} alt={props.alt}/>
            <div className={classes.elementName}>{props.name}</div>
        </div>      
    )
}
export default Element;