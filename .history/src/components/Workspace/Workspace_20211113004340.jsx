import { useRef, useState } from "react";
import { useDrop } from "react-dnd";
import Element from '../Side/Element';
import classes from "./Workspace.module.css";
const Workspace=()=>{
    const [coordinate,setCoordinate]=useState();
    const [isDone,setIsDone]=useState();
    const [combineElement,setCombineElement]=useState([]);
    const elementRef=useRef();
    // console.log(elementRef.current.getClassName());
    const [{isOver},drop]=useDrop(()=>({
        accept:"drag",
        drop:(item,monitor) => {
            const position=monitor.getClientOffset();
            setCoordinate(position);
            renderElement(position);
            return{name:"workspace"}
        },
        collect:monitor=>{return{isOver:monitor.isOver()}}
    }))   
    const renderElement=(coordinate)=>{
        setCombineElement(state=>state.concat(<Element ref={elementRef} x={coordinate.x} y={coordinate.y}/>));
    }
    console.log(combineElement);
    return <div ref={drop} id="workspace" className={classes.workspace}>{combineElement}</div>;
    
};
export default Workspace;