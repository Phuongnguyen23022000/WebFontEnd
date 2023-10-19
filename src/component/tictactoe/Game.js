import React, { useReducer, useState } from 'react';
import { calculateWinner } from '../../helper';
import Board from './Board';
import "./GameStyle.css"

const initialState = {
  board: Array(9).fill(null),
  xIsNext: true,
}
const gameReducer = (state, action) => {
  switch (action.type) {
    case "CLICK": {
      const { board, xIsNext } = state;
      const { index, winner } = action.payload;
      if (winner || board[index]) return state;
      // immutable: khong the chinh sua
      const nextState = JSON.parse(JSON.stringify(state));
      nextState.board[index] = xIsNext ? 'X' : 'O';
      nextState.xIsNext = !xIsNext;
      return nextState;
    }
    case "RESET": {
      const nextState = JSON.parse(JSON.stringify(state));
      nextState.board = Array(9).fill(null);
      nextState.xIsNext = true;
      return nextState
    }
    default:
      break;
  }
  return state;
}
const Game = () => {
  // const [board, setBoard] = useState(Array(9).fill(null));
  // const [xIsNext, setXIsNext] = useState(true);
  // const [state, setState] = useState({
  //   board: Array(9).fill(null),
  //   xIsNext: true
  // })
  const [state, dispatch] = useReducer(gameReducer, initialState);

  const winner = calculateWinner(state.board);
  const handleClick = (index) => {
    // const boardCopy = [...state.board];
    // if (winner || boardCopy[index]) return;
    // boardCopy[index] = state.xIsNext ? 'x' : 'o';
    // setState({
    //   ...state,
    //   board: boardCopy,
    //   xIsNext: !state.xIsNext,
    // })
    // setBoard(boardCopy);
    // setXIsNext(!state.xIsNext);
    dispatch({
      type: 'CLICK',
      payload: {
        index,
        winner
      }
    })
  };
  const handleResetGame = () => {
    dispatch({
      type: 'RESET',
    })
    // setBoard(Array(9).fill(null));
  }
  return (
    <div>
      <Board cells={state.board} onClick={handleClick} />
      <button onClick={handleResetGame}>Reset Game!!</button>
    </div>
  );
};

export default Game;