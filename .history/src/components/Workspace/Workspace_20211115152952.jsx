import { useContext } from "react";
import AlChemyContext from '../../store/alchemy-context';
import Space from "./Space";

const Workspace = () => {
  const context = useContext(AlChemyContext);
  console.log(context.element);
  // const elements=context.elements.map((element,index)=>{
  //   <Element
  //     name={element.name}
  //     src={element.src}
  //     key={index}
  //     style={{
  //       position: "absolute",
  //       left: element.position.x,
  //       top: element.position.y,
  //     }}
  //   />
  // })
  return (
    <div>
      {/* {elements} */}
      <Space/>
    </div>
  );
};
export default Workspace;
