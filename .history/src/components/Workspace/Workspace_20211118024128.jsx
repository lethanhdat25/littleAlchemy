import { useContext } from "react";
import AlChemyContext from "../../store/alchemy-context";
import Element from "../Side/Element";
import Space from "./Space";
import classes from "./WorkSpace.module.css";

const Workspace = () => {
  const context = useContext(AlChemyContext);
  console.log(context.element);
  const lastElement = context.element[context.element.length - 1];
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
      Math.abs(context.element[i].position.x - lastElement.position.x) < 85 &&
      Math.abs(context.element[i].position.y - lastElement.position.y) < 85
    ) {
      const firstElement = context.element[i];
      const secondElement = lastElement; 
      //Công thức khi đưa 2 element gần nhau
      const yourRecipes = [
        [firstElement.name, secondElement.name],
        [secondElement.name, firstElement.name],
      ];
      
      //TODO:Check xem trong recipes có công thức đã chọn hay không
      let resultCheck=recipes.find(
        (recipe) =>
          (yourRecipes[0][0] === recipe[1][0] &&
            yourRecipes[0][1] === recipe[1][1]) ||
          (yourRecipes[1][0] === recipe[1][0] &&
            yourRecipes[1][1] === recipe[1][1])
      );
      if(resultCheck){

        context.addElement({src:`/images/elements/${resultCheck[0]}.png`,name:resultCheck[0]}, firstElement.position);
        context.removeElement(firstElement,secondElement);
      }
    }
  }

  //Render element vào space
  const elements =context.element.map((element, index) => {
    return (
      <Element
        name={element.name}
        src={element.src}
        key={index}
        elementRef="aesdf"
        style={{
          position: "absolute",
          left: element.position.x,
          top: element.position.y,
        }}
      />
    );
  })

  //Hàm add elements
  const addElement=(item, position)=>{
    console.log(context.element);
    context.addElement(item, position,context.element);

  }
  return (
    <div id="workspace" className={classes.workspace}>
      
      <Space elements={elements} addElement={addElement}/>
    </div>
  );
};
export default Workspace;
