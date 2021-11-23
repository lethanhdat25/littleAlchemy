import { useContext } from "react";
import { useDrop } from "react-dnd";
import { ITEM_TYPE } from "../../constants/index";
import AlChemyContext from '../../store/alchemy-context';
import classes from "./WorkSpace.module.css";

const Space = () => {
  const context = useContext(AlChemyContext);
  const [{item}, drop] = useDrop(() => ({
    accept: ITEM_TYPE,
    drop: (item, monitor) => {
      const position = monitor.getClientOffset();
      renderElement(position, item);
      return { name: "workspace" };
    },
    collect: (monitor) => ({
      item: monitor.getItem(),
    })
  }));
  console.log(item);
  const renderElement = (position, item) => {
    context.addElement(item, position);
  };
  return (
    <div ref={drop} id="space" className={classes.workspace}>
      
    </div>
  );
};
export default Space;
