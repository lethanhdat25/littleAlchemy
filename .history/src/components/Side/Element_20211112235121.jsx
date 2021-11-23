import React, { useImperativeHandle, useRef, useState } from "react";
import { useDrag } from "react-dnd";
import classes from "./Element.module.css";
const Element=React.forwardRef(({x,y},ref)=>{
    const [isDone,setIsDone]=useState();
    const divElement = useRef();
    const getClassName=()=>{
        return divElement.current.data;
    };
    const [,drag]=useDrag(()=>({ 
        type: "drag",
        end:(item,monitor)=>{
            if(monitor.getDropResult()){
                setIsDone(true);
            };
        },
        collect:monitor=>({isDragging:monitor.isDragging()})
    }));
    useImperativeHandle(ref,()=>({getClassName}));
    const style={position: "absolute",left: x,top: y,};
    return(
        <div ref={divElement} className={classes.element} data="libraryBox"  style={style}>
            <img ref={drag} src="/images/elements/air.png" alt="air"/>
            <div className={classes.elementName}>air</div>
        </div>      
    )
});
export default Element;