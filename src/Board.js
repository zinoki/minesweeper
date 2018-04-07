import React from 'react';
import './Board.css';
import BoardRow from './BoardRow';

const Board = ({ board }) => {
    return (
        <table id="board">
          <tbody>
            {board.map((row, rowIndex) => 
              <BoardRow row={row} rowIndex={rowIndex} key={rowIndex}/> )}
          </tbody>
        </table>
    );
}

export default Board;
