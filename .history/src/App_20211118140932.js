import "./App.css";
import Side from "./components/Side/Side";
import Workspace from "./components/Workspace/Workspace";
import AlchemyProvider from "./store/AlchemyProvider";

function App() {
  return (
    <div className="App">
      <AlchemyProvider>
        <Workspace />
        <Side />
      </AlchemyProvider>
    </div>
  );
}

export default App;
