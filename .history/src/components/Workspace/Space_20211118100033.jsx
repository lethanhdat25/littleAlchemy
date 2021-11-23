import { useDrop } from "react-dnd";
import { ITEM_TYPE } from "../../constants/index";
import classes from "./WorkSpace.module.css";

const Space = (props) => {
  const [, drop] = useDrop(() => ({
    accept: ITEM_TYPE,
    drop: (item, monitor) => {
      console.log(props.elem);
      const position = monitor.getClientOffset();
      props.handleAddElement(item,position);
      return { name: "workspace" };
    },
  }));
  return (
    <div ref={drop} id="space" className={classes.workspace}>
      {props.elements}
    </div>
  );
};
export default Space;
