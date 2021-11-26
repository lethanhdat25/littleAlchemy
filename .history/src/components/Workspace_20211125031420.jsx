import { useEffect, useState } from "react";
import { useDrop } from "react-dnd";
import { ITEM_TYPE } from "../constants";
import Element from "./Element";
import classes from "./WorkSpace.module.css";
//Mảng công thức
const recipes = [
  [4, "pressure", { name1: "air", name2: "air" }],
  [5, "energy  ", { name1: "air", name2: "fire" }],
  [6, "dust", { name1: "air", name2: "earth" }],
  [7, "lava", { name1: "earth", name2: "fire" }],
  [8, "rain", { name1: "air", name2: "water" }],
  [9, "mud", { name1: "earth", name2: "water" }],
  [10, "steam", { name1: "fire", name2: "water" }],
  [11, "sea", { name1: "water", name2: "water" }],
  [12, "wind", { name1: "air", name2: "energy" }],
  [13, "stone", { name1: "air", name2: "lava" }],
  [14, "atmosphere", { name1: "air", name2: "pressure" }],
  [15, "cloud", { name1: "air", name2: "steam" }],
  [16, "earthquake", { name1: "earth", name2: "energy" }],
];

const Workspace = (props) => {
  const [elementDropped, setElementDropped] = useState([]);
  const [elementMerged, setElementMerged] = useState([]);
  const [elements, setElements] = useState([]);
  const [, drop] = useDrop(() => ({
    accept: ITEM_TYPE,
    drop: (item, monitor) => {
      const position = monitor.getClientOffset();
      addElement(item, position);
    },
  }));

  //Đưa item ra ngoài thì xóa
  useEffect(() => {
    if (props.elementDelete) {
      setElementDropped((state) =>
        state.filter((element) => element.id !== props.elementDelete.id)
      );
    }
  }, [props.elementDelete]);

  //them elements
  let indexElement = -1;
  const addElement = (item, position) => {
    setElementMerged(state=>{
      const mergeFind=state.find((element) => element.id === item.id);
      if(mergeFind){
        return state.map(element=>{
          if(element.id === item.id){
            return {...element,position}
          }
          return element;
        });
      }
      return state
    })
    setElementDropped((state) => {
      if (state.length !== 0 && item.type !== "inSpace") {
        const isValid = state.some((element) => element.id === item.id);
        if (isValid) {
          indexElement++;
          return state.concat({
            ...item,
            position,
            inSpace: "inSpace",
            id: item.name + "-" + indexElement,
          });
        }
      } 
      const elementFind = state.find((element) => element.id === item.id);
      if (elementFind) {
        const copElement = { ...elementFind, position };
        return state.map((element) => {
          if (element.id === item.id)
            return { ...element, position: copElement.position };
          return element;
        });
      }
      return state.concat({ ...item, position, inSpace: "inSpace" });
    });
  };
  //Merge thành element mới
  const mergeElement = (yourRecipe, yourPosition) => {
    const recipe1 = yourRecipe[0];
    const recipe2 = yourRecipe[1];
    const position1 = yourPosition[0];
    const position2 = yourPosition[1];
    const elementFonded = recipes.find(
      (element) =>
        (element[2].name1 === recipe1 && element[2].name2 === recipe2) ||
        (element[2].name1 === recipe2 && element[2].name2 === recipe1)
    );
    if (elementFonded) {
      const elementMerged = {
        id: elementFonded[0],
        name: elementFonded[1],
        src: `/images/elements/${elementFonded[1]}.png`,
        position: position1,
      };
      setElementMerged(state=>state.concat({...elementMerged,id:"merge"+"-"+elementMerged.id}));
      setElementDropped((state) => {
        const firstState = state.filter(
          (element) =>
            element.position.x !== position1.x &&
            element.position.y !== position1.y
        );
        const secondState = firstState.filter(
          (element) =>
            element.position.x !== position2.x &&
            element.position.y !== position2.y
        );
        return secondState;
      });

      //thêm element vào side
      props.addToLibrary(elementMerged.name, elementMerged.id);
    }
  };
  useEffect(()=>{
    if (elementMerged.length>0) {
      setElementDropped((state) =>state.concat(elementMerged[elementMerged.length-1]))

    }
  },[elementMerged])
  //Sau khi state update kiểm tra xem có element nào có position gần nhau hay không
  useEffect(() => {
    const elementDroppedLength = elementDropped.length - 1;
    for (let i = 0; i < elementDroppedLength; i++) {
      if (
        Math.abs(
          elementDropped[i].position.x -
            elementDropped[elementDroppedLength].position.x
        ) <= 45 &&
        Math.abs(
          elementDropped[i].position.y -
            elementDropped[elementDroppedLength].position.y
        ) <= 45
      ) {
        const yourRecipe = [
          elementDropped[i].name,
          elementDropped[elementDroppedLength].name,
        ];
        const yourPosition = [
          elementDropped[i].position,
          elementDropped[elementDroppedLength].position,
        ];
        mergeElement(yourRecipe, yourPosition);
        return;
      }
    }
    //render ELEMENT
    setElements(
      elementDropped.map((element, index) => {
        return (
          <Element
            id={element.id}
            key={index}
            name={element.name}
            src={element.src}
            type="inSpace"
            style={{
              position: "absolute",
              left: element.position.x,
              top: element.position.y,
            }}
          />
        );
      })
    );
  }, [elementDropped]);
  console.log(elementDropped);
  return (
    <div ref={drop} id="workspace" className={classes.workspace}>
     {elementMerged.map((element, index)=>{
        const x=element.position.x;
        const y=element.position.y;
        return (
          <Element
            id={element.id}
            key={index}
            name={element.name}
            src={`/images/elements/${element.name}.png`}
            inSpace={true}
            style={{
              position: "absolute",
              left:x,
              top:y,
            }}
          />
        );
      })}
      {elements}
    </div>
  );
};
export default Workspace;
