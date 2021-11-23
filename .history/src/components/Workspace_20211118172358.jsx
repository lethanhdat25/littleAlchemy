import { useDrop } from "react-dnd";
import { ITEM_TYPE } from "../constants";
import classes from "./WorkSpace.module.css";
  //Mảng công thức
  const recipes = [
    ["pressure", ["air", "air"]],
    ["energy", ["air", "fire"]],
    ["dust", ["air", "earth"]],
    ["lava", ["earth", "fire"]],
    ["rain", ["air", "water"]],
    ["mud", ["earth", "water"]],
    ["steam", ["fire", "water"]],
    ["sea", ["water", "water"]],
    ["wind", ["air", "energy"]],
    ["stone", ["air", "lava"]],
    ["atmosphere", ["air", "pressure"]],
    ["cloud", ["air", "steam"]],
    ["earthquake", ["earth", "energy"]],
  ];

const Workspace = () => {
  //TODO:Tìm công thức theo tên element đã có trước và element vừa được drop
  //Render element vào space
  // const elements =context.element.map((element, index) => {
  //   return (
  //     <Element
  //       name={element.name}
  //       src={element.src}
  //       key={index}
  //       type="inSpace"
  //       elementRef= "inSpace"
  //       style={{
  //         position: "absolute",
  //         left: element.position.x,
  //         top: element.position.y, 
  //       }}
  //     />
  //   );
  // });
  // const handleAddElement= (item,position)=>{
  //   item.elementRef="inSpace";
  //   context.addElement(item, position);
  // }
  const [,drop]=useDrop(() => ({
    accept: ITEM_TYPE,
    drop:(item,monitor)=>{
      console.log(item);
      console.log(monitor.getItem());
    }
  }))
  return (
    <div ref={drop} id="workspace" className={classes.workspace}>
    </div>
  );
};
export default Workspace;
