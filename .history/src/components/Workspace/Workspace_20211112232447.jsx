import { useState } from "react";
import { useDrop } from "react-dnd";
import classes from "./Workspace.module.css";
const Workspace=()=>{
    const [coordinate,setCoordinate]=useState();
    const [isDone,setIsDone]=useState();
    const [combineElement,setCombineElement]=useState([]);
    const [{isOver},drop]=useDrop(()=>({
        accept:"drag",
        drop:async(item,monitor) => {
            const position=monitor.getClientOffset();
            await setCoordinate(position);
            console.log(coordinate);
            // renderElement(coordinate);
            return{name:"workspace"}
        },
        collect:monitor=>{return{isOver:monitor.isOver()}}
    }))   
    // const renderElement=(coordinate)=>{
    //     setCombineElement(state=>state.concat(<Element x={coordinate.x} y={coordinate.y}/>));
    // }
    // console.log(combineElement);
    return <div ref={drop} id="workspace" className={classes.workspace}>aaa</div>
    
};
export default Workspace;