import { useContext } from 'react/cjs/react.development';
import AlChemyContext from '../../store/alchemy-context';
const Space = () => {
  const context = useContext(AlChemyContext);
  console.log(context.element);
  console.log("asdfasdfasdf");
  return(
    <h1>asdfasdfa</h1>
  )
};
export default Space;
