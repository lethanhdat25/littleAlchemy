import { useRef } from "react";
import { useDrag, useDrop } from "react-dnd";
import { ITEM_TYPE } from "../../constants/index";
import classes from "./Element.module.css";
const Element=(props)=>{
    const ref= useRef();
    const [,drag]=useDrag(()=>({ 
        item:{
            src:props.src,
            name:props.name,
            position:(props?.style?.x,props?.style?.y),
        },
        type: ITEM_TYPE,
        collect:monitor=>({isDragging:monitor.isDragging()})
    }));
    const [,drop]=useDrop(()=>({
        accept: ITEM_TYPE,
        drop: (item, monitor) => {
            const position = monitor.getClientOffset();
            renderElement(position, item);
            return { name: "workspace" };
          }
    }));
    const renderElement = (position, item) => {
        console.log(position);
      }; 
    drag(drop(ref))
    return(
        <div className={props.className} style={props?.style}>
            <img ref={ref} src={props.src} alt={props.alt}/>
            <div className={classes.elementName}>{props.name}</div>
        </div>      
    )
}
export default Element;