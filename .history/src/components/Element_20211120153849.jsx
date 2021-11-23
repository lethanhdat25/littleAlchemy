import { useDrag, useDrop } from "react-dnd";
import { ITEM_TYPE } from "../constants";
import classes from "./Element.module.css";
const Element=(props)=>{
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
        drop: (monitor) => {
            console.log(monitor.getItem());
        }
    }))
    return(
        <div className={props.className} style={props?.style}>
            <img ref={drag} src={props.src} alt={props.alt}/>
            <div className={classes.elementName}>{props.name}</div>
        </div>      
    )
}
export default Element;