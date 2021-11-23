import { useContext } from "react";
import { DRAG } from "../../constants/index";
import AlchemyContext from "../../store/alchemy-context";
import Element from "./Element";
import cssElement from "./Element.module.css";
import cssLibrary from "./Library.module.css";
const Library=(props)=>{ 
    const initial=["fire", "water", "earth", "air"];
    const context =useContext(AlchemyContext);

    const renderInitialElement=()=>{
        const elements= initial.map((item,index)=>{
            return <Element id={props.id} key={index} name={item} elementRef={DRAG} className={cssElement.element} src={`/images/elements/${item}.png`} alt={item} />
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