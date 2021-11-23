import { useContext, useState } from "react";
import AlChemyContext from "../../store/alchemy-context";
import Element from "../Side/Element";
import Space from "./Space";
import classes from "./WorkSpace.module.css";

const Workspace = () => {
  const context = useContext(AlChemyContext);
  const lastElement = context.element[context.element.length - 1];
  const [resultCheck,setResultCheck]=useState([]);
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
  for (let i = 0; i < context.element.length - 1; i++) {
    if (
      Math.abs(context.element[i].position.x - lastElement.position.x) < 150 &&
      Math.abs(context.element[i].position.y - lastElement.position.y) < 150
    ) {
      const firstElement = context.element[i];
      const secondElement = lastElement; 
      //Công thức khi đưa 2 element gần nhau
      const yourRecipes = [
        [firstElement.name, secondElement.name],
        [secondElement.name, firstElement.name],
      ];
      
      //TODO:Check xem trong recipes có công thức đã chọn hay không
      setResultCheck(recipes.find(
        (recipe) =>
          (yourRecipes[0][0] === recipe[1][0] &&
            yourRecipes[0][1] === recipe[1][1]) ||
          (yourRecipes[1][0] === recipe[1][0] &&
            yourRecipes[1][1] === recipe[1][1])
      ));
      if(resultCheck){
        resultCheck.push(firstElement.position);
        console.log(resultCheck);
      }
    }
  }

  //Render element vào space
  const elements = context.element.map((element, index) => {
    return (
      <Element
        name={element.name}
        src={element.src}
        key={index}
        style={{
          position: "absolute",
          left: element.position.x,
          top: element.position.y,
        }}
      />
    );
  })
  return (
    <div id="workspace" className={classes.workspace}>
      {elements}
      <Space />
    </div>
  );
};
export default Workspace;
