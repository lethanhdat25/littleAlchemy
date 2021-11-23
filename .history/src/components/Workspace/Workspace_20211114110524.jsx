import { useState } from "react";
import { useDrop } from "react-dnd";
import { ITEM_TYPE } from "../../constants/index";
import Element from "../Side/Element";
import classes from "./Workspace.module.css";
const Workspace = () => {
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
  }));
  const renderElement = (position, item) => {
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
  };
  const checkItemDropped=(position, item)=>{
      console.log(listItemDrop);
    listItemDrop.forEach((itemDropped) => {
        const x = itemDropped.position.x;
        const y = itemDropped.position.y;
        if (
          Math.abs(x - position.x) <= 3 &&
          Math.abs(y - position.y) <= 3
        ) {
          if (itemDropped.name === item.name) {
            console.log("trung item can merge lai");
          }
        }
      });
      }
      console.log(listItemDrop);
  return (
    <div ref={drop} id="workspace" className={classes.workspace}>
      {combineElement}
    </div>
  );
};
export default Workspace;
