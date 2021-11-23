import "./App.css";
import Workspace from "./components/Workspace/Workspace";
import AlchemyProvider from "./store/AlchemyProvider";

function App() {
  return (
    <div className="App">
      <AlchemyProvider>
        <Workspace />
      </AlchemyProvider>
    </div>
  );
}

export default App;
