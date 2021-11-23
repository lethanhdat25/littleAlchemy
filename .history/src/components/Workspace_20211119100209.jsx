import { useEffect, useState } from "react";
import { useDrop } from "react-dnd";
import { ITEM_TYPE } from "../constants";
import Element from "./Element";
import classes from "./WorkSpace.module.css";
//Mảng công thức
const recipes = [
  [4,"pressure", { name1: "air", name2: "air" }],
  [5,"energy  ", { name1: "air", name2: "fire" }],
  [6,"dust", { name1: "air", name2: "earth" }],
  [7,"lava", { name1: "earth", name2: "fire" }],
  [8,"rain", { name1: "air", name2: "water" }],
  [9,"mud", { name1: "earth", name2: "water" }],
  [10,"steam", { name1: "fire", name2: "water" }],
  [11,"sea", { name1: "water", name2: "water" }],
  [12,"wind", { name1: "air", name2: "energy" }],
  [13,"stone", { name1: "air", name2: "lava" }],
  [14,"atmosphere", { name1: "air", name2: "pressure" }],
  [15,"cloud", { name1: "air", name2: "steam" }],
  [16,"earthquake", { name1: "earth", name2: "energy" }],
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
  const [elementDropped, setElementDropped] = useState([]);
  const [dropped,setDropped]=useState(false);
  const [, drop] = useDrop(() => ({
    accept: ITEM_TYPE,
    drop: (item, monitor) => {
      console.log(item);
      const position = monitor.getClientOffset();
      setElementDropped((state) => state.concat({ ...item, position, }));
      setDropped(item.id);
    },
  }));


  //Sau khi state update kiểm tra xem có element nào có position gần nhau hay không
  useEffect(() => {
    console.log("effect chay");

    for (let i = 0; i < elementDropped.length - 1; i++) {
      console.log(elementDropped[i]);
      if (
        Math.abs(
          elementDropped[i].position.x -
            elementDropped[elementDropped.length - 1].position.x
        ) <= 85 &&
        Math.abs(
          elementDropped[i].position.y -
            elementDropped[elementDropped.length - 1].position.y
        ) <= 85
      ) {
        const yourRecipe = [
          elementDropped[i].name,
          elementDropped[elementDropped.length - 1].name,
        ];
        console.log(yourRecipe);
        const yourPosition = [elementDropped[i].position,elementDropped[elementDropped.length - 1].position];
        const yourIndex=[elementDropped[i].id,elementDropped[elementDropped.length - 1].id];
        mergeElement(yourRecipe, yourPosition, yourIndex);
        return;
      }
    } 
  }, [dropped]);

  //Merge thành element mới
  const mergeElement = (yourRecipe, yourPosition, yourIndex) => {
    const elementFonded = recipes.find(
      (element) =>
        (element[2].name1 === yourRecipe[0] &&
          element[2].name2 === yourRecipe[1]) ||
        (element[2].name1 === yourRecipe[1] &&
          element[2].name2 === yourRecipe[0])
    );
    const elementMerged = {
      id:elementFonded[0],
      name: elementFonded[1],
      src: `/images/elements/${elementFonded[1]}.png`,
      position: yourPosition[0],
    };
    console.log(yourIndex);
    setElementDropped((state)=>{
      console.log(state);
      const firstState= state.filter(element=>element.position.x!==yourPosition[0].x&&element.position.y!==yourPosition[0].y);
      console.log(firstState);
      const secondState=firstState.filter(element=>element.position.x!==yourPosition[1].x&&element.position.y!==yourPosition[1].y);
      console.log(secondState); 

      return secondState.concat(elementMerged)
    });
  };
console.log(elementDropped);
  const elements = elementDropped.map((element, index) => {
    return (
      <Element
        id={index}
        key={index}
        name={element.name}
        src={element.src}
        type="inSpace"
        elementRef="inSpace"
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
