import { useContext, useRef } from "react";
import { useDrag, useDrop } from "react-dnd";
import { ITEM_TYPE } from "../../constants/index";
import AlchemyContext from "../../store/alchemy-context";
import classes from "./Element.module.css";
const Element=(props)=>{
    const context = useContext(AlchemyContext);

    const ref= useRef();
    const [,drag]=useDrag(()=>({ 
        item:{
            src:props.src,
            name:props.name,
            elementRef:props?.elementRef
        },
        type: ITEM_TYPE,

    }));

    const [,drop]=useDrop(()=>({
        accept: ITEM_TYPE,
        drop: (item, monitor) => {
            const position = monitor.getClientOffset();
            console.log("trung");
            context.addElement(item, position);
            return { name: "workspace" };
          }
    }));
    drag(drop(ref))
    return(
        <div className={props.className} style={props?.style}>
            <img ref={ref} src={props.src} alt={props.alt}/>
            <div className={classes.elementName}>{props.name}</div>
        </div>      
    )
}
export default Element;