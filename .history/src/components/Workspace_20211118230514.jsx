import { useEffect, useState } from "react";
import { useDrop } from "react-dnd";
import { ITEM_TYPE } from "../constants";
import Element from "./Element";
import classes from "./WorkSpace.module.css";
  //Mảng công thức
  const recipes = [
    ["pressure", {name1:"air",name2: "air"}],
    ["energy  ", {name1:"air",name2: "fire"}],
    ["dust", {name1:"air",name2: "earth"}],
    ["lava", {name1:"earth",name2: "fire"}],
    ["rain", {name1:"air",name2: "water"}],
    ["mud", {name1:"earth",name2: "water"}],
    ["steam", {name1:"fire",name2: "water"}],
    ["sea", {name1:"water",name2: "water"}],
    ["wind", {name1:"air",name2: "energy"}],
    ["stone", {name1:"air",name2: "lava"}],
    ["atmosphere", {name1:"air",name2: "pressure"}],
    ["cloud", {name1:"air",name2: "steam"}],
    ["earthquake", {name1:"earth",name2: "energy"}],
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
  const [,drop]=useDrop(() => ({
    accept: ITEM_TYPE,
    drop:(item,monitor)=>{
      const position=monitor.getClientOffset();
      setElementDropped((state)=>state.concat({...item,position}));
    },
  }))
  //Sau khi state update kiểm tra xem có element nào có position gần nhau hay không
  useEffect(()=>{
    for(let i=0;i<elementDropped.length-1;i++){
      if(Math.abs(elementDropped[i].position.x-elementDropped[elementDropped.length-1].position.x)<=85&&Math.abs(elementDropped[i].position.y-elementDropped[elementDropped.length-1].position.y)<=85){
        console.log("trung position");
        const yourRecipe=[elementDropped[i],elementDropped[elementDropped.length-1]];
        mergeElement(yourRecipe);
        return; 
      }
    }
  },[elementDropped])

  //Merge thành element mới
  const mergeElement=(yourRecipe)=>{
    recipes.map(element=>{
      if(element[1])
    })
  }
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
