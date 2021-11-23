import { useState } from "react";
import AlchemyContext from "./alchemy-context";

const AlchemyProvider = (props) => {
  const [alchemyState, setAlchemy] = useState([]);
  alchemyState.forEach((state) =>
    Object.assign(state, { elementRef: undefined })
  );
  const initialValue = {
    element: alchemyState,
    addElement: (item, position) => {
      setAlchemy((state) => {
        return state.concat({ ...item, position });
      });
      if (alchemyState.length === 0) {
        console.log("mang bang 0");
      } else {
        if (item.elementRef !== "drag") {
          const elementIndex = alchemyState.length - 1;
          console.log(alchemyState[elementIndex]);
          const newELement = [].push(
            (alchemyState[elementIndex].position = position)
          );
          alchemyState.slice(elementIndex, 0, newELement);
          console.log("state", alchemyState);
        }
      }
    },
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
