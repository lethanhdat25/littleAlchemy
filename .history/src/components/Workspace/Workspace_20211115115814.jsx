import { useCallback, useContext, useState } from "react";
import { useDrop } from "react-dnd";
import { ITEM_TYPE } from "../../constants/index";
import AlChemyContext from '../../store/alchemy-context';
import Element from "../Side/Element";
import Space from "./Space";
import classes from "./WorkSpace.module.css";

const Workspace = () => {
  const context = useContext(AlChemyContext);
  const listELement=context.element;
  const [listItemDrop, setItemDrop] = useState([]);
  const [combineElement, setCombineElement] = useState([]);
  // console.log(elementRef.current.getClassName());
  const [, drop] = useDrop(() => ({
    accept: ITEM_TYPE,
    drop: (item, monitor) => {
      const position = monitor.getClientOffset();
      renderElement(position, item);
      return { name: "workspace" };
    },
    collect: (monitor) => {
      return { isOver: monitor.isOver() };
    },
  }),[context.element]);

  const renderElement = useCallback( (position, item) => {
    context.addElement(item, position);
    setItemDrop((state) => state.concat({ ...item, position }));
    checkItemDropped(position, item);
    setCombineElement((state) =>
      state.concat(
        <Element
          name={item.name}
          src={item.src}
          style={{
            position: "absolute",
            left: position.x,
            top: position.y,
          }}
        />
      )
    );
  },[listELement]);
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
      <Space/>
      {combineElement}
    </div>
  );
};
export default Workspace;
