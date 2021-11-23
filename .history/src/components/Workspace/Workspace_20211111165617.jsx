import { useDrop } from "react-dnd";
import classes from "./Workspace.module.css";
const Workspace=()=>{
    const [{isOver},drop]=useDrop(()=>({
        accept:"drag",
        drop:()=>{
            console.log("da tha trung ");
            return{name:"workspace"}
        },
        collect:monitor=>({isOver:monitor.isOver()})
    }))
    return <div id="workspace" className={classes.workspace}></div>
    
};
export default Workspace;