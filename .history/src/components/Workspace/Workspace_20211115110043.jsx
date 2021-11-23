import { useContext, useState } from "react";
import AlchemyContext from "../../store/alchemy-context";
import Element from "../Side/Element";
import Space from "./Space";

const Workspace = () => {
  const context= useContext(AlchemyContext);
  const [combineElement, setCombineElement] = useState([]);
  context.element.map((item,index)=>{
    setCombineElement((state) =>
      state.concat(
        <Element
          name={item.name}
          src={item.src}
          key={index}
          style={{
            position: "absolute",
            left: item.position.x,
            top: item.position.y,
          }}
        />
      )
    );
  })
  
  console.log(context.element);
  return (  
    <>
      <Space combineElement={combineElement}/>
    </>
  );
};
export default Workspace;
