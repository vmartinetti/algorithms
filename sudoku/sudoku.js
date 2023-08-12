/*
Sudoku is a number-placement puzzle. The objective is to fill a 9 × 9 grid 
with numbers in such a way that each column, each row, and each of the nine 3 × 3 
sub-grids that compose the grid all contain all of the numbers from 1 to 9 one time.

Implement an algorithm that will check whether the given grid of 
numbers represents a valid Sudoku puzzle according to the layout rules 
described above. Note that the puzzle represented by grid does not have to be solvable.
*/
function sudoku(matrix) {
  for(let i=0; i< matrix.length; i++){
      let row = matrix[i]
      let col = []
      let block = []
      for(let j=0; j< matrix.length; j++){
          col.push(matrix[j][i])
          block.push(matrix[Math.floor(i/3)*3 + Math.floor(j/3)][i*3%9 + j%3])
      }
      if(!isValid(row) || !isValid(col) || !isValid(block)) return false
  }
  return true
}

