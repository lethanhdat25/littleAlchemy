import { useEffect } from "react";
import { DRAG } from "../constants";
import Element from "./Element";
import cssElement from "./Element.module.css";
import cssLibrary from "./Library.module.css";
const Library=(props)=>{ 
    const initial=["fire", "water", "earth", "air"];
    useEffect(()=>{
        if(props.newElement){
            initial.push(props.newElement);
        }
    },[props.newElement])
    console.log();
    const renderInitialElement=()=>{
        const elements= initial.map((item,index)=>{
            return <Element id={index} key={index} name={item} elementRef={DRAG} className={cssElement.element} src={`/images/elements/${item}.png`} alt={item} />
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