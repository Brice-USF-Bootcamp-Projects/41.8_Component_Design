import React from "react";
import Board from "./components/Board";
import "./css/App.css";

/** Simple app that just shows the LightsOut game. */

function App() {
  return (
      <div className="App">
        <Board />
      </div>
  );
}

export default App;
