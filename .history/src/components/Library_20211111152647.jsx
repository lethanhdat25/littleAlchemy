import classes from "./Library.module.css";
const Library=()=>{
    return(
        <div id ="Library" className={classes.library}>
         <div className={classes.element} data-elementtype="libraryBox" data-elementid="4">
             <img src="/images/elements/air.png" alt="air"/>
             <div class={classes.elmentName}>air</div>
         </div>   
        </div>
    );
}
export default Library;