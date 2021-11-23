import classes from "./Element.module.css";
const Element=(props)=>{

    return(
        <div className={props.className} style={props?.style}>
            <img  src={props.src} alt={props.alt}/>
            <div className={classes.elementName}>{props.name}</div>
        </div>      
    )
}
export default Element;