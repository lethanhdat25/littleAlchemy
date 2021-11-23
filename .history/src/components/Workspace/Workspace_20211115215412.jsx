import { useContext } from "react";
import AlChemyContext from "../../store/alchemy-context";
import Element from "../Side/Element";
import Space from "./Space";
import classes from "./WorkSpace.module.css";

const Workspace = () => {
  const context = useContext(AlChemyContext);
  const lastElement = context.element[context.element.length - 1];
  console.log(lastElement);
  const recipes=[["pressure", ["air", "air"]], ["energy", ["air", "fire"]], ["dust", ["air", "earth"]], ["lava", ["earth", "fire"]],
  ["rain", ["air", "water"]], ["mud", ["earth", "water"]], ["steam", ["fire", "water"]], ["sea", ["water", "water"]],
  ["wind", ["air", "energy"]], ["stone", ["air", "lava"]], ["atmosphere", ["air", "pressure"]], ["cloud", ["air", "steam"]],
  ["earthquake", ["earth", "energy"]]];
  for (let i = 0; i < context.element.length - 1; i++) {
      if (
        Math.abs(context.element[i].position.x - lastElement.position.x) < 150 &&
        Math.abs(context.element[i].position.y - lastElement.position.y) < 150
      ) {
        console.log("da trung" );
      }
  }
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
  });
  return (
    <div id="workspace" className={classes.workspace}>
      {elements}
      <Space />
    </div>
  );
};
export default Workspace;
