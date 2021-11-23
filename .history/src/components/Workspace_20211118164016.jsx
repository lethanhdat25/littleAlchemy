import { useContext } from "react";
import AlChemyContext from "../store/alchemy-context";
import Element from "./Element";
import classes from "./WorkSpace.module.css";

const Workspace = () => {
  const context = useContext(AlChemyContext);
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
  //TODO:Tìm công thức theo tên element đã có trước và element vừa được drop
  
  //Render element vào space
  const elements =context.element.map((element, index) => {
    return (
      <Element
        name={element.name}
        src={element.src}
        key={index}
        type="inSpace"
        elementRef= "inSpace"
        style={{
          position: "absolute",
          left: element.position.x,
          top: element.position.y, 
        }}
      />
    );
  });
  const handleAddElement= (item,position)=>{
    item.elementRef="inSpace";
    context.addElement(item, position);
  }
  return (
    <div id="workspace" className={classes.workspace}>
      {elements}
    </div>
  );
};
export default Workspace;
