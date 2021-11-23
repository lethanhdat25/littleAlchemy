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
  let indexElement=0;
  const [{item,position }, drop] = useDrop(() => ({
    accept: ITEM_TYPE,
    drop: (item, monitor) => {
      const position = monitor.getClientOffset();
      console.log(item);
      addElement(item,position);
      indexElement++;
    },
    collect:monitor=>({item:monitor.getItem(),position:monitor.getClientOffset()})
  }));
  let index=-1;
  const addElement=(item,position)=>{
    setElementDropped((state) =>{
      if(state.length===0){
        index++;
        return state.concat({ ...item, position,inSpace:"inSpace",id:item.name+"-"index})
    
      }else{
        if(item.type!=='inSpace'){
        return state.concat({ ...item, position,inSpace:"inSpace",id:"trung id"})
      }else return state.concat({ ...item, position,inSpace:"inSpace"})
    }
    });
  }
    console.log(elementDropped);
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
  }, [elementDropped]);
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

      return (
        <Element
          id={element.id}
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
    // for (let i = 0; i < dropped.length; i++) {
    //     if (dropped.length > 1) {
    //       const droppedIndex = elementDropped.findIndex(
    //         (elementDropped) =>{
    //          return elementDropped.position.x === dropped[i].position.x &&
    //           elementDropped.position.y === dropped[i].position.y&&elementDropped.id===dropped[i].id
    //         }
    //       );
    //       console.log(elementDropped);
    //       console.log(dropped);
    //       if (droppedIndex!==-1) {
    //         console.log("thay doi position ngay");
    //       }
    //       return;
    //     }
    //   }
  },[elementDropped.length]);
  return (
    <div ref={drop} id="workspace" className={classes.workspace}>
      {elements}
    </div>
  );
};
export default Workspace;
