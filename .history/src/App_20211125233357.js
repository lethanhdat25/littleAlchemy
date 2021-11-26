import { useState } from "react";
import "./App.css";
import Side from "./components/Side";
import Workspace from "./components/Workspace";

function App() {
  //Sau khi merge lấy giá trị mới thêm vào Library
  const [newElement, setNewElement] = useState();
  return (
    <div className="App">
      <>
        <Workspace addToLibrary={(name, id) => setNewElement({ name, id })} />
        <Side nameElement={newElement} />
      </>
    </div>
  );
}

export default App;
