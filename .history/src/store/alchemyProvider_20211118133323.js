import { useState } from "react";
import AlchemyContext from "./alchemy-context";

const AlchemyProvider = (props) => {
  const [alchemyState, setAlchemy] = useState([]);
  
  const initialValue = {
    element: alchemyState,
    addElement: (item, position) => {
      setAlchemy((state) => {
        console.log(state);
        return state.concat({ ...item, position });
      });
    },
    mergeElement:()=>{
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

    }
    removeElement: (firstItem, secondItem) =>
      setAlchemy((state) => {
        const firstItemIndex = state.findIndex(
          (element) =>
            element.name === firstItem.name &&
            element.position.x === firstItem.position.x &&
            element.position.y === firstItem.position.y
        );
        state.splice(firstItemIndex, 1);
        const secondItemIndex = state.findIndex(
          (element) =>
            element.name === secondItem.name &&
            element.position.x === secondItem.position.x &&
            element.position.y === secondItem.position.y
        );
        state.splice(secondItemIndex, 1);

        return state;
      }),
  };
  return (
    <AlchemyContext.Provider value={initialValue}>
      {props.children}
    </AlchemyContext.Provider>
  );
};
export default AlchemyProvider;
