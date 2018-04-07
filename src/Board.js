import React from 'react';
import './Board.css';
import BoardRow from './BoardRow';
import { boardMaker } from './boardMaker';

const Board = ({ dimension }) => {
  console.log(boardMaker(dimension));
    return (
      <div>
        <div id="board">Helloasdfaooo</div>
        {boardMaker(dimension)}
          <BoardRow />
        </div>
    );
}

export default Board;
