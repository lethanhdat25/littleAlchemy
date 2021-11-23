import { DRAG } from "../../constants/index";
import Element from "./Element";
import cssElement from "./Element.module.css";
import cssLibrary from "./Library.module.css";

const Library=()=>{ 
    const initial=["fire", "water", "earth", "air"];
    const renderInitialElement=()=>{
        return initial.map((item,index)=>{
            <Element key={index} elementRef={DRAG} className={cssElement.element} src={`/images/elements/${item}.png`} alt={item} />

        })
    }
    return(
        <div id ="Library" className={cssLibrary.library}>
            {renderInitialElement()}
        </div>
    );
}
export default Library;