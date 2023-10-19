import React from 'react';
import { calculateWinner } from '../../helper';
import Cell from './Cell';

const Board = (props) => {
  // Array(9).fill() -> [undefined, ]
  // console.log(props)
  // const cells = [null, null, null, "X", "X", "X", null, null, null]
  // console.log(calculateWinner(cells))

  return (
    <div>
      <div className="game-board">
        {props.cells.map((item, index) => (
          <Cell key={index} value={item} onClick={() => props.onClick(index)}  className={item === "x" ? "is-x" : item === "o" ? "is-o" : ""}/>
        ))}
      </div>
    </div>
  );
};

export default Board;