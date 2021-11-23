import { useDrop } from 'react-dnd';
import { ITEM_TYPE } from '../constants';
import Alphabet from './Alphabet';
import Library from './Library';
import classes from "./Side.module.css";
const Side=(props)=>{
    const [,drop]=useDrop(() => ({
        accept: ITEM_TYPE,
        drop:(monitor)=>{
            console.log(monitor.getItem());
        }
    }))
    return(
        <div id="side" className={classes.side}>
            <Alphabet/>
            <Library newElement={props.nameElement}/>
        </div>
    )
}
export default Side;