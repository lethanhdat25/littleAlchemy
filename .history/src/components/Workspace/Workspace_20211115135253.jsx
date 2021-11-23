import { useContext } from "react";
import AlChemyContext from '../../store/alchemy-context';
import Space from "./Space";
import classes from "./WorkSpace.module.css";

const Workspace = () => {
  const context = useContext(AlChemyContext);
  
  console.log(context.element);
  return (
    <div id="workspace" className={classes.workspace}>
      <Space/>
    </div>
  );
};
export default Workspace;
