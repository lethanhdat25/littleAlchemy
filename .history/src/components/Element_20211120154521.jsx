import { useRef } from "react";
import { useDrag, useDrop } from "react-dnd";
import { ITEM_TYPE } from "../constants";
import classes from "./Element.module.css";
const Element=(props)=>{

    const ref=useRef();
    const [,drag]=useDrag(()=>({
        type: ITEM_TYPE,
        item:{
            id: props.id,
            src:props.src,
            name:props.name,
        },
    }))
    const [,drop]=useDrop(()=> ({
        accept: ITEM_TYPE,
        drop: (item,monitor) => {
            console.log(item);
        }
    }))
    drag(drop(ref));
    return(
        <div className={props.className} style={props?.style}>
            <img ref={ref} src={props.src} alt={props.alt}/>
            <div className={classes.elementName}>{props.name}</div>
        </div>      
    )
}
export default Element;