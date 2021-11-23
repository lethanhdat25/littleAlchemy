import { useDrag } from "react-dnd";
import classes from "./Element.module.css";
const Element=()=>{
    const [{isDragging},drag]=useDrag(()=>({ 
        type: "drag",
        collect:monitor=>{
            console.log(monitor.isDragging());
            return {isDragging:monitor.isDragging()}
        }
    }))
    return(
        <div className={classes.element} data-elementtype="libraryBox" data-elementid="4">
            <img  src="/images/elements/air.png" alt="air"/>
            <div class={classes.elementName}>air</div>
        </div> 
    )
}
export default Element;