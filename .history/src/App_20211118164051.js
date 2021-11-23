import "./App.css";
import Side from "./components/Side";
import Workspace from "./components/Workspace";
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
