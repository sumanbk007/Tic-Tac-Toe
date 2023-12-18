import React from "react";
import Board from "./components/Board";
import "./App.css";

const App = () => {
  return (
    <div>
      <h1 className="gameHeader">Let's play the game!!</h1>
      <Board />
    </div>
  );
};

export default App;
