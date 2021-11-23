import { useContext } from 'react/cjs/react.development';
import AlChemyContext from '../../store/alchemy-context';
const Space = (props) => {
  const context = useContext(AlChemyContext);
  console.log(props.combineElement);
  const Elements=props.combineElement;
  return(
    {Elements }
  )
};
export default Space;
