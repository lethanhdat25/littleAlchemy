import { DRAG } from "../../constants/index";
import Element from "./Element";
import cssElement from "./Element.module.css";
import cssLibrary from "./Library.module.css";

const Library=()=>{
    return(
        <div id ="Library" className={cssLibrary.library}>
            <Element elementRef={DRAG} className={cssElement.element} src={"/images/elements/air.png"} alt={"air"}/>
            <Element elementRef={DRAG} className={cssElement.element} src={"/images/elements/air.png"} alt={"air"}/>
            <Element elementRef={DRAG} className={cssElement.element} src={"/images/elements/air.png"} alt={"air"}/>
        </div>
    );
}
export default Library;