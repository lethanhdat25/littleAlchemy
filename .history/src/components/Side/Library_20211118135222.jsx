import { DRAG } from "../../constants/index";
import Element from "./Element";
import cssElement from "./Element.module.css";
import cssLibrary from "./Library.module.css";
const Library=()=>{ 
    const initial=[{id:0,name:"fire"}, {id:1,name:"water"}, {id:2,name:"earth"}, {id:3,name:"air"}];
    const renderInitialElement=()=>{
        const elements= initial.map((item,index)=>{
            return <Element id={item.id} key={index} name={item.name} elementRef={DRAG} className={cssElement.element} src={`/images/elements/${item.name}.png`} alt={item.name} />
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