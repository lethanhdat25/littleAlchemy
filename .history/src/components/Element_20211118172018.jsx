import { useDrag } from "react-dnd";
import { ITEM_TYPE } from "../constants";
import classes from "./Element.module.css";
const Element=(props)=>{
    const [,drag]=useDrag(()=>({
        type: ITEM_TYPE,
        item:{
            src:props.src,
            name:props.name,
        }
    }))
    return(
        <div className={props.className} style={props?.style}>
            <img  src={props.src} alt={props.alt}/>
            <div className={classes.elementName}>{props.name}</div>
        </div>      
    )
}
export default Element;