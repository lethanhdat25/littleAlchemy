import { useDrop } from 'react-dnd';
import { ITEM_TYPE } from '../constants';
import Alphabet from './Alphabet';
import Library from './Library';
import classes from "./Side.module.css";
const Side=(props)=>{
    const [,drop]=useDrop(() => ({
        accept: ITEM_TYPE,
        drop:(item,monitor)=>{
            deleteElement(monitor.getItem());
        }
    }))
    const deleteElement =(item)=>{
        props.deleteElement(item);
    };
    return(
        <div ref={drop} id="side" className={classes.side}>
            <Alphabet/>
            <Library newElement={props.nameElement}/>
        </div>
    )
}
export default Side;