import { useContext, useState } from "react";
import { useDrag } from "react-dnd";
import { ITEM_TYPE } from "../../constants/index";
import AlchemyContext from "../../store/alchemy-context";
import classes from "./Element.module.css";
const Element=(props)=>{
    const ctx=useContext(AlchemyContext);
    const [isDone,setIsDone]=useState();
    const [{item,position},drag]=useDrag(()=>({ 
        item:{
            src:props.src,
            name:props.name,
        },
        type: ITEM_TYPE,
        end:(item,monitor)=>{
            if(monitor.getDropResult()){
                console.log(monitor.getDropResult());
                setIsDone(true);
            }
        },
        collect:monitor=>({item:monitor.getItem,position:monitor.getDropResult()})
    }))
    ctx.addElement(item,position);
    console.log(ctx.element);
    return(
        <div className={props.className} style={props?.style}>
            <img ref={props.elementRef&&drag} src={props.src} alt={props.alt}/>
            <div className={classes.elementName}>{props.name}</div>
        </div>      
    )
}
export default Element;