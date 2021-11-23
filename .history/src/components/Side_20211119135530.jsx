import Alphabet from './Alphabet';
import Library from './Library';
import classes from "./Side.module.css";
const Side=(props)=>{
    return(
        <div id="side" className={classes.side}>
            <Alphabet/>
            <Library newElement={props.nameElement}/>
        </div>
    )
}
export default Side;