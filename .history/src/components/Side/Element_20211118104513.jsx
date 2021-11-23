import { useCallback, useContext, useRef } from "react";
import { useDrag, useDrop } from "react-dnd";
import { ITEM_TYPE } from "../../constants/index";
import AlchemyContext from "../../store/alchemy-context";
import classes from "./Element.module.css";
const Element=(props)=>{
    const context = useContext(AlchemyContext);

    const ref= useRef();
    const [{element},drag]=useDrag(()=>({ 
        item:{
            src:props.src,
            name:props.name,
            elementRef:props?.elementRef
        },
        type: ITEM_TYPE,
        collect:monitor=>({element:monitor.getItem()})
    }));
    const asd=useCallback(()=>{
        if(element.elementRef==="inSpace"){
            context.moveElement(element)
        }
    },[element]);
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