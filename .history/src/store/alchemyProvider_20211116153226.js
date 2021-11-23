import { useState } from "react";
import AlchemyContext from "./alchemy-context";

const AlchemyProvider = (props) => {
  const [alchemyState, setAlchemy] = useState([]);
  const initialValue = {
    element: alchemyState,
    addElement: (item, position) =>
      setAlchemy((state) => {
        console.log({ ...item, position });
        return state.concat({ ...item, position });
      }),
    removeElement: (firstItem, secondItem) =>
      setAlchemy((state) => {
        console.log(firstItem);
        console.log(secondItem);
        const firstItemIndex = state.findIndex(
          (element) =>
            element.name === firstItem.name &&
            element.position.x === firstItem.position.x &&
            element.position.y === firstItem.position.y
        );
        state.splice(firstItemIndex);
        const secondItemIndex = state.findIndex(
          (element) =>
            element.name === secondItem.name &&
            element.position.x === secondItem.position.x &&
            element.position.y === secondItem.position.y
        );
        state.splice(secondItemIndex);

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
