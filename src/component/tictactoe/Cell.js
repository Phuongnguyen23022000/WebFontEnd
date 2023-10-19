import React from 'react';
import "./GameStyle.css";

const Cell = ({ value, onClick, className }) => {
  // const { value, onClick } = props;
  // console.log(props)
  return (
    <div className={`cell-game ${className}`} onClick={onClick}>
      {value}
    </div>
  );
};

export default Cell;