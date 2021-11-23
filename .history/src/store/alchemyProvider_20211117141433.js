import { useState } from "react";
import AlchemyContext from "./alchemy-context";

const AlchemyProvider = (props) => {
  const [alchemyState, setAlchemy] = useState([]);
  const initialValue = {
    element: alchemyState,
    addElement: (item, position) => {
      setAlchemy((state) => {
        if (state.length === 0) {
          return state.concat({ ...item, position });
        } else {
          if (item.elementRef !== "drag") {
            const elementIndex = state.length - 1;
            return state.map((element, index) => {
              if (index === elementIndex) {
                return (element.position = position);
              }
            });
          } else {
            console.log(state);
            return state.concat({ ...item, position });
          }
        }
      });
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
