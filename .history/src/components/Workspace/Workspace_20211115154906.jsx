import { useContext } from "react";
import AlChemyContext from '../../store/alchemy-context';
import Element from "../Side/Element";
import Space from "./Space";
import classes from "./WorkSpace.module.css";


const Workspace = () => {
  const context = useContext(AlChemyContext);
  const lastElement=context.element[context.element.length-1];
  console.log(lastElement);
  const elements=context.element.forEach((element,index)=>{
    
    return <Element
      name={element.name}
      src={element.src}
      key={index}
      style={{
        position: "absolute",
        left: element.position.x,
        top: element.position.y,
      }}
    />
  });
  console.log(elements);
  return (
    <div id="workspace" className={classes.workspace}>
      {elements}
      <Space/>
    </div>
  );
};
export default Workspace;
