import { DRAG } from "../constants";
import Element from "./Element";
import cssElement from "./Element.module.css";
import cssLibrary from "./Library.module.css";
const Library=()=>{ 
    const initial=["fire", "water", "earth", "air"];
    const renderInitialElement=()=>{
        const elements= initial.map((item,index)=>{
            return <Element key={index} name={item} elementRef={DRAG} className={cssElement.element} src={`/images/elements/${item}.png`} alt={item} />
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