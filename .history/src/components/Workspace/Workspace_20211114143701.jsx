import { useState } from "react";
import { useDrop } from "react-dnd";
import { ITEM_TYPE } from "../../constants/index";
import Element from "../Side/Element";
import classes from "./Workspace.module.css";
const Workspace = () => {
  const [listItemDrop, setItemDrop] = useState([]);
  const [combineElement, setCombineElement] = useState([]);
  // console.log(elementRef.current.getClassName());
  const [{isOver,canDrop,item,position}, drop] = useDrop(() => ({
    accept: ITEM_TYPE,
    drop: (item, monitor) => {
      
      return { name: "workspace" };
    },
    collect: (monitor) => {
      return { isOver: monitor.isOver(),canDrop:monitor.canDrop(),position:monitor.getClientOffset(),item:monitor.getItem() };
    },
  }));
  
  const renderElement = (position, item) => {
    setItemDrop((state) => state.concat({ ...item, position }));
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
  const isActive= isOver&&canDrop;
  if(isActive) {
    renderElement(position, item);
    checkItemDropped(position,item);
  }
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
      {combineElement}
    </div>
  );
};
export default Workspace;
