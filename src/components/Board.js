import React from "react";
import { useState } from "react";
import "../App.css";

import SquareButton from "./SquareButton";
const Board = () => {
  const [squares, setSquares] = useState(Array(9).fill(null));
  const [xIsNext, setXIsNext] = useState(true);

  const handleClick = (i) => {
    if (squares[i] || calculateWinner(squares)) {
      return;
    }
    const nextSquares = squares.slice();

    if (xIsNext) {
      nextSquares[i] = "X";
    } else {
      nextSquares[i] = "O";
    }

    setSquares(nextSquares);
    setXIsNext(!xIsNext);
  };

  const resetGame = () => {
    setSquares(Array(9).fill(null));
    setXIsNext(true);
  };

  const winner = calculateWinner(squares);

  let nullInArray = squares.some((item) => item === null);

  let status;

  if (winner) {
    status = "Winner:" + winner;
  } else if (!nullInArray) {
    status = "Game tie";
  } else {
    status = " Player:" + (xIsNext ? "X" : "0");
  }

  return (
    <div className="tic-tac-toe">
      <div className="status">{status}</div>
      <div className="board-row">
        <SquareButton
          value={squares[0]}
          onSquareClick={() => {
            handleClick(0);
          }}
        />
        <SquareButton value={squares[1]} onSquareClick={() => handleClick(1)} />
        <SquareButton value={squares[2]} onSquareClick={() => handleClick(2)} />
      </div>
      <div className="board-row second-row">
        <SquareButton value={squares[3]} onSquareClick={() => handleClick(3)} />
        <SquareButton value={squares[4]} onSquareClick={() => handleClick(4)} />
        <SquareButton value={squares[5]} onSquareClick={() => handleClick(5)} />
      </div>

      <div className="board-row">
        <SquareButton value={squares[6]} onSquareClick={() => handleClick(6)} />
        <SquareButton value={squares[7]} onSquareClick={() => handleClick(7)} />
        <SquareButton value={squares[8]} onSquareClick={() => handleClick(8)} />
      </div>

      <button className="playAgain" onClick={resetGame}>
        Play Again
      </button>
    </div>
  );
};

export default Board;

function calculateWinner(squares) {
  const lines = [
    [0, 1, 2],
    [3, 4, 5],
    [6, 7, 8],
    [0, 3, 6],
    [1, 4, 7],
    [2, 5, 8],
    [0, 4, 8],
    [2, 4, 6],
  ];

  for (let i = 0; i < lines.length; i++) {
    const [a, b, c] = lines[i];

    if (squares[a] && squares[a] === squares[b] && squares[a] === squares[c]) {
      return squares[a];
    }
  }
  return null;
}
