import { useDrop } from "react-dnd";
import classes from "./Workspace.module.css";
const Workspace=()=>{
    const [{isOver},drop]=useDrop(()=>({
        accept:"drag",
        drop:(item,monitor)=>{
            const clinetX=monitor.getInitialClientOffset();
            console.log(clinetX);
            return{name:"workspace"}
        },
        collect:monitor=>({isOver:monitor.isOver()})
    }))
    return <div ref={drop} id="workspace" className={classes.workspace}></div>
    
};
export default Workspace;