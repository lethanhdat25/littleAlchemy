import { useContext } from "react";
import { useDrop } from "react-dnd";
import { ITEM_TYPE } from "../../constants/index";
import AlChemyContext from '../../store/alchemy-context';
import classes from "./WorkSpace.module.css";

const Space = () => {
  const context = useContext(AlChemyContext);
  const [{isDone}, drop] = useDrop(() => ({
    accept: ITEM_TYPE,
    drop: (item, monitor) => {
      const position = monitor.getClientOffset();
      renderElement(position, item);
      return { name: "workspace" };
    },
    collect: (monitor) => {
      return { isDone: monitor.didDrop() };
    },
  }));
  console.log(isDone);
  const renderElement = (position, item) => {
    context.addElement(item, position);
    checkItemDropped(position, item);
  };
  const checkItemDropped = (position, item) => {
    context.element.forEach((itemDropped) => {
      const x = itemDropped.position.x;
      const y = itemDropped.position.y;
      if (Math.abs(x - position.x) <= 3 && Math.abs(y - position.y) <= 3) {
        if (itemDropped.name === item.name) {
          console.log("trung item can merge lai");
        }
      }
    });
  };
  return (
    <div ref={drop} id="space" className={classes.workspace}>
      asdfasdfa
    </div>
  );
};
export default Space;
