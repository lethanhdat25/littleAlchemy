import { useContext } from 'react/cjs/react.development';
import AlChemyContext from '../../store/alchemy-context';
const Space = (props) => {
  const context = useContext(AlChemyContext);
  console.log(props.combineElement);
  return(
    <h1>asdfasdfa</h1>
  )
};
export default Space;
