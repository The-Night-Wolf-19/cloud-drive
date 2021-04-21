// import logo from "./logo.svg";
import "./App.css";
import LeftPane from "./Components/LeftPane/LeftPane";
import MiddlePane from "./Components/MiddlePane/MiddlePane";
import RightPane from "./Components/RightPane/RightPane";

function App() {
  return (
    <div className="App">
      <div className="Dashboard">
        <LeftPane />
        <MiddlePane />
        <RightPane />
      </div>
    </div>
  );
}

export default App;
