import { useContext } from "react";
import AlchemyContext from "../../store/alchemy-context";
import Space from "./Space";

const Workspace = () => {
  const context= useContext(AlchemyContext);
  console.log(context.element);
  return (  
    <>
      <Space/>
    </>
  );
};
export default Workspace;
