import Alphabet from './Alphabet';
import Library from './Library';
import classes from "./Side.module.css";
const Side=(props)=>{
    return(
        <div id="side" className={classes.side}>
            <Alphabet/>
            <Library id={props.id}/>
        </div>
    )
}
export default Side;