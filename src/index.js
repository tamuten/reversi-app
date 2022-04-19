import React, { useState } from "react";
import { createRoot } from "react-dom/client";
import "./index.css";

const Square = (props) => {
  return (
    <button className="square" onClick={props.onClick}>
      {props.value}
    </button>
  );
};

const Board = (props) => {
  const initialState = Array(64).fill(null);
  const [squares, setSquares] = useState(initialState);
  const [blackIsNext, setBlackIsNext] = useState(true);

  const handleClick = (i) => {
    const squaresSlice = squares.slice();
    squaresSlice[i] = blackIsNext ? "●" : "○";
    setBlackIsNext(!blackIsNext);
    setSquares(squaresSlice);
  };

  const renderSquare = (i) => {
    return <Square value={squares[i]} onClick={() => handleClick(i)} />;
  };

  return (
    <div>
      <div className="status">
        Next player: {blackIsNext ? "Black" : "White"}
      </div>
      <div className="board-row">
        {renderSquare(0)}
        {renderSquare(1)}
        {renderSquare(2)}
        {renderSquare(3)}
        {renderSquare(4)}
        {renderSquare(5)}
        {renderSquare(6)}
        {renderSquare(7)}
      </div>
      <div className="board-row">
        {renderSquare(8)}
        {renderSquare(9)}
        {renderSquare(10)}
        {renderSquare(11)}
        {renderSquare(12)}
        {renderSquare(13)}
        {renderSquare(14)}
        {renderSquare(15)}
      </div>
      <div className="board-row">
        {renderSquare(16)}
        {renderSquare(17)}
        {renderSquare(18)}
        {renderSquare(19)}
        {renderSquare(20)}
        {renderSquare(21)}
        {renderSquare(22)}
        {renderSquare(23)}
      </div>
      <div className="board-row">
        {renderSquare(24)}
        {renderSquare(25)}
        {renderSquare(26)}
        {renderSquare(27)}
        {renderSquare(28)}
        {renderSquare(29)}
        {renderSquare(30)}
        {renderSquare(31)}
      </div>
      <div className="board-row">
        {renderSquare(32)}
        {renderSquare(33)}
        {renderSquare(34)}
        {renderSquare(35)}
        {renderSquare(36)}
        {renderSquare(37)}
        {renderSquare(38)}
        {renderSquare(39)}
      </div>
      <div className="board-row">
        {renderSquare(40)}
        {renderSquare(41)}
        {renderSquare(42)}
        {renderSquare(43)}
        {renderSquare(44)}
        {renderSquare(45)}
        {renderSquare(46)}
        {renderSquare(47)}
      </div>
      <div className="board-row">
        {renderSquare(48)}
        {renderSquare(49)}
        {renderSquare(50)}
        {renderSquare(51)}
        {renderSquare(52)}
        {renderSquare(53)}
        {renderSquare(54)}
        {renderSquare(55)}
      </div>
      <div className="board-row">
        {renderSquare(56)}
        {renderSquare(57)}
        {renderSquare(58)}
        {renderSquare(59)}
        {renderSquare(60)}
        {renderSquare(61)}
        {renderSquare(62)}
        {renderSquare(63)}
      </div>
    </div>
  );
};

const container = document.getElementById("root");
const root = createRoot(container);
root.render(<Board />);
