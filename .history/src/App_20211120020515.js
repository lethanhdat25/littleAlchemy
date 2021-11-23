import { useState } from "react";
import "./App.css";
import Side from "./components/Side";
import Workspace from "./components/Workspace";

function App() {
  //Sau khi merge lấy giá trị mới thêm vào Library
  const [newElement, setNewElement] = useState();
  const addToLibrary = (name, id) => {
    setNewElement({ name, id });
  };
  return (
    <div className="App">
      <>
        <Workspace addToLibrary={addToLibrary} />
        <Side nameElement={newElement} />
      </>
    </div>
  );
}

export default App;
