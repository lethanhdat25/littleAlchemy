import { useDrag } from "react-dnd";
import classes from "./Element.module.css";
const Element=({x=0,y=0})=>{
    const [{isDragging},drag]=useDrag(()=>({ 
        type: "drag",
        collect:monitor=>({isDragging:monitor.isDragging()})
    }))
    return(
        <div className={classes.element} data-elementtype="libraryBox" data-elementid="4" >
            <img ref={drag} src="/images/elements/air.png" alt="air"/>
            <div className={classes.elementName}>air</div>
        </div>      
    )
}
export default Element;