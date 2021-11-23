import { useContext } from "react";
import AlChemyContext from '../../store/alchemy-context';
import Element from "../Side/Element";
import Space from "./Space";
import classes from "./WorkSpace.module.css";


const Workspace = () => {
  const context = useContext(AlChemyContext);
  console.log("Adsfasdfas");
  const elements=context.element.map((element,index)=>
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
  )
  return (
    <div id="workspace" className={classes.workspace}>
      {elements}
      <Space/>
    </div>
  );
};
export default Workspace;
