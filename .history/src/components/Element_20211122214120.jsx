import { useDrag } from "react-dnd";
import { ITEM_TYPE } from "../constants";
import classes from "./Element.module.css";
const Element=(props)=>{
    console.log(props.name);
    const [,drag]=useDrag(()=>({
        type: ITEM_TYPE,
        item:{
            id: props.id,
            src:props.src,
            name:props.name,
            type:props.type
        },
        collect:(monitor)=>{
            console.log(monitor.canDrop());
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