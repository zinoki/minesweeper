import React from 'react';
import './BoardRow.css';


const BoardRow = ({ row }) => {
  return (
    <tr>
      {row.map((square, colIndex) => 
        <td className={square || "cell"} key={colIndex}>{square}
        </td>
      )}
    </tr>
  )
}

export default BoardRow;