import Alphabet from './Alphabet';
import Library from './Library';
import classes from "./Side.module.css";
const Side=()=>{
    return(
        <div id="side" className={classes.side}>
            <Alphabet/>
            <Library/>
        </div>
    )
}
export default Side;