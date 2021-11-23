import { useDrop } from "react-dnd";
import classes from "./Workspace.module.css";
const Workspace=()=>{
    const [{isOver},drop]=useDrop(()=>({
        accept:"drag",
        hover:(item)=>{
          console.log(item)  
        },
        drop:(item)=>{
            console.log(item.clientX);
            return{name:"workspace"}
        },
        collect:monitor=>({isOver:monitor.isOver()})
    }))
    return <div ref={drop} id="workspace" className={classes.workspace}></div>
    
};
export default Workspace;