import { useState } from "react";
import { useDrop } from "react-dnd";
import Element from '../Side/Element';
import classes from "./Workspace.module.css";
const Workspace=()=>{
    const [coordinate,setCoordinate]=useState();
    const [isDone,setIsDone]=useState();
    const [combineElement,setCombineElement]=useState([]);
    // console.log(elementRef.current.getClassName());
    const [{isOver},drop]=useDrop(()=>({
        accept:"drag",
        drop:(item,monitor) => {
            console.log(item);
            const position=monitor.getClientOffset();
            setCoordinate(position);
            renderElement(position,item);
            return{name:"workspace"}
        },
        collect:monitor=>{return{isOver:monitor.isOver()}}
    }))   
    const renderElement=(coordinate,src)=>{
        setCombineElement(state=>state.concat(<Element src={src} style={{position: "absolute",left: coordinate.x,top: coordinate.y,}}/>));
    }
    console.log(combineElement);
    return <div ref={drop} id="workspace" className={classes.workspace}>{combineElement}</div>;
    
};
export default Workspace;