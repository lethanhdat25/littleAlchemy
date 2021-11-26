import { useState } from "react";
import "./App.css";
import Side from "./components/Side";
import Workspace from "./components/Workspace";

function App() {
  //Sau khi merge lấy giá trị mới thêm vào Library
  const [newElement, setNewElement] = useState();
  const [elementDelete, setElementDelete] = useState();
  return (
    <div className="App">
      <>
        <Workspace
          addToLibrary={(name, id) => setNewElement({ name, id })}
          elementDelete={elementDelete}
        />
        <Side
          nameElement={newElement}
          deleteElement={(item) => setElementDelete(item)}
        />
      </>
    </div>
  );
}

export default App;
