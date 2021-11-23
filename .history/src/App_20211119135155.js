import { useState } from "react";
import "./App.css";
import Side from "./components/Side";
import Workspace from "./components/Workspace";

function App() {
  //Sau khi merge lấy giá trị mới thêm vào Library
  const [nameElement, setNameElement] = useState();
  const addToLibrary = (name) => {
    setNameElement(name);
  };
  return (
    <div className="App">
      <>
        <Workspace addToLibrary={addToLibrary} />
        <Side nameElement={nameElement} />
      </>
    </div>
  );
}

export default App;
