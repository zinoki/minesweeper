const boardMaker = (dimensions) => {
  let boardMatrix = [];
  for (let i = 0; i < dimensions; i += 1) {
    let row = new Array(dimensions).fill(null);
    boardMatrix.push(row);
  }
  return boardMatrix;
}

module.exports.boardMaker = boardMaker;