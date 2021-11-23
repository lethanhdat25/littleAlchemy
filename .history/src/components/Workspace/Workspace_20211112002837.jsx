import useState from "react";
import { useDrop } from "react-dnd";
import Element from "../Side/Element";
import classes from "./Workspace.module.css";
const Workspace=()=>{
    const [coordinate,setCoordinate]=useState();
    const [{isOver},drop]=useDrop(()=>({
        accept:"drag",
        drop:(item,monitor)=>{
            const position=monitor.getClientOffset();
            setCoordinate(position) 
            return{name:"workspace"}
        },
        collect:monitor=>({isOver:monitor.isOver()})
    }))
    const renderElement=()=>{
        if(isOver){
            return <Element x={coordinate.x} y={coordinate.y}/>
        }
        return null;
    };
    return <div ref={drop} id="workspace" className={classes.workspace}>{renderElement}</div>
    
};
export default Workspace;