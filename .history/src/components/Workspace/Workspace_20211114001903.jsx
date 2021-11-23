import { useState } from "react";
import { useDrop } from "react-dnd";
import { ITEM_TYPE } from "../../constants/index";
import Element from '../Side/Element';
import classes from "./Workspace.module.css";
const Workspace=()=>{
    const [listItemDrop,setItemDrop]=useState([]);
    const [combineElement,setCombineElement]=useState([]);
    // console.log(elementRef.current.getClassName());
    const [,drop]=useDrop(()=>({
        accept:ITEM_TYPE,
        drop:(item,monitor) => {
            const position=monitor.getClientOffset();
            console.log(listItemDrop);
            if(listItemDrop.length===0){
                setItemDrop(state=>state.concat({...item,position}));
                renderElement(position,item.src,item.name);
                return{name:"workspace"}
            }
            listItemDrop.forEach((itemDropped=>{

                if(itemDropped.name===item.name){
                    console.log("aaaa");
                    const x=itemDropped.position.x;
                    const y=itemDropped.position.y;
                    console.log(Math.abs(position.x-x));
                    // if(Math.abs(position.x-x<=2)){

                    // }
                }
            }))
            setItemDrop(state=>state.concat({...item,position}))
            renderElement(position,item.src,item.name);
            return{name:"workspace"}
        },
        collect:monitor=>{return{isOver:monitor.isOver()}}
    }))   
    const renderElement=(coordinate,src,name)=>{
        setCombineElement(state=>state.concat(<Element name={name} src={src} style={{position: "absolute",left: coordinate.x,top: coordinate.y,}}/>));
    }
    return <div ref={drop} id="workspace" className={classes.workspace}>{combineElement}</div>;
    
};
export default Workspace;