import { useContext } from "react";
import AlChemyContext from '../../store/alchemy-context';
import Element from "../Side/Element";
import Space from "./Space";

const Workspace = () => {
  const context = useContext(AlChemyContext);
  const elements=context.elements.map((element,index)=>{
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
  })
  return (
    <div>
      {elements}
      <Space/>
    </div>
  );
};
export default Workspace;
