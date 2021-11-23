import { useContext } from "react";
import AlChemyContext from '../../store/alchemy-context';
import Space from "./Space";

const Workspace = () => {
  const context = useContext(AlChemyContext);
  
  console.log(context.element);
  return (
    <div>
      <Space/>
    </div>
  );
};
export default Workspace;
