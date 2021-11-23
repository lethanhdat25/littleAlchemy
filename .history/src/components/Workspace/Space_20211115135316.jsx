import { useContext, useState } from "react";
import { useDrop } from "react-dnd";
import { ITEM_TYPE } from "../../constants/index";
import AlChemyContext from '../../store/alchemy-context';
import classes from "./WorkSpace.module.css";

const Space = () => {
  const context = useContext(AlChemyContext);
  
  const [listItemDrop, setItemDrop] = useState([]);
  const [combineElement, setCombineElement] = useState([]);
  // console.log(elementRef.current.getClassName());
  const [, drop] = useDrop(() => ({
    accept: ITEM_TYPE,
    drop: (item, monitor) => {
      const position = monitor.getClientOffset();
      renderElement(position, item);
      context.addElement(item, position);
      return { name: "workspace" };
    },
    collect: (monitor) => {
      return { isOver: monitor.isOver() };
    },
  }),[context.element]);

  const renderElement = (position, item) => {
    context.addElement(item, position);
    setItemDrop((state) => state.concat({ ...item, position }));
    checkItemDropped(position, item);
  };
  const checkItemDropped = (position, item) => {
    listItemDrop.forEach((itemDropped) => {
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
    <div ref={drop} id="workspace" className={classes.workspace}>
      asdfasdfa
    </div>
  );
};
export default Space;
