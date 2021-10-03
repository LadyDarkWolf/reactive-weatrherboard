import "./App.css";
import "./styles.css";

import Forecast from "./Forecast";
import Utility from "./Utility";
import Search from "./Search";
import Today from "./Today";
import Source from "./Source";

export default function App() {
  return (
    <div className="App">
      <div className="container">
        <Utility />
        <Search />
        <Today />
        <Forecast />
        <Source />
      </div>
    </div>
  );
}
