import Alphabet from './Alphabet';
import Library from './Library';
import classes from "./Side.module.css";
const Side=(props)=>{
    console.log(props.nameElement);
    return(
        <div id="side" className={classes.side}>
            <Alphabet/>
            <Library/>
        </div>
    )
}
export default Side;