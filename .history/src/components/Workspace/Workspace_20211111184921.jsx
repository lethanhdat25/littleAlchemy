import { useDrop } from "react-dnd";
import classes from "./Workspace.module.css";
const Workspace=()=>{
    const [{isOver},drop]=useDrop(()=>({
        accept:"drag",
        drop:(e)=>{
            console.log("da tha trung "+e.clientX);
            return{name:"workspace"}
        },
        collect:monitor=>({isOver:monitor.isOver()})
    }))
    return <div ref={drop} id="workspace" className={classes.workspace}></div>
    
};
export default Workspace;