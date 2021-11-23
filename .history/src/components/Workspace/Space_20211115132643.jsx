import { useContext } from 'react/cjs/react.development';
import AlChemyContext from '../../store/alchemy-context';
import Element from '../Side/Element';
const Space = () => {
  const context = useContext(AlChemyContext);
  const Elements=context.elements&&context.elements.map((element,index) =>{
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
  return(
    {Elements}
  )
};
export default Space;
