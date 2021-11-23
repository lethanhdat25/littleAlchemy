import { useEffect, useState } from "react";
import { useDrop } from "react-dnd";
import { ITEM_TYPE } from "../constants";
import Element from "./Element";
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
  const [elementDropped,setElementDropped]=useState([]);
  const [{item,position},drop]=useDrop(() => ({
    accept: ITEM_TYPE,
    drop:(item,monitor)=>{
      const position=monitor.getClientOffset();
      setElementDropped((state)=>state.concat({...item,position}));
    },
    collect: (monitor) => {
      return {item: monitor.getItem(),position:monitor.getClientOffset()}
    }
  }))

  useEffect(()=>{
    elementDropped.forEach((element,index)=>{
      console.log(element);
      console.log(position);
      if(Math.abs(element.position.x-position.x)<=85&&Math.abs(element.position.y-position.y)<=85){
        console.log(element);
        console.log(index);
      }
    })
  },[elementDropped])

const elements =elementDropped.map((element, index) => {
    return (
      <Element
        id={index}
        key={index}
        name={element.name}
        src={element.src}
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
  return (
    <div ref={drop} id="workspace" className={classes.workspace}>
      {elements}
    </div>
  );
};
export default Workspace;
