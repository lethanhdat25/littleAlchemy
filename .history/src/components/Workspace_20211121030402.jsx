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

const Workspace = (props) => {
  
  const [elementDropped, setElementDropped] = useState([]);
  const [elementMoved,setElementMoved] = useState([]);
  const [dropped,setDropped]=useState([]);
  const [{item,position }, drop] = useDrop(() => ({
    accept: ITEM_TYPE,
    drop: (item, monitor) => {
      const position = monitor.getClientOffset();
      console.log(item);
      console.log(position);
      setDropped(state=>state.concat({...item, position}));
      setElementDropped((state) =>state.concat({ ...item, position }));
    },
    collect:monitor=>({item:monitor.getItem(),position:monitor.getClientOffset()})
  }));
  //Sau khi state update kiểm tra xem có element nào có position gần nhau hay không
  useEffect(() => {

    for (let i = 0; i < elementDropped.length - 1; i++) {
      if (
        Math.abs(
          elementDropped[i].position.x -
            elementDropped[elementDropped.length - 1].position.x
        ) <= 45 &&
        Math.abs(
          elementDropped[i].position.y -
            elementDropped[elementDropped.length - 1].position.y
        ) <= 45
      ) {
        const yourRecipe = [
          elementDropped[i].name,
          elementDropped[elementDropped.length - 1].name,
        ];
        const yourPosition = [elementDropped[i].position,elementDropped[elementDropped.length - 1].position];
        mergeElement(yourRecipe, yourPosition);
        return;
      }
    } 
  }, [dropped]);
  //Merge thành element mới
  const mergeElement = (yourRecipe, yourPosition) => {
    const elementFonded = recipes.find( 
      (element) =>
        (element[2].name1 === yourRecipe[0] &&
          element[2].name2 === yourRecipe[1]) ||
        (element[2].name1 === yourRecipe[1] &&
          element[2].name2 === yourRecipe[0])
    );
    if(elementFonded){
      const elementMerged = {
        id:elementFonded[0],
        name: elementFonded[1],
        src: `/images/elements/${elementFonded[1]}.png`,
        position: yourPosition[0],
      };
      setElementDropped((state)=>{
        const firstState= state.filter(element=>element.position.x!==yourPosition[0].x&&element.position.y!==yourPosition[0].y);
        const secondState=firstState.filter(element=>element.position.x!==yourPosition[1].x&&element.position.y!==yourPosition[1].y);
        return secondState.concat(elementMerged);
      });
      
      //thêm element vào side
      props.addToLibrary(elementMerged.name,elementMerged.id);
    };
  };
  const [elements,setElements]= useState([]);
  useEffect(() => {
    setElements(elementDropped.map((element, index) => {
      console.log(dropped.length);
      if(dropped.length>1){
      const droppedIndex=dropped.findIndex(dropped=>element.position.x===dropped.position.x&&element.position.y===dropped.position.y);
      console.log(element);
      console.log(droppedIndex);
      console.log(dropped);
      }
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
    }));
  },[elementDropped.length]);
  return (
    <div ref={drop} id="workspace" className={classes.workspace}>
      {elements}
    </div>
  );
};
export default Workspace;
