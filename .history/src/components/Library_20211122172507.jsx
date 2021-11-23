import { useEffect, useState } from "react";
import { DRAG } from "../constants";
import Element from "./Element";
import cssElement from "./Element.module.css";
import cssLibrary from "./Library.module.css";
const Library=(props)=>{ 
    const [initial,setInitial]=useState([{id:0,name:"fire"},{id:1,name:"water"},{id:2,name:"earth"},{id:3,name:"air"}]);
    useEffect(()=>{
        if(props.newElement){
            const isExist=initial.some(element=>element.name=props.newElement.name);
            console.log(isExist);
            if (isExist===false) {
                setInitial(state=>state.concat(props.newElement));
            }
        }
    },[props.newElement])
    const renderInitialElement=()=>{
        const elements= initial.map((item)=>{
            return <Element id={item.id} type="inLibrary" key={item.id} name={item.name} elementRef={DRAG} className={cssElement.element} src={`/images/elements/${item.name}.png`} alt={item.name} />
        })
        return elements;
    }
    return(
        <div id ="Library" className={cssLibrary.library}>
            {renderInitialElement()}
        </div>
    );
}
export default Library;