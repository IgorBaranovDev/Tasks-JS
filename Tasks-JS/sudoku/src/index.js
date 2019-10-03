module.exports = function solveSudoku(matrix) {
  const newMatrix = matrix; // deep copy
  for (let row = 0; row < 9; row ++) {
    for (let col = 0; col < 9; col ++) {
      if (matrix[row][col] === 0) {
        const suggestions = count(row, col, newMatrix);
        for (let suggestion of suggestions) {
          newMatrix[row][col] = suggestion;
          solveSudoku(newMatrix);
        }
      }
    }
  } 
  return newMatrix;
}

function count(row, col, matrix) {
  const suggestions = [];

  row = help(row) * 3;
  col = help(col) * 3;

  for (let i = 0; i < 9; i++) {
    suggestions.push([matrix[row][i], matrix[i][col], matrix[row + i % 3][col + help(i)]]);
  }

  return suggestions;
}

function help(num) {
  return Math.floor(num/3);
}

