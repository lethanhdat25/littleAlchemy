import { useContext } from "react";
import { useDrop } from "react-dnd";
import { ITEM_TYPE } from "../../constants/index";
import AlChemyContext from '../../store/alchemy-context';
import classes from "./WorkSpace.module.css";

const Space = (props) => {
  const context = useContext(AlChemyContext);
  const [, drop] = useDrop(() => ({
    accept: ITEM_TYPE,
    drop: (item, monitor) => {
      const position = monitor.getClientOffset();
      renderElement(position, item);
      return { name: "workspace" };
    },
  }));

  const renderElement = (position, item) => {
    context.addElement(item, position,context.element);
  };
  return (
    <div ref={drop} id="space" className={classes.workspace}>
      {props.elements}
    </div>
  );
};
export default Space;
