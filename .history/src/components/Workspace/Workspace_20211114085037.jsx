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
      setItemDrop((state) => state.concat({ ...item, position }));

      renderElement(position, item);
      return { name: "workspace" };
    },
    collect: (monitor) => {
      return { isOver: monitor.isOver() };
    },
  }));
  const renderElement = (coordinate, item) => {
    if (listItemDrop.length === 0) {
        console.log("listItemDrop");
      setCombineElement((state) =>
        state.concat(
          <Element
            name={item.name}
            src={item.src}
            style={{
              position: "absolute",
              left: coordinate.x,
              top: coordinate.y,
            }}
          />
        )
      );
    } else {
      listItemDrop.forEach((itemDropped) => {
        const x = itemDropped.position.x;
        const y = itemDropped.position.y;
        if (
          Math.abs(x - coordinate.x) <= 3 &&
          Math.abs(y - coordinate.y) <= 3
        ) {
          if (itemDropped.name === item.name) {
              console.log("trung item can merge lai");
          }
        }
      });
    }
  };
  return (
    <div ref={drop} id="workspace" className={classes.workspace}>
      {combineElement}
    </div>
  );
};
export default Workspace;
