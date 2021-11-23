import { useContext } from 'react/cjs/react.development';
import AlChemyContext from '../../store/alchemy-context';
const Space = () => {
  const context = useContext(AlChemyContext);
  console.log(context.elements);
  // const elements=context.elements.length!==0&&context.elements.map((element,index) =>{
  //   <Element
  //   name={element.name}
  //   src={element.src}
  //   key={index}
  //   style={{
  //     position: "absolute",
  //     left: element.position.x,
  //     top: element.position.y,
  //   }}
  // />
  })
  return(
    <h1>adfas</h1>
  )
};
export default Space;
