import Element from "./Element";
import classes from "./Library.module.css";
const Library=()=>{
    return(
        <div id ="Library" className={classes.library}>
            <Element/>
            <Element/>
            <Element/>
        </div>
    );
}
export default Library;