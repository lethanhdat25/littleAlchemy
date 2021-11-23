import { useState } from "react";
import "./App.css";
import Side from "./components/Side";
import Workspace from "./components/Workspace";

function App() {
  //Sau khi merge lấy giá trị mới thêm vào Library
  const [newElement, setNewElement] = useState();
  const [elementDelete, setElementDelete] = useState();

  const deleteElement = (element) => {
    setNewElement;
  };
  return (
    <div className="App">
      <>
        <Workspace addToLibrary={(name, id) => setNewElement({ name, id })} />
        <Side nameElement={newElement} deleteElement={deleteElement} />
      </>
    </div>
  );
}

export default App;
